"use client";

import { useEffect, useRef, useState } from "react";

const SmoothParallaxElement = ({ 
    children, 
    speed = 1, 
    easing = "easeOutCubic",
    className = "",
    delay = 0,
    threshold = 0.1
}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simple Intersection Observer with delay
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

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay, threshold]);

    return (
        <div 
            ref={elementRef} 
            className={`smooth-parallax-element ${className} ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default SmoothParallaxElement;
