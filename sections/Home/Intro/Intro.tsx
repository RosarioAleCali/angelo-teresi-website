/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useContext } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ComponentsStatusContext } from '@/context/componentsStatusContext';
import { ComponentsStatusContextType } from '@/types/components-status';
import FadeInSection from "@/components/FadeInSection/FadeInSection";
import styles from './Intro.module.css';

const Intro = () => {
  const { openModal } = useContext(ComponentsStatusContext) as ComponentsStatusContextType;

  return (
    <section id="intro" className="bg-tiber w-full flex flex-col justify-start min-h-screen px-5">
      <FadeInSection>
        <h2 className="text-3xl text-white font-bold mb-4 text-center">
          Raggiungi il tuo Equilibrio con Professionalità
        </h2>
      </FadeInSection>

      <FadeInSection>
        <div className={`text-white mb-5 max-w-4xl mx-auto ${styles.paragraphWithImage}`}>
          <img
            src="/teresi_shape/angelo-estetica.png"
            alt="Angelo Estetica"
            className={styles.floatImageRight}
          />
          <p>
            Sono il Dott. Angelo Teresi, medico chirurgo iscritto all{"\'"}albo, specializzato nel benessere completo a 360° della persona. Il mio obiettivo è aiutarti a raggiungere la migliore versione di te stesso, attraverso un approccio integrato che unisce alimentazione, allenamento e medicina estetica avanzata. Mi occupo infatti di prescrivere diete personalizzate, schede di allenamento su misura ed eseguo specifici trattamenti di medicina estetica, affinché possa aiutarti a raggiungere obiettivi di salute e bellezza, migliorando il tuo equilibrio psicofisico.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className={`text-white mb-5 max-w-4xl mx-auto ${styles.paragraphWithImage}`}>
          <img
            src="/teresi_shape/angelo-personal.png"
            alt="Angelo Personal"
            className={styles.floatImageLeft}
          />
          <p>
            La tua bellezza è il mio impegno. Credo fermamente che la bellezza esteriore sia il riflesso di un equilibrio interiore, ed è per questo che offro percorsi personalizzati per prendermi cura del tuo corpo a 360 gradi. Insieme, possiamo lavorare per raggiungere il tuo benessere completo.
          </p>
        </div>
      </FadeInSection>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <FadeInSection>
          <div className={`${styles.card}`}>
            <Image
              src="/home_card/labbra.png"
              alt="Immagine 1"
              width={432}
              height={200}
              className={styles.cardImage}
              priority
            />
            <div className={`${styles.cardContent} text-tiber`}>
              <h3 className={styles.cardTitle}>Medicina Estetica</h3>
              <p className={styles.cardText}>
                La medicina estetica avanzata è un elemento fondamentale del mio approccio al benessere. I trattamenti che offro, come filler dermici, peeling chimici, biostimolazione e botox, sono pensati per valorizzare e mantenere la tua bellezza naturale, donando freschezza, luminosità e un aspetto più rilassato al viso. Ogni trattamento è studiato per garantire risultati che migliorano l’aspetto esteriore e favoriscono il benessere interiore. Sono qui per aiutarti a valorizzare la tua bellezza naturale con trattamenti personalizzati ed efficaci.
              </p>
              <div className={styles.cardButtons}>
                <button onClick={openModal} className={styles.cardButton}>
                  <FontAwesomeIcon icon={faCalendar} />
                  Prenota
                </button>
                <Link href="/aesthetic-medicine" className={styles.cardButton}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className={`${styles.card}`}>
            <Image
              src="/home_card/nutrizione-allenamento.jpg"
              alt="Immagine 2"
              width={432}
              height={200}
              className={styles.cardImage}
              priority
            />
            <div className={`${styles.cardContent} text-tiber`}>
              <h3 className={styles.cardTitle}>Nutrizione & Allenamento</h3>
              <p className={styles.cardText}>
                La nutrizione e l{"\'"}allenamento sono componenti essenziali per raggiungere il benessere completo. Offro percorsi nutrizionali personalizzati, pensati per rispondere alle tue esigenze specifiche, che si tratti di perdere peso, migliorare le prestazioni fisiche o adottare uno stile di vita più sano. A complemento dell{"\'"}allenamento, progettiamo schede su misura per aiutarti a migliorare forza, resistenza e benessere generale. Che tu preferisca allenarti in studio o a casa, il mio approccio mira a massimizzare l{"\'"}efficacia degli esercizi, riducendo al minimo il rischio di infortuni.
              </p>
              <div className={styles.cardButtons}>
                <button onClick={openModal} className={styles.cardButton}>
                  <FontAwesomeIcon icon={faCalendar} />
                  Prenota
                </button>
                <Link href="/nutrition-and-exercising" className={styles.cardButton}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Intro;
