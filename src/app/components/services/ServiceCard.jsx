"use client";

import { useServiceTheme } from "./ServiceThemeProvider";
import ServiceIcon from "./ServiceIcon";
import useEffectiveTheme from "../../components/useEffectiveTheme";

// Fallback theme for when hooks are not available
const getFallbackTheme = (isDark = false) => ({
    textPrimary: isDark ? "#ffffff" : "#171717",
    textSecondary: isDark ? "#a3a3a3" : "#525252",
    textMuted: "#737373",
    bgCard: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.95)",
    bgCardHover: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.98)",
    borderPrimary: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    borderSecondary: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    borderAccent: isDark ? "rgba(176,25,255,0.3)" : "rgba(176,25,255,0.2)",
    shadowLight: isDark ? "0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -1px rgba(0,0,0,0.2)" : "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    shadowMedium: isDark ? "0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -2px rgba(0,0,0,0.25)" : "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    gradientHover: isDark ? "linear-gradient(135deg, rgba(176,25,255,0.2), rgba(0,196,204,0.15))" : "linear-gradient(135deg, rgba(176,25,255,0.12), rgba(0,196,204,0.08))",
    transitionNormal: "all 0.3s ease",
    transitionSlow: "all 0.5s ease",
});

export default function ServiceCard({ emoji, Icon, title, description, points, index = 0 }) {
    // Safely get theme with fallback
    let theme;
    try {
        // First try to get scoped service theme
        theme = useServiceTheme();
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
            className="service-card group"
            style={{
                '--text-primary': theme.textPrimary,
                '--text-secondary': theme.textSecondary,
                '--text-muted': theme.textMuted,
                '--bg-card': theme.bgCard,
                '--bg-card-hover': theme.bgCardHover,
                '--border-primary': theme.borderPrimary,
                '--border-secondary': theme.borderSecondary,
                '--border-accent': theme.borderAccent,
                '--shadow-light': theme.shadowLight,
                '--shadow-medium': theme.shadowMedium,
                '--gradient-hover': theme.gradientHover,
                '--transition-normal': theme.transitionNormal,
                '--transition-slow': theme.transitionSlow,
                '--accent-primary': theme.accentPrimary,
                transition: theme.transitionNormal,
            }}
        >
            <div className="service-card-glow" aria-hidden />
            <div className="service-card-content">
                <ServiceIcon emoji={emoji} Icon={Icon} />
                <div className="service-card-body">
                    <h3 className="service-card-title">
                        {title}
                    </h3>
                    {description && (
                        <p className="service-card-desc" style={{ color: theme.textSecondary, marginBottom: 8 }}>
                            {description}
                        </p>
                    )}
                    <ul className="service-card-list service-checklist">
                        {points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="service-card-divider" />
        </div>
    );
}


