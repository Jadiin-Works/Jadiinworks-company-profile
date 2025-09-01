"use client";

import { useEffect, useRef, useState } from "react";

const ParallaxSection = ({ children, className = "" }) => {
    const sectionRef = useRef(null);
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`parallax-section ${className} ${isVisible ? 'visible' : ''}`} style={{minHeight: '100vh', position: 'relative'}}>
            {/* Simplified Background Elements - Only 3 main elements */}
            <div className="parallax-bg-element parallax-bg-1" />
            <div className="parallax-bg-element parallax-bg-2" />
            <div className="parallax-bg-element parallax-bg-3" />
            
            {/* Content */}
            <div className="parallax-content" style={{position: 'relative', zIndex: 10}}>
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection;
