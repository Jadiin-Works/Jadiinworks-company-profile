"use client"

import Image from "next/image"
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"
import But from "@/../public/assets/porto-web/but1.png"
import Jadingetop from "@/../public/assets/porto-web/jadingetop.png"
import Crypo1 from "@/../public/assets/porto-web/crypo1.png"
import Absensy3 from "@/../public/assets/porto-web/absensy3.png"
import Kwt1 from "@/../public/assets/porto-web/kwt1.png"

const IMAGES = [
  But,
  Jadingetop,
  Crypo1,
  Absensy3,
  Kwt1,
]

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <Image
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
