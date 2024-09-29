"use client";

import React, { useEffect } from 'react';
import Image from "next/image";
import styles from './Intro.module.css';

const Intro = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.fadeInElement}`);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInVisible);
          } else {
            entry.target.classList.remove(styles.fadeInVisible);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="intro" className="bg-tiber text-white w-full flex flex-col justify-start min-h-screen px-5">
      <h2 className={`${styles.fadeInElement} text-3xl font-bold mb-4 text-center`}>
      Raggiungi il tuo Equilibrio con Professionalità
      </h2>
      <p className={`text-lg text-justify mb-5 px-1 sm:px-6 md:px-8 lg:px-12 max-w-3xl mx-auto ${styles.fadeInElement}`}>
        Il Dott.Angelo Teresi è un medico chirurgo iscritto all'albo, specializzato nel benessere completo a 360° della persona. Si occupa infatti di prescrivere non solo diete personalizzate, schede di allenamento su misura ma esegue anche specifici trattamenti di medicina estetica affinché possa aiutare i suoi pazienti a raggiungere obiettivi in primis di salute e poi bellezza, migliorando il loro equilibrio psicofisico.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`${styles.card} ${styles.fadeInElement}`}>
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

        <div className={`${styles.card} ${styles.fadeInElement}`}>
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
