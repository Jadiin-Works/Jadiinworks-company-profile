"use client"

import Image from "next/image"
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"
import absensy from "@/../public/assets/porto-mobile/absensy2.png";
import solusikita1 from "@/../public/assets/porto-mobile/SolusiKita1.png";
import laporkuy3 from "@/../public/assets/porto-mobile/laporkuy3.png";
import solusikita2 from "@/../public/assets/porto-mobile/Solusikita2.png";
import kolabcenter1 from "@/../public/assets/porto-mobile/kolabcenter1.png";

const MOBILE_IMAGES = [
  absensy,
  solusikita1,
  laporkuy3,
  solusikita2,
  kolabcenter1,
]

const MobileGalleryDemo = () => {
  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {MOBILE_IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <Image
              className="size-full object-cover object-center"
              src={imageUrl}
              alt={`Mobile app showcase ${index + 1}`}
            />
          </BentoCell>
        ))}
      </BentoGrid>
    </ContainerScroll>
  )
}

export { MobileGalleryDemo }
