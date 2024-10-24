
import Hero from '@/sections/Home/Hero/Hero'
import Intro from '@/sections/Home/Intro/Intro';
import Reviews from '@/sections/Reviews/Reviews';

export default function Home() {
  return (
    <div className="bg-tiber">
      <Hero />
      <Intro />
      <div className="px-6 md:px-14">
        <Reviews />
      </div>
    </div>
  );
}
