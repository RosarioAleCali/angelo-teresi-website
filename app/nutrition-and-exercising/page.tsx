"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "@/sections/Reviews/Reviews";
import FadeInSection from '@/components/FadeInSection/FadeInSection';

const nutrition_images = [
  "/nutrizione_allenamento/nutrizione-1.jpg",
  "/nutrizione_allenamento/nutrizione-2.jpg"
];

export default function NutritionAndExercising() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % nutrition_images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
            La nutrizione e l{"'"}allenamento sono elementi fondamentali e complementari per raggiungere un benessere duraturo. Offro piani nutrizionali personalizzati per soddisfare le esigenze individuali, aiutando le persone a perdere peso, migliorare le prestazioni fisiche o adottare uno stile di vita sano, garantendo un apporto bilanciato di nutrienti. Allo stesso modo, progetto schede di allenamento su misura, adattabili a diversi livelli di forma fisica e obiettivi personali, che mirano a massimizzare l{"'"}efficacia degli esercizi e a ridurre il rischio di infortuni. Combinando una corretta alimentazione con un allenamento efficace, mi impegno a supportare il benessere fisico e la qualità di vita di ogni persona, sviluppando abitudini sostenibili e integrate nello stile di vita quotidiano.
          </p>
        </FadeInSection>

        <FadeInSection className="flex flex-col md:flex-row md:gap-4 mb-6 md:max-w-4xl">

          <FadeInSection className="md:w-1/2 w-full flex justify-center">
              <div className="relative w-full h-auto md:max-w-[80%] border-solid border-white border-4 rounded-lg overflow-hidden">
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
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
          </FadeInSection>

          <FadeInSection className="text-white text-lg mt-4 md:w-1/2 w-full md:pl-4">
            La nutrizione e l{"'"}allenamento sono elementi fondamentali e complementari per raggiungere un benessere duraturo. Offro piani nutrizionali personalizzati per soddisfare le esigenze individuali, aiutando le persone a perdere peso, migliorare le prestazioni fisiche o adottare uno stile di vita sano, garantendo un apporto bilanciato di nutrienti. Allo stesso modo, progetto schede di allenamento su misura, adattabili a diversi livelli di forma fisica e obiettivi personali, che mirano a massimizzare l{"'"}efficacia degli esercizi e a ridurre il rischio di infortuni. Combinando una corretta alimentazione con un allenamento efficace, mi impegno a supportare il benessere fisico e la qualità di vita di ogni persona, sviluppando abitudini sostenibili e integrate nello stile di vita quotidiano.
          </FadeInSection>

        </FadeInSection>

        <FadeInSection className="flex flex-col-reverse md:flex-row md:gap-4 md:max-w-4xl">
          
          <FadeInSection className="text-white text-lg mt-4 md:mt-0 md:w-1/2 w-full">
            L{"'"}allenamento è un altro elemento essenziale del percorso verso il benessere completo. Progetto schede di allenamento su misura, adattabili al tuo livello di forma fisica e ai tuoi obiettivi personali. Che tu voglia aumentare la massa muscolare, migliorare la resistenza o semplicemente sentirti meglio nel tuo corpo, ogni programma è studiato nei minimi dettagli per massimizzare l{"'"}efficacia degli esercizi e ridurre al minimo il rischio di infortuni. Offro soluzioni adatte sia per chi preferisce allenarsi in studio sia per chi preferisce farlo a casa, garantendo un allenamento sicuro e produttivo. Il mio obiettivo è aiutarti a sviluppare una routine di allenamento che diventi parte integrante del tuo stile di vita, contribuendo a migliorare la tua salute fisica e il tuo benessere generale.
          </FadeInSection>

          <FadeInSection className="md:w-1/2 w-full flex justify-center">
            <div className="relative w-full h-auto md:max-w-[80%] border-solid border-white border-4 rounded-lg overflow-hidden">
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
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeInSection>

        </FadeInSection>

        <Reviews />
      </div>
    </>
  );
}