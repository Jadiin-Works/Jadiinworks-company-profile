"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-12" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

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
      <div className="mx-auto max-w-2xl px-4">
        <Menu setActive={setActive}>
          <a href="/" className="flex items-center gap-2">
            <img
              src="/Assets/Logomark.png"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          </a>

          <div className="flex-1 flex justify-center gap-4">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 px-3 py-2 text-sm font-medium text-black dark:text-white transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
              boxShadow: '0 2px 8px 0 rgba(52, 57, 131, 0.15)',
            }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
          </button>
        </Menu>
      </div>
    </div>
  );
}
