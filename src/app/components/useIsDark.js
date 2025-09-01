"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export function useIsDark() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate isDark in useEffect to avoid hydration mismatch
  useEffect(() => {
    if (!mounted) return;
    
    const calculateIsDark = () => {
      if (theme === "dark") return true;
      if (theme === "light") return false;
      if (theme === "system" && typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return false;
    };
    
    setIsDark(calculateIsDark());
    
    // Listen for system theme changes
    if (theme === "system" && typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => setIsDark(calculateIsDark());
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted]);

  return { isDark, mounted };
}
