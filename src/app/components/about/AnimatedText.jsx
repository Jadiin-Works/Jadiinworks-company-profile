"use client";

import { useEffect, useRef, useState } from "react";

const AnimatedText = ({ 
    children, 
    className = "", 
    animationType = "fadeIn", 
    delay = 0,
    threshold = 0.1 
}) => {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            { threshold }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, [delay, threshold]);

    const getAnimationClass = () => {
        if (!isVisible) return "animate-hidden";
        
        switch (animationType) {
            case "fadeIn":
                return "animate-fade-in";
            case "slideInLeft":
                return "animate-slide-in-left";
            case "slideInRight":
                return "animate-slide-in-right";
            case "slideInUp":
                return "animate-slide-in-up";
            case "scaleIn":
                return "animate-scale-in";
            default:
                return "animate-fade-in";
        }
    };

    return (
        <div 
            ref={textRef}
            className={`animated-text ${getAnimationClass()} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedText;
