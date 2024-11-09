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
import MetaPixel from "@/components/MetaPixel/MetaPixel";
import "./globals.css";

// To prevent icons from becoming huge on page refresh
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa i CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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
        </ReviewsProvider>
        <MetaPixel />
      </body>
    </html>
  );
}
