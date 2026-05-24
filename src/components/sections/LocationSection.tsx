'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { MasterplanSVG } from '@/components/ui/MasterplanSVG';
import { locationPoints, locationCards, sectionCopy } from '@/lib/content';

export function LocationSection() {
  const { location } = sectionCopy;

  return (
    <section id="location" className="section-shell relative bg-[var(--forest-ivory)]">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal>
            <SectionHeading
              eyebrow={location.eyebrow}
              title={location.title}
              copy={location.copy}
            />

            <div className="luxe-card mt-10 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/55">{location.positionLabel}</p>
              <div className="mt-6 space-y-6">
                {locationPoints.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex flex-col items-center pt-1">
                      <span className="h-3 w-3 rounded-full bg-[var(--forest-gold)]" />
                      <span className="mt-2 h-full w-px bg-[rgba(37,76,58,0.16)]" />
                    </div>
                    <div className="pb-2">
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/52">{item.label}</p>
                      <p className="mt-2 text-lg leading-7 text-[var(--forest-deep)]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal delay={0.12}>
              <article className="luxe-card p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-green)]/55">{location.positionLabel2}</p>
                <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-[var(--forest-deep)] sm:text-4xl">
                  {location.positionTitle}
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="relative mx-auto max-w-xl">
                <MasterplanSVG />
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {locationCards.map((item, i) => (
                <ScrollReveal key={item.eyebrow ?? item.title} delay={0.2 + i * 0.08}>
                  <FeatureCard {...item} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
