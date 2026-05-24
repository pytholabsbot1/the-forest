'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCard } from '@/components/ui/StatCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { sectionImages } from '@/lib/images';
import { sectionCopy } from '@/lib/content';

export function LegacySection() {
  const { legacy } = sectionCopy;

  return (
    <section id="legacy" className="section-shell relative bg-[var(--forest-deep)] text-[var(--forest-ivory)]">
      <GrainOverlay />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{ backgroundImage: `url(${sectionImages.legacy})` }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal>
            <SectionHeading
              light
              eyebrow={legacy.eyebrow}
              title={legacy.title}
              copy={legacy.copy}
            />
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal delay={0.12}>
              <article className="luxe-card-dark relative overflow-hidden p-6 sm:p-8">
                <Image
                  src={sectionImages.family}
                  alt="Generational family imagery"
                  fill
                  className="absolute inset-0 object-cover opacity-20"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-gold)]/90">{legacy.quoteLabel}</p>
                  <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                    {legacy.quote}
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {legacy.stats.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.15 + i * 0.08}>
                  <StatCard label={item.label} value={item.value} light={false} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
