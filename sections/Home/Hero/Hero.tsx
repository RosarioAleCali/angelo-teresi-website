"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import styles from './Hero.module.css';

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
      id="hero"
      className="bg-tiber text-white w-full flex flex-col items-center justify-start min-h-screen pt-[25vh] z-6"
    >
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
              src="/logos/coin-teresi.png"
              alt="Coin Teresi"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="text-4xl">
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
      <p className="text-sm md:text-2xl">
        {words.map((word, index) => (
          <span
            key={index}
            className={visibleWords > index ? styles.fadeIn : styles.hidden}
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {index > 0 && ' • '}
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Hero;