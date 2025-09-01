"use client";

import { useEffect, useRef, useState } from "react";

const DepthParallaxLayer = ({ 
    children, 
    depth = 1, 
    speed = 1, 
    className = "",
    direction = "vertical"
}) => {
    const layerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simple Intersection Observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (layerRef.current) {
            observer.observe(layerRef.current);
        }

        return () => {
            if (layerRef.current) {
                observer.unobserve(layerRef.current);
            }
        };
    }, [depth, speed, direction]);

    return (
        <div 
            ref={layerRef} 
            className={`depth-parallax-layer depth-${depth} ${className}`}
        >
            {children}
        </div>
    );
};

export default DepthParallaxLayer;
