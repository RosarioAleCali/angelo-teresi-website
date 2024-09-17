"use client";

import Image from "next/image";
import Typewriter from 'typewriter-effect';
import styles from './Hero.module.css';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [showWords, setShowWords] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);

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

  return (
    <div
      id="hero"
      className="bg-tiber text-white w-full flex flex-col items-center justify-start min-h-screen pt-[25vh]"
    >
      <Image
        src="/logos/white-pictogram.png"
        alt="Dr. Angelo Teresi Logo"
        className="transition-all duration-300 ease-in-out mb-4"
        width={180}
        height={180}
        priority
      />
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
            {index > 0 && ' \u2022 '}
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Hero;