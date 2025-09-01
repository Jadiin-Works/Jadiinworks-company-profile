"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  // Check theme
  useEffect(() => {
    const checkTheme = () => {
      if (typeof window !== 'undefined') {
        const isDarkMode = document.documentElement.classList.contains('dark') || 
                          window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(isDarkMode);
      }
    };
    
    checkTheme();
    
    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);
    
    return () => mediaQuery.removeEventListener('change', checkTheme);
  }, []);

  // Initialize motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 300 });

  // Adjust rotation and translation depth based on theme
  const adjustedRotateDepth = isDark ? rotateDepth : Math.min(rotateDepth * 0.7, 12);
  const adjustedTranslateDepth = isDark ? translateDepth : Math.min(translateDepth * 0.75, 15);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${adjustedRotateDepth}deg`, `${adjustedRotateDepth}deg`],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${adjustedRotateDepth}deg`, `-${adjustedRotateDepth}deg`],
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${adjustedTranslateDepth}px`, `${adjustedTranslateDepth}px`],
  );
  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${adjustedTranslateDepth}px`, `-${adjustedTranslateDepth}px`],
  );

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  // Theme-aware glare effects - More subtle for light mode
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(176, 25, 255, 0.02)'} 0%, ${isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(212, 165, 255, 0.01)'} 25%, ${isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(176, 25, 255, 0.005)'} 50%, transparent 100%)`;

  const secondaryGlareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(176, 25, 255, 0.015)'} 0%, ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(212, 165, 255, 0.008)'} 35%, ${isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(176, 25, 255, 0.003)'} 65%, transparent 100%)`;

  const depthGlareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, ${isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(212, 165, 255, 0.008)'} 0%, ${isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(176, 25, 255, 0.005)'} 45%, ${isDark ? 'rgba(255, 255, 255, 0.005)' : 'rgba(212, 165, 255, 0.002)'} 75%, transparent 100%)`;

  // Light mode specific subtle shadow effects
  const lightModeShadow = useMotionTemplate`rgba(176, 25, 255, ${isDark ? '0.01' : '0.06'}) 0px 520px 146px 0px, rgba(212, 165, 255, ${isDark ? '0.04' : '0.04'}) 0px 333px 133px 0px, rgba(176, 25, 255, ${isDark ? '0.26' : '0.03'}) 0px 83px 83px 0px, rgba(212, 165, 255, ${isDark ? '0.29' : '0.02'}) 0px 21px 46px 0px`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn("perspective-distant transform-3d", className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          boxShadow: lightModeShadow,
        }}
        initial={{ scale: 1, z: 0 }}
        whileHover={{
          scale: isDark ? 1.05 : 1.02,
          z: isDark ? 50 : 20,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="relative rounded-2xl"
      >
        {children}
        
        {/* Primary glare effect - Very subtle for light mode */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
          style={{
            background: glareBackground,
            opacity: isDark ? 0.4 : 0.08,
            filter: isDark ? 'none' : 'saturate(0.7) brightness(1.05)',
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        />
        
        {/* Secondary subtle glare for more natural effect - Minimal for light mode */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-screen"
          style={{
            background: secondaryGlareBackground,
            opacity: isDark ? 0.3 : 0.04,
            filter: isDark ? 'none' : 'saturate(0.6) brightness(1.08)',
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        />
        
        {/* Third layer for extra depth - Very minimal for light mode */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
          style={{
            background: depthGlareBackground,
            opacity: isDark ? 0.2 : 0.02,
            filter: isDark ? 'none' : 'saturate(0.5) brightness(1.1)',
          }}
          transition={{ 
            duration: 0.7,
            ease: "easeOut"
          }}
        />
        
        {/* Light mode specific: Add very subtle gradient overlay for elegance */}
        {!isDark && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-40 h-full w-full rounded-[16px]"
            style={{
              background: `linear-gradient(135deg, rgba(176, 25, 255, 0.008) 0%, rgba(212, 165, 255, 0.005) 50%, rgba(176, 25, 255, 0.008) 100%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        )}
      </motion.div>
    </div>
  );
};
