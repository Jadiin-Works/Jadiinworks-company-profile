"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

export default function SplashScreen({ onComplete }) {
	const lottieRef = useRef(null);
	const [animationData, setAnimationData] = useState(null);
	const [effectiveTheme, setEffectiveTheme] = useState("light");
	const [isExiting, setIsExiting] = useState(false);

	// Determine theme from localStorage or WIB time
	useEffect(() => {
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
			const detectedTheme = isNight ? "dark" : "light";
			setEffectiveTheme(detectedTheme);
		} else {
			setEffectiveTheme(theme);
		}
	}, []);

	// Load Lottie JSON based on effective theme
	useEffect(() => {
		let isCancelled = false;
		const load = async () => {
			try {
				const path = effectiveTheme === "dark" ? "/assets/logonightmode.json" : "/assets/logolightmode.json";
				console.log("Loading animation for theme:", effectiveTheme, "from path:", path);
				const res = await fetch(path, { 
					cache: "no-cache", 
					headers: { 
						'Cache-Control': 'no-cache, no-store, must-revalidate',
						'Pragma': 'no-cache',
						'Expires': '0'
					} 
				});
				if (!res.ok) throw new Error("Failed to load animation");
				const json = await res.json();
				if (!isCancelled) {
					console.log("Animation loaded successfully for theme:", effectiveTheme);
					setAnimationData(json);
				}
			} catch (err) {
				console.error("Error loading animation:", err);
				if (!isCancelled) setTimeout(() => handleComplete(), 500);
			}
		};
		load();
		return () => { isCancelled = true; };
	}, [effectiveTheme]);

	const handleComplete = () => {
		setIsExiting(true);
		setTimeout(() => onComplete(), 300);
	};

	// Auto complete after 2s
	useEffect(() => {
		const timer = setTimeout(() => handleComplete(), 2000);
		return () => clearTimeout(timer);
	}, []);

	// optional: hook to lottie complete
	useEffect(() => {
		if (!lottieRef.current || !animationData) return;
		const anim = lottieRef.current;
		const onDone = () => {};
		anim.addEventListener?.("complete", onDone);
		return () => anim.removeEventListener?.("complete", onDone);
	}, [animationData]);

	return (
		<div 
			className={`splash-screen-container ${effectiveTheme}`}
			style={{
				opacity: isExiting ? 0 : 1,
				transition: 'opacity 0.3s ease-in-out',
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 999999
			}}
		>
			{animationData && (
				<Lottie
					lottieRef={lottieRef}
					animationData={animationData}
					loop={false}
					autoplay={true}
					className="lottie-react"
					style={{
						width: '100vw',
						height: '100vh',
						objectFit: 'cover',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0
					}}
				/>
			)}
		</div>
	);
}
