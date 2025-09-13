"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";

type HorizontalRevealProps = {
  className?: string;
  delay?: number;
  from?: "left" | "right";
  children: React.ReactNode;
};

function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastYRef = useRef(0);
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

export default function HorizontalReveal({ className, delay = 0, from = "left", children }: HorizontalRevealProps) {
  const controls = useAnimation();
  const direction = useScrollDirection();
  const initialX = from === "left" ? -32 : 32;
  const leaveX = from === "left" ? -18 : 18;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      onViewportLeave={() => {
        if (direction === "up") controls.start({ opacity: 0, x: leaveX });
      }}
      animate={controls}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (delay || 0) / 1000 }}
    >
      {children}
    </motion.div>
  );
}


