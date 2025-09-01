"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const AnimatedTooltip = ({
  items,
  children,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  children: React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2"
              >
                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg dark:bg-gray-800 dark:text-white">
                  <div className="text-center">
                    <div className="font-bold text-black dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {item.designation}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white dark:bg-gray-800" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {children}
        </div>
      ))}
    </>
  );
};
