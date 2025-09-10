'use client';

import React from 'react';

export default function LottieHero() {

    return (
        <section className="relative h-[80vh] lg:h-screen w-full overflow-hidden">
            {/* Background Lottie Iframe */}
            <iframe
                src="https://lottie.host/embed/f3944d37-d6f9-4e13-94a2-4031e15d0243/vdtNCF6cPP.lottie"
                title="Automation Bot Animation"
                className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                style={{ backgroundColor: '#303030' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay opsional biar teks lebih kontras */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

            {/* Konten teks di atas background */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
                <div className="max-w-md text-white">
                    <h1 className="text-3xl md:text-5xl font-normal mb-2 leading-tight px-2">
                        Automation
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold text-white relative inline-block">
                        <span className="relative z-10 p-2">Bot</span>
                        <span className="absolute inset-0 bg-purple-400/60 -skew-x-0"></span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
