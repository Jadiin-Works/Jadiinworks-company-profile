"use client";

import { useEffect, useRef, useState } from "react";

const AnimatedValueItem = ({ 
    icon: Icon, 
    text, 
    delay = 0,
    className = "" 
}) => {
    const itemRef = useRef(null);
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
            { threshold: 0.3 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, [delay]);

    return (
        <div 
            ref={itemRef}
            className={`value-item ${isVisible ? 'animate-value-item' : 'animate-hidden'} ${className}`}
        >
            <div className="value-icon">
                <Icon size={20} />
            </div>
            <span>{text}</span>
        </div>
    );
};

export default AnimatedValueItem;
