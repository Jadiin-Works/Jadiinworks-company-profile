"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IconMoon, IconSun, IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const currentTitle = React.useMemo(() => {
    if (!pathname) return "";
    if (pathname === "/") return "Beranda";
    if (pathname.startsWith("/layanan")) return "Layanan";
    if (pathname.startsWith("/portfolio")) return "Portfolio";
    if (pathname.startsWith("/tentangkami")) return "Tentang Kami";
    if (pathname.startsWith("/kontak")) return "Kontak";
    return "";
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : preferDark;
    root.classList.toggle("dark", initial);
    setIsDark(initial);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 z-50", className)}
    >
      <div className="mx-auto max-w-[92vw] sm:max-w-2xl px-2 sm:px-4">
        <Menu setActive={setActive}>
          <a href="/" className="flex items-center gap-2">
            <img
              src="/Assets/Logomark.png"
              alt="Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
            />
          </a>

          {/* Mobile current page label */}
          {currentTitle && (
            <div className="sm:hidden pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-medium text-neutral-800 dark:text-neutral-200">
              {currentTitle}
            </div>
          )}

          {/* Desktop links */}
          <div className="hidden sm:flex flex-1 justify-center gap-4 text-sm">
            <HoveredLink href="/" className={isActive("/") ? "underline underline-offset-4 decoration-neutral-900 dark:decoration-white" : undefined}>Beranda</HoveredLink>
            <HoveredLink href="/layanan" className={isActive("/layanan") ? "underline underline-offset-4 decoration-neutral-900 dark:decoration-white" : undefined}>Layanan</HoveredLink>
            <HoveredLink href="/portfolio" className={isActive("/portfolio") ? "underline underline-offset-4 decoration-neutral-900 dark:decoration-white" : undefined}>Portfolio</HoveredLink>
            <HoveredLink href="/tentangkami" className={isActive("/tentangkami") ? "underline underline-offset-4 decoration-neutral-900 dark:decoration-white" : undefined}>Tentang Kami</HoveredLink>
            <HoveredLink href="/kontak" className={isActive("/kontak") ? "underline underline-offset-4 decoration-neutral-900 dark:decoration-white" : undefined}>Kontak</HoveredLink>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden sm:inline-flex items-center gap-2 rounded-full backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 px-3 py-2 text-sm font-medium text-black dark:text-white transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                boxShadow: '0 2px 8px 0 rgba(52, 57, 131, 0.15)',
              }}
              aria-label="Toggle dark mode"
            >
              {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
              <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-black dark:text-white hover:bg-white/10 dark:hover:bg-white/10"
              aria-label="Toggle menu"
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              {isMobileOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </button>
          </div>
        </Menu>

        {/* Mobile dropdown */}
        {isMobileOpen && (
          <div className="sm:hidden mt-2 rounded-2xl border border-white/15 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-2xl p-3">
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/" className={cn("px-3 py-2 rounded-lg hover:bg-white/10", isActive("/") && "underline underline-offset-4 decoration-neutral-900 dark:decoration-white")}>Beranda</a>
              <a href="/layanan" className={cn("px-3 py-2 rounded-lg hover:bg-white/10", isActive("/layanan") && "underline underline-offset-4 decoration-neutral-900 dark:decoration-white")}>Layanan</a>
              <a href="/portfolio" className={cn("px-3 py-2 rounded-lg hover:bg-white/10", isActive("/portfolio") && "underline underline-offset-4 decoration-neutral-900 dark:decoration-white")}>Portfolio</a>
              <a href="/tentangkami" className={cn("px-3 py-2 rounded-lg hover:bg-white/10", isActive("/tentangkami") && "underline underline-offset-4 decoration-neutral-900 dark:decoration-white")}>Tentang Kami</a>
              <a href="/kontak" className={cn("px-3 py-2 rounded-lg hover:bg-white/10", isActive("/kontak") && "underline underline-offset-4 decoration-neutral-900 dark:decoration-white")}>Kontak</a>
              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 dark:border-white/10 px-3 py-2 text-sm text-black dark:text-white bg-white/20 dark:bg-black/20"
              >
                {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
                <span>{isDark ? "Light" : "Dark"}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
