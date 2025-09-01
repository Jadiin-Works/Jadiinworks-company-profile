"use client";

import { useAboutTheme } from "./AboutThemeProvider";
import useEffectiveTheme from "../../components/useEffectiveTheme";

// Fallback theme for when hooks are not available
const getFallbackTheme = (isDark = false) => ({
    // Background colors
    bgPrimary: isDark ? "#1A1A1A" : "#ffffff",
    bgSecondary: isDark ? "#262626" : "#f8fafc",
    bgCard: isDark ? "rgba(38, 38, 38, 0.9)" : "rgba(255, 255, 255, 0.95)",
    bgCardHover: isDark ? "rgba(38, 38, 38, 0.95)" : "rgba(255, 255, 255, 0.98)",
    
    // Text colors
    textPrimary: isDark ? "#ffffff" : "#171717",
    textSecondary: isDark ? "#e5e7eb" : "#525252",
    textMuted: isDark ? "#9ca3af" : "#737373",
    textAccent: "#B019FF",
    
    // Border colors
    borderPrimary: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    borderSecondary: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    borderAccent: isDark ? "rgba(176,25,255,0.3)" : "rgba(176,25,255,0.2)",
    borderHover: isDark ? "rgba(176,25,255,0.4)" : "rgba(176,25,255,0.3)",
    
    // Shadow colors
    shadowLight: isDark ? "0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -1px rgba(0,0,0,0.25)" : "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    shadowMedium: isDark ? "0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -2px rgba(0,0,0,0.3)" : "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    shadowHover: isDark ? "0 20px 40px rgba(176,25,255,0.2)" : "0 20px 40px rgba(176,25,255,0.1)",
    
    // Accent colors
    accentPrimary: "#B019FF",
    accentSecondary: "#8000C4",
    accentBlueGreen: "#00C4CC",
    
    // Transitions
    transitionNormal: "all 0.3s ease",
    transitionSlow: "all 0.5s ease",
    
    // Special effects
    gradientHover: isDark ? "linear-gradient(135deg, rgba(176,25,255,0.2), rgba(0,196,204,0.15))" : "linear-gradient(135deg, rgba(176,25,255,0.12), rgba(0,196,204,0.08))",
    glassEffect: isDark ? "rgba(38, 38, 38, 0.9)" : "rgba(255, 255, 255, 0.9)",
    glassEffectHover: isDark ? "rgba(38, 38, 38, 0.95)" : "rgba(255, 255, 255, 0.95)",
});

export default function TeamMemberCard({ photo, name, role, bio, socialMedia, index = 0 }) {
    // Safely get theme with fallback
    let theme;
    try {
        // First try to get scoped about theme
        theme = useAboutTheme();
    } catch (error) {
        try {
            // Fallback to global theme
            const mode = useEffectiveTheme();
            const isDark = mode === "dark";
            theme = getFallbackTheme(isDark);
        } catch (hookError) {
            // Final fallback - determine theme from document if available
            let isDark = false;
            if (typeof document !== 'undefined') {
                const root = document.documentElement;
                const body = document.body;
                isDark = root.classList.contains('dark') || body.classList.contains('dark');
            }
            theme = getFallbackTheme(isDark);
        }
    }

    return (
        <div
            role="listitem"
            className="team-member-card group"
            style={{
                // Background colors
                '--bg-primary': theme.bgPrimary,
                '--bg-secondary': theme.bgSecondary,
                '--bg-card': theme.bgCard,
                '--bg-card-hover': theme.bgCardHover,
                
                // Text colors
                '--text-primary': theme.textPrimary,
                '--text-secondary': theme.textSecondary,
                '--text-muted': theme.textMuted,
                '--text-accent': theme.textAccent,
                
                // Border colors
                '--border-primary': theme.borderPrimary,
                '--border-secondary': theme.borderSecondary,
                '--border-accent': theme.borderAccent,
                '--border-hover': theme.borderHover,
                
                // Shadow colors
                '--shadow-light': theme.shadowLight,
                '--shadow-medium': theme.shadowMedium,
                '--shadow-hover': theme.shadowHover,
                
                // Accent colors
                '--accent-primary': theme.accentPrimary,
                '--accent-secondary': theme.accentSecondary,
                '--accent-blue-green': theme.accentBlueGreen,
                
                // Transitions
                '--transition-normal': theme.transitionNormal,
                '--transition-slow': theme.transitionSlow,
                
                // Special effects
                '--gradient-hover': theme.gradientHover,
                '--glass-effect': theme.glassEffect,
                '--glass-effect-hover': theme.glassEffectHover,
                
                transition: theme.transitionNormal,
            }}
        >
            <div className="team-member-card-glow" aria-hidden />
            <div className="team-member-card-content">
                <div className="team-member-photo">
                    <img 
                        src={photo} 
                        alt={`Foto ${name}`}
                        className="team-member-image"
                    />
                </div>
                <div className="team-member-body">
                    <h3 className="team-member-name">
                        {name}
                    </h3>
                    <p className="team-member-role" style={{ color: theme.textSecondary, marginBottom: 8 }}>
                        {role}
                    </p>
                    <p className="team-member-bio" style={{ color: theme.textSecondary }}>
                        {bio}
                    </p>
                    
                    {/* Social Media Links */}
                    {socialMedia && (
                        <div className="team-member-social">
                            {socialMedia.instagram && (
                                <a 
                                    href={socialMedia.instagram} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link instagram"
                                    aria-label={`Instagram ${name}`}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            )}
                            {socialMedia.linktree && (
                                <a 
                                    href={socialMedia.linktree} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link linktree"
                                    aria-label={`Linktree ${name}`}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                                    </svg>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="team-member-card-divider" />
        </div>
    );
}
