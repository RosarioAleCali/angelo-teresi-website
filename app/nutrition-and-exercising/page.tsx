"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "@/sections/Reviews/Reviews";
import FadeInSection from '@/components/FadeInSection/FadeInSection';
import BookingButton from '@/components/BookingButton/BookingButton';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import useIsMobile from '@/hooks/useIsMobile';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const nutrition_images = [
  "/nutrizione_allenamento/nutrizione-1.jpg",
  "/nutrizione_allenamento/nutrizione-2.jpg"
];

export default function NutritionAndExercising() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % nutrition_images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const isMobile = useIsMobile();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    touchMove: false,
  };

  const bodyTransformations = [
    {
      beforeImage: '/before_after/front-emanuele-prima.png',
      afterImage: '/before_after/front-emanuele-dopo.png',
    },
    {
      beforeImage: '/before_after/front-christian-prima.png',
      afterImage: '/before_after/front-christian-dopo.png',
    },
  ];
  

  return (
    <>
      <Head>
        <meta property="og:title" content="Nutrizione e Allenamento - Dr. Angelo Teresi" key="title" />
      </Head>
      <div className="flex flex-col justify-start items-center w-full min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] bg-tiber text-black py-10 px-6 md:px-14">
        <FadeInSection>
          <h2 className="text-3xl text-white font-bold mb-4 text-center">
            Nutrizione e Allenamento
          </h2>
        </FadeInSection>

        <FadeInSection>
          <p className="text-white text-lg mb-4 md:max-w-4xl">
            La <strong>nutrizione e l{"'"}allenamento</strong> sono fondamentali per un benessere duraturo. Offro piani nutrizionali personalizzati per perdere peso, migliorare le prestazioni o adottare uno stile di vita sano, garantendo un apporto bilanciato di nutrienti. Progetto schede di allenamento su misura per diversi livelli e obiettivi, massimizzando l{"'"}efficacia degli esercizi e riducendo il rischio di infortuni. Combinando alimentazione e allenamento, supporto il benessere fisico e lo sviluppo di abitudini sostenibili.
          </p>
        </FadeInSection>

        <div className="w-full max-w-4xl">
          {/* Versione Mobile */}
          <div className="flex flex-col md:hidden">
            {/* Immagine Animata con Hover Effect */}
            <FadeInSection className="mb-6">
              <div className="relative w-full border-4 border-[#31ACA6] rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src={nutrition_images[currentImage]}
                      alt="Nutrizione"
                      width={2949}
                      height={4128}
                      priority
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeInSection>

            {/* Testo Nutrizione */}
            <FadeInSection className="text-white text-lg mb-6">
              <p>
                La <strong>nutrizione</strong> è essenziale per un benessere duraturo. Offro piani nutrizionali personalizzati per perdere peso, migliorare le prestazioni o adottare uno stile di vita sano, garantendo un apporto bilanciato di nutrienti. Supporto lo sviluppo di abitudini alimentari sostenibili per migliorare la qualità di vita e il benessere fisico.
              </p>
            </FadeInSection>

            {/* Immagine Statica */}
            <FadeInSection className="mb-6">
              <div className="relative w-full border-4 border-[#31ACA6] rounded-lg overflow-hidden">
                <Image
                  src="/Teresi2.jpg"
                  alt="Allenamento"
                  width={2949}
                  height={4128}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInSection>

            {/* Testo Allenamento */}
            <FadeInSection className="text-white text-lg">
              <p>
                L{"'"}<strong>allenamento</strong> è fondamentale per il benessere completo. Progetto schede su misura, adattabili al tuo livello di forma fisica e obiettivi, sia per aumentare massa muscolare, migliorare la resistenza o sentirti meglio nel tuo corpo. Ogni programma è studiato per massimizzare l{"'"}efficacia degli esercizi e ridurre il rischio di infortuni, sia in studio che a casa. L{"'"}obiettivo è sviluppare una routine integrata nel tuo stile di vita, migliorando salute fisica e benessere generale.
              </p>
            </FadeInSection>

            {/* BookingButton Solo per Mobile */}
            <FadeInSection className="flex justify-center mt-10">
              <BookingButton size='lg' />
            </FadeInSection>
          </div>

          {/* Versione Desktop */}
          <FadeInSection className="hidden md:block md:aspect-square">
            <div className="grid grid-cols-2 grid-rows-2 border-4 rounded-lg border-[#31ACA6] h-full">

              {/* Immagine Animata con Hover Effect */}
              <div className="relative w-full h-full border-[#31ACA6] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={nutrition_images[currentImage]}
                      alt="Nutrizione"
                      width={2949}
                      height={4128}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <BookingButton />
                  </div>
                </div>
              </div>

              {/* Testo Nutrizione */}
              <div className="text-white p-6 flex items-center border-l-4 border-[#31ACA6]">
                <p className="text-lg">
                  La <strong>nutrizione</strong> è essenziale per un benessere duraturo. Offro piani nutrizionali personalizzati per perdere peso, migliorare le prestazioni o adottare uno stile di vita sano, garantendo un apporto bilanciato di nutrienti. Supporto lo sviluppo di abitudini alimentari sostenibili per migliorare la qualità di vita e il benessere fisico.
                </p>
              </div>

              {/* Testo Allenamento */}
              <div className="text-white p-6 flex items-center border-t-4 border-[#31ACA6]">
                <p className="text-lg">
                  L{"'"}<strong>allenamento</strong> è fondamentale per il benessere completo. Progetto schede su misura, adattabili al tuo livello di forma fisica e obiettivi, sia per aumentare massa muscolare, migliorare la resistenza o sentirti meglio nel tuo corpo. Ogni programma è studiato per massimizzare l{"'"}efficacia degli esercizi e ridurre il rischio di infortuni, sia in studio che a casa. L{"'"}obiettivo è sviluppare una routine integrata nel tuo stile di vita, migliorando salute fisica e benessere generale.
                </p>
              </div>

              {/* Immagine Statica con Hover Effect */}
              <div className="relative w-full h-full border-l-4 border-t-4 border-[#31ACA6] group">
                <Image
                  src="/Teresi2.jpg"
                  alt="Allenamento"
                  width={2949}
                  height={4128}
                  priority
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <BookingButton />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <section id="body-transformations" className="w-full flex flex-col justify-start px-5 py-20">
          <div className="w-full md:max-w-6xl md:mx-auto">
            <FadeInSection>
              <h2 className="text-3xl text-white font-bold mb-4 text-center">
                Body Transformations
              </h2>
            </FadeInSection>

            <FadeInSection>
              <Slider {...settings}>
                {bodyTransformations.map((transformation, index) => (
                  <div className="w-full p-5" key={index}>
                    <div className="w-full flex flex-col items-center">
                      <BeforeAfterSlider
                        beforeImage={transformation.beforeImage}
                        afterImage={transformation.afterImage}
                        beforeLabel="Prima"
                        afterLabel="Dopo"
                        className="h-[500px] md:h-[800px]"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </FadeInSection>

          </div>
        </section>

        <Reviews />
      </div>
    </>
  );
}
