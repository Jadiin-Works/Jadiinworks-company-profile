"use client"

import Image from "next/image"
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"

const UIUX_IMAGES = [
  "/Assets/porto-uiux/ecommerce1.png",
  "/Assets/porto-uiux/dashboard1.png",
  "/Assets/porto-uiux/brand1.png",
  "/Assets/porto-uiux/ecommerce2.png",
  "/Assets/porto-uiux/dashboard2.png",
]

const UIUXGalleryDemo = () => {
  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {UIUX_IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt={`UI/UX Design showcase ${index + 1}`}
            />
          </BentoCell>
        ))}
      </BentoGrid>
    </ContainerScroll>
  )
}

export { UIUXGalleryDemo }
