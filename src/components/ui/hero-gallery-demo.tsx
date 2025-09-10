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

const HeroDemo2 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid variant="fourCells" className="sticky left-0 top-0 h-screen w-full p-4">
        {IMAGES.filter((_, i) => i <= 3).map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <Image
              className="size-full object-cover object-center"
              width={500}
              height={500}
              src={imageUrl}
              alt={`Project showcase ${index + 1}`}
            />
          </BentoCell>
        ))}
      </BentoGrid>
      
    </ContainerScroll>
  )
}

const HeroDemo3 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-neutral-900 dark:bg-black text-neutral-100">
      <BentoGrid variant="threeCells" className="sticky left-0 top-0 h-screen w-full p-4">
        {IMAGES.filter((_, i) => i <= 2).map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <Image
              className="size-full object-cover object-center"
              width={500}
              height={500}
              src={imageUrl}
              alt={`Project showcase ${index + 1}`}
            />
          </BentoCell>
        ))}
      </BentoGrid>
      
    </ContainerScroll>
  )
}

export { HeroDemo1, HeroDemo2, HeroDemo3 }
