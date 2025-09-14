"use client"

import Image from "next/image"
import {
  BentoCell,
  BentoGrid,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"

const MOBILE_IMAGES = [
  "/assets/porto-mobile/absensy2.png",
  "/assets/porto-mobile/solusikita1.png",
  "/assets/porto-mobile/laporkuy3.png",
  "/assets/porto-mobile/solusikita2.png",
  "/assets/porto-mobile/kolabcenter1.png",
]

const MobileGalleryDemo = () => {
  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {MOBILE_IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <Image
              width={2000}
              height={2000}
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
