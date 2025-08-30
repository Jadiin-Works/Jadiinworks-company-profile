"use client";

import { useEffect, useState } from "react";

export default function useEffectiveTheme() {
	const [mode, setMode] = useState("light");

	useEffect(() => {
		const getCurrent = () => {
			// Check if we're in a browser environment
			if (typeof document === "undefined" || typeof window === "undefined") {
				return "light";
			}

			try {
				const root = document.documentElement;
				const body = document.body;
				
				// Check for explicit theme classes
				if (root.classList.contains("dark") || body.classList.contains("dark")) {
					return "dark";
				}
				if (root.classList.contains("light") || body.classList.contains("light")) {
					return "light";
				}
				
				// Check localStorage for saved preference
				try {
					const stored = localStorage.getItem("jw_theme");
					if (stored === "light" || stored === "dark") {
						return stored;
					}
				} catch (e) {
					// localStorage might not be available
				}
				
				// Fallback to time-based theme (WIB time)
				const now = new Date();
				const wibTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
				const hour = wibTime.getHours();
				const isNight = hour >= 18 || hour < 6;
				return isNight ? "dark" : "light";
			} catch (error) {
				console.error("Error determining theme:", error);
				return "light";
			}
		};

		// Set initial theme
		setMode(getCurrent());

		// Only set up observers if we're in a browser environment
		if (typeof document !== 'undefined' && typeof window !== 'undefined') {
			try {
				// Observe class changes on html and body
				const observer = new MutationObserver(() => {
					setMode(getCurrent());
				});
				
				observer.observe(document.documentElement, { 
					attributes: true, 
					attributeFilter: ["class"] 
				});
				observer.observe(document.body, { 
					attributes: true, 
					attributeFilter: ["class"] 
				});

				// Watch system theme changes
				if (window.matchMedia) {
					const mql = window.matchMedia("(prefers-color-scheme: dark)");
					const onChange = () => setMode(getCurrent());
					
					if (mql.addEventListener) {
						mql.addEventListener("change", onChange);
					} else if (mql.addListener) {
						// Fallback for older browsers
						mql.addListener(onChange);
					}

					return () => {
						observer.disconnect();
						if (mql.removeEventListener) {
							mql.removeEventListener("change", onChange);
						} else if (mql.removeListener) {
							mql.removeListener(onChange);
						}
					};
				}

				return () => {
					observer.disconnect();
				};
			} catch (error) {
				console.error("Error setting up theme observers:", error);
			}
		}
	}, []);

	return mode; // "light" | "dark"
}

// Safe version that doesn't throw errors
export function useEffectiveThemeSafe() {
	try {
		return useEffectiveTheme();
	} catch (error) {
		console.error("Error in useEffectiveThemeSafe:", error);
		// Fallback to simple theme detection
		if (typeof document !== 'undefined') {
			try {
				const root = document.documentElement;
				const body = document.body;
				if (root.classList.contains("dark") || body.classList.contains("dark")) {
					return "dark";
				}
				if (root.classList.contains("light") || body.classList.contains("light")) {
					return "light";
				}
			} catch (e) {
				// Ignore errors
			}
		}
		return "light";
	}
}
