"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
	theme: "system",
	setTheme: (t) => {},
	toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
	const [theme, setThemeState] = useState("system");

	// read persisted theme or fallback to system
	useEffect(() => {
		if (typeof window !== 'undefined') {
			try {
				const stored = localStorage.getItem("jw_theme");
				if (stored === "light" || stored === "dark") {
					setThemeState(stored);
				} else {
					setThemeState("system");
				}
			} catch {}
		}
	}, []);

	// apply theme to document immediately
	useEffect(() => {
		if (typeof document !== 'undefined') {
			const root = document.documentElement;
			const body = document.body;
			let effective;
			
			if (theme === "system") {
				// Use WIB time (Indonesia timezone) to determine theme
				const now = new Date();
				const wibTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
				const hour = wibTime.getHours();
				// Dark mode: 18:00 - 06:00 (6 PM - 6 AM)
				// Light mode: 06:00 - 18:00 (6 AM - 6 PM)
				const isNight = hour >= 18 || hour < 6;
				effective = isNight ? "dark" : "light";
			} else {
				effective = theme;
			}
			
			// Remove all theme classes first
			root.classList.remove("dark", "light");
			body.classList.remove("dark", "light");
			
			// Add new theme class
			root.classList.add(effective);
			body.classList.add(effective);
			
			// Update meta theme color immediately
			const themeColor = effective === "dark" ? "#1A1A1A" : "#ffffff";
			const metaThemeColor = document.querySelector('meta[name="theme-color"]');
			if (metaThemeColor) {
				metaThemeColor.setAttribute('content', themeColor);
			}
			
			// Update apple mobile web app status bar style
			const metaAppleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
			if (metaAppleStatusBar) {
				metaAppleStatusBar.setAttribute('content', effective === "dark" ? "black-translucent" : "default");
			}
			
			// Update document background color immediately
			root.style.backgroundColor = effective === "dark" ? "#1A1A1A" : "#ffffff";
			body.style.backgroundColor = effective === "dark" ? "#1A1A1A" : "#ffffff";
		}
	}, [theme]);

	const setTheme = useCallback((t) => {
		setThemeState(t);
		if (typeof window !== 'undefined') {
			try {
				if (t === "system") localStorage.removeItem("jw_theme");
				else localStorage.setItem("jw_theme", t);
			} catch {}
		}
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	}, [setTheme]);

	const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
