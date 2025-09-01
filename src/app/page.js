"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ServiceCard from "./components/services/ServiceCard";
import CometCard from "./components/CometCard";
import ClientLayout from "./components/ClientLayout";
import Nav from "./components/Nav";
import { useTheme } from "./components/ThemeProvider";
import { ServiceThemeProvider } from "./components/services/ServiceThemeProvider";
import { PaintBrushBroad, Code, ShieldCheck } from "@phosphor-icons/react";

function HomePageContent() {
	// Safely get theme with fallback
	let theme = "system";
	let setTheme = () => {};
	
	try {
		const themeContext = useTheme();
		theme = themeContext.theme;
		setTheme = themeContext.setTheme;
	} catch (error) {
		console.error("Error getting theme context:", error);
		// Fallback theme detection
		if (typeof window !== 'undefined') {
			try {
				const stored = localStorage.getItem("jw_theme");
				if (stored === "light" || stored === "dark") {
					theme = stored;
				}
			} catch (e) {
				// localStorage might not be available
			}
		}
	}

	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Set mounted to true after component mounts
	useEffect(() => {
		setMounted(true);
	}, []);

	// Calculate isDark in useEffect to avoid hydration mismatch
	useEffect(() => {
		if (!mounted) return;
		
		const calculateIsDark = () => {
			if (theme === "dark") return true;
			if (theme === "system" && typeof window !== 'undefined' && window.matchMedia) {
				return window.matchMedia('(prefers-color-scheme: dark)').matches;
			}
			return false;
		};
		
		setIsDark(calculateIsDark());
		
		// Listen for system theme changes
		if (theme === "system" && typeof window !== 'undefined' && window.matchMedia) {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleChange = () => setIsDark(calculateIsDark());
			mediaQuery.addEventListener('change', handleChange);
			return () => mediaQuery.removeEventListener('change', handleChange);
		}
	}, [theme, mounted]);

	return (
		<main className={`w-full min-h-screen pt-20 ${isDark ? '' : ''}`} style={{ backgroundColor: isDark ? "#1A1A1A" : "#ffffff", color: isDark ? "#ffffff" : "#171717" }}>
		{mounted ? (
			<>
			<Nav />

			{/* Sections anchors for smooth navigation */}
			<section id="home" className="mx-auto max-w-4xl px-6 py-24">
				<h1 className="text-3xl font-extrabold tracking-tight">Welcome to Jadiinworks</h1>
				<p className="mt-2 opacity-80">Company profile website with modern theme switching.</p>
			</section>
			<section id="services" className="relative mx-auto w-full max-w-6xl px-6 py-24">
				<div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
					<div className="absolute -top-24 -right-16 h-56 w-56 rounded-full blur-3xl bg-gradient-to-br from-blue-500/10 via-teal-400/10 to-fuchsia-500/10" />
				</div>
				<div
					className="mb-8"
					style={{
						transition: 'all 0.6s ease'
					}}
				>
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Sekilas Layanan Kami</h2>
					<p className="mt-2 opacity-80 max-w-2xl">Cuplikan ringkas dari layanan inti kami. Jelajahi detail lengkap dan proses kerja kami melalui halaman layanan.</p>
				</div>

				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
					style={{
						transition: 'all 0.6s ease'
					}}
				>
					{[
						{ Icon: PaintBrushBroad, emoji: "🎨", title: "Desain Website & UI/UX", points: ["Desain modern", "Mobile-first", "Alur intuitif", "Wireframe & prototype"] },
						{ Icon: Code, emoji: "💻🚀", title: "Pengembangan Website", points: ["Coding dari nol", "CMS siap pakai", "Optimasi performa", "Fitur kustom"] },
						{ Icon: ShieldCheck, emoji: "🔧🛡️", title: "Dukungan & Pemeliharaan", points: ["Update keamanan", "Backup berkala", "Support responsif", "Edukasi pengelolaan"] },
					].map((svc, i) => (
						<div key={i} style={{ transition: 'all 0.6s ease' }}>
							<CometCard>
								<ServiceCard {...svc} index={i} />
							</CometCard>
						</div>
					))}
				</div>

				<div
					className="mt-8 flex items-center justify-end"
					style={{
						transition: 'all 0.6s ease'
					}}
				>
					<CometCard className="inline-block">
						<Link href="/services" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300/60 dark:border-white/20 bg-transparent backdrop-blur hover:bg-black/5 dark:hover:bg-white/10 transition">
							<span>Lihat detail layanan</span>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
					</CometCard>
				</div>
			</section>
			{/* Import and use PortfoliosComponent */}
			{(() => {
				const { PortfoliosComponent } = require('./components/navbar');
				return <PortfoliosComponent />;
			})()}
			<section id="about" className="mx-auto max-w-4xl px-6 py-24 opacity-80">About us section</section>
			<section id="contact" className="mx-auto max-w-4xl px-6 py-24 opacity-80">Contact us section</section>
			</>
		) : null}
	</main>
	);
}

export default function RootPage() {
	return (
		<ClientLayout>
			<ServiceThemeProvider>
				<HomePageContent />
			</ServiceThemeProvider>
		</ClientLayout>
	);
}
