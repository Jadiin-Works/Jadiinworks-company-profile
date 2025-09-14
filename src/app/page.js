"use client";
import { HeroParallax } from "./components/ui/aceternity/hero/ParallaxHero";
import React, { useState } from "react";
import { AppleCardsCarouselDemo } from "./components/ui/aceternity/carousel/AppleCarousel";
import { Scrollama, Step } from "react-scrollama";
import { Browser } from "./components/device/Browser";
import CrypoWeb from "@/../public/assets/porto-web/pos1.png";
import CyberArmy from "@/../public/assets/porto-web/CyberArmy.png";
import Footer from "@/components/ui/footer";

const products = [
  { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
  { title: "Cursor", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
  { title: "Rogue", link: "https://userogue.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png" },
  { title: "Editorially", link: "https://editorially.org", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png" },
  { title: "Editrix AI", link: "https://editrix.ai", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png" },
  { title: "Pixel Perfect", link: "https://app.pixelperfect.quest", thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png" },
  { title: "Algochurn", link: "https://algochurn.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png" },
  { title: "Aceternity UI", link: "https://ui.aceternity.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png" },
  { title: "Tailwind Master Kit", link: "https://tailwindmasterkit.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png" },
  { title: "SmartBridge", link: "https://smartbridgetech.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png" },
  { title: "Renderwork Studio", link: "https://renderwork.studio", thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png" },
  { title: "Creme Digital", link: "https://cremedigital.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png" },
  { title: "Golden Bells Academy", link: "https://goldenbellsacademy.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png" },
  { title: "Invoker Labs", link: "https://invoker.lol", thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png" },
  { title: "E Free Invoice", link: "https://efreeinvoice.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png" },
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
    image: CrypoWeb
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

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentStepIndex2, setCurrentStepIndex2] = useState(null);
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);

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
    <div className={`${currentStepIndex2 == 0 && progress2 > 0 ? 'bg-secondary/20' : ''} transition-colors duration-500 ease-in-out`}>
      <main className="flex flex-col gap-30 snap-y snap-mandatory overflow-x-hidden">
        {/* Hero Parallax Section */}
        <HeroParallax products={products} />
      </main>

      {/* Wrapper untuk bagian scrollytelling */}
      <div className="relative">

        {/* STEP 1: Buat Kontainer Teks yang Fixed */}
        <div
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

                  <Browser src={stepContents[currentStepIndex].image} alt="hero" />
                </>
              )}
            </>
          )}
        </div>

        {/* Bagian Scrollama yang sekarang hanya menjadi trigger */}
        <Scrollama onStepEnter={onStepEnter} offset={0.6} onStepProgress={onStepProgress} debug>
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
      </main>

      <div className="relative">
        {/* Bagian Scrollama yang sekarang hanya menjadi trigger */}
        <Scrollama onStepEnter={() => {
          setCurrentStepIndex2(0);
          console.log(currentStepIndex2);
        }} onStepProgress={({ progress }) => {
          setProgress2(progress);
          console.log(progress);
        }} offset={0.2} debug>
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

      <div className="mt-96">
        <Footer />
      </div>
    </div >
  );
}
