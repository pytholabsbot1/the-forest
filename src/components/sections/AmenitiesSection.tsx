'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { amenityCards, sectionCopy } from '@/lib/content';

export function AmenitiesSection() {
  const { amenities } = sectionCopy;

  return (
    <section id="amenities" className="section-shell relative bg-[var(--forest-ivory)]">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={amenities.eyebrow}
            title={amenities.title}
            copy={amenities.copy}
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {amenityCards.map((item, i) => (
            <ScrollReveal key={item.eyebrow ?? item.title} delay={i * 0.12}>
              <FeatureCard {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
