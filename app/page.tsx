import Header from '@/components/Header/Header';
import BookingModal from '@/components/BookingModal/BookingModal';
import MobileBookingButton from '@/components/MobileBookingButton/MobileBookingButton'
import ScrollDownIndicator from '@/components/ScrollDownIndicator/ScrollDownIndicator';
import Footer from "@/components/Footer/Footer";

import Hero from '@/sections/Home/Hero/Hero'

import Intro from '@/sections/Home/Intro/Intro';

export default function Home() {
  return (
    <>
      <Header />
      <BookingModal />
      <MobileBookingButton />
      <ScrollDownIndicator />
      <main className="flex flex-col items-center justify-between">
        <Hero />
        <Intro />
      </main>
      <Footer />
    </>
  );
}
