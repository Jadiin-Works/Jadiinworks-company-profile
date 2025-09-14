"use client";

import Link from "next/link";
import { IconBrandWhatsapp, IconBrandInstagram, IconMail } from "@tabler/icons-react";

type FooterLink = {
  label: string;
  href: string;
};

const company: FooterLink[] = [
  { label: "Tentang Kami", href: "/portfolio" },
  { label: "Layanan", href: "/portfolio" },
  { label: "Kontak", href: "/portfolio" },
];

const products: FooterLink[] = [
  { label: "Web Development", href: "/portfolio/web-development" },
  { label: "Mobile Development", href: "/portfolio/mobile-development" },
  { label: "UI/UX Design", href: "/portfolio/ui-ux-design" },
  { label: "Automation Bot", href: "/portfolio/automation-bot" },
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
               Kami menghadirkan solusi digital yang powerful dan user-friendly. Fokus pada clean UX, performa optimal, dan dampak bisnis yang nyata.
             </p>
            <div className="flex items-center gap-3 pt-2">
              <Link href="mailto:jadiinworks@gmail.com" aria-label="Email" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <IconMail size={20} />
              </Link>
              <Link href="https://wa.me/6287775563789" aria-label="WhatsApp" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <IconBrandWhatsapp size={20} />
              </Link>
              <Link href="https://instagram.com/jadiinworks" aria-label="Instagram" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <IconBrandInstagram size={20} />
              </Link>
            </div>
          </div>

           <div>
             <h3 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">Perusahaan</h3>
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
             <h3 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">Layanan</h3>
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
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col items-center justify-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">© {year} Jadiinworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


