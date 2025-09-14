"use client";
import { HeroParallax } from "./components/ui/aceternity/hero/ParallaxHero";
import React, { useEffect, useState } from "react";
import { AppleCardsCarouselDemo } from "./components/ui/aceternity/carousel/AppleCarousel";
import { Scrollama, Step } from "react-scrollama";
import { Browser } from "./components/device/Browser";
import PosWeb from "public/assets/porto-web/pos1.png";
import CyberArmy from "public/assets/porto-web/CyberArmy.png";
import Footer from "@/components/ui/footer";
import LogoJadiin from "public/assets/Logomark.png";
import Image from "next/image";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { motion } from "motion/react";

const products = [
  { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: '/assets/porto-web/pos1.png' },
  { title: "Cursor", link: "https://cursor.so", thumbnail: '/assets/porto-web/crypo-original.png' },
  { title: "Rogue", link: "https://userogue.com", thumbnail: '/assets/porto-web/absensy2.png' },
  { title: "Editorially", link: "https://editorially.org", thumbnail: '/assets/porto-uiux/damai1.png' },
  { title: "Editrix AI", link: "https://editrix.ai", thumbnail: '/assets/porto-uiux/sonsaur2.png' },
  { title: "Pixel Perfect", link: "https://app.pixelperfect.quest", thumbnail: '/assets/porto-uiux/but1.png' },
  { title: "Algochurn", link: "https://algochurn.com", thumbnail: '/assets/porto-uiux/laporkuy1.png' },
  { title: "Aceternity UI", link: "https://ui.aceternity.com", thumbnail: '/assets/porto-mobile/kasirkita1.png' },
  { title: "Tailwind Master Kit", link: "https://tailwindmasterkit.com", thumbnail: '/assets/porto-web/Jadiin Portfolio (16).png' },
  { title: "SmartBridge", link: "https://smartbridgetech.com", thumbnail: '/assets/porto-web/Jadiin Portfolio (8).png' },
  { title: "Renderwork Studio", link: "https://renderwork.studio", thumbnail: '/assets/porto-web/khb1.png' },
  { title: "Creme Digital", link: "https://cremedigital.com", thumbnail: '/assets/porto-mobile/kolabcenter1.png' },
  { title: "Golden Bells Academy", link: "https://goldenbellsacademy.com", thumbnail: '/assets/porto-uiux/uplink1.png' },
  { title: "Invoker Labs", link: "https://invoker.lol", thumbnail: '/assets/porto-uiux/mice.jpeg' },
  { title: "E Free Invoice", link: "https://efreeinvoice.com", thumbnail: '/assets/porto-uiux/sorgum.jpeg' },
];

// STEP 2: Siapkan konten untuk setiap step dalam sebuah array
const stepContents = [
  {
    title: "Step 0",
    description: "No matter the challenge, we solve it.",
  },
  {
    title: "Website Development",
    description: "Crafting Websites, Delivering Answers.",
    bg: "bg-secondary/20",
    titleColor: "text-secondary",
    descColor: "text-black",
    image: PosWeb,
  },
  {
    title: "UI/UX Design",
    description: "Designing Experiences, Not Just Interfaces.",
    bg: "bg-blueGreen/20",
    titleColor: "text-secondary",
    descColor: "text-black",
    image: CyberArmy
  },
  {
    title: "Support & Maintenance",
    description: "Reliable Support, Seamless Maintenance.",
    bg: "bg-secondary/20",
    titleColor: "text-secondary",
    descColor: "text-black"
  },
];

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentStepIndex2, setCurrentStepIndex2] = useState(null);
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [webAnimationData, setWebAnimationData] = useState(null);
  const [uiAnimationData, setUiAnimationData] = useState(null);
  const [supportAnimationData, setSupportAnimationData] = useState(null);

  const animationDataIndex = [
    null,
    webAnimationData,
    uiAnimationData,
    supportAnimationData
  ]

  useEffect(() => {
    fetch("/animations/hero-webdev.json")
      .then((response) => response.json())
      .then((data) => setWebAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  useEffect(() => {
    fetch("/animations/hero-uiux.json")
      .then((response) => response.json())
      .then((data) => setUiAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  useEffect(() => {
    fetch("/animations/hero-mobiledev.json")
      .then((response) => response.json())
      .then((data) => setSupportAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    console.log(data);
  };

  const onStepProgress = ({ data, progress }) => {
    console.log(data, progress);
    setProgress(progress);
  };
  return (
    <div className={`${currentStepIndex2 == 0 && progress2 > 0 ? '' : 'bg-secondary/20'} transition-colors duration-500 ease-in-out`}>
      <main className="flex flex-col gap-30 snap-y snap-mandatory overflow-x-hidden">
        {/* Hero Parallax Section */}
        <HeroParallax products={products} />
      </main>

      {/* Wrapper untuk bagian scrollytelling */}
      <div className="relative">

        {/* STEP 1: Buat Kontainer Teks yang Fixed */}
        {currentStepIndex !== null && (
          (currentStepIndex === 3 ? progress < 1 : progress >= 0 && progress < 1)
        ) && <div
          className={`${stepContents[currentStepIndex]?.bg ? `${stepContents[currentStepIndex].bg} w-screen h-screen flex flex-col items-center justify-center` : ''} fixed top-1/2 left-1/2 2xl:text-8xl md:text-5xl font-semibold -translate-x-1/2 -translate-y-1/2 transition-all p-6 text-secondary text-center z-10`}
          style={{
            opacity: currentStepIndex == 0 ? progress * 2 : currentStepIndex == stepContents.length - 1 ? (progress - 1) * -1 : currentStepIndex !== null && !(currentStepIndex == 0 && progress == 0) ? 1 : 0,
            pointerEvents: currentStepIndex !== null ? 'auto' : 'none', // Menonaktifkan interaksi saat tidak terlihat
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
            {currentStepIndex !== null && (
              <>
                {currentStepIndex == 0 && <p>{stepContents[currentStepIndex].description}</p>}
                {currentStepIndex !== 0 && (
                  <>
                    <h1 className={`text-4xl font-semibold ${stepContents[currentStepIndex].titleColor} dark:text-white mb-10`}>
                      {stepContents[currentStepIndex].title} <br />
                      <span className={`text-2xl md:text-[4rem] ${stepContents[currentStepIndex].descColor} font-bold mt-1 leading-none`}>
                        {stepContents[currentStepIndex].description}
                      </span>
                    </h1>

                    <Browser src={animationDataIndex[currentStepIndex]} alt="hero" />
                  </>
                )}
              </>
            )}
          </div>}

        {/* Bagian Scrollama yang sekarang hanya menjadi trigger */}
        <Scrollama onStepEnter={onStepEnter} offset={0.6} onStepProgress={onStepProgress}>
          {stepContents.map((_, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              {/* STEP 4: Sederhanakan komponen Step */}
              {/* Div ini hanya berfungsi sebagai area pemicu yang tinggi. */}
              {/* Kita beri background samar untuk debugging jika perlu. */}
              <div
                style={{
                  height: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'transparent'
                }}
              >
                Trigger for Step {stepIndex}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>

      <main className="flex flex-col gap-30 snap-y snap-mandatory overflow-x-hidden">
        {/* Carousel Section */}
        <AppleCardsCarouselDemo />

        <section className="my-20 relative">
          <div className="container z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
            >
              <div className="flex justify-center">
                <div className="border py-1 px-4 rounded-lg">Testimonials</div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                What our users say
              </h2>
              <p className="text-center mt-5 opacity-75">
                See what our customers have to say about us.
              </p>
            </motion.div>

            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
              <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={21} />
            </div>
          </div>
        </section>
      </main>

      <div className="relative">
        {/* Bagian Scrollama yang sekarang hanya menjadi trigger */}
        <Scrollama onStepEnter={() => {
          setCurrentStepIndex2(0);
          console.log(currentStepIndex2);
        }} onStepProgress={({ progress }) => {
          setProgress2(progress);
          console.log(progress);
        }} offset={0.5}>
          <Step data={0} key={0}>
            <div
              style={{
                height: '10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'transparent'
              }}
            >
              Trigger for Step {4}
            </div>
          </Step>
        </Scrollama>
      </div>

      <div className="flex flex-col items-center justify-center h-screen text-center mb-20 px-6">
        <Image src={LogoJadiin} alt="Jadiinworks Logo" width={100} height={100} className="mb-6" />
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Let's Build Something Amazing Together</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">Ready to elevate your digital presence? Contact us today to discuss your project and discover how we can help you achieve your goals.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl backdrop-blur-xl bg-blueGreen/50 dark:bg-blueGreen/50 border border-white/20 dark:border-white/10 px-6 py-3 text-2xl font-medium text-black dark:text-white transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30 shadow-lg"
          style={{
            boxShadow: '0 2px 8px 0 rgba(52, 57, 131, 0.15)',
          }}
        >
          <IconBrandWhatsapp />
          <span className="hidden sm:inline">Whatsapp</span>
        </Link>
      </div>

      <div className="mt-96">
        <Footer />
      </div>
    </div >
  );
}
