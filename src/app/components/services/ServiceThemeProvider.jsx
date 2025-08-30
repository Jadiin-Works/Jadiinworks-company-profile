"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";

const ServiceThemeContext = createContext();

export function ServiceThemeProvider({ children }) {
    const { theme } = useTheme();
    const [effectiveTheme, setEffectiveTheme] = useState("light");
    const [mounted, setMounted] = useState(false);
    
    // Set mounted to true after component mounts
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Determine effective theme (system preference or manual)
    useEffect(() => {
        if (!mounted) return;
        
        if (theme === "system") {
            if (typeof window !== 'undefined' && window.matchMedia) {
                const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                const updateTheme = () => {
                    setEffectiveTheme(mediaQuery.matches ? "dark" : "light");
                };
                
                // Set initial theme
                updateTheme();
                
                // Listen for changes
                mediaQuery.addEventListener("change", updateTheme);
                return () => mediaQuery.removeEventListener("change", updateTheme);
            } else {
                setEffectiveTheme("light"); // fallback
            }
        } else {
            setEffectiveTheme(theme);
        }
    }, [theme, mounted]);

    const serviceTheme = {
        // Text colors
        textPrimary: effectiveTheme === "dark" ? "#ffffff" : "#171717",
        textSecondary: effectiveTheme === "dark" ? "#a3a3a3" : "#525252",
        textMuted: effectiveTheme === "dark" ? "#737373" : "#737373",
        
        // Background colors
        bgPrimary: effectiveTheme === "dark" ? "#1a1a1a" : "#ffffff",
        bgSecondary: effectiveTheme === "dark" ? "#262626" : "#fafafa",
        bgCard: effectiveTheme === "dark" ? "rgba(38, 38, 38, 0.95)" : "rgba(255, 255, 255, 0.95)",
        bgCardHover: effectiveTheme === "dark" ? "rgba(38, 38, 38, 0.98)" : "rgba(255, 255, 255, 0.98)",
        
        // Border colors
        borderPrimary: effectiveTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
        borderSecondary: effectiveTheme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
        borderAccent: effectiveTheme === "dark" ? "rgba(176, 25, 255, 0.3)" : "rgba(176, 25, 255, 0.2)",
        
        // Shadow colors
        shadowLight: effectiveTheme === "dark" 
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        shadowMedium: effectiveTheme === "dark"
            ? "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.25)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        shadowLarge: effectiveTheme === "dark"
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)"
            : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        
        // Accent colors
        accentPrimary: "#B019FF",
        accentSecondary: "#8000C4",
        accentBlueGreen: "#00C4CC",
        accentPink: "#EC4899",
        accentPurple: "#8B5CF6",
        
        // Gradient colors
        gradientPrimary: effectiveTheme === "dark"
            ? "linear-gradient(135deg, rgba(176, 25, 255, 0.15), rgba(0, 196, 204, 0.1))"
            : "linear-gradient(135deg, rgba(176, 25, 255, 0.08), rgba(0, 196, 204, 0.06))",
        gradientHover: effectiveTheme === "dark"
            ? "linear-gradient(135deg, rgba(176, 25, 255, 0.2), rgba(0, 196, 204, 0.15))"
            : "linear-gradient(135deg, rgba(176, 25, 255, 0.12), rgba(0, 196, 204, 0.08))",
        
        // Status colors
        success: effectiveTheme === "dark" ? "#22c55e" : "#16a34a",
        warning: effectiveTheme === "dark" ? "#f59e0b" : "#d97706",
        error: effectiveTheme === "dark" ? "#ef4444" : "#dc2626",
        info: effectiveTheme === "dark" ? "#3b82f6" : "#2563eb",
        
        // Transitions
        transitionFast: "all 0.15s ease",
        transitionNormal: "all 0.3s ease",
        transitionSlow: "all 0.5s ease",
        
        // Border radius
        radiusSmall: "8px",
        radiusMedium: "12px",
        radiusLarge: "16px",
        radiusXLarge: "24px",
        
        // Spacing
        spacing: {
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "24px",
            xl: "32px",
            xxl: "48px"
        }
    };

    return (
        <ServiceThemeContext.Provider value={serviceTheme}>
            {children}
        </ServiceThemeContext.Provider>
    );
}

export function useServiceTheme() {
    const context = useContext(ServiceThemeContext);
    if (!context) {
        throw new Error("useServiceTheme must be used within a ServiceThemeProvider");
    }
    return context;
}

// Utility function to get CSS custom properties
export function getServiceThemeCSS() {
    return `
        .service-theme {
            --text-primary: var(--service-text-primary);
            --text-secondary: var(--service-text-secondary);
            --text-muted: var(--service-text-muted);
            --bg-primary: var(--service-bg-primary);
            --bg-secondary: var(--service-bg-secondary);
            --bg-card: var(--service-bg-card);
            --bg-card-hover: var(--service-bg-card-hover);
            --border-primary: var(--service-border-primary);
            --border-secondary: var(--service-border-secondary);
            --border-accent: var(--service-border-accent);
            --shadow-light: var(--service-shadow-light);
            --shadow-medium: var(--service-shadow-medium);
            --shadow-large: var(--service-shadow-large);
            --accent-primary: var(--service-accent-primary);
            --accent-secondary: var(--service-accent-secondary);
            --accent-blue-green: var(--service-accent-blue-green);
            --gradient-primary: var(--service-gradient-primary);
            --gradient-hover: var(--service-gradient-hover);
            --transition-fast: var(--service-transition-fast);
            --transition-normal: var(--service-transition-normal);
            --transition-slow: var(--service-transition-slow);
            --radius-small: var(--service-radius-small);
            --radius-medium: var(--service-radius-medium);
            --radius-large: var(--service-radius-large);
            --radius-xlarge: var(--service-radius-xlarge);
        }
    `;
}
