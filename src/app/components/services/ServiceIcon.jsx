"use client";

import React from "react";
import useEffectiveTheme from "../../components/useEffectiveTheme";

export default function ServiceIcon({ emoji, Icon, size = 28 }) {
    // Safely get theme with fallback
    let mode = "light";
    let color = "#171717";
    
    try {
        mode = useEffectiveTheme();
        color = mode === "dark" ? "#ffffff" : "#171717";
    } catch (error) {
        // Fallback to document-based theme detection
        if (typeof document !== 'undefined') {
            const root = document.documentElement;
            const body = document.body;
            if (root.classList.contains("dark") || body.classList.contains("dark")) {
                mode = "dark";
                color = "#ffffff";
            }
        }
    }

    const wrapperStyle = {
        width: 40,
        height: 40,
        borderRadius: 12,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-card, rgba(255,255,255,0.06))',
        border: '1px solid var(--border-primary, rgba(0,0,0,0.08))',
        transition: 'all 0.45s ease',
    };

    return (
        <div
            aria-hidden
            className="service-icon-wrapper"
            style={wrapperStyle}
        >
            {Icon ? (
                <Icon size={size} strokeWidth={2} color={color} />
            ) : (
                <span style={{ fontSize: size, lineHeight: 1, color }} className="select-none">{emoji}</span>
            )}
        </div>
    );
}
