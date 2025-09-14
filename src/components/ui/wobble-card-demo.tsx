"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Card 1: Awal Perjalanan */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 min-h-[400px] lg:min-h-[350px]"
        className=""
      >
        <div className="max-w-xs sm:max-w-lg relative z-10 flex items-center justify-center h-full px-4 text-center md:text-left md:justify-start">
          <div>
            <div className="flex items-center justify-center gap-2 mb-2 md:justify-start">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm text-white/80 font-medium">2023</span>
            </div>
            <h2 className="text-center text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white md:text-left">
              Dimulai dari <br />Sebuah Ide
            </h2>

            <p className="mt-4 text-center text-lg sm:text-xl text-neutral-200 sm:max-w-2xl md:text-left">
              Berawal dari passion untuk teknologi dan bertumbuh melalui solusi digital yang tepat guna.
            </p>
          </div>
        </div>
        {/* Right-aligned image - smaller and better positioned */}
        <div className="pointer-events-none absolute right-0 bottom-0 h-[80%] w-[45%] md:w-[40%] lg:w-[35%] hidden md:block">
          <Image
            src="/assets/person5.jpg"
            unoptimized
            width={1200}
            height={800}
            alt="Awal perjalanan Jadiinworks"
            className="h-full w-full object-cover rounded-l-2xl border border-white/10"
          />
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: "url('/noise.webp')",
              backgroundSize: "150%",
            }}
          />
        </div>
      </WobbleCard>

      {/* Card 2: Pertumbuhan */}
      <WobbleCard containerClassName="col-span-1 min-h-[400px] lg:min-h-[350px] bg-gradient-to-br from-purple-400 to-purple-600">
        <div className="flex items-center justify-center h-full px-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm text-white/80 font-medium">2024</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Ekspansi & <br />Inovasi
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-200">
              Mengembangkan portofolio layanan dan menguasai platform n8n untuk otomasi bisnis yang lebih efisien.
            </p>
          </div>
        </div>
      </WobbleCard>

      {/* Card 3: Masa Depan */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 min-h-[500px] lg:min-h-[400px] xl:min-h-[350px]">
        <div className="max-w-xs sm:max-w-lg relative z-10 flex items-center justify-center h-full px-4 text-center md:text-left md:justify-start">
          <div>
            <div className="flex items-center justify-center gap-2 mb-2 md:justify-start">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm text-white/80 font-medium">Masa Depan</span>
            </div>
            <h2 className="text-center text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white md:text-left">
              Menjadi Mitra Digital <br />Terpercaya Indonesia
            </h2>
            <p className="mt-4 text-center text-lg sm:text-xl text-neutral-200 sm:max-w-2xl md:text-left">
              Berkomitmen untuk terus berinovasi dan membantu lebih banyak bisnis di Indonesia mencapai potensi digital mereka melalui teknologi yang tepat sasaran.
            </p>
          </div>
        </div>
        {/* Right-aligned image - smaller and better positioned */}
        <div className="pointer-events-none absolute right-0 bottom-0 h-[80%] w-[50%] md:w-[45%] lg:w-[40%] hidden md:block">
          <Image
            src="/assets/person6.jpg"
            unoptimized
            width={1200}
            height={800}
            alt="Masa depan Jadiinworks"
            className="h-full w-full object-cover rounded-l-2xl border border-white/10"
          />
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: "url('/noise.webp')",
              backgroundSize: "150%",
            }}
          />
        </div>
      </WobbleCard>
    </div>
  );
}
