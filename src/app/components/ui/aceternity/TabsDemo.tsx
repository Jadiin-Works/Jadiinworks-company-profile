"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const TabsDemo = ({
  tabs,
  className,
  onTabChange,
}: {
  tabs: {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
  }[];
  className?: string;
  onTabChange?: (value: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setActiveTab(tab);
              onTabChange?.(tab.value);
            }}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              activeTab.value === tab.value
                ? "bg-white text-black shadow-lg dark:bg-gray-800 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            )}
          >
            <span className="relative z-10">{tab.title}</span>
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-white dark:bg-gray-800"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {typeof activeTab.content === "string" ? (
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {activeTab.content}
              </p>
            ) : (
              activeTab.content
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
