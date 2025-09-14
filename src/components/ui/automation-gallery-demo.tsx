"use client"

import Image from "next/image"
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"

const AUTOMATION_IMAGES = [
  "/Assets/porto-automation/whatsapp-bot1.png",
  "/Assets/porto-automation/instagram-bot1.png",
  "/Assets/porto-automation/data-processing1.png",
  "/Assets/porto-automation/whatsapp-bot2.png",
  "/Assets/porto-automation/instagram-bot2.png",
]

const AutomationGalleryDemo = () => {
  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {AUTOMATION_IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <Image
              className="size-full object-cover object-center"
              src={imageUrl}
              alt={`Automation bot showcase ${index + 1}`}
            />
          </BentoCell>
        ))}
      </BentoGrid>
    </ContainerScroll>
  )
}

export { AutomationGalleryDemo }
