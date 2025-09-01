"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import useEffectiveTheme from '../useEffectiveTheme';

const AboutThemeContext = createContext();

export function AboutThemeProvider({ children }) {
    const mode = useEffectiveTheme();
    const [theme, setTheme] = useState({
        // Background colors
        bgPrimary: "#ffffff",
        bgSecondary: "#f8fafc",
        bgCard: "rgba(255, 255, 255, 0.95)",
        bgCardHover: "rgba(255, 255, 255, 0.98)",
        bgGradient: "linear-gradient(135deg, rgba(176,25,255,0.02) 0%, rgba(0,196,204,0.02) 100%)",
        
        // Text colors
        textPrimary: "#171717",
        textSecondary: "#525252",
        textMuted: "#737373",
        textAccent: "#B019FF",
        
        // Border colors
        borderPrimary: "rgba(0,0,0,0.08)",
        borderSecondary: "rgba(0,0,0,0.04)",
        borderAccent: "rgba(176,25,255,0.2)",
        borderHover: "rgba(176,25,255,0.3)",
        
        // Shadow colors
        shadowLight: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        shadowMedium: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        shadowHover: "0 20px 40px rgba(176,25,255,0.1)",
        
        // Accent colors
        accentPrimary: "#B019FF",
        accentSecondary: "#8000C4",
        accentBlueGreen: "#00C4CC",
        
        // Transitions
        transitionNormal: "all 0.3s ease",
        transitionSlow: "all 0.5s ease",
        
        // Special effects
        gradientHover: "linear-gradient(135deg, rgba(176,25,255,0.12), rgba(0,196,204,0.08))",
        glassEffect: "rgba(255, 255, 255, 0.9)",
        glassEffectHover: "rgba(255, 255, 255, 0.95)",
    });

    useEffect(() => {
        const isDark = mode === "dark";
        
        if (isDark) {
            setTheme({
                // Background colors - Dark mode
                bgPrimary: "#1A1A1A",
                bgSecondary: "#262626",
                bgCard: "rgba(38, 38, 38, 0.9)",
                bgCardHover: "rgba(38, 38, 38, 0.95)",
                bgGradient: "linear-gradient(135deg, rgba(176,25,255,0.05) 0%, rgba(0,196,204,0.05) 100%)",
                
                // Text colors - Dark mode
                textPrimary: "#ffffff",
                textSecondary: "#e5e7eb",
                textMuted: "#9ca3af",
                textAccent: "#B019FF",
                
                // Border colors - Dark mode
                borderPrimary: "rgba(255,255,255,0.1)",
                borderSecondary: "rgba(255,255,255,0.05)",
                borderAccent: "rgba(176,25,255,0.3)",
                borderHover: "rgba(176,25,255,0.4)",
                
                // Shadow colors - Dark mode
                shadowLight: "0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -1px rgba(0,0,0,0.25)",
                shadowMedium: "0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -2px rgba(0,0,0,0.3)",
                shadowHover: "0 20px 40px rgba(176,25,255,0.2)",
                
                // Accent colors
                accentPrimary: "#B019FF",
                accentSecondary: "#8000C4",
                accentBlueGreen: "#00C4CC",
                
                // Transitions
                transitionNormal: "all 0.3s ease",
                transitionSlow: "all 0.5s ease",
                
                // Special effects - Dark mode
                gradientHover: "linear-gradient(135deg, rgba(176,25,255,0.2), rgba(0,196,204,0.15))",
                glassEffect: "rgba(38, 38, 38, 0.9)",
                glassEffectHover: "rgba(38, 38, 38, 0.95)",
            });
        } else {
            setTheme({
                // Background colors - Light mode
                bgPrimary: "#ffffff",
                bgSecondary: "#f8fafc",
                bgCard: "rgba(255, 255, 255, 0.95)",
                bgCardHover: "rgba(255, 255, 255, 0.98)",
                bgGradient: "linear-gradient(135deg, rgba(176,25,255,0.02) 0%, rgba(0,196,204,0.02) 100%)",
                
                // Text colors - Light mode
                textPrimary: "#171717",
                textSecondary: "#525252",
                textMuted: "#737373",
                textAccent: "#B019FF",
                
                // Border colors - Light mode
                borderPrimary: "rgba(0,0,0,0.08)",
                borderSecondary: "rgba(0,0,0,0.04)",
                borderAccent: "rgba(176,25,255,0.2)",
                borderHover: "rgba(176,25,255,0.3)",
                
                // Shadow colors - Light mode
                shadowLight: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                shadowMedium: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                shadowHover: "0 20px 40px rgba(176,25,255,0.1)",
                
                // Accent colors
                accentPrimary: "#B019FF",
                accentSecondary: "#8000C4",
                accentBlueGreen: "#00C4CC",
                
                // Transitions
                transitionNormal: "all 0.3s ease",
                transitionSlow: "all 0.5s ease",
                
                // Special effects - Light mode
                gradientHover: "linear-gradient(135deg, rgba(176,25,255,0.12), rgba(0,196,204,0.08))",
                glassEffect: "rgba(255, 255, 255, 0.9)",
                glassEffectHover: "rgba(255, 255, 255, 0.95)",
            });
        }
    }, [mode]);

    return (
        <AboutThemeContext.Provider value={theme}>
            {children}
        </AboutThemeContext.Provider>
    );
}

export function useAboutTheme() {
    const context = useContext(AboutThemeContext);
    if (context === undefined) {
        throw new Error('useAboutTheme must be used within an AboutThemeProvider');
    }
    return context;
}
