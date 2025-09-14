"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";



const transition: any = {
  type: "tween",
  duration: 0.12,
  ease: "easeOut",
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.01 }}
        className="cursor-pointer text-black hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="backdrop-blur-3xl backdrop-saturate-200 backdrop-brightness-110 backdrop-contrast-125 bg-white/15 dark:bg-black/25 rounded-2xl overflow-hidden border border-white/30 dark:border-white/20 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 100%)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                  WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
                  backdropFilter: 'blur(24px) saturate(1.8)'
                }}
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full backdrop-blur-sm backdrop-saturate-125 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl flex items-center justify-between gap-2 sm:gap-4 px-3 py-2 sm:px-6 sm:py-4"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.06) 100%)',
        boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.15)',
        WebkitBackdropFilter: 'blur(8px) saturate(1.25)',
        backdropFilter: 'blur(8px) saturate(1.25)'
      }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex items-center gap-3 p-3 rounded-xl bg-transparent hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, className, ...rest }: any) => {
  return (
    <a
      {...rest}
      className={cn("text-neutral-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400", className)}
    >
      {children}
    </a>
  );
};
