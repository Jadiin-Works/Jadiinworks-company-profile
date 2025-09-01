import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useRef } from "react";
import { motion } from "motion/react";
import { useIsDark } from "../useIsDark";

export default function ServiceCategories({ isDark: propIsDark = false }: { isDark?: boolean }) {
  const { isDark, mounted } = useIsDark();

  // Use propIsDark as fallback if hook is not available
  const effectiveIsDark = mounted ? isDark : propIsDark;

  const features = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies.",
      skeleton: <SkeletonOne isDark={effectiveIsDark} />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-white/10",
    },
    {
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps for iOS and Android with native performance.",
      skeleton: <SkeletonTwo isDark={effectiveIsDark} />,
      className: "border-b col-span-1 lg:col-span-2 border-white/10",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create engaging and intuitive experiences.",
      skeleton: <SkeletonThree isDark={effectiveIsDark} />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r border-white/10",
    },
    {
      title: "Automation Bot",
      description:
        "Intelligent chatbots and automation solutions to streamline your business processes.",
      skeleton: <SkeletonFour isDark={effectiveIsDark} />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className={`text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium mb-6 ${
          effectiveIsDark ? 'text-white' : 'text-black'
        }`}>
          Our Service Categories
        </h4>

        <p className={`text-sm lg:text-base max-w-2xl my-4 mx-auto text-center font-normal ${
          effectiveIsDark ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          Choose from our specialized service categories to find the perfect solution for your business needs.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-2xl overflow-hidden"
          style={{ 
            background: effectiveIsDark 
              ? "rgba(255, 255, 255, 0.05)" 
              : "rgba(0, 0, 0, 0.02)",
            borderColor: effectiveIsDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
          }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className} isDark={effectiveIsDark}>
              <FeatureTitle isDark={effectiveIsDark}>{feature.title}</FeatureTitle>
              <FeatureDescription isDark={effectiveIsDark}>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
  isDark,
}: {
  children?: React.ReactNode;
  className?: string;
  isDark?: boolean;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children, isDark }: { children?: React.ReactNode; isDark?: boolean }) => {
  return (
    <p className={`max-w-5xl mx-auto text-left tracking-tight text-xl md:text-2xl md:leading-snug font-semibold mb-3 ${
      isDark ? 'text-white' : 'text-black'
    }`}>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children, isDark }: { children?: React.ReactNode; isDark?: boolean }) => {
  return (
    <p className={`text-sm md:text-base max-w-4xl text-left mx-auto text-left max-w-sm mx-0 md:text-sm my-2 mb-4 ${
      isDark ? 'text-neutral-300' : 'text-neutral-600'
    }`}>
      {children}
    </p>
  );
};

export const SkeletonOne = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <div className="relative h-64 lg:h-80 w-full">
      <div className={`w-full h-full mx-auto shadow-lg group rounded-xl overflow-hidden ${
        isDark ? 'bg-transparent border border-white/10' : 'bg-transparent border border-neutral-200'
      }`}>
        <div className="flex flex-1 w-full h-full flex-col">
          <img
            src="/assets/webdev.jpg"
            alt="Web Development"
            width={800}
            height={800}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className={`absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t ${
        isDark ? 'from-black/20' : 'from-white/20'
      } to-transparent w-full pointer-events-none`} />
    </div>
  );
};

export const SkeletonTwo = ({ isDark = false }: { isDark?: boolean }) => {
  const images = [
    "/assets/mobiledev.png",
    "/assets/mobiledev.png",
    "/assets/mobiledev.png",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative h-64 lg:h-80 w-full overflow-hidden">
      <div className="flex flex-row -ml-8">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 15 - 7.5,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className={`rounded-xl -mr-3 mt-2 p-1 border shrink-0 overflow-hidden shadow-md ${
              isDark 
                ? 'bg-transparent border-white/10' 
                : 'bg-transparent border-neutral-200'
            }`}
          >
            <img
              src={image}
              alt="Mobile Development"
              width="300"
              height="300"
              className="rounded-lg h-16 w-16 md:h-24 md:w-24 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row mt-4">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 15 - 7.5,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className={`rounded-xl -mr-3 mt-2 p-1 border shrink-0 overflow-hidden shadow-md ${
              isDark 
                ? 'bg-transparent border-white/10' 
                : 'bg-transparent border-neutral-200'
            }`}
          >
            <img
              src={image}
              alt="Mobile Development"
              width="300"
              height="300"
              className="rounded-lg h-16 w-16 md:h-24 md:w-24 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-transparent to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-transparent to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <div className="relative h-64 lg:h-80 w-full">
      <div className={`w-full h-full mx-auto shadow-lg group rounded-xl overflow-hidden ${
        isDark ? 'bg-transparent border border-white/10' : 'bg-transparent border border-neutral-200'
      }`}>
        <div className="flex flex-1 w-full h-full flex-col relative">
          <img
            src="/assets/uiuxdesign.png"
            alt="UI/UX Design"
            width={800}
            height={800}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className={`absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t ${
        isDark ? 'from-black/20' : 'from-white/20'
      } to-transparent w-full pointer-events-none`} />
    </div>
  );
};

export const SkeletonFour = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <div className="relative h-64 lg:h-80 w-full">
      <div className={`w-full h-full mx-auto shadow-lg group rounded-xl overflow-hidden flex items-center justify-center ${
        isDark ? 'bg-transparent border border-white/10' : 'bg-transparent border border-neutral-200'
      }`}>
        <Globe className="w-full h-full" />
      </div>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
