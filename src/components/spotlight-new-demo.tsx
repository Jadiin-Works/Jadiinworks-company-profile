"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function SpotlightNewDemo() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-white dark:bg-black antialiased bg-grid-black/[0.02] dark:bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-600 via-purple-400 to-blue-400 dark:from-purple-400 dark:via-purple-300 dark:to-blue-300">
          Jadiin <br /> Portfolio
        </h1>
        <p className="mt-4 font-normal text-base dark:text-neutral-300 max-w-lg text-center mx-auto">
          Transformasi ide menjadi solusi digital yang powerful dan user-friendly dengan teknologi modern terdepan.
        </p>
        <div className="mt-8 flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Lihat Selengkapnya</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
