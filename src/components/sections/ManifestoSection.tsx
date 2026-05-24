'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { sectionImages } from '@/lib/images';
import { pillars, needCards, sectionCopy } from '@/lib/content';

export function ManifestoSection() {
  const { manifesto } = sectionCopy;

  return (
    <section id="manifesto" className="section-shell relative bg-[var(--forest-parchment)]">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ScrollReveal>
            <SectionHeading
              eyebrow={manifesto.eyebrow}
              title={manifesto.title}
              copy={manifesto.copy}
            />

            <div className="mt-10 rounded-[1.75rem] border border-[rgba(200,165,97,0.25)] bg-white/70 p-6 shadow-[0_20px_50px_rgba(15,31,23,0.06)] backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/55">{manifesto.calloutLabel}</p>
              <p className="mt-4 font-serif text-3xl leading-tight text-[var(--forest-deep)] sm:text-4xl">
                {manifesto.callout}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={sectionImages.manifesto}
                alt="Forest canopy with golden light"
                width={600}
                height={450}
                className="h-80 w-full object-cover sm:h-96"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {pillars.map((item) => (
                <FeatureCard key={item.eyebrow ?? item.title} {...item} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {needCards.map((item, i) => (
            <ScrollReveal key={item.eyebrow ?? item.title} delay={i * 0.1}>
              <FeatureCard {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
