"use client";

import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

type FooterLink = {
  label: string;
  href: string;
};

const company: FooterLink[] = [
  { label: "About", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const products: FooterLink[] = [
  { label: "Web Development", href: "/portfolio/web-development" },
  { label: "Automation", href: "/portfolio/automation-bot" },
];

export default function Footer({ bgColor = 'bg-white' }: { bgColor?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={`w-full border-t border-neutral-200 dark:border-neutral-800 ${bgColor} text-neutral-700 dark:text-neutral-300`}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/Assets/Logomark.png"
                alt="Jadiinworks Logomark"
                className="inline-block w-6"
              />
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Jadiin Works</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              We craft fast, modern, and scalable digital products. Focused on clean UX, performance, and business impact.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link href="mailto:hello@jadiinworks.com" aria-label="Email" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <IconMail size={20} />
              </Link>
              <Link href="https://github.com" aria-label="GitHub" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <IconBrandGithub size={20} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <IconBrandLinkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">Company</h3>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">Products</h3>
            <ul className="space-y-2 text-sm">
              {products.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">© {year} Jadiinworks. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100">Privacy</Link>
            <span className="h-3 w-px bg-neutral-300 dark:bg-neutral-700" />
            <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-neutral-100">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


