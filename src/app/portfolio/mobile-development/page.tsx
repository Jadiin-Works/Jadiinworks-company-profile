'use client';

import NavbarDemo from '@/components/navbar-menu-demo';
import LottieHero from '@/components/ui/mobiledev-lottiehero';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';
import { MobileGalleryDemo } from '@/components/ui/mobile-gallery-demo';
import Footer from '@/components/ui/footer';

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavbarDemo />

      {/* Lottie Hero Section */}
      <LottieHero />

      {/* Timeline showcase full-bleed */}
      <section className="py-0 px-0 bg-black dark:bg-black">
        <Timeline
          data={[
            {
              title: 'DAMAI - Dukcapil AI',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Aplikasi mobile untuk layanan publik yang aman dan nyaman. DAMAI menyediakan akses mudah ke berbagai layanan pemerintah dengan sistem keamanan berbasis biometrik dan enkripsi end-to-end.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-mobile/damai1.png" alt="damai app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-mobile/damai2.png" alt="damai app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'KasirKita',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    KasirKita adalah aplikasi kasir mobile untuk UMKM, dengan fitur penjualan, stok, laporan, dan backup cloud. Terintegrasi dengan customer langsung untuk pemesanan.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-mobile/kasirkita1.png" alt="ecommerce app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-mobile/kasirkita2.png" alt="ecommerce app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'LaporKuy - Pengaduan Online',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    LaporKuy adalah aplikasi pengaduan online yang memudahkan masyarakat melaporkan masalah ke instansi terkait. Fitur utama: pelacakan status laporan, notifikasi real-time, dan komunikasi langsung dengan petugas.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-mobile/laporkuy1.png" alt="fitness app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-mobile/laporkuy2.png" alt="fitness app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* Tech Stack / Resources - horizontal title + cloud */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Mobile Tech Stack
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Teknologi mobile yang kami gunakan untuk membangun aplikasi yang performant, scalable, dan user-friendly.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative flex size-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-6 md:px-12 lg:px-16 pb-12 md:pb-16 pt-8">
              <IconCloud
                iconSlugs={[
                  'react', 'flutter', 'dart', 'android', 'ios', 'swift', 'kotlin', 'javascript', 'typescript', 'reactnative', 'expo', 'firebase', 'realm', 'sqlite', 'redux', 'mobx', 'jest', 'detox', 'appium', 'fastlane', 'codemagic', 'appstore', 'googleplay', 'figma', 'sketch', 'androidstudio', 'xcode'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Gallery */}
      <section className="py-0 px-0 bg-white dark:bg-black">
        <MobileGalleryDemo />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Aplikasi Client Sukses" },
              { number: "99.9%", label: "Crash Free Experience" },
              { number: "30+", label: "Integrasi API & Layanan" },
              { number: "5+", label: "Tahun Pengalaman" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ingin Aplikasi Mobile Anda Tampil di Gallery Ini?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Mari wujudkan ide mobile app Anda dan jadikan bagian dari portfolio mobile development kami yang mengesankan.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://wa.me/6287775563789?text=Halo, saya ingin konsultasi tentang mobile development', '_blank')}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}