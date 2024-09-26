"use client"

import React, { useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import styles from './Intro.module.css';

const Intro = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible); // Aggiunge la classe per l'animazione
          } else {
            entry.target.classList.remove(styles.cardVisible); // Rimuove la classe quando esce dalla viewport
          }
        });
      },
      {
        threshold: 0.1, // Attiva quando il 10% della card è visibile
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [setCardRef]);

  return (
    <section id="intro" className="bg-tiber text-white w-full flex flex-col items-center justify-start min-h-screen px-5">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className={styles.card} ref={(el) => setCardRef(el, 0)}>
          <Image
            src="/imgs_menu_items/labbra.png"
            alt="Immagine 1"
            width={432}
            height={200}
            className={styles.cardImage}
            priority
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Medicina Estetica</h3>
            <p className={styles.cardText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className={styles.cardButtons}>
              <button className={styles.cardButton}>Prenota</button>
              <button className={styles.cardButton}>Scopri di più</button>
            </div>
          </div>
        </div>

        <div className={styles.card} ref={(el) => setCardRef(el, 1)}>
          <Image
            src="/imgs_menu_items/nutrizione-b.png"
            alt="Immagine 2"
            width={432}
            height={200}
            className={styles.cardImage}
            priority
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Nutrizione & Allenamento</h3>
            <p className={styles.cardText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className={styles.cardButtons}>
              <button className={styles.cardButton}>Prenota</button>
              <button className={styles.cardButton}>Scopri di più</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;