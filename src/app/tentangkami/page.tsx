import NavbarDemo from "@/components/navbar-menu-demo";
import Footer from "@/components/ui/footer";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import HorizontalReveal from "@/components/ui/horizontal-reveal";
import { IconCrown, IconPuzzle2, IconBulb } from "@tabler/icons-react";
import WobbleCardDemo from "@/components/ui/wobble-card-demo";
import BentoGridSecondDemo from "@/components/bento-grid-demo-2";
import SpotlightTentangKamiDemo from "@/components/spotlight-tentangkami-demo";


export const metadata = {
  title: "Tentang Kami | Jadiinworks",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <NavbarDemo />

      {/* Hero / Story */}
      <section className="">
        <SpotlightTentangKamiDemo />
      </section>

      {/* Visi & Misi */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-900 dark:text-neutral-100">Visi & Misi</h2>

          {/* Visi row */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-8">
            <ScrollReveal className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 bg-white/50 dark:bg-black/50">
              <h3 className="text-2xl font-semibold mb-3">Visi</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Menjadi mitra teknologi tepercaya yang membantu bisnis di Indonesia bertumbuh
                melalui produk digital yang berdampak dan mudah digunakan.
              </p>
            </ScrollReveal>
            <ScrollReveal className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800" delay={100}>
              <Image src="/Assets/porto-web/sentra1.png" alt="Ilustrasi Visi" fill className="object-cover" />
            </ScrollReveal>
          </div>

          {/* Misi row (image swapped) */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <ScrollReveal className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 md:order-1 order-2" delay={100}>
              <Image src="/Assets/porto-web/kwt1.png" alt="Ilustrasi Misi" fill className="object-cover" />
            </ScrollReveal>
            <ScrollReveal className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 bg-white/50 dark:bg-black/50 md:order-2 order-1">
              <h3 className="text-2xl font-semibold mb-3">Misi</h3>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" />Menghadirkan solusi web, mobile, dan otomasi yang efektif.</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" />Berorientasi pada pengalaman pengguna dan hasil bisnis klien.</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" />Kolaboratif, transparan, dan tepat waktu dalam setiap proyek.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Storytelling as card grid (sesuai referensi) */}
      <section className="py-16 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-900 dark:text-neutral-100">Perjalanan Kami</h2>
          <ScrollReveal>
          <WobbleCardDemo />
          </ScrollReveal>
        </div>
      </section>

      {/* Yang Kami Berikan Untuk Anda */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="md:grid md:grid-cols-2 md:gap-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">Yang Kami Berikan Untuk Anda</h2>
            <p className="mt-2 md:mt-0 text-neutral-600 dark:text-neutral-300 max-w-xl">Bersatu dalam visi dan kreativitas untuk mendorong pertumbuhan brand Anda secara berkelanjutan.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <HorizontalReveal>
              <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 p-6 h-full transition-all will-change-transform hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 hover:text-white dark:hover:from-purple-500 dark:hover:to-purple-800">
                <IconCrown className="h-8 w-8 text-neutral-300 mb-3 transition-colors group-hover:text-white" />
                <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-white">Innovation at Heart</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 transition-colors group-hover:text-white">Kami merancang strategi dan produk yang fresh, relevan, dan mendorong nilai bisnis—bukan sekadar mengikuti tren.</p>
              </div>
            </HorizontalReveal>
            <HorizontalReveal delay={120}>
              <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 p-6 h-full transition-all will-change-transform hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 hover:text-white dark:hover:from-purple-500 dark:hover:to-purple-800">
                <IconPuzzle2 className="h-8 w-8 text-neutral-300 mb-3 transition-colors group-hover:text-white" />
                <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-white">Strategic Collaboration</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 transition-colors group-hover:text-white">Pendekatan kolaboratif yang memastikan eksekusi efektif dan berkelanjutan untuk kebutuhan unik setiap brand.</p>
              </div>
            </HorizontalReveal>
            <HorizontalReveal delay={240}>
              <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 p-6 h-full transition-all will-change-transform hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 hover:text-white dark:hover:from-purple-500 dark:hover:to-purple-800">
                <IconBulb className="h-8 w-8 text-neutral-300 mb-3 transition-colors group-hover:text-white" />
                <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-white">Excellence Execution</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 transition-colors group-hover:text-white">Standard kualitas tinggi dari perencanaan hingga peluncuran agar hasilnya tajam dan berdampak.</p>
              </div>
            </HorizontalReveal>
          </div>
        </div>
      </section>

      {/* Wobble cards as closing visual section */}
      <Footer />
    </div>
  );
}


