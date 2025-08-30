"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useServiceTheme } from "./ServiceThemeProvider";
import React, { useState, useEffect } from "react";

const stepVariants = {
    initial: { opacity: 0, scale: 0.92, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0 },
};

// Fallback theme for when ServiceThemeProvider is not available
const fallbackTheme = {
    textPrimary: "#171717",
    textSecondary: "#525252",
    bgPrimary: "#ffffff",
    bgCard: "rgba(255, 255, 255, 0.7)",
    bgCardHover: "rgba(255, 255, 255, 0.85)",
    borderPrimary: "rgba(0, 0, 0, 0.08)",
    borderSecondary: "rgba(0, 0, 0, 0.04)",
    borderAccent: "rgba(176, 25, 255, 0.2)",
    shadowLight: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    shadowMedium: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transitionNormal: "all 0.3s ease",
};

const processStepData = {
    1: {
        title: "Discovery & Konsultasi",
        description: "Kami memulai dengan memahami kebutuhan bisnis Anda secara mendalam. Melalui sesi konsultasi yang intensif, kami menganalisis target audience, tujuan website, dan fitur-fitur yang diperlukan untuk mencapai kesuksesan digital."
    },
    2: {
        title: "Desain & Prototyping",
        description: "Tim desainer kami membuat wireframe dan mockup yang detail, memastikan setiap elemen visual selaras dengan brand identity Anda. Kami juga membuat prototype interaktif untuk validasi user experience sebelum pengembangan."
    },
    3: {
        title: "Pengembangan & Coding",
        description: "Developer berpengalaman kami mengubah desain menjadi website yang berfungsi penuh. Menggunakan teknologi modern dan best practices untuk memastikan website cepat, aman, dan mudah dikelola."
    },
    4: {
        title: "Revisi & Umpan Balik",
        description: "Kami mengumpulkan feedback dari Anda dan melakukan revisi sesuai kebutuhan. Proses iteratif ini memastikan hasil akhir sesuai ekspektasi dan memberikan pengalaman terbaik bagi pengguna."
    },
    5: {
        title: "Peluncuran & Dukungan",
        description: "Website siap diluncurkan dengan performa optimal. Kami juga menyediakan dukungan purna jual, maintenance berkala, dan training untuk tim internal Anda agar dapat mengelola website secara mandiri."
    }
};

// Enhanced Evervault Card Pattern Component
function CardPattern({ mouseX, mouseY, randomString, theme }) {
    let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            {/* Enhanced background overlay with better contrast */}
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-40 transition-opacity duration-500"></div>
            
            {/* Main gradient effect - enhanced with better colors */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-60 backdrop-blur-lg transition-all duration-700"
                style={{
                    ...style,
                    background: `linear-gradient(135deg, 
                        rgba(176, 25, 255, 0.25) 0%, 
                        rgba(0, 196, 204, 0.2) 25%,
                        rgba(128, 0, 196, 0.15) 50%, 
                        rgba(176, 25, 255, 0.1) 75%,
                        rgba(0, 196, 204, 0.05) 100%)`
                }}
            />
            
            {/* Enhanced random string overlay - improved with better positioning */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-40 transition-all duration-700"
                style={style}
            >
                <p className="absolute inset-x-0 text-[10px] h-full break-words whitespace-pre-wrap text-white font-mono font-bold leading-tight opacity-70 drop-shadow-lg">
                    {randomString}
                </p>
            </motion.div>
            
            {/* Enhanced glow effect with multiple layers */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-30 transition-opacity duration-700"
                style={{
                    ...style,
                    background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, 
                        rgba(176, 25, 255, 0.4) 0%, 
                        rgba(0, 196, 204, 0.2) 40%,
                        transparent 80%)`
                }}
            />
            
            {/* Additional shimmer effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-25 transition-opacity duration-700"
                style={{
                    ...style,
                    background: `linear-gradient(45deg, 
                        transparent 0%, 
                        rgba(255, 255, 255, 0.1) 25%,
                        rgba(176, 25, 255, 0.2) 50%,
                        rgba(255, 255, 255, 0.1) 75%,
                        transparent 100%)`
                }}
            />
            
            {/* Subtle border glow */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-50 transition-opacity duration-700"
                style={{
                    ...style,
                    background: `linear-gradient(90deg, 
                        rgba(176, 25, 255, 0.3) 0%, 
                        rgba(0, 196, 204, 0.3) 50%,
                        rgba(176, 25, 255, 0.3) 100%)`,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '1px'
                }}
            />
        </div>
    );
}

// Generate random string for the evervault effect
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export default function ProcessStep({ number, title }) {
    // Try to use ServiceThemeProvider, fallback to default theme if not available
    let theme;
    try {
        theme = useServiceTheme();
    } catch (error) {
        // If ServiceThemeProvider is not available, use fallback theme
        theme = fallbackTheme;
    }

    const stepData = processStepData[number];
    
    // Evervault effect state
    const [randomString, setRandomString] = useState("");
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        let str = generateRandomString(1500);
        setRandomString(str);
    }, []);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString(1500);
        setRandomString(str);
    }

    return (
        <motion.div
            variants={stepVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.02 }}
        >
            <div
                className="process-step group/card relative overflow-hidden"
                style={{
                    '--text-primary': theme.textPrimary,
                    '--text-secondary': theme.textSecondary,
                    '--bg-primary': theme.bgPrimary,
                    '--bg-card': theme.bgCard,
                    '--bg-card-hover': theme.bgCardHover,
                    '--border-primary': theme.borderPrimary,
                    '--border-secondary': theme.borderSecondary,
                    '--border-accent': theme.borderAccent,
                    '--shadow-light': theme.shadowLight,
                    '--shadow-medium': theme.shadowMedium,
                    '--transition-normal': theme.transitionNormal,
                }}
                onMouseMove={onMouseMove}
            >
                {/* Evervault Card Pattern */}
                <CardPattern 
                    mouseX={mouseX} 
                    mouseY={mouseY} 
                    randomString={randomString}
                    theme={theme}
                />
                
                {/* Content with enhanced readability */}
                <div className="relative z-20">
                    <div className="process-step-header">
                        <div className="process-step-number">
                            {number}
                        </div>
                        <h4 className="process-step-title">{stepData.title}</h4>
                    </div>
                    
                    <div className="process-step-content">
                        <p className="process-step-description">{stepData.description}</p>
                    </div>

                    <div
                        className="process-step-divider"
                        style={{
                            background: `linear-gradient(90deg, ${theme.borderSecondary} 0%, transparent 100%)`
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
}


