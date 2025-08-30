"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => null
});

export default function SplashScreen({ onComplete }) {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [lottieData, setLottieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Determine which logo to show based on theme
  useEffect(() => {
    const determineTheme = () => {
      if (theme === 'system') {
        // Use WIB time (Indonesia timezone) to determine theme
        const now = new Date();
        const wibTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const hour = wibTime.getHours();
        const isNight = hour >= 18 || hour < 6;
        return isNight ? 'dark' : 'light';
      }
      return theme;
    };

    const newTheme = determineTheme();
    setCurrentTheme(newTheme);
  }, [theme]);

  // Load Lottie animation data
  useEffect(() => {
    const loadLottie = async () => {
      try {
        const logoPath = currentTheme === 'dark' 
          ? '/assets/logo night mode.json' 
          : '/assets/logo light mode.json';
        
        console.log('Loading logo from:', logoPath);
        
        const response = await fetch(logoPath);
        if (response.ok) {
          const data = await response.json();
          console.log('Lottie data loaded successfully');
          setLottieData(data);
        } else {
          console.log('Logo file not found, using fallback');
        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error loading Lottie, using fallback:', error);
        setIsLoading(false);
      }
    };

    if (currentTheme) {
      loadLottie();
    }
  }, [currentTheme]);

  // Auto-hide after animation completes
  useEffect(() => {
    if (isLoading) return;

    // Set splash screen duration to 3 seconds
    const totalDuration = 3000; // 3 seconds total

    const timer = setTimeout(() => {
      console.log('Starting exit animation');
      setIsVisible(false);
      
      // Wait for exit animation to complete
      setTimeout(() => {
        onComplete?.();
      }, 800);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, [onComplete, isLoading]);

  // Show loading state while logo is loading
  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          backgroundColor: currentTheme === 'dark' ? '#1A1A1A' : '#ffffff'
        }}
      >
        <motion.div 
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            className="animate-spin rounded-full h-20 w-20 border-b-4 border-gray-600 mx-auto mb-8"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ 
              scale: { duration: 0.6, ease: "easeOut" },
              rotate: { duration: 1, ease: "linear", repeat: Infinity }
            }}
          />
          <motion.p 
            className="text-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            style={{
              color: currentTheme === 'dark' ? '#ffffff' : '#1A1A1A'
            }}
          >
            Loading Logo...
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  console.log('Rendering splash screen with:', { 
    isVisible, 
    isLoading, 
    lottieData: !!lottieData, 
    currentTheme 
  });

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{
            backgroundColor: currentTheme === 'dark' ? '#1A1A1A' : '#ffffff'
          }}
        >
          {/* Main Logo Container */}
          <motion.div
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: {
                scale: {
                  type: "spring",
                  stiffness: 80,
                  damping: 25,
                  duration: 1.5
                },
                opacity: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
            exit={{ 
              scale: 0.8, 
              opacity: 0,
              y: -50,
              transition: {
                duration: 0.6,
                ease: "easeInOut"
              }
            }}
          >
            {/* Responsive logo sizing */}
            <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] xl:w-[640px] xl:h-[640px]">
              {lottieData ? (
                <motion.div
                  className="w-full h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.9,
                    y: -30,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.8, 
                    ease: "easeOut" 
                  }}
                >
                  <Lottie
                    animationData={lottieData}
                    loop={false}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    onComplete={() => {
                      console.log('Lottie animation completed');
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: currentTheme === 'dark' ? '#333333' : '#f0f0f0'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.9,
                    y: -30,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem]"
                    style={{
                      color: currentTheme === 'dark' ? '#ffffff' : '#1A1A1A'
                    }}
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {currentTheme === 'dark' ? '🌙' : '☀️'}
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Subtle glow effect around the logo */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-10 blur-2xl"
              style={{
                background: `radial-gradient(circle, ${currentTheme === 'dark' ? '#ffffff' : '#1A1A1A'} 0%, transparent 70%)`
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.1, 0.2, 0.1], 
                scale: [0.8, 1.1, 0.8] 
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}
              transition={{ 
                delay: 0.8,
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Additional subtle glow for depth */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-5 blur-xl"
              style={{
                background: `radial-gradient(circle, ${currentTheme === 'dark' ? '#ffffff' : '#1A1A1A'} 0%, transparent 60%)`
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: [0.05, 0.15, 0.05], 
                scale: [0.9, 1.05, 0.9] 
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}
              transition={{ 
                delay: 1.2,
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
