import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatCall from '@/components/FloatCall';

export const metadata = {
  title: 'Bumblebee Autoservice — СТО Київ Теремки',
  description: 'Чесний автосервіс у Києві на Теремках-2. Діагностика, ТО, ходова, ГРМ, електрика. Прозорі ціни, гарантія до 12 місяців.',
};

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
      <FloatCall />
    </>
  );
}
