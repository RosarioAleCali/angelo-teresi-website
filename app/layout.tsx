"use client"

import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { ReviewsProvider } from '@/context/reviewsContext';
import ComponentsStatusProvider from "@/context/componentsStatusContext";
import Header from '@/components/Header/Header';
import BookingModal from '@/components/BookingModal/BookingModal';
import MobileBookingButton from '@/components/MobileBookingButton/MobileBookingButton'
import ScrollDownIndicator from '@/components/ScrollDownIndicator/ScrollDownIndicator';
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

// To prevent icons from becoming huge on page refresh
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa i CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// Cookie import
import { useEffect } from 'react';
import CookieConsent from '@/components/CookieConsent/CookieConsent';
import MetaPixel from "@/components/MetaPixel/MetaPixel";
import { initializeCookieManager } from '@/utils/cookieManager';

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dr. Angelo Teresi | Medicina Estetica - Nutrizione - Allenamento",
  description: "Il Dr. Angelo Teresi offre servizi di medicina estetica e nutrizione personalizzata per migliorare la bellezza naturale e il benessere.",
  openGraph: {
    title: "Dr. Angelo Teresi | Medicina Estetica - Nutrizione - Allenamento",
    description: "Il Dr. Angelo Teresi offre servizi di medicina estetica e nutrizione personalizzata per migliorare la bellezza naturale e il benessere.",
    url: "https://www.drangeloteresi.com/",
    images: "https://www.drangeloteresi.com/cover.png",
    siteName: "Dr. Angelo Teresi | Medicina Estetica - Nutrizione - Allenamento",
    type: "website",
  },
  icons: {
    icon: "https://www.drangeloteresi.com/favicon.ico",
  },
  keywords: [
    "medicina estetica",
    "nutrizione",
    "allenamento",
    "Dr. Angelo Teresi",
    "filler dermici",
    "peeling chimici",
    "botox",
    "biostimolazione",
    "Palermo",
    "online",
    "medico chirurgo estetico",
    "piani alimentari",
    "schede allenamento",
    "consulente scientifico",
    "net integratori"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    initializeCookieManager();
  }, []);

  const handleCookieAccept = () => {
    // Ricarica la pagina per attivare il pixel
    window.location.reload();
  };

  const handleCookieDecline = () => {
    // Ricarica la pagina per assicurarsi che il pixel sia disattivato
    window.location.reload();
  };

  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased`}
      >
        <ReviewsProvider>
          <ComponentsStatusProvider>
            <Header />
            <BookingModal />
            <MobileBookingButton />
            <ScrollDownIndicator />
            <ScrollProgress />
            <main
              id="main"
              className="flex flex-col w-full"
            >
              {children}
            </main>
            <Footer />
          </ComponentsStatusProvider>

          <MetaPixel />
          <CookieConsent 
            onAccept={handleCookieAccept}
            onDecline={handleCookieDecline}
          />

        </ReviewsProvider>
      </body>
    </html>
  );
}
