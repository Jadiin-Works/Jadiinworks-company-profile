"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function SpotlightNewDemo() {
  return (
    <div className="h-screen w-full rounded-md flex items-center justify-center bg-white dark:bg-black antialiased bg-grid-black/[0.02] dark:bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 sm:p-6 md:p-4 max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-600 via-purple-400 to-blue-400 dark:from-purple-400 dark:via-purple-300 dark:to-blue-300">
            Hubungi <br /> Jadiin
        </h1>
        <p className="mt-3 sm:mt-4 font-normal text-sm sm:text-base dark:text-neutral-300 max-w-sm sm:max-w-lg text-center mx-auto">
            Siap membantu kebutuhan desain, pengembangan web, dan branding Anda. Hubungi kami untuk konsultasi gratis!
        </p>
      </div>
    </div>
  );
}
