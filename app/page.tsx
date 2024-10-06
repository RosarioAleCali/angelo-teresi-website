import Hero from '@/sections/Home/Hero/Hero'
import Intro from '@/sections/Home/Intro/Intro';
import Reviews from '@/sections/Reviews/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <div className="bg-tiber px-6 md:px-14">
        <Reviews />
      </div>
    </>
  );
}
