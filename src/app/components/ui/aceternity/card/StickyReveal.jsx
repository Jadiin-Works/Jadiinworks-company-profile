"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const containerRef = useRef(null);

    // scroll progress relatif terhadap container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // bagi progress ke jumlah card
        const index = Math.floor(latest * cardLength);
        setActiveCard(index >= cardLength ? cardLength - 1 : index);
    });

    const backgroundColors = ["#0f172a", "#000000", "#171717"];
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #ec4899, #6366f1)",
        "linear-gradient(to bottom right, #f97316, #eab308)",
    ];
    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            {/* Sticky wrapper */}
            <motion.div
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="sticky top-0 h-screen flex justify-center items-center overflow-hidden rounded-md"
            >
                {/* Left side (text) */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="max-w-2xl px-8">
                        {content.map((item, index) => (
                            <div key={item.title + index}>
                                {activeCard === index && (
                                    <>
                                        <motion.h2
                                            key={item.title}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-4xl md:text-6xl font-bold text-slate-100"
                                        >
                                            {item.title}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="mt-6 text-lg md:text-2xl text-slate-300"
                                        >
                                            {item.description}
                                        </motion.p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side (preview card) */}
                <div
                    style={{ background: backgroundGradient }}
                    className={cn(
                        "hidden lg:flex h-80 w-96 items-center justify-center rounded-xl shadow-lg overflow-hidden",
                        contentClassName
                    )}
                >
                    {content[activeCard].content ?? null}
                </div>
            </motion.div>
        </div>
    );
};
