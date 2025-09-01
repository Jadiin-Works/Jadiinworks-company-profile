"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  className,
  id,
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  className?: string;
  id?: string;
}) => {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const lastTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate particles
    const newParticles = Array.from({ length: particleDensity || 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * (maxSize || 4 - minSize || 1) + (minSize || 1),
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));

    setParticles(newParticles);

    const animate = (currentTime: number) => {
      if (lastTime.current === 0) lastTime.current = currentTime;
      const deltaTime = currentTime - lastTime.current;
      lastTime.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        const time = (currentTime / 1000 + particle.delay) % particle.duration;
        const progress = time / particle.duration;

        const x = particle.x + Math.sin(progress * Math.PI * 2) * 50;
        const y = particle.y + Math.cos(progress * Math.PI * 2) * 50;
        const opacity = Math.sin(progress * Math.PI);

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particleColor || "#ffffff";
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particleDensity, maxSize, minSize, particleColor]);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          background: background || "transparent",
        }}
        id={id}
      />
    </div>
  );
};
