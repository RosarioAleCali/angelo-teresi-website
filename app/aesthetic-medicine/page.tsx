"use client"

import Head from "next/head";
import Reviews from "@/sections/Reviews/Reviews";
import Treatments from "@/sections/Treatments/Treatments"; 

import FadeInSection from "@/components/FadeInSection/FadeInSection";
import BookingButton from "@/components/BookingButton/BookingButton";

export default function AestheticMedicine() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Medicina Estetica - Dr. Angelo Teresi" key="title" />
      </Head>
      <FadeInSection>
        <div
          className="flex flex-col w-full items-center justify-between min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] py-10 px-6 md:px-14 bg-tiber"
        >
          <FadeInSection>
          <h2 className="text-3xl text-white font-bold mb-4 text-center">
            Medicina Estetica
          </h2>
          </FadeInSection>

          <FadeInSection>
            <p className="text-white mb-4 max-w-4xl leading-relaxed text-lg">
              La Medicina Estetica Avanzata valorizza la tua bellezza naturale, con trattamenti armonizzati alla tua unicità per risultati efficaci e naturali. Utilizzo tecniche all{"\'"}avanguardia e prodotti di alta qualità per migliorare l{"\'"}aspetto di viso e corpo, donando un{"\'"}immagine fresca e giovane
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="text-white mb-4 max-w-4xl leading-relaxed text-lg">
            Offro trattamenti come filler dermici per ridefinire i volumi, peeling chimici per una pelle liscia e uniforme, biostimolazione per stimolare collagene ed elastina, e botox per attenuare le rughe mantenendo la naturalezza delle espressioni
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="text-white mb-4 max-w-4xl leading-relaxed text-lg">
              Il mio obiettivo è offrirti un percorso completo e personalizzato, in cui ogni trattamento risponde alle tue esigenze specifiche, garantendo risultati armoniosi e duraturi.
            </p>
          </FadeInSection>

          <Treatments />

          <FadeInSection className="flex justify-center mt-10">
            <BookingButton size='lg' />
          </FadeInSection>

          <Reviews />
        </div>
      </FadeInSection>
    </>
  );
}
