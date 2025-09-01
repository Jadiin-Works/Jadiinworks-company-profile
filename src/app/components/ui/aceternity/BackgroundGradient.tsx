"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    if (!currentTarget) return;
    const rect = currentTarget.getBoundingClientRect();
    setMouseX(clientX - rect.left);
    setMouseY(clientY - rect.top);
  };

  return (
    <div
      className={cn(
        "relative h-full w-full bg-white dark:bg-black",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-20",
          className
        )}
        style={{
          background: animate
            ? `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(147, 51, 234, 0.1), transparent 40%)`
            : undefined,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
