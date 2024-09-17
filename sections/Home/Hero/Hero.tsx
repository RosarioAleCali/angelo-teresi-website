"use client"

import Image from "next/image";
import useIsMobile from '@/hooks/useIsMobile';

const Hero = () => {
  const isMobile = useIsMobile(); 

  return (
    <div
      id="hero"
      className="bg-tiber text-white w-full flex flex-col items-center justify-start min-h-screen pt-[25vh]"
    >
      <Image
        src="/logos/white-pictogram.png"
        alt="Dr. Angelo Teresi Logo"
        className="transition-all duration-300 ease-in-out"
        width={180}
        height={180}
        priority
      />
      <p className="text-4xl">Dr. Angelo Teresi</p>
      <p className={`${isMobile ? 'text-xl' : 'text-2xl'}`}>
        Medicina Estetica | Nutrizione | Allenamento
      </p>
    </div>
  );
};

export default Hero;
