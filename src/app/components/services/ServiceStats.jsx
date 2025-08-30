"use client";

import CometCard from "@/app/components/CometCard";
import { useServiceTheme } from "./ServiceThemeProvider";
import { DraggableCardBody } from "@/app/components/ui/draggable-card.jsx";
import { useState, useEffect } from "react";

// Fallback theme for when ServiceThemeProvider is not available
const fallbackTheme = {
    textPrimary: "#171717",
    textSecondary: "#525252",
    bgCard: "rgba(255, 255, 255, 0.95)",
    borderPrimary: "rgba(0, 0, 0, 0.08)",
    shadowLight: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    shadowMedium: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    accentPrimary: "#B019FF",
    transitionNormal: "all 0.3s ease",
};

export default function ServiceStats() {
    // Try to use ServiceThemeProvider, fallback to default theme if not available
    let theme;
    try {
        theme = useServiceTheme();
    } catch (error) {
        // If ServiceThemeProvider is not available, use fallback theme
        theme = fallbackTheme;
    }

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
        };

        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);

        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);
    
    const stats = [
        { number: "50+", label: "Proyek Selesai", icon: "🎯", gradient: "from-orange-400 to-pink-500" },
        { number: "98%", label: "Kepuasan Klien", icon: "⭐", gradient: "from-yellow-400 to-orange-500" },
        { number: "24/7", label: "Dukungan Teknis", icon: "🛠️", gradient: "from-blue-400 to-cyan-500" },
        { number: "3+", label: "Tahun Pengalaman", icon: "📈", gradient: "from-purple-400 to-pink-500" },
    ];

    // Desktop view with enhanced cards (Comet + Draggable) - Theme aware with glass effect
    if (isDesktop) {
        return (
            <section className="service-stats-section">
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                        transition: 'all 0.5s ease'
                    }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                transition: 'all 0.5s ease',
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <DraggableCardBody 
                                className={`absolute ${
                                    index === 0 ? "top-20 left-[25%] rotate-[-3deg]" :
                                    index === 1 ? "top-32 left-[30%] rotate-[-5deg]" :
                                    index === 2 ? "top-16 left-[45%] rotate-[4deg]" :
                                    "top-28 left-[60%] rotate-[6deg]"
                                }`}
                                rotateDepth={12}
                                translateDepth={15}
                            >
                                <div
                                    className="w-48 h-40 flex flex-col items-center justify-center text-center p-4 rounded-2xl relative overflow-hidden"
                                    style={{
                                        background: theme.bgCard,
                                        border: `1px solid ${theme.borderPrimary}`,
                                        boxShadow: theme.shadowLight,
                                        color: theme.textPrimary,
                                        transition: theme.transitionNormal,
                                        backdropFilter: 'blur(20px)',
                                    }}
                                >
                                    {/* Glass effect overlay */}
                                    <div 
                                        className="absolute inset-0 rounded-2xl opacity-30"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                                            border: `1px solid rgba(255, 255, 255, 0.1)`,
                                        }}
                                    />
                                    
                                    {/* Gradient border effect */}
                                    <div 
                                        className="absolute inset-0 rounded-2xl opacity-60"
                                        style={{
                                            background: `linear-gradient(135deg, ${theme.accentPrimary}20, ${theme.accentSecondary}20)`,
                                            padding: '1px',
                                        }}
                                    />
                                    
                                    {/* Content with proper z-index */}
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2">
                                        {/* Icon with enhanced styling */}
                                        <div 
                                            className="text-3xl mb-2 p-2 rounded-full"
                                            style={{
                                                background: `linear-gradient(135deg, ${theme.accentPrimary}15, ${theme.accentSecondary}15)`,
                                                border: `1px solid ${theme.borderAccent}`,
                                                backdropFilter: 'blur(10px)',
                                            }}
                                        >
                                            {stat.icon}
                                        </div>
                                        
                                        {/* Number with enhanced styling */}
                                        <div 
                                            className="text-4xl font-bold mb-1 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                                            style={{
                                                textShadow: `0 2px 4px ${theme.accentPrimary}30`,
                                            }}
                                        >
                                            {stat.number}
                                        </div>
                                        
                                        {/* Label with enhanced styling */}
                                        <div 
                                            className="text-xs font-medium px-2 py-1 rounded-full"
                                            style={{ 
                                                color: theme.textSecondary,
                                                background: `linear-gradient(135deg, ${theme.borderSecondary}, ${theme.borderPrimary})`,
                                                backdropFilter: 'blur(5px)',
                                            }}
                                        >
                                            {stat.label}
                                        </div>
                                    </div>
                                    
                                    {/* Subtle glow effect */}
                                    <div 
                                        className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at 50% 50%, ${theme.accentPrimary}20, transparent 70%)`,
                                            filter: 'blur(20px)',
                                        }}
                                    />
                                </div>
                            </DraggableCardBody>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Mobile view with Comet Cards (existing implementation)
    return (
        <section className="service-stats-section">
            <div
                className="service-stats-grid"
                style={{
                    transition: 'all 0.5s ease'
                }}
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        style={{
                            transition: 'all 0.5s ease',
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <CometCard className="h-full">
                            <div
                                className="service-stat-card relative overflow-hidden"
                                style={{
                                    '--text-primary': theme.textPrimary,
                                    '--text-secondary': theme.textSecondary,
                                    '--bg-card': theme.bgCard,
                                    '--border-primary': theme.borderPrimary,
                                    '--shadow-light': theme.shadowLight,
                                    '--accent-primary': theme.accentPrimary,
                                    '--transition-normal': theme.transitionNormal,
                                }}
                            >
                                {/* Glass effect overlay for mobile */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-30"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                                        border: `1px solid rgba(255, 255, 255, 0.1)`,
                                    }}
                                />
                                
                                {/* Content with proper z-index */}
                                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                    <div className="service-stat-icon">{stat.icon}</div>
                                    <div className="service-stat-number bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="service-stat-label">{stat.label}</div>
                                </div>
                                
                                {/* Subtle glow effect for mobile */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${theme.accentPrimary}20, transparent 70%)`,
                                        filter: 'blur(20px)',
                                    }}
                                />
                            </div>
                        </CometCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
