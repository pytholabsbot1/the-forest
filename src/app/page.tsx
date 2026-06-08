import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { WhyForestSection } from '@/components/sections/WhyForestSection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="content" className="overflow-x-hidden">
        <HeroSection />
        <ManifestoSection />
        <WhyForestSection />
        <AmenitiesSection />
        <LocationSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
