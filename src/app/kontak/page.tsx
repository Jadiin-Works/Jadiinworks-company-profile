import NavbarDemo from "@/components/navbar-menu-demo";
import Footer from "@/components/ui/footer";
import { Spotlight } from "@/components/ui/spotlight-new";
import { IconBrandWhatsapp, IconMail, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import ContactForm from "@/components/ui/contact-form";
import Image from "next/image";
import SpotlightKontakDemo from "@/components/spotlight-kontak-demo";

export const metadata = {
  title: "Kontak | Jadiinworks",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <NavbarDemo />

      <section className="">
        <SpotlightKontakDemo />
      </section>
      
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/50 dark:bg-black/50">
              <h2 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Informasi Kontak</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">Klik salah satu untuk menghubungi kami.</p>
              
              {/* Contact Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Assets/person4.jpg"
                  alt="Kontak Jadiin Works"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="max-w-3xl rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-black/70 shadow-sm">
                <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  <li>
                    <a
                      href="https://wa.me/+6287775563789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-6 md:p-8 transition-colors hover:bg-neutral-50/80 dark:hover:bg-neutral-900/60"
                      aria-label="WhatsApp"
                      title="WhatsApp"
                    >
                      <IconBrandWhatsapp className="h-7 w-7 md:h-10 md:w-10 text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">WhatsApp</span>
                        <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">+62 877-7556-3789</span>
                      </div>
                      <span className="sr-only">WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:jadiinworks@gmail.com"
                      className="group flex items-center gap-4 p-6 md:p-8 transition-colors hover:bg-neutral-50/80 dark:hover:bg-neutral-900/60"
                      aria-label="Email"
                      title="Email"
                    >
                      <IconMail className="h-7 w-7 md:h-10 md:w-10 text-neutral-700 dark:text-neutral-200 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">Email</span>
                        <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">jadiinworks@gmail.com</span>
                      </div>
                      <span className="sr-only">Email</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/jadiinworks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-6 md:p-8 transition-colors hover:bg-neutral-50/80 dark:hover:bg-neutral-900/60"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <IconBrandInstagram className="h-7 w-7 md:h-10 md:w-10 text-pink-600 dark:text-pink-500 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">Instagram</span>
                        <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">@jadiinworks</span>
                      </div>
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li> 
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/50 dark:bg-black/50">
              <h2 className="text-2xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Formulir Kontak</h2>
              <ContactForm className="mt-2 grid gap-4" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
