'use client';

import NavbarDemo from '@/components/navbar-menu-demo';
import LottieHero from '@/components/ui/automation-lottiehero';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';
import { AutomationGalleryDemo } from '@/components/ui/automation-gallery-demo';
import Footer from '@/components/ui/footer';

export default function AutomationBotPage() {
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
              title: 'WhatsApp Business Bot',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Bot WhatsApp Business untuk otomatisasi customer service, penjualan, dan support. Fitur utama: auto-reply, menu interaktif, integrasi database, dan laporan real-time untuk meningkatkan efisiensi bisnis.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-automation/whatsapp-bot1.png" alt="whatsapp bot" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-automation/whatsapp-bot2.png" alt="whatsapp bot" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'Instagram Auto Posting Bot',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Bot Instagram untuk otomatisasi posting konten, stories, dan engagement. Terintegrasi dengan content calendar, auto-hashtag, dan analytics untuk meningkatkan reach dan engagement organik.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-automation/instagram-bot1.png" alt="instagram bot" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-automation/instagram-bot2.png" alt="instagram bot" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                  </div>
                </div>
              ),
            },
            {
              title: 'Data Processing Automation',
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Sistem otomatisasi untuk processing data, ETL pipeline, dan report generation. Menggunakan AI/ML untuk data validation, cleaning, dan insight generation yang dapat dijadwalkan secara otomatis.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/Assets/porto-automation/data-processing1.png" alt="data processing" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
                    <Image src="/Assets/porto-automation/data-processing2.png" alt="data processing" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-70 w-full" />
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
              Automation Tech Stack
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Teknologi automation yang kami gunakan untuk membangun solusi otomatisasi yang powerful, reliable, dan scalable.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative flex size-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-6 md:px-12 lg:px-16 pb-12 md:pb-16 pt-8">
              <IconCloud
                iconSlugs={[
                  'python', 'javascript', 'typescript', 'nodedotjs', 'selenium', 'puppeteer', 'playwright', 'whatsapp', 'telegram', 'discord', 'slack', 'aws', 'googlecloud', 'azure', 'docker', 'kubernetes', 'postgresql', 'mongodb', 'redis', 'rabbitmq', 'apachekafka', 'git', 'github', 'gitlab', 'jenkins', 'githubactions', 'terraform', 'ansible'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Gallery */}
      <section className="py-0 px-0 bg-white dark:bg-black">
        <AutomationGalleryDemo />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Bot Deployed" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Monitoring & Support" },
              { number: "3+", label: "Tahun Pengalaman" }
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
            Ingin Solusi Automation Anda Tampil di Gallery Ini?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Mari wujudkan ide automation Anda dan jadikan bagian dari portfolio automation bot kami yang mengesankan.
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