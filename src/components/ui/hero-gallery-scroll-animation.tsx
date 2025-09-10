"use client"

import * as React from "react"
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"

type BentoGridVariant = "default" | "threeCells" | "fourCells"

const getBentoGridClasses = (variant: BentoGridVariant = "default") => {
  const baseClasses =
    "relative grid gap-4 [&>*:first-child]:origin-top-right [&>*:nth-child(3)]:origin-bottom-right [&>*:nth-child(4)]:origin-top-right"

  const variantClasses = {
    default: `
      grid-cols-8 grid-rows-[1fr_0.5fr_0.5fr_1fr]
      [&>*:first-child]:col-span-8 md:[&>*:first-child]:col-span-6 [&>*:first-child]:row-span-3
      [&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:hidden md:[&>*:nth-child(2)]:block
      [&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:row-span-2 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block
      [&>*:nth-child(4)]:col-span-4 md:[&>*:nth-child(4)]:col-span-3
      [&>*:nth-child(5)]:col-span-4 md:[&>*:nth-child(5)]:col-span-3
    `,
    threeCells: `
      grid-cols-2 grid-rows-2
      [&>*:first-child]:col-span-2
    `,
    fourCells: `
      grid-cols-3 grid-rows-2
      [&>*:first-child]:col-span-1
      [&>*:nth-child(2)]:col-span-2
      [&>*:nth-child(3)]:col-span-2
    `,
  }

  return cn(baseClasses, variantClasses[variant])
}

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}
const ContainerScrollContext =
  React.createContext<ContainerScrollContextValue | undefined>(undefined)

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}

const ContainerScroll = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  // Start the animation as soon as the gallery section's top reaches the bottom of the viewport
  // This makes the gallery begin moving while the user is still on the Tech Stack section
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start 1", "end 1"] })
  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div ref={scrollRef} className={cn("relative min-h-screen w-full", className)} {...props}>
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BentoGridVariant
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ variant = "default", className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getBentoGridClasses(variant), className)} {...props} />
    )
  }
)
BentoGrid.displayName = "BentoGrid"

const BentoCell = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, style, ...props }, ref) => {
    const { scrollYProgress } = useContainerScrollContext()
    const translate = useTransform(scrollYProgress, [0.1, 0.6], ["-50%", "0%"])
    const scale = useTransform(scrollYProgress, [0.05, 0.6], [0.3, 1])

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ translate, scale, ...style }}
        {...props}
      />
    )
  }
)
BentoCell.displayName = "BentoCell"

const ContainerScale = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, style, ...props }, ref) => {
    const { scrollYProgress } = useContainerScrollContext()
    const opacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1])
    const scale = useTransform(scrollYProgress, [0.3, 0.8], [0.5, 1])
    const position = useTransform(scrollYProgress, (pos) =>
      pos >= 0.6 ? "absolute" : "fixed"
    )

    return (
      <motion.div
        ref={ref}
        className={cn("left-1/2 top-1/2 size-fit", className)}
        style={{
          x: "-50%",        // ⬅️ perbaikan
          y: "-50%",        // ⬅️ perbaikan
          scale,
          position,
          opacity,
          ...style,
        }}
        {...props}
      />
    )
  }
)
ContainerScale.displayName = "ContainerScale"

export { ContainerScroll, BentoGrid, BentoCell, ContainerScale }
