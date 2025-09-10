import NavbarDemo from "@/components/navbar-menu-demo";
import SpotlightNewDemo from "@/components/spotlight-new-demo";
import BentoGridSecondDemo from "@/components/bento-grid-demo-2";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Portfolio | Jadiinworks",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <NavbarDemo />
      <section className="">
        <SpotlightNewDemo />
      </section>
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-neutral-900 dark:text-neutral-100">
            Hasil Nyata, Solusi Nyata
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-300 mb-10">
            Portofolio kami adalah refleksi dari komitmen menghadirkan pengalaman terbaik untuk setiap klien.
          </p>
          <BentoGridSecondDemo />
        </div>
      </section>
      <Footer />
    </div>
  );
}
