"use client";

import { useTheme } from "./components/ThemeProvider";
import { useEffect, useMemo, useState } from "react";

export default function RootPage() {
	const { theme, setTheme } = useTheme();
	const isDark = (theme === "dark") || (theme === "system" && typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [active, setActive] = useState("home");
	const sections = useMemo(() => (["home","services","portfolios","about","contact"]), []);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 8);
			let current = "home";
			for (const id of sections) {
				const el = document.getElementById(id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) { current = id; break; }
			}
			setActive(current);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [sections]);

	useEffect(() => {
		const body = document.body;
		if (menuOpen) body.classList.add('no-scroll');
		else body.classList.remove('no-scroll');
		return () => body.classList.remove('no-scroll');
	}, [menuOpen]);

	const handleToggle = () => {
		if (theme === "system") {
			setTheme(isDark ? "light" : "dark");
			return;
		}
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const closeMenu = () => setMenuOpen(false);

	const linkClass = (id) => `jw-link${active===id? ' text-blueGreen' : ''}`;

	return (
		<main className={`w-full min-h-screen pt-20 ${isDark ? '' : ''}`} style={{ backgroundColor: isDark ? "#1A1A1A" : "#ffffff", color: isDark ? "#ffffff" : "#171717" }}>
			{/* Navbar */}
			<nav className={`jw-nav ${scrolled ? 'scrolled' : ''}`}>
				<div className="jw-nav-inner">
					<div className="jw-brand">Jadiinworks</div>
					<div className="jw-links">
						<a href="#home" className={linkClass('home')}>Home</a>
						<a href="#services" className={linkClass('services')}>Services</a>
						<a href="#portfolios" className={linkClass('portfolios')}>Portfolios</a>
						<a href="#about" className={linkClass('about')}>About Us</a>
						<a href="#contact" className={linkClass('contact')}>Contact Us</a>
					</div>
					<div className="jw-cta">
						<button onClick={handleToggle} aria-label="Toggle theme" className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition" title="Toggle theme">
							{(theme === 'dark' || (theme === 'system' && isDark)) ? (
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" />
								</svg>
							) : (
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
									<path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78 18.36 18.36M18.36 5.64 19.78 4.22M4.22 19.78 5.64 18.36" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
								</svg>
							)}
						</button>
						<button className={`jw-burger ${menuOpen ? 'open' : ''}`} aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
							<span className="burger-lines"><span /></span>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile drawer */}
			<div className={`jw-drawer ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
				<div className="jw-drawer-panel" onClick={(e) => e.stopPropagation()}>
					<div className="jw-drawer-head">
						<div className="jw-drawer-title">Menu</div>
						<button aria-label="Close menu" className={`jw-burger ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
							<span className="burger-lines"><span /></span>
						</button>
					</div>
					<div className="jw-drawer-links">
						<a href="#home" className="jw-link" onClick={closeMenu}>Home</a>
						<a href="#services" className="jw-link" onClick={closeMenu}>Services</a>
						<a href="#portfolios" className="jw-link" onClick={closeMenu}>Portfolios</a>
						<a href="#about" className="jw-link" onClick={closeMenu}>About Us</a>
						<a href="#contact" className="jw-link" onClick={closeMenu}>Contact Us</a>
					</div>
				</div>
			</div>

			{/* Sections anchors for smooth navigation */}
			<section id="home" className="mx-auto max-w-4xl px-6 py-24">
				<h1 className="text-3xl font-extrabold tracking-tight">Welcome to Jadiinworks</h1>
				<p className="mt-2 opacity-80">Company profile website with modern theme switching.</p>
			</section>
			<section id="services" className="mx-auto max-w-4xl px-6 py-24 opacity-80">Services section</section>
			<section id="portfolios" className="mx-auto max-w-4xl px-6 py-24 opacity-80">Portfolios section</section>
			<section id="about" className="mx-auto max-w-4xl px-6 py-24 opacity-80">About us section</section>
			<section id="contact" className="mx-auto max-w-4xl px-6 py-24 opacity-80">Contact us section</section>
		</main>
	);
}
