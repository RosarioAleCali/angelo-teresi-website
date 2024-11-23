"use client"

import React from 'react';
import FadeInSection from '@/components/FadeInSection/FadeInSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import { treatmentDetails } from '@/constants';

const Results = () => {
  return (
    <section id="results" className="bg-tiber w-full flex flex-col justify-start px-5 py-20">
      {/* Wrapper per impostare la larghezza massima su desktop */}
      <div className="w-full md:max-w-6xl md:mx-auto">
        <FadeInSection>
          <h2 className="text-3xl text-white font-bold mb-4 text-center">
            Alcuni Risultati
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <FadeInSection>
            <BeforeAfterSlider
              beforeImage={treatmentDetails[2].immagini[0]}
              afterImage={treatmentDetails[2].immagini[1]}
              initialPosition={treatmentDetails[2].initialPosition}
              beforeLabel="Prima"
              afterLabel="Dopo"
              className="h-80 md:h-[500px]"
            />
            <h3 className="text-white font-bold mt-4">{treatmentDetails[2].nome}</h3>
          </FadeInSection>

          <FadeInSection>
            <BeforeAfterSlider
              beforeImage={treatmentDetails[8].immagini[0]}
              afterImage={treatmentDetails[8].immagini[1]}
              initialPosition={treatmentDetails[8].initialPosition}
              beforeLabel="Prima"
              afterLabel="Dopo"
              className="h-80 md:h-[500px]"
            />
            <h3 className="text-white font-bold mt-4">{treatmentDetails[8].nome}</h3>
          </FadeInSection>

          <FadeInSection>
            <BeforeAfterSlider
              beforeImage="/before_after/front-emanuele-prima.png"
              afterImage="/before_after/front-emanuele-dopo.png"
              beforeLabel="Prima"
              afterLabel="Dopo"
              className="h-[500px] md:h-[800px]"
            />
            <h3 className="text-white font-bold mt-4">Body Transformation</h3>
          </FadeInSection>

          <FadeInSection>
            <BeforeAfterSlider
              beforeImage="/before_after/front-christian-prima.png"
              afterImage="/before_after/front-christian-dopo.png"
              beforeLabel="Prima"
              afterLabel="Dopo"
              className="h-[500px] md:h-[800px]"
            />
            <h3 className="text-white font-bold mt-4">Body Transformation</h3>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Results;
