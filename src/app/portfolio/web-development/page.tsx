'use client';

import NavbarDemo from '@/components/navbar-menu-demo';
import LottieHero from '@/components/ui/webdev-lottiehero';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';
import { HeroDemo1, HeroDemo2, HeroDemo3 } from '@/components/ui/hero-gallery-demo';
import Footer from '@/components/ui/footer';


export default function WebDevelopmentPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavbarDemo />

      {/* Lottie Hero Section */}
      <LottieHero />

      {/* Timeline showcase full-bleed */}
      <section className="py-0 px-0 bg-white dark:bg-black">
        <Timeline
          data={[
            {
              title: 'Ngolab Point of Sales',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Merancang aplikasi Startup FNB untuk pengelolaan <b>operasional
                      Startup</b>. Fitur utama meliputi pencatatan barang, laporan transaksi,
                    dashboard hingga status makanan di dapur menggunakan monitoring berbasis web.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-web/pos2.png" alt="project" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                    <Image src="/Assets/porto-web/pos1.png" alt="project" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'E-event Komunitas Halal Bandung',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    E-Event Halal Bandung adalah platform tiket online untuk berbagai acara halal di Bandung — dari seminar, workshop, hingga festival, semua bisa dipesan mudah, aman, dan cepat.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-web/khb1.png" alt="ui" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                    <Image src="/Assets/porto-web/khb2.png" alt="ui" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'Sentra Kreasi – Komunitas Kreatif Digital',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Sentra Kreasi adalah platform komunitas kreatif yang menghubungkan UMKM lokal Bandung dengan pasar digital. Website ini menampilkan produk unggulan, acara komunitas, hingga program pemberdayaan, sekaligus menjadi ruang kolaborasi untuk mempromosikan karya, pelatihan, dan inovasi generasi muda.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-web/sentra1.png" alt="ui" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                    <Image src="/Assets/porto-web/sentra2.png" alt="ui" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
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
              Tech Stack & Resources
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Teknologi yang kami gunakan untuk membangun produk yang scalable, cepat,
              dan modern.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative flex size-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-6 md:px-12 lg:px-16 pb-12 md:pb-16 pt-8">
              <IconCloud
                iconSlugs={[
                  'typescript','javascript','react','nextdotjs','nodedotjs','express','prisma','postgresql','mongodb','amazonaws','vercel','docker','git','github','gitlab','visualstudiocode','figma','tailwindcss','jest','cypress'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Gallery */}
      <section className="py-0 px-0 bg-white dark:bg-black">
        <HeroDemo1 />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Proyek Selesai" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "2+", label: "Tahun Pengalaman" }
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
            Ingin Proyek Anda Tampil di Gallery Ini?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Mari wujudkan ide web development Anda dan jadikan bagian dari gallery portfolio kami yang mengesankan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Mulai Proyek
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}