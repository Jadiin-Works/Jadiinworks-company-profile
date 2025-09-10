'use client';

import React, { useEffect, useState, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export default function UIUXLottieHero() {
    const [animationData, setAnimationData] = useState<any>(null);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        fetch('/animations/hero-uiux.json')
            .then((res) => res.json())
            .then(setAnimationData)
            .catch((err) => console.error('Error loading animation:', err));
    }, []);

    if (!animationData) {
        return (
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white">
                Loading animation...
            </div>
        );
    }

    return (
        <section className="relative h-[80vh] lg:h-screen w-full overflow-hidden">
            {/* Background Lottie */}
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay
                className="absolute inset-0 w-full h-full"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    backgroundColor: 'transparent',
                }}
                rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice',
                }}
            />

            {/* Overlay untuk kontras teks */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

            {/* Konten teks di atas background */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
                <div className="max-w-md text-white">
                    <h1 className="text-3xl md:text-5xl font-normal mb-2 leading-tight px-2">
                        UI/UX
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold text-white relative inline-block">
                        <span className="relative z-10 p-2">Design</span>
                        <span className="absolute inset-0 bg-purple-400/60 -skew-x-0"></span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
