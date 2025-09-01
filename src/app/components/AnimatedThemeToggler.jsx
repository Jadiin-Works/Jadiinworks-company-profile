"use client";

import { Moon, SunDim } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export const AnimatedThemeToggler = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);
  
  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate isDark in useEffect to avoid hydration mismatch
  useEffect(() => {
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
  }, [theme]);
  
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };
  
  if (!mounted) return null;
  
  return (
    <button 
      ref={buttonRef} 
      onClick={changeTheme} 
      className={cn(className)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {(theme === 'dark' || (theme === 'system' && isDark)) ? <SunDim size={22} /> : <Moon size={22} />}
    </button>
  );
};
