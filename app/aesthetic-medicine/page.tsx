"use client"

import Reviews from "@/sections/Reviews/Reviews";
import Treatments from "@/sections/Treatments/Treatments";
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll'; 

export default function AestheticMedicine() {

  useFadeInOnScroll();

  return (
    <div
      className="fadeInElement flex flex-col w-full items-center justify-between min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] py-10 px-6 md:px-14 bg-tiber"
    >
      <h2 className="fadeInElement text-3xl text-white font-bold mb-4 text-center">
        Medicina Estetica
      </h2>
      <p className="fadeInElement text-white mb-4 max-w-4xl">
        Nel mio approccio al benessere, la Medicina Estetica Avanzata gioca un ruolo fondamentale nel valorizzare e mantenere la tua bellezza naturale. Credo che ogni trattamento debba essere in perfetta armonia con la tua unicità, per garantire risultati che siano tanto efficaci quanto naturali. Grazie a tecniche all{"\'"}avanguardia e a prodotti di alta qualità, i miei trattamenti sono mirati a migliorare l{"\'"}aspetto del viso e del corpo, donandoti un{"\'"}immagine fresca e giovane. <br /><br />Offro una varietà di trattamenti, tra cui filler dermici per ridefinire i volumi e correggere le imperfezioni evidenziando la tua bellezza naturale, peeling chimici per una pelle liscia, luminosa e uniforme eliminando macchie e segni del tempo, biostimolazione per stimolare la produzione naturale di collagene ed elastina e restituire tonicità e luminosità alla pelle, e botox per attenuare le rughe d{"\'"}espressione mantenendo la naturalezza delle espressioni. <br /><br />Il mio obiettivo è offrirti un percorso completo e personalizzato, in cui ogni trattamento risponde alle tue esigenze specifiche, garantendo risultati armoniosi e duraturi.
      </p>
      <Treatments />
      <Reviews />
    </div>
  );
}
