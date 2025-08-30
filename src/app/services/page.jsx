"use client";

import ServiceCard from "../components/services/ServiceCard";
import CometCard from "../components/CometCard";
import ProcessStep from "../components/services/ProcessStep";
import dynamic from "next/dynamic";
const StepsCarousel = dynamic(() => import("../components/services/StepsCarousel"), { ssr: false });
import ServiceStats from "../components/services/ServiceStats";
import { ServiceThemeProvider } from "../components/services/ServiceThemeProvider";
import Nav from "../components/Nav";
import ClientLayout from "../components/ClientLayout";
import { ThemeProvider } from "../components/ThemeProvider";
import { PaintBrushBroad, Code, ShieldCheck } from "@phosphor-icons/react";
import "./services.css";

export default function ServicesPage() {
    const services = [
        {
            Icon: PaintBrushBroad,
            emoji: "🎨",
            title: "Desain Website & Pengalaman Pengguna (UI/UX)",
            description: "Tampilan adalah kesan pertama. Kami merancang antarmuka modern dan memastikan UX yang intuitif di semua perangkat.",
            points: [
                "Desain visual modern & profesional",
                "Fokus mobile-first",
                "Alur pengguna intuitif",
                "Wireframe & prototype",
            ],
        },
        {
            Icon: Code,
            emoji: "💻🚀",
            title: "Pengembangan Website (Web Development)",
            description: "Dari desain menjadi kenyataan. Kami membangun website yang indah, cepat, aman, dan siap berkembang.",
            points: [
                "Coding dari nol dengan HTML, CSS, JS",
                "Implementasi CMS",
                "Optimasi kecepatan & performa",
                "Fitur kustom",
            ],
        },
        {
            Icon: ShieldCheck,
            emoji: "🔧🛡️",
            title: "Dukungan & Pemeliharaan Purna Jual",
            description: "Setelah peluncuran, kami tetap mendampingi. Website selalu aman, up-to-date, dan berkinerja optimal.",
            points: [
                "Update keamanan & plugin",
                "Backup data berkala",
                "Dukungan teknis responsif",
                "Edukasi pengelolaan konten mandiri",
            ],
        },
    ];

    const steps = [
        "Discovery & Konsultasi",
        "Desain & Prototyping",
        "Pengembangan & Coding",
        "Revisi & Umpan Balik",
        "Peluncuran & Dukungan",
    ];

    return (
        <ClientLayout>
            <ThemeProvider>
                <ServiceThemeProvider>
                    <main className="services-page">
                        <Nav />
                        <div className="services-background" aria-hidden>
                            <div className="services-bg-gradient-1" />
                            <div className="services-bg-gradient-2" />
                        </div>
                        
                        <div className="services-container">
                            <section className="services-header">
                                <h1
                                    className="services-title"
                                    style={{
                                        transition: 'all 0.6s ease'
                                    }}
                                >
                                    Layanan & Solusi Digital Kami
                                </h1>
                                <p
                                    className="services-subtitle"
                                    style={{
                                        transition: 'all 0.7s ease'
                                    }}
                                >
                                    Di Jadiin, kami percaya setiap ide hebat berhak mendapatkan platform digital terbaik. 
                                    Kami menyediakan layanan lengkap dari desain hingga pengembangan dan pemeliharaan website 
                                    yang modern, responsif, dan berkinerja tinggi.
                                </p>
                            </section>

                            <section className="services-cards-section" id="services">
                                <div className="services-cards-header">
                                    <h2 className="services-cards-title">Layanan Unggulan</h2>
                                </div>
                                <div
                                    role="list"
                                    className="services-cards-grid"
                                    style={{
                                        transition: 'all 0.6s ease'
                                    }}
                                >
                                    {services.map((svc, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                transition: 'all 0.45s ease',
                                                animationDelay: `${idx * 0.06}s`
                                            }}
                                        >
                                            <CometCard className="w-full h-full">
                                                <ServiceCard index={idx} {...svc} />
                                            </CometCard>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <ServiceStats />

                            <section className="process-steps-section">
                                <h2 className="process-steps-title">Bagaimana Kami Bekerja? Proses Transparan dari Awal hingga Akhir</h2>
                                <StepsCarousel steps={steps} />
                            </section>
                        </div>
                    </main>
                </ServiceThemeProvider>
            </ThemeProvider>
        </ClientLayout>
    );
}


