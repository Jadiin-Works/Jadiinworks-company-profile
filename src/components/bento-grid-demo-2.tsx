"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";

export default function BentoGridSecondDemo() {
  const router = useRouter();

  const handleItemClick = (slug: string) => {
    router.push(`/portfolio/${slug}`);
  };

  return (
    <BentoGrid className="max-w-7xl mx-auto min-h-screen md:auto-rows-[35rem] md:grid-cols-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          onClick={() => handleItemClick(item.slug)}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
  </div>
);

export const LottieSkeleton = ({ animationDataCustom = null}) => {
  const [animationData, setAnimationData] = useState<any>(null);

  // ref ke instance Lottie dengan typing benar
  const lottieRef = useRef<import("lottie-react").LottieRefCurrentProps>(null);
  const dirRef = useRef<1 | -1>(1);

  useEffect(() => {
    fetch("/animations/hero-webdev.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  const handleComplete = () => {
    // toggle arah tiap kali animasi selesai
    dirRef.current = dirRef.current === 1 ? -1 : 1;
    lottieRef.current?.setDirection(dirRef.current);
    lottieRef.current?.play();
  };

  if (!animationData && !animationDataCustom) {
    return (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-neutral-500">Loading...</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <Lottie
        lottieRef={lottieRef}             // ref ke instance
        animationData={animationDataCustom || animationData}
        loop={false}                      // loop manual
        autoplay
        onComplete={handleComplete}       // setiap selesai → balik arah
        className="w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

const MobileLottieSkeleton = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/hero-mobiledev.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  if (!animationData) {
    return (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-neutral-500">Loading...</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <Lottie
        animationData={animationData}
        loop={true}                       // loop biasa tanpa reverse
        autoplay
        className="w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

const IframeSkeleton = ({ src, title = "Lottie Animation" }: { src: string; title?: string }) => {
  return (
    <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-[#303030]">
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0 pointer-events-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

const UiuxLottieSkeleton = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/hero-uiux.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  if (!animationData) {
    return (
      <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-neutral-500">Loading...</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay
        className="w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

const items = [
  {
    title: "Web Development",
    description: "Transformasi ide menjadi website yang scalable, cepat, dan user-friendly.",
    header: <LottieSkeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    slug: "web-development",
  },
  {
    title: "Mobile Development",
    description: "Memberikan pengalaman mobile yang mulus, cepat, dan modern.",
    header: <MobileLottieSkeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    slug: "mobile-development",
  },
  {
    title: "Automation Bot",
    description: "Solusi otomatisasi yang menghemat waktu dan meningkatkan produktivitas.",
    header: (
      <IframeSkeleton src="https://lottie.host/embed/f3944d37-d6f9-4e13-94a2-4031e15d0243/vdtNCF6cPP.lottie" />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    slug: "automation-bot",
  },
  {
    title: "UI/UX Design",
    description:
      "Desain yang menghubungkan kreativitas dan fungsi untuk hasil maksimal.",
    header: <UiuxLottieSkeleton />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    slug: "ui-ux-design",
  },
];
