"use client";

import React from "react";
import { useIsDark } from "../useIsDark";

export default function TailwindThemeCard() {
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
    <div className="
      p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 shadow-lg
      bg-white dark:bg-gray-800 
      border-gray-200 dark:border-gray-600 
      text-gray-900 dark:text-white
      shadow-gray-200/25 dark:shadow-gray-800/25
    ">
      <div className="flex items-center gap-3 mb-4">
        <div className="
          w-3 h-3 rounded-full
          bg-red-500 dark:bg-blue-500
        "></div>
        <h3 className="text-lg font-semibold">
          {isDark ? '🌙 Tailwind Dark Mode' : '☀️ Tailwind Light Mode'}
        </h3>
      </div>
      <p className="text-sm opacity-90">
        Card ini menggunakan Tailwind CSS untuk theme styling!
      </p>
      <div className="mt-4 p-3 rounded bg-gray-100 dark:bg-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-300">
          Background: {isDark ? 'Gray-800' : 'White'}
        </p>
      </div>
    </div>
  );
}

// Contoh komponen dengan Tailwind dark mode classes
export function TailwindDarkModeExample() {
  return (
    <div className="
      p-6 rounded-lg border-2 transition-colors duration-300
      bg-white dark:bg-gray-900
      border-gray-200 dark:border-gray-700
      text-gray-900 dark:text-white
      hover:bg-gray-50 dark:hover:bg-gray-800
    ">
      <h3 className="text-xl font-bold mb-4">
        Tailwind Dark Mode Classes
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Gunakan class <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">dark:</code> 
        untuk styling dark mode dengan Tailwind CSS.
      </p>
      
      <div className="space-y-2">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
          Blue variant
        </div>
        <div className="p-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
          Green variant
        </div>
        <div className="p-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
          Purple variant
        </div>
      </div>
    </div>
  );
}
