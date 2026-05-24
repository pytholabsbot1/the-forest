'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';

const needCards = [
  {
    eyebrow: '01',
    title: 'Crowded cities compress everyday life',
    body: 'The Forest creates breathing room, slower days, and a calmer address.',
  },
  {
    eyebrow: '02',
    title: 'Second homes should feel restorative',
    body: 'A retreat should refresh the family, not just hold land.',
  },
  {
    eyebrow: '03',
    title: 'Value must feel meaningful',
    body: 'The opportunity should balance price discipline with emotional permanence.',
  },
];

export function WhyForestSection() {
  return (
    <section id="why" className="section-shell relative bg-[var(--forest-ivory)]">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The need we are addressing"
            title="Why The Forest exists."
            copy="Families are looking for more than property. They want space, calm, wellness, and a place that can hold weekends, gatherings, and generations."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {needCards.map((item, i) => (
            <ScrollReveal key={item.eyebrow ?? item.title} delay={i * 0.1}>
              <FeatureCard {...item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 rounded-[2rem] bg-[var(--forest-deep)] p-8 text-center text-[var(--forest-ivory)] shadow-[0_24px_70px_rgba(15,31,23,0.15)] sm:p-10">
            <p className="font-serif text-2xl leading-relaxed italic text-white/90 sm:text-3xl">
              &ldquo;A second home, a first calling — wake up to birds, walk to the golf course, build something that lasts.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
