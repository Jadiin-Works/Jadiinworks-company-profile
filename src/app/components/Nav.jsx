"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { AnimatedThemeToggler } from "./AnimatedThemeToggler";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Nav() {
	const { theme } = useTheme();
	const [isDark, setIsDark] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [active, setActive] = useState("home");
	const [mounted, setMounted] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const sections = useMemo(() => (['home','services','portfolios','about','contact']), []);

	// Set mounted to true after component mounts
	useEffect(() => {
		setMounted(true);
	}, []);

	// Debug logo loading
	useEffect(() => {
		if (!mounted) return;
		
		const logoImg = document.querySelector('.jw-logo');
		if (logoImg) {
			console.log('Logo element found:', logoImg);
			console.log('Logo src:', logoImg.src);
			console.log('Logo display:', window.getComputedStyle(logoImg).display);
			console.log('Logo visibility:', window.getComputedStyle(logoImg).visibility);
			console.log('Logo opacity:', window.getComputedStyle(logoImg).opacity);
		} else {
			console.log('Logo element not found');
		}
	}, [mounted]);

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

	useEffect(() => {
		if (!mounted) return;
		
		// Set active state based on current pathname
		if (pathname === '/about') {
			setActive('about');
			return;
		}
		
		// Only handle scroll-based active state on the homepage
		if (pathname !== '/') return;
		
		const onScroll = () => {
			setScrolled(window.scrollY > 8);
			let current = active;
			for (const id of sections) {
				const el = document.getElementById(id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) { current = id; break; }
			}
			setActive(current);
		};
		
		// Call onScroll once to set initial state
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [sections, mounted, active, pathname]);

	useEffect(() => {
		const body = document.body;
		if (menuOpen) body.classList.add('no-scroll');
		else body.classList.remove('no-scroll');
		return () => body.classList.remove('no-scroll');
	}, [menuOpen]);

	const closeMenu = () => setMenuOpen(false);
	const linkClass = (id) => `jw-link${active===id? ' active' : ''}`;

	// Handle navigation with smooth scrolling (only for same page)
	const handleNavClick = (e, targetId) => {
		e.preventDefault();
		closeMenu();
		
		// Special handling for About Us - navigate to dedicated page
		if (targetId === 'about') {
			router.push('/about');
			return;
		}
		
		// If we're on the homepage, always use smooth scrolling to sections
		if (pathname === '/') {
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				const offsetTop = targetElement.offsetTop - 100; // Account for navbar height
				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth'
				});
			}
			return;
		}
		
		// If we're not on the homepage, navigate to homepage with section anchor
		router.push(`/#${targetId}`);
	};

	// Handle brand click to go to home
	const handleBrandClick = (e) => {
		e.preventDefault();
		closeMenu();
		
		// Always navigate to homepage
		router.push('/');
	};

	if (!mounted) {
		return null;
	}

	return (
		<nav className={`jw-nav ${scrolled ? 'scrolled' : ''}`}>
			<div className="jw-nav-inner">
				<div className="jw-brand" onClick={handleBrandClick}>
					<div className="jw-logo-container">
						<img 
							src="/Logomark.png" 
							alt="Jadiinworks" 
							className="jw-logo" 
							onLoad={(e) => {
								console.log('Logo loaded successfully:', e.target.src);
								e.target.style.display = 'block';
							}}
							onError={(e) => {
								console.log('Logo failed to load, showing fallback');
								e.target.style.display = 'none';
								e.target.nextSibling.style.display = 'block';
							}} 
						/>
						<svg className="jw-logo-fallback" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
							<defs>
								<linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" style={{stopColor: '#B019FF', stopOpacity: 1}} />
									<stop offset="100%" style={{stopColor: '#00C4CC', stopOpacity: 1}} />
								</linearGradient>
							</defs>
							<path d="M8 8C8 6.89543 8.89543 6 10 6H22C23.1046 6 24 6.89543 24 8V24C24 25.1046 23.1046 26 22 26H10C8.89543 26 8 25.1046 8 24V8Z" fill="url(#logoGradient)"/>
							<text x="16" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">J</text>
						</svg>
					</div>
					<span className="jw-brand-text">adiin</span>
				</div>
				<div className="jw-links">
					<a href="#home" className={linkClass('home')} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
					<a href="#services" className={linkClass('services')} onClick={(e) => handleNavClick(e, 'services')}>Services</a>
					<a href="#portfolios" className={linkClass('portfolios')} onClick={(e) => handleNavClick(e, 'portfolios')}>Portfolios</a>
					<a href="/about" className={linkClass('about')} onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
					<a href="#contact" className={linkClass('contact')} onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
				</div>
				<div className="jw-cta">
					{mounted && (
						<AnimatedThemeToggler className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition" />
					)}
					<button className={`jw-burger ${menuOpen ? 'open' : ''}`} aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="burger-lines"><span /></span>
					</button>
				</div>
			</div>

			{/* Mobile drawer */}
			<div className={`jw-drawer ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
				<div className="jw-drawer-panel" onClick={(e) => e.stopPropagation()}>
									<div className="jw-drawer-head">
					<div className="jw-brand" onClick={handleBrandClick}>
						<div className="jw-logo-container">
							<img 
								src="/Logomark.png" 
								alt="Jadiinworks" 
								className="jw-logo" 
								onLoad={(e) => {
									console.log('Drawer logo loaded successfully:', e.target.src);
									e.target.style.display = 'block';
								}}
								onError={(e) => {
									console.log('Drawer logo failed to load, showing fallback');
									e.target.style.display = 'none';
									e.target.nextSibling.style.display = 'block';
								}} 
							/>
							<svg className="jw-logo-fallback" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
								<defs>
									<linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" style={{stopColor: '#B019FF', stopOpacity: 1}} />
										<stop offset="100%" style={{stopColor: '#00C4CC', stopOpacity: 1}} />
									</linearGradient>
								</defs>
								<path d="M8 8C8 6.89543 8.89543 6 10 6H22C23.1046 6 24 6.89543 24 8V24C24 25.1046 23.1046 26 22 26H10C8.89543 26 8 25.1046 8 24V8Z" fill="url(#logoGradient2)"/>
								<text x="16" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">J</text>
							</svg>
						</div>
						<span className="jw-brand-text">adiin</span>
					</div>
					<button aria-label="Close menu" className={`jw-burger ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
						<span className="burger-lines"><span /></span>
					</button>
				</div>
					<div className="jw-drawer-links">
						<a href="#home" className="jw-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
						<a href="#services" className="jw-link" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
						<a href="#portfolios" className="jw-link" onClick={(e) => handleNavClick(e, 'portfolios')}>Portfolios</a>
						<a href="/about" className="jw-link" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
						<a href="#contact" className="jw-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
