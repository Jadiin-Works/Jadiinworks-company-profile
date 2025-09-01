"use client";

import { useTheme } from "../components/ThemeProvider";
import ClientLayout from "../components/ClientLayout";
import { useIsDark } from "../components/useIsDark";
import { Spotlight } from '../components/ui/spotlight';
import ServiceCategories from '../components/ui/service-categories';
import ThemeTestCard from '../components/ui/ThemeTestCard';
import TailwindThemeCard, { TailwindDarkModeExample } from '../components/ui/TailwindThemeCard';
import Nav from '../components/Nav';

function PortfolioPageContent() {
  const { theme } = useTheme();
  const { isDark, mounted } = useIsDark();

  const colors = {
    black: "#1A1A1A",
    white: "#F5F5F7",
  };

  if (!mounted) {
    return null;
  }

  return (
    <ClientLayout>
      <Nav />
      <main
        className="w-full min-h-screen transition-colors duration-300 dark:bg-black bg-white"
        
      >
        {/* New Hero Section with Spotlight Component */}
        <Spotlight/>

        

        {/* Test Cards Section */}
        <div className="py-10 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 text-center ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Theme Testing Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ThemeTestCard />
              <TailwindThemeCard />
              <TailwindDarkModeExample />
            </div>
          </div>
        </div>

        {/* Service Categories Section */}
        <ServiceCategories isDark={isDark} />
      </main>
    </ClientLayout>
  );
}

export default PortfolioPageContent;

