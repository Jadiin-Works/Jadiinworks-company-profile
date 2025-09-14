"use client"

import Image from "next/image"
import {
  BentoCell,
  BentoGrid,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation"

const AUTOMATION_IMAGES = [
  "/assets/porto-automation/whatsapp-bot1.png",
  "/assets/porto-automation/instagram-bot1.png",
  "/assets/porto-automation/data-processing1.png",
  "/assets/porto-automation/whatsapp-bot2.png",
  "/assets/porto-automation/instagram-bot2.png",
]

const AutomationGalleryDemo = () => {
  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {AUTOMATION_IMAGES.map((imageUrl, index) => (
          <BentoCell key={index} className="overflow-hidden rounded-xl shadow-xl">
            <Image
              width={2000}
              height={2000}
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
