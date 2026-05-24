import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Vision } from '@/components/Vision';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Location } from '@/components/Location';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Vision />
        <Features />
        <Pricing />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
