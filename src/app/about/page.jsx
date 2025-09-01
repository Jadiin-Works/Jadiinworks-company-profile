"use client";

import { useEffect, useRef } from "react";
import TeamMemberCard from "../components/about/TeamMemberCard";
import CometCard from "../components/CometCard";
import { AboutThemeProvider } from "../components/about/AboutThemeProvider";
import Nav from "../components/Nav";
import ClientLayout from "../components/ClientLayout";
import { ThemeProvider } from "../components/ThemeProvider";
import SmoothParallaxElement from "../components/about/SmoothParallaxElement";
import AnimatedValueItem from "../components/about/AnimatedValueItem";
import { 
    Rocket, 
    Users, 
    Target, 
    Lightbulb, 
    Heart, 
    Star, 
    CheckCircle, 
    ArrowRight,
    Globe,
    ShieldCheck,
    Code,
    PaintBrushBroad
} from "@phosphor-icons/react";
import "./about.css";
import "./story-sections.css";

export default function AboutPage() {
    const timelineRefs = useRef([]);
    const achievementRefs = useRef([]);
    
    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, observerOptions);
        
        timelineRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });
        
        return () => {
            timelineRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);
    
    useEffect(() => {
        const achievementObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.getAttribute('data-value');
                    const isPercentage = finalValue.includes('%');
                    const isTime = finalValue.includes('/');
                    
                    if (isPercentage || isTime) {
                        target.textContent = finalValue;
                    } else {
                        const numericValue = parseInt(finalValue.replace('+', ''));
                        animateCounter(target, 0, numericValue, finalValue.includes('+'));
                    }
                }
            });
        }, { threshold: 0.5 });
        
        achievementRefs.current.forEach((ref) => {
            if (ref) {
                achievementObserver.observe(ref);
            }
        });
        
        return () => {
            achievementRefs.current.forEach((ref) => {
                if (ref) {
                    achievementObserver.unobserve(ref);
                }
            });
        };
    }, []);
    
    const animateCounter = (element, start, end, hasPlus) => {
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = hasPlus ? `${current}+` : current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    };

    const teamMembers = [
        {
            photo: "https://via.placeholder.com/300x300/B019FF/FFFFFF?text=Arbi", // Placeholder - replace with actual photo
            name: "Arbi Laksmana Putra Rosydin",
            role: "Project Manager & Lead",
            bio: "Mengelola proyek, berinteraksi dengan klien, merencanakan alur kerja, dan memimpin pengembangan teknis inti. Spesialis dalam memberdayakan UMKM Indonesia melalui solusi digital yang efektif.",
            socialMedia: {
                instagram: "https://www.instagram.com/arbilaksmana/",
                linktree: "https://linktr.ee/arbilaksmana"
            }
        },
        {
            photo: "https://via.placeholder.com/300x300/00C4CC/FFFFFF?text=Zaki", // Placeholder - replace with actual photo
            name: "Zaki Affandi",
            role: "UI/UX Designer & Frontend Developer",
            bio: "Mendesain antarmuka pengguna (UI) dan pengalaman pengguna (UX), serta menerjemahkan desain menjadi kode frontend. Spesialis dalam menciptakan pengalaman digital yang intuitif, modern, dan user-friendly.",
            socialMedia: {
                instagram: "https://www.instagram.com/zkafnd/"
            }
        },
        {
            photo: "https://via.placeholder.com/300x300/8000C4/FFFFFF?text=Rakha", // Placeholder - replace with actual photo
            name: "Muhammad Rakha Nasjaya",
            role: "Backend Developer & Infrastructure",
            bio: "Membangun fungsionalitas di sisi server, mengelola database, dan memastikan infrastruktur website berjalan dengan baik. Ahli dalam mengembangkan sistem backend yang robust, scalable, dan handal.",
            socialMedia: {
                instagram: "https://www.instagram.com/mm.rakha/"
            }
        },
    ];

    const stats = [
        { number: "50+", label: "Proyek Selesai" },
        { number: "30+", label: "Klien Puas" },
        { number: "100%", label: "Responsif" },
        { number: "24/7", label: "Support" },
    ];

    return (
        <ClientLayout>
            <ThemeProvider>
                <AboutThemeProvider>
                    <main className="about-page">
                        <Nav />
                        
                        {/* Hero Section */}
                        <section className="hero-section">
                            <div className="hero-background">
                                <div className="hero-gradient-1" />
                                <div className="hero-gradient-2" />
                                <div className="hero-particles" />
                            </div>
                            <div className="hero-content">
                                <h1 className="hero-title animate-fade-in">
                                    Mengubah Ide Menjadi <span className="hero-title-accent">Realitas Digital</span>
                                </h1>
                                <p className="hero-description animate-fade-in-delay">
                                    Di era digital yang terus berkembang, kehadiran online yang profesional bukan lagi pilihan, melainkan kebutuhan. Jadiin hadir sebagai solusi yang menghubungkan visi bisnis Anda dengan teknologi masa kini, menciptakan website yang tidak hanya indah secara visual, tetapi juga strategis dan berdampak pada pertumbuhan bisnis.
                                </p>
                                <div className="hero-stats animate-fade-in-delay-2">
                                    <div className="stat-item">
                                        <div className="stat-number">50+</div>
                                        <div className="stat-label">Proyek Selesai</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">98%</div>
                                        <div className="stat-label">Kepuasan Klien</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">24/7</div>
                                        <div className="stat-label">Dukungan</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">100%</div>
                                        <div className="stat-label">Responsif</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Cerita Singkat "Jadiin" Section */}
                        {/* Story Section 1: Hero Story */}
                        <section className="story-hero-section parallax-section">
                            <div className="parallax-bg-element story-hero-bg-1" />
                            <div className="parallax-bg-element story-hero-bg-2" />
                            <div className="parallax-bg-element story-hero-bg-3" />
                            
                            <div className="story-hero-container">
                                <SmoothParallaxElement delay={100}>
                                    <div className="story-hero-header">
                                        <h2 className="story-hero-title">Kisah Lahirnya Jadiin</h2>
                                        <p className="story-hero-subtitle">
                                            Setiap perusahaan besar dimulai dari visi sederhana yang berani. 
                                            Berikut adalah perjalanan kami dalam menciptakan solusi digital yang benar-benar memahami kebutuhan bisnis Indonesia.
                                        </p>
                                    </div>
                                </SmoothParallaxElement>
                                
                                <SmoothParallaxElement delay={300}>
                                    <div className="story-hero-quote">
                                        <div className="quote-icon">"</div>
                                        <blockquote>
                                            "Kami percaya bahwa setiap bisnis, tidak peduli seberapa kecil skalanya, 
                                            berhak memiliki kehadiran online yang setara dengan perusahaan besar."
                                        </blockquote>
                                        <div className="quote-author">- Tim Jadiin</div>
                                    </div>
                                </SmoothParallaxElement>
                            </div>
                        </section>

                        {/* Story Section 2: The Beginning */}
                        <section className="story-beginning-section parallax-section">
                            <div className="parallax-bg-element story-beginning-bg-1" />
                            <div className="parallax-bg-element story-beginning-bg-2" />
                            
                            <div className="story-beginning-container">
                                <SmoothParallaxElement delay={100}>
                                    <div className="story-beginning-header">
                                        <h3 className="story-beginning-title">Awal Mula</h3>
                                        <p className="story-beginning-subtitle">Tahun 2024 - Diskusi di Kampus</p>
                                    </div>
                                </SmoothParallaxElement>
                                
                                <div className="story-beginning-content">
                                    <SmoothParallaxElement delay={200}>
                                        <div className="story-beginning-text">
                                            <p>
                                                Dalam sebuah diskusi mendalam di kampus, tiga mahasiswa dengan latar belakang teknologi yang berbeda - 
                                                <strong> Arbi Laksmana Putra Rosydin</strong> sebagai Project Manager, 
                                                <strong> Zaki Affandi</strong> sebagai UI/UX Designer, dan 
                                                <strong> Muhammad Rakha Nasjaya</strong> sebagai Backend Developer - 
                                                menemukan kesamaan dalam observasi mereka terhadap lanskap digital Indonesia.
                                            </p>
                                        </div>
                                    </SmoothParallaxElement>
                                    
                                    <SmoothParallaxElement delay={400}>
                                        <div className="story-beginning-highlight">
                                            <div className="highlight-icon">
                                                <Users size={24} />
                                            </div>
                                            <div className="highlight-content">
                                                <h4>Tiga Pilar Utama</h4>
                                                <p>Kolaborasi unik antara Project Management, UI/UX Design, dan Backend Development yang membentuk fondasi kuat untuk solusi digital yang komprehensif.</p>
                                            </div>
                                        </div>
                                    </SmoothParallaxElement>
                                </div>
                            </div>
                        </section>

                        {/* Story Section 3: The Discovery */}
                        <section className="story-discovery-section parallax-section">
                            <div className="parallax-bg-element story-discovery-bg-1" />
                            <div className="parallax-bg-element story-discovery-bg-2" />
                            
                            <div className="story-discovery-container">
                                <SmoothParallaxElement delay={100}>
                                    <div className="story-discovery-header">
                                        <h3 className="story-discovery-title">Penemuan Mengejutkan</h3>
                                        <p className="story-discovery-subtitle">Riset Mendalam</p>
                                    </div>
                                </SmoothParallaxElement>
                                
                                <div className="story-discovery-content">
                                    <SmoothParallaxElement delay={200}>
                                        <div className="story-discovery-text">
                                            <p>
                                                Melalui berbagai riset dan interaksi langsung dengan pelaku bisnis, 
                                                kami menemukan fakta yang mengejutkan: 
                                                <strong>78% UMKM Indonesia masih belum memiliki kehadiran digital yang optimal</strong>.
                                            </p>
                                            <p>
                                                Banyak yang terjebak dalam dilema klasik - ingin memiliki website profesional 
                                                namun terkendala biaya tinggi, kompleksitas teknis, dan ketidakpastian return on investment.
                                            </p>
                                        </div>
                                    </SmoothParallaxElement>
                                    
                                    <SmoothParallaxElement delay={400}>
                                        <div className="story-discovery-stats">
                                            <div className="stat-item">
                                                <div className="stat-number">78%</div>
                                                <div className="stat-label">UMKM belum optimal digital</div>
                                            </div>
                                            <div className="stat-item">
                                                <div className="stat-number">3</div>
                                                <div className="stat-label">Pilar keahlian</div>
                                            </div>
                                            <div className="stat-item">
                                                <div className="stat-number">100%</div>
                                                <div className="stat-label">Komitmen kualitas</div>
                                            </div>
                                        </div>
                                    </SmoothParallaxElement>
                                </div>
                            </div>
                        </section>

                        {/* Story Section 4: The Birth */}
                        <section className="story-birth-section parallax-section">
                            <div className="parallax-bg-element story-birth-bg-1" />
                            <div className="parallax-bg-element story-birth-bg-2" />
                            
                            <div className="story-birth-container">
                                <SmoothParallaxElement delay={100}>
                                    <div className="story-birth-header">
                                        <h3 className="story-birth-title">Lahirnya Jadiin</h3>
                                        <p className="story-birth-subtitle">Dari Ide Menjadi Realitas</p>
                                    </div>
                                </SmoothParallaxElement>
                                
                                <div className="story-birth-content">
                                    <SmoothParallaxElement delay={200}>
                                        <div className="story-birth-text">
                                            <p>
                                                Dari situasi inilah <strong>Jadiin</strong> lahir. Nama yang dipilih bukan tanpa alasan - 
                                                "Jadiin" merepresentasikan komitmen kami untuk mengubah ide dan mimpi bisnis 
                                                menjadi realitas digital yang tangible.
                                            </p>
                                            <p>
                                                Kami percaya bahwa setiap bisnis, tidak peduli seberapa kecil skalanya, 
                                                berhak memiliki kehadiran online yang setara dengan perusahaan besar.
                                            </p>
                                        </div>
                                    </SmoothParallaxElement>
                                    
                                    <SmoothParallaxElement delay={400}>
                                        <div className="story-birth-highlight">
                                            <div className="highlight-icon">
                                                <Rocket size={24} />
                                            </div>
                                            <div className="highlight-content">
                                                <h4>Visi Kami</h4>
                                                <p>Mengubah ide dan mimpi bisnis menjadi realitas digital yang tangible, 
                                                   memberikan setiap bisnis kesempatan yang sama untuk bersaing di era digital.</p>
                                            </div>
                                        </div>
                                    </SmoothParallaxElement>
                                </div>
                            </div>
                        </section>

                        {/* Story Section 5: The Approach */}
                        <section className="story-approach-section parallax-section">
                            <div className="parallax-bg-element story-approach-bg-1" />
                            <div className="parallax-bg-element story-approach-bg-2" />
                            
                            <div className="story-approach-container">
                                <SmoothParallaxElement delay={100}>
                                    <div className="story-approach-header">
                                        <h3 className="story-approach-title">Pendekatan Unik Kami</h3>
                                        <p className="story-approach-subtitle">Bukan Template Biasa</p>
                                    </div>
                                </SmoothParallaxElement>
                                
                                <div className="story-approach-content">
                                    <SmoothParallaxElement delay={200}>
                                        <div className="story-approach-text">
                                            <p>
                                                Pendekatan kami berbeda dari yang lain. Alih-alih menawarkan template generik, 
                                                kami memulai setiap proyek dengan pemahaman mendalam tentang bisnis klien, 
                                                target market, dan tujuan strategis.
                                            </p>
                                            <p>
                                                Setiap website yang kami buat adalah hasil kolaborasi intensif yang memastikan 
                                                bahwa solusi digital benar-benar selaras dengan visi bisnis klien.
                                            </p>
                                        </div>
                                    </SmoothParallaxElement>
                                    
                                    <SmoothParallaxElement delay={400}>
                                        <div className="story-approach-features">
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <Target size={20} />
                                                </div>
                                                <div className="feature-content">
                                                    <h4>Pemahaman Mendalam</h4>
                                                    <p>Analisis bisnis, target market, dan tujuan strategis</p>
                                                </div>
                                            </div>
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <Users size={20} />
                                                </div>
                                                <div className="feature-content">
                                                    <h4>Kolaborasi Intensif</h4>
                                                    <p>Kerja sama erat dengan klien untuk hasil optimal</p>
                                                </div>
                                            </div>
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <CheckCircle size={20} />
                                                </div>
                                                <div className="feature-content">
                                                    <h4>Solusi Terpersonalisasi</h4>
                                                    <p>Website yang selaras dengan visi bisnis klien</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SmoothParallaxElement>
                                </div>
                            </div>
                        </section>

                        {/* Story Section 6: The Values */}
                        <section className="story-values-section parallax-section">
                            <div className="parallax-bg-element story-values-bg-1" />
                            <div className="parallax-bg-element story-values-bg-2" />
                            
                            <div className="story-values-container">
                                <SmoothParallaxElement delay={100}>
                                    <div className="story-values-header">
                                        <h3 className="story-values-title">Pilar Utama Perusahaan</h3>
                                        <p className="story-values-subtitle">Fondasi Kesuksesan Kami</p>
                                    </div>
                                </SmoothParallaxElement>
                                
                                <SmoothParallaxElement delay={200}>
                                    <div className="story-values-grid">
                                        <div className="value-card">
                                            <div className="value-icon">
                                                <Heart size={32} />
                                            </div>
                                            <h4>Customer-Centric Approach</h4>
                                            <p>Setiap keputusan dan solusi berpusat pada kebutuhan dan kepuasan pelanggan.</p>
                                        </div>
                                        <div className="value-card">
                                            <div className="value-icon">
                                                <Target size={32} />
                                            </div>
                                            <h4>Result-Driven Solutions</h4>
                                            <p>Fokus pada hasil yang terukur dan berdampak positif bagi bisnis klien.</p>
                                        </div>
                                        <div className="value-card">
                                            <div className="value-icon">
                                                <Users size={32} />
                                            </div>
                                            <h4>Collaborative Excellence</h4>
                                            <p>Kerja sama tim yang harmonis untuk menghasilkan solusi terbaik.</p>
                                        </div>
                                        <div className="value-card">
                                            <div className="value-icon">
                                                <Lightbulb size={32} />
                                            </div>
                                            <h4>Continuous Innovation</h4>
                                            <p>Terus berinovasi dan mengadopsi teknologi terbaru untuk solusi yang optimal.</p>
                                        </div>
                                    </div>
                                </SmoothParallaxElement>
                            </div>
                        </section>

                        {/* Vision Mission Section */}
                        <section className="vision-mission-section">
                            <div className="vm-container">
                                <div className="vm-header">
                                    <h2 className="vm-title animate-fade-in">Visi & Misi Strategis</h2>
                                    <p className="vm-subtitle animate-fade-in-delay">
                                        Visi dan misi kami bukan sekadar deklarasi, melainkan roadmap yang mengarahkan setiap keputusan bisnis dan inovasi teknologi yang kami kembangkan.
                                    </p>
                                </div>
                                <div className="vm-grid">
                                    <div className="vision-card animate-fade-in-delay-2">
                                        <div className="card-icon">
                                            <Target size={32} />
                                        </div>
                                        <h3>Visi 2030</h3>
                                        <p>Menjadi platform terdepan di Asia Tenggara yang memberdayakan 100,000+ bisnis untuk mencapai kesuksesan digital, melalui solusi website yang mengkombinasikan inovasi teknologi, desain yang memukau, dan strategi bisnis yang terbukti efektif.</p>
                                    </div>
                                    <div className="mission-card animate-fade-in-delay-3">
                                        <div className="card-icon">
                                            <Rocket size={32} />
                                        </div>
                                        <h3>Misi Operasional</h3>
                                        <div className="mission-list">
                                            <div className="mission-item">
                                                <div className="mission-icon">
                                                    <CheckCircle size={20} />
                                                </div>
                                                <div className="mission-content">
                                                    <h4>Efisiensi Operasional</h4>
                                                    <p>Mengoptimalkan proses pembuatan website dengan metodologi agile yang memastikan delivery tepat waktu tanpa kompromi kualitas.</p>
                                                </div>
                                            </div>
                                            <div className="mission-item">
                                                <div className="mission-icon">
                                                    <PaintBrushBroad size={20} />
                                                </div>
                                                <div className="mission-content">
                                                    <h4>Desain Berbasis Data</h4>
                                                    <p>Menciptakan desain yang tidak hanya estetik, tetapi juga didukung oleh data user behavior dan best practices UX/UI terkini.</p>
                                                </div>
                                            </div>
                                            <div className="mission-item">
                                                <div className="mission-icon">
                                                    <Users size={20} />
                                                </div>
                                                <div className="mission-content">
                                                    <h4>Partnership Jangka Panjang</h4>
                                                    <p>Membangun hubungan strategis dengan klien melalui dukungan berkelanjutan dan solusi yang berkembang sesuai pertumbuhan bisnis.</p>
                                                </div>
                                            </div>
                                            <div className="mission-item">
                                                <div className="mission-icon">
                                                    <Code size={20} />
                                                </div>
                                                <div className="mission-content">
                                                    <h4>Teknologi Cutting-Edge</h4>
                                                    <p>Mengadopsi teknologi terbaru untuk memastikan website klien tetap kompetitif dan scalable dalam jangka panjang.</p>
                                                </div>
                                            </div>
                                            <div className="mission-item">
                                                <div className="mission-icon">
                                                    <ShieldCheck size={20} />
                                                </div>
                                                <div className="mission-content">
                                                    <h4>Keamanan & Performa</h4>
                                                    <p>Memprioritaskan keamanan data dan performa website sebagai fondasi kepercayaan klien terhadap layanan kami.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Team Section */}
                        <section className="team-section">
                            <div className="team-container">
                                <div className="team-header">
                                    <h2 className="team-title animate-fade-in">Tim Eksekutif</h2>
                                    <p className="team-subtitle animate-fade-in-delay">
                                        Keahlian dan dedikasi tim kami adalah fondasi kesuksesan setiap proyek. 
                                        Setiap anggota membawa perspektif unik yang berkontribusi pada solusi komprehensif untuk bisnis Anda.
                                    </p>
                                </div>
                                <div className="team-grid">
                                    {teamMembers.map((member, index) => (
                                        <div key={member.name} className="team-member-wrapper">
                                            <CometCard className={`animate-fade-in-delay-${index + 2}`}>
                                                <TeamMemberCard
                                                    name={member.name}
                                                    role={member.role}
                                                    bio={member.bio}
                                                    imageUrl={member.photo}
                                                    socialMedia={member.socialMedia}
                                                />
                                            </CometCard>
                                        </div>
                                    ))}
                                </div>
                                
                                
                            </div>
                        </section>

                        
                    </main>
                </AboutThemeProvider>
            </ThemeProvider>
        </ClientLayout>
    );
}
