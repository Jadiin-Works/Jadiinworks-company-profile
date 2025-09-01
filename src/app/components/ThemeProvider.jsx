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
				// Use system preference
				if (typeof window !== 'undefined' && window.matchMedia) {
					effective = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
				} else {
					effective = "light"; // fallback
				}
			} else {
				effective = theme;
			}
			
			// Remove all theme classes first
			root.classList.remove("dark", "light");
			body.classList.remove("dark", "light");
			
			// Add new theme class - Tailwind will handle the styling via CSS
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
