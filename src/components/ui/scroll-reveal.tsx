"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";

type ScrollRevealProps = {
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

// Detect global scroll direction
function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastYRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const last = lastYRef.current;
      if (y > last + 2) setDirection("down");
      else if (y < last - 2) setDirection("up");
      lastYRef.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}

export default function ScrollReveal({ className, delay = 0, children }: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const direction = useScrollDirection();

  // Initial position based on current direction
  const initialY = direction === "down" ? 20 : -16;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportLeave={() => {
        // If user scrolls up, subtly hide upwards to make the flow dynamic
        if (direction === "up") controls.start({ opacity: 0, y: -12 });
      }}
      animate={controls}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (delay || 0) / 1000 }}
    >
      {children}
    </motion.div>
  );
}


