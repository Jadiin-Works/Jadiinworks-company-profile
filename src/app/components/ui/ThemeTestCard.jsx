"use client";

import React from "react";
import { useIsDark } from "../useIsDark";

export default function ThemeTestCard() {
  const { isDark, mounted } = useIsDark();

  if (!mounted) {
    return (
      <div className="p-6 rounded-lg border-2 border-gray-300 bg-gray-100 animate-pulse">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      </div>
    );
  }

  return (
    <div className={`
      p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 shadow-lg
      ${isDark 
        ? 'bg-blue-600 border-blue-400 text-white shadow-blue-500/25' 
        : 'bg-red-500 border-red-400 text-white shadow-red-500/25'
      }
    `}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`
          w-3 h-3 rounded-full
          ${isDark ? 'bg-blue-300' : 'bg-red-300'}
        `}></div>
        <h3 className="text-lg font-semibold">
          {isDark ? '🌙 Dark Mode Card' : '☀️ Light Mode Card'}
        </h3>
      </div>
      <p className="text-sm opacity-90">
        Warna card ini akan berubah sesuai theme yang aktif!
      </p>
      <div className="mt-4 p-3 rounded bg-opacity-20 bg-white">
        <p className="text-xs">
          Background: {isDark ? 'Biru' : 'Merah'}
        </p>
      </div>
    </div>
  );
}
