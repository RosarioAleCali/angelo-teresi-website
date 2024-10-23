"use client";

import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import styles from './Hero.module.css';
import { useState, useEffect } from 'react';

import FadeInSection from "@/components/FadeInSection/FadeInSection";

const Hero = () => {
  const [showWords, setShowWords] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const [isFlipping, setIsFlipping] = useState(true);
  const [stopRotation, setStopRotation] = useState(false);

  const words = ['Medicina Estetica', 'Nutrizione', 'Allenamento'];

  useEffect(() => {
    if (showWords) {
      const interval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev < words.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [showWords, words.length]);

  // Ferma l'animazione esattamente dopo 5 rotazioni complete (5 secondi)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipping(false);
      setStopRotation(true); // Ferma la rotazione esattamente dopo 5 secondi
    }, 5000); // 5 secondi per 5 rotazioni
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-tiber text-white w-full flex flex-col items-center justify-center h-[calc(100vh-4.375rem)] md:h-[calc(100vh-5rem)] relative"
    > 
      <FadeInSection>
      <div className="flex flex-col items-center -mt-[4.375rem] md:-mt-20">
        <div className={styles.imageWrapper}>
          <div className={styles.coinContainer}>
            <div
              className={`${styles.coin} ${
                isFlipping ? styles.spin : ''
              } ${stopRotation ? styles.stopAtBack : ''}`}
            >
              <div className={styles.front}>
                <Image
                  src="/logos/white-pictogram.png"
                  alt="White Pictogram"
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.back}>
                <Image
                  src="/logos/white-pictogram.png"
                  alt="Coin Teresi"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
          {/* Immagini ai lati del logo */}
          <Image
            src="/teresi_shape/angelo-personal.png"
            alt="Angelo Personal"
            width={500}    // Specifica larghezza
            height={500}   // Specifica altezza
            className={`${styles.leftImage} hidden md:block ${styles.slideInLeft}`}
          />

          <Image
            src="/teresi_shape/angelo-estetica.png"
            alt="Angelo Estetica"
            width={500}    // Specifica larghezza
            height={500}   // Specifica altezza
            className={`${styles.rightImage} hidden md:block ${styles.slideInRight}`}
          />
        </div>
        
        <div className="w-fit flex flex-col items-center justify-center">
          <div className="text-5xl md:text-7xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Dr. Angelo Teresi')
                  .pauseFor(0)
                  .callFunction(() => {
                    const cursorElement = document.querySelector('.Typewriter__cursor');
                    if (cursorElement) {
                      cursorElement.classList.add(styles.cursorHidden);
                    }
                    setShowWords(true);
                  })
                  .start();
              }}
              options={{
                cursor: '|',
                loop: false,
                delay: 50,
              }}
            />
          </div>
        
          <p className="w-full flex items-center justify-between text-base md:text-2xl">
            {words.map((word, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span
                    className={`font-sans ${visibleWords > index ? styles.fadeIn : styles.hidden}`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    &bull;
                  </span>
                )}
                <span
                  className={visibleWords > index ? styles.fadeIn : styles.hidden}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {word}
                </span>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      </FadeInSection>

    </div>
  );
};

export default Hero;
