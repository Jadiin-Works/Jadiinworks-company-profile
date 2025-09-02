import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Jadiinworks",
  description: "Using Poppins font with next/font and Tailwind",
};

export default function RootLayout({ children }) {
  const initTheme = `
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null (system)
    const isDark = saved ? saved === 'dark' : preferDark;
    document.documentElement.classList.toggle('dark', isDark);
  `;
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
      </head>
      <body className={`${poppins.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
