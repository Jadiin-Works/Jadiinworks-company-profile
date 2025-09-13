"use client"

import Image from "next/image"
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"

const IMAGES = [
  "/Assets/porto-web/but1.png",
  "/Assets/porto-web/jadingetop.png",
  "/Assets/porto-web/crypo1.png",
  "/Assets/porto-web/absensy3.png",
  "/Assets/porto-web/kwt1.png",
]

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>
    </ContainerScroll>
  )
}


export { HeroDemo1}
