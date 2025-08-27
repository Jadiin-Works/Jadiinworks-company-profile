"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "./splash-screen.css";
import "./dark-mode.css";
import "./light-mode.css";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [themeColor, setThemeColor] = useState("#ffffff");

  // Determine theme and set theme color
  useEffect(() => {
    const determineTheme = () => {
      let theme = "system";
      try {
        const stored = localStorage.getItem("jw_theme");
        if (stored === "light" || stored === "dark") theme = stored;
      } catch {}
      
      if (theme === "system") {
        // Use WIB time (Indonesia timezone) to determine theme
        const now = new Date();
        const wibTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const hour = wibTime.getHours();
        // Dark mode: 18:00 - 06:00 (6 PM - 6 AM)
        // Light mode: 06:00 - 18:00 (6 AM - 6 PM)
        const isNight = hour >= 18 || hour < 6;
        return isNight ? "dark" : "light";
      } else {
        return theme;
      }
    };

    const currentTheme = determineTheme();
    const color = currentTheme === "dark" ? "#1A1A1A" : "#ffffff";
    setThemeColor(color);
  }, []);

  useEffect(() => {
    setShowSplash(true);
    const timer = setTimeout(() => setShowSplash(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content={themeColor} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content={themeColor === "#1A1A1A" ? "black-translucent" : "default"} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        {/* Additional mobile optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {showSplash ? (
            <SplashScreen onComplete={() => setShowSplash(false)} />
          ) : (
            children
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
