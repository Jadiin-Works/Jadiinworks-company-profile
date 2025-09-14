import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Jadiinworks",
  description: "Digital solutions that matter - Web Development, Mobile Apps, UI/UX Design, Automation Bot",
    icons: {
      icon: '/Assets/Logomark.png',
      shortcut: '/Assets/Logomark.png',
      apple: '/Assets/Logomark.png',
    },
};

export default function RootLayout({ children }) {
  const initTheme = `
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null (system)
    const isDark = saved ? saved === 'dark' : preferDark;
    document.documentElement.classList.toggle('dark', isDark);
  `;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
        <link rel="icon" href="/Assets/Logomark.png" type="image/png" />
        <style dangerouslySetInnerHTML={{
          __html: `
            link[rel="icon"] {
              object-fit: contain !important;
              width: 32px !important;
              height: 32px !important;
            }
          `
        }} />
      </head>
      <body className={`${poppins.variable} font-[var(--font-poppins)] antialiased bg-white text-black dark:bg-black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
