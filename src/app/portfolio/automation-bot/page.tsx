'use client';

import NavbarDemo from '@/components/navbar-menu-demo';
import LottieHero from '@/components/ui/automation-lottiehero';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';
import Footer from '@/components/ui/footer';
import Image from 'next/image';

export default function AutomationBotPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavbarDemo />

      {/* Lottie Hero Section */}
      <LottieHero />

      {/* Case Studies (anonymized) */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">Selected Case Studies</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mt-3">Ringkasan proyek automation yang kami bangun untuk beragam industri.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'WhatsApp CS Bot — Retail',
                desc: 'Bot WA dengan menu interaktif (produk, status pesanan, komplain) + eskalasi agent.',
                result: 'Waktu respon turun 78%, NPS +1.2, 3.2k sesi/bulan',
                extra: 'Orkestrasi workflow dibangun dengan n8n (webhook, branching, retry).',
                tech: ['n8n', 'WA Cloud API', 'PostgreSQL', 'Node.js']
              },
              {
                title: 'TikTok/Instagram Auto Scheduler — Brand/Media',
                desc: 'Penjadwalan feed/reels/stories, auto-hashtag, approval flow, dan tracking performa.',
                result: 'Konsistensi posting +100%, jam kerja tim konten hemat 12 jam/minggu',
                extra: 'Penjadwalan, queueing, dan approval diatur oleh n8n; scraping via Playwright.',
                tech: ['n8n', 'Playwright', 'GSheets', 'Python']
              },
              {
                title: 'Marketplace Price & Stock Monitor — E-commerce',
                desc: 'Pantau harga/stok kompetitor berkala, dengan alert ke WA/Slack saat berubah.',
                result: 'Margin terjaga, time-to-alert < 10 menit',
                extra: 'Scheduler & alerting di n8n; ekstraksi dengan Puppeteer.',
                tech: ['n8n', 'Puppeteer', 'Redis', 'Node.js']
              },
              {
                title: 'Invoice OCR ke Akuntansi — B2B/Finance',
                desc: 'Ekstraksi data invoice (PDF/JPG) → validasi → posting ke spreadsheet/ERP.',
                result: 'Error input turun 86%, SLA posting 24 jam → 2 jam',
                extra: 'n8n mengorkestrasi pipeline OCR → validasi → notifikasi.',
                tech: ['n8n', 'Tesseract OCR', 'GDrive API', 'Python']
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-6 transition-colors flex flex-col"
              >
                <div>
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">Case Study</div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-2 line-clamp-3">{item.desc}</p>
                  {item.result && (
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">Hasil: {item.result}</p>
                  )}
                  {item.extra && (
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{item.extra}</p>
                  )}
                </div>
                {item.tech && (
                  <div className="mt-4 flex flex-wrap gap-2 pt-2">
                    {item.tech.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Gallery */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">Demo Gallery</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mt-3">Cuplikan singkat (±30 detik) dari workflow n8n yang kami bangun.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'WA Bot Menu Interaktif', desc: 'Navigasi katalog & status order dalam 3 klik.', src: '/Assets/porto-bot/bot1.jpeg' },
              { title: 'Scheduler IG Reels', desc: 'Penjadwalan + auto-hashtag dan tracking performa.', src: '/Assets/porto-bot/bot2.jpeg' },
              { title: 'Scraper Harga Marketplace', desc: 'Alert perubahan harga kompetitor secara berkala.', src: '/Assets/porto-bot/bot3.jpeg' },
            ].map((d, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <div className="relative aspect-video flex items-center justify-center">
                  {d.src ? (
                    <Image src={d.src.startsWith('/') ? d.src : `/${d.src}`} alt={d.title} fill className="object-cover" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
                      <div className="relative z-10 text-neutral-700 dark:text-neutral-200 text-sm font-medium">Preview</div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-neutral-900 dark:text-neutral-100 font-semibold">{d.title}</div>
                  <div className="text-neutral-600 dark:text-neutral-300 text-sm">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Resources - horizontal title + cloud */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Bot Automation Stack</h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Teknologi automation yang kami gunakan untuk membangun solusi otomatisasi yang powerful, reliable, dan scalable.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative flex size-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-6 md:px-12 lg:px-16 pb-12 md:pb-16 pt-8">
              <IconCloud
                iconSlugs={[
                  'n8n', 'python', 'javascript', 'typescript', 'nodedotjs', 'selenium', 'puppeteer', 'playwright', 'whatsapp', 'telegram', 'discord', 'slack', 'aws', 'googlecloud', 'azure', 'docker', 'kubernetes', 'postgresql', 'mongodb', 'redis', 'rabbitmq', 'apachekafka', 'git', 'github', 'gitlab', 'jenkins', 'githubactions', 'terraform', 'ansible'
                ]}
              />
            </div>
          </div>
        </div>
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ingin Solusi Automation Anda Tampil di Gallery Ini?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Mari wujudkan ide automation Anda dan jadikan bagian dari portfolio automation bot kami yang mengesankan.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://wa.me/6287775563789?text=Halo, saya ingin konsultasi tentang automation bot', '_blank')}
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