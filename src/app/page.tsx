import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StructuredData } from '@/components/StructuredData';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { GolfSection } from '@/components/sections/GolfSection';
import { WhyForestSection } from '@/components/sections/WhyForestSection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { ClubhouseSection } from '@/components/sections/ClubhouseSection';
import { LandscapeSection } from '@/components/sections/LandscapeSection';
import { LegacySection } from '@/components/sections/LegacySection';
import { LocationSection } from '@/components/sections/LocationSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="content" className="overflow-x-hidden">
        <HeroSection />
        <ManifestoSection />
        <GolfSection />
        <WhyForestSection />
        <AmenitiesSection />
        <ClubhouseSection />
        <LandscapeSection />
        <LegacySection />
        <LocationSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
