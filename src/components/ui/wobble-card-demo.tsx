"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-purple-400 via-purple-700 to-purple-900 min-h-[400px] lg:min-h-[350px]"
        className=""
      >
        <div className="max-w-xs sm:max-w-lg">
          <h2 className="text-left text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>

          <p className="mt-4 text-left text-lg sm:text-xl text-neutral-200 sm:max-w-2xl">
            With over 100,000 monthly active bot <br /> users, Gippity AI is the most popular <br />AI platform for 
            developers.
          </p>
        </div>
        {/* Right-aligned mock UI image (online) */}
        <div className="pointer-events-none absolute right-[-1%] bottom-[-28%] h-[64%] w-[90%] md:w-[70%] lg:w-[50%] lg:h-[75%]">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
            unoptimized
            width={1200}
            height={800}
            alt="Dashboard preview"
            className="h-full w-full object-cover rounded-l-2xl border border-white/10"
          />
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: "url('/noise.webp')",
              backgroundSize: "150%",
            }}
          />
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[400px] lg:min-h-[350px]">
        <div className="flex items-center justify-center h-full px-4 text-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-200">
              If someone yells "stop!", goes limp, or taps out, the fight is over.
            </p>
          </div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-purple-400 via-purple-700 to-purple-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
      <div className="max-w-xs sm:max-w-lg">
          <h2 className="text-left text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-lg sm:text-xl text-neutral-200 sm:max-w-2xl">
            With over 100,000 monthly active bot <br /> users, Gippity AI is the most popular <br />AI platform for 
            developers.
          </p>
        </div>
        <div className="pointer-events-none absolute right-[-1%] bottom-[-35%] h-[84%] w-[86%] md:w-[50%] lg:w-[50%] lg:h-[99%]">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
            unoptimized
            width={1200}
            height={800}
            alt="Dashboard preview"
            className="h-full w-full object-cover rounded-l-2xl border border-white/10"
          />
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
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
