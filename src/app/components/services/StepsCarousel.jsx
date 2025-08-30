"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import ProcessStep from "./ProcessStep";

export default function StepsCarousel({ steps }) {
    const progressRef = useRef(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        align: "center",
        containScroll: "trimSnaps",
        dragFree: false,
        loop: false
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const updateProgress = useCallback(() => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${progress})`;
        }
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateProgress();
        emblaApi.on("reInit", updateProgress);
        emblaApi.on("scroll", updateProgress);
    }, [emblaApi, updateProgress]);

    const buttonVariants = {
        initial: { scale: 1, opacity: 0.8 },
        hover: { scale: 1.1, opacity: 1 },
        tap: { scale: 0.95 },
        focus: { scale: 1.05, opacity: 1 }
    };

    const progressVariants = {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 }
    };

    return (
        <div className="steps-carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {steps.map((title, i) => (
                        <div className="embla__slide" key={i}>
                            <ProcessStep number={i + 1} title={title} />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="embla__controls">
                <div className="embla__buttons">
                    <motion.button 
                        className="embla__button embla__button--prev" 
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        whileFocus="focus"
                        transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 17 
                        }}
                    >
                        <motion.svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 20 20" 
                            fill="none"
                            whileHover={{ rotate: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                    </motion.button>
                    
                    <motion.button 
                        className="embla__button embla__button--next" 
                        onClick={scrollNext}
                        aria-label="Next slide"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        whileFocus="focus"
                        transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 17 
                        }}
                    >
                        <motion.svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 20 20" 
                            fill="none"
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                    </motion.button>
                </div>
                
                <div className="embla__progress-bottom">
                    <motion.div 
                        className="embla__progress__bar" 
                        ref={progressRef}
                        variants={progressVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ 
                            duration: 0.3, 
                            ease: "easeOut" 
                        }}
                    />
                </div>
            </div>
        </div>
    );
}


