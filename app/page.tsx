import Hero from '@/sections/Home/Hero/Hero'
import Intro from '@/sections/Home/Intro/Intro';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Intro />
    </main>
  );
}
