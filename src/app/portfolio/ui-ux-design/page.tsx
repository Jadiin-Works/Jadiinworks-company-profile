'use client';

import NavbarDemo from '@/components/navbar-menu-demo';
import UIUXLottieHero from '@/components/ui/uiux-lottiehero';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';
import { UIUXGalleryDemo } from '@/components/ui/uiux-gallery-demo';
import Footer from '@/components/ui/footer';

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavbarDemo />

      {/* Lottie Hero Section */}
      <UIUXLottieHero />

      {/* Timeline showcase full-bleed */}
      <section className="py-0 px-0 bg-black dark:bg-black">
        <Timeline
          data={[
            {
              title: 'Sonsaur - Web Game Redesign',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Proyek redesign web game untuk Sonsaur dengan pendekatan UI/UX modern, meningkatkan kemudahan navigasi dan visual yang lebih engaging. Hasilnya, user retention dan kepuasan pengguna meningkat signifikan.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-uiux/sonsaur1.jpg" alt="ecommerce app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-uiux/sonsaur2.png" alt="ecommerce app" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'Sorgumology Landing Page',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Landing page interaktif untuk Sorgumology yang menonjolkan keunggulan produk dan kemudahan akses informasi. Desain responsif dan visual yang engaging berhasil meningkatkan conversion rate secara signifikan.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-uiux/sorgum1.png" alt="dashboard design" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-uiux/sorgum2.png" alt="dashboard design" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'Uplink - Crypto Trading',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Identitas visual lengkap untuk startup teknologi dengan logo, color palette, dan brand guidelines yang konsisten. Meningkatkan brand recognition sebesar 80%.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-uiux/uplink.png" alt="brand identity" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-uiux/uplink2.png" alt="brand identity" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
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
              Design Tools & Technologies
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Tools dan teknologi design yang kami gunakan untuk menciptakan desain yang memukau dan user-friendly.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative flex size-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-6 md:px-12 lg:px-16 pb-12 md:pb-16 pt-8">
              <IconCloud
                iconSlugs={[
                  'figma', 'adobe', 'sketch', 'principle', 'invision', 'zeplin', 'framer', 'protopie', 'maze', 'hotjar', 'usertesting', 'miro', 'notion', 'slack', 'trello', 'asana', 'photoshop', 'illustrator', 'indesign', 'aftereffects', 'premiere', 'blender', 'cinema4d', 'unity', 'unrealengine'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Gallery */}
      <section className="py-0 px-0 bg-white dark:bg-black">
        <UIUXGalleryDemo />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Proyek Design Sukses" },
              { number: "95%", label: "Client Satisfaction Rate" },
              { number: "40%", label: "Peningkatan Conversion Rate" },
              { number: "6+", label: "Tahun Pengalaman Design" }
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ingin Desain Anda Tampil di Gallery Ini?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Mari wujudkan visi desain Anda dengan pendekatan user-centered design yang terbukti efektif dan jadikan bagian dari portfolio design kami yang mengesankan.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://wa.me/6287775563789?text=Halo, saya ingin konsultasi tentang UI/UX design', '_blank')}
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
