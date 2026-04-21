import HeroGrid from '@/components/HeroGrid';
import Carousel from '@/components/Carousel';
import WindowTwo from '@/components/WindowTwo';
import WindowThree from '@/components/WindowThree';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroGrid />
      <Carousel />
      <WindowTwo />
      <WindowThree />
      <Footer />
    </main>
  );
}
