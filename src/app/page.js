"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ServiceCard from "./components/services/ServiceCard";
import CometCard from "./components/CometCard";
import ClientLayout from "./components/ClientLayout";
import Nav from "./components/Nav";
import { useTheme } from "./components/ThemeProvider";
import { ServiceThemeProvider } from "./components/services/ServiceThemeProvider";
import { PaintBrushBroad, Code, ShieldCheck, Rocket, Lightbulb, Target, Star, ArrowRight, Users, Globe, CheckCircle } from "@phosphor-icons/react";

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
			<section id="portfolios" className="mx-auto max-w-4xl px-6 py-24 opacity-80">Portfolios section</section>
			<section id="about" className="mx-auto max-w-6xl px-6 py-24">
				{/* About Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200/60 dark:border-purple-400/40 bg-purple-50/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6 shadow-sm">
						<Star className="w-4 h-4" weight="fill" />
						<span>Tentang Jadiin</span>
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
						Platform Terdepan di{" "}
						<span className="bg-gradient-to-r from-[#B019FF] via-[#8000C4] to-[#00C4CC] bg-clip-text text-transparent">
							Indonesia
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Kami memberdayakan individu, UMKM, dan startup untuk memiliki kehadiran digital profesional 
						melalui solusi website yang inovatif, solutif, mudah, dan terjangkau.
					</p>
				</div>

				{/* About Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					<div className="group relative">
						<div className="absolute inset-0 bg-gradient-to-r from-[#B019FF]/8 to-[#8000C4]/8 dark:from-[#B019FF]/25 dark:to-[#8000C4]/25 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
						<div className="relative p-8 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-gray-800/90 backdrop-blur-sm hover:border-[#B019FF]/60 dark:hover:border-[#B019FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#B019FF]/20 dark:hover:shadow-[#B019FF]/20 hover:-translate-y-1">
							<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B019FF] to-[#8000C4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
								<Rocket className="w-7 h-7 text-white" weight="fill" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
								Platform Terdepan
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								Menjadi yang terdepan dalam menghadirkan solusi digital berkualitas tinggi untuk bisnis Indonesia.
							</p>
						</div>
					</div>

					<div className="group relative">
						<div className="absolute inset-0 bg-gradient-to-r from-[#8000C4]/8 to-[#00C4CC]/8 dark:from-[#8000C4]/25 dark:to-[#00C4CC]/25 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
						<div className="relative p-8 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-gray-800/90 backdrop-blur-sm hover:border-[#8000C4]/60 dark:hover:border-[#8000C4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#8000C4]/20 dark:hover:shadow-[#8000C4]/20 hover:-translate-y-1">
							<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8000C4] to-[#00C4CC] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
								<Lightbulb className="w-7 h-7 text-white" weight="fill" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
								Solusi Inovatif
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								Menggunakan teknologi terkini dan pendekatan kreatif untuk memberikan solusi terbaik.
							</p>
						</div>
					</div>

					<div className="group relative">
						<div className="absolute inset-0 bg-gradient-to-r from-[#00C4CC]/8 to-[#B019FF]/8 dark:from-[#00C4CC]/25 dark:to-[#B019FF]/25 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
						<div className="relative p-8 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-gray-800/90 backdrop-blur-sm hover:border-[#00C4CC]/60 dark:hover:border-[#00C4CC]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00C4CC]/20 dark:hover:shadow-[#00C4CC]/20 hover:-translate-y-1">
							<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00C4CC] to-[#B019FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
								<Target className="w-7 h-7 text-white" weight="fill" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
								Memberdayakan UMKM
							</h3>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								Fokus pada pemberdayaan UMKM dan startup untuk berkembang di era digital.
							</p>
						</div>
					</div>
				</div>

				{/* About Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
					<div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/90 dark:from-[#B019FF]/15 dark:to-[#8000C4]/15 border border-purple-200/70 dark:border-[#B019FF]/25 hover:shadow-lg hover:shadow-[#B019FF]/20 transition-all duration-300 hover:-translate-y-1">
						<div className="text-3xl md:text-4xl font-bold text-[#B019FF] dark:text-[#B019FF] mb-2">50+</div>
						<div className="text-sm text-purple-700 dark:text-purple-200 font-medium">Proyek Selesai</div>
					</div>
					<div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/90 dark:from-[#8000C4]/15 dark:to-[#8000C4]/15 border border-blue-200/70 dark:border-[#8000C4]/25 hover:shadow-lg hover:shadow-[#8000C4]/20 transition-all duration-300 hover:-translate-y-1">
						<div className="text-3xl md:text-4xl font-bold text-[#8000C4] dark:text-[#8000C4] mb-2">30+</div>
						<div className="text-sm text-blue-700 dark:text-blue-200 font-medium">Klien Puas</div>
					</div>
					<div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/90 dark:from-[#00C4CC]/15 dark:to-[#00C4CC]/15 border border-teal-200/70 dark:border-[#00C4CC]/25 hover:shadow-lg hover:shadow-[#00C4CC]/20 transition-all duration-300 hover:-translate-y-1">
						<div className="text-3xl md:text-4xl font-bold text-[#00C4CC] dark:text-[#00C4CC] mb-2">100%</div>
						<div className="text-sm text-teal-700 dark:text-teal-200 font-medium">Responsif</div>
					</div>
					<div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/90 dark:from-[#B019FF]/15 dark:to-[#00C4CC]/15 border border-green-200/70 dark:border-[#B019FF]/25 hover:shadow-lg hover:shadow-[#B019FF]/20 transition-all duration-300 hover:-translate-y-1">
						<div className="text-3xl md:text-4xl font-bold text-[#B019FF] dark:text-[#B019FF] mb-2">24/7</div>
						<div className="text-sm text-green-700 dark:text-green-200 font-medium">Support</div>
					</div>
				</div>

				{/* About Values */}
				<div className="mb-16">
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
						Nilai-Nilai Kami
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200/70 dark:border-white/15 bg-white/90 dark:bg-gray-800/85 backdrop-blur-sm hover:border-[#B019FF]/60 dark:hover:border-[#B019FF]/40 transition-all duration-300">
							<div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-[#B019FF]/25 flex items-center justify-center flex-shrink-0">
								<CheckCircle className="w-5 h-5 text-[#B019FF] dark:text-[#B019FF]" weight="fill" />
							</div>
							<div>
								<h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kualitas Terjamin</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300">Setiap proyek dikerjakan dengan standar kualitas tertinggi</p>
							</div>
						</div>
						<div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200/70 dark:border-white/15 bg-white/90 dark:bg-gray-800/85 backdrop-blur-sm hover:border-[#8000C4]/60 dark:hover:border-[#8000C4]/40 transition-all duration-300">
							<div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-[#8000C4]/25 flex items-center justify-center flex-shrink-0">
								<Users className="w-5 h-5 text-[#8000C4] dark:text-[#8000C4]" weight="fill" />
							</div>
							<div>
								<h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fokus Pelanggan</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300">Kepuasan pelanggan adalah prioritas utama kami</p>
							</div>
						</div>
						<div className="flex items-start gap-4 p-6 rounded-xl border border-gray-200/70 dark:border-white/15 bg-white/90 dark:bg-gray-800/85 backdrop-blur-sm hover:border-[#00C4CC]/60 dark:hover:border-[#00C4CC]/40 transition-all duration-300">
							<div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-[#00C4CC]/25 flex items-center justify-center flex-shrink-0">
								<Globe className="w-5 h-5 text-[#00C4CC] dark:text-[#00C4CC]" weight="fill" />
							</div>
							<div>
								<h4 className="font-semibold text-gray-900 dark:text-white mb-2">Inovasi Berkelanjutan</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300">Terus berinovasi untuk memberikan solusi terbaik</p>
							</div>
						</div>
					</div>
				</div>

				{/* About CTA */}
				<div className="text-center">
					<CometCard className="inline-block">
						<Link href="/about" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 dark:from-[#B019FF] dark:via-[#8000C4] dark:to-[#00C4CC] hover:from-blue-700 hover:via-purple-700 hover:to-blue-600 dark:hover:from-[#8000C4] dark:hover:via-[#00C4CC] dark:hover:to-[#B019FF] text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-[#B019FF]/30 transform hover:-translate-y-1 border border-blue-200/30 dark:border-[#B019FF]/20">
							<span>Pelajari Lebih Lanjut</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
						</Link>
					</CometCard>
				</div>
			</section>
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
