import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Schedule from '../components/sections/Schedule';
import Speakers from '../components/sections/Speakers';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import Testimonials from '../components/sections/Testimonials';
import Gallery from '../components/sections/Gallery';
import Timeline from '../components/sections/Timeline';
import { AbstractShape, WavePattern, GridPattern } from '../components/ui/illustrations/Shapes';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="overflow-hidden relative">
      <GridPattern className="absolute inset-0 opacity-5" />
      <WavePattern className="absolute top-0 w-full" />
      <AbstractShape className="absolute top-20 right-0 w-72 h-72 -z-10" />
      <div id="home">
        <Hero />
      </div>
      <Features />
      <Speakers />
      <Schedule />
      <Timeline />
      <Pricing />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
