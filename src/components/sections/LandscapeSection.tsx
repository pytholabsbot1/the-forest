'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { sectionImages } from '@/lib/images';
import { sectionCopy } from '@/lib/content';

export function LandscapeSection() {
  const { landscape } = sectionCopy;

  return (
    <section id="landscape" className="section-shell relative bg-[var(--forest-ivory)]">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <article className="luxe-card-dark overflow-hidden p-6 sm:p-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 p-6 sm:p-8">
                <Image
                  src={sectionImages.landscape}
                  alt="Water and forest landscape"
                  fill
                  className="absolute inset-0 object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
                <div className="relative z-10 flex h-full items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.38em] text-white/52">Landscape</p>
                    <p className="mt-4 font-serif text-3xl leading-tight text-[var(--forest-ivory)]">Water, landscaped.</p>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <SectionHeading
              eyebrow={landscape.eyebrow}
              title={landscape.title}
              copy={landscape.copy}
            />
            <div className="mt-10 rounded-[1.75rem] border border-[rgba(19,45,36,0.12)] bg-white/70 p-6 shadow-[0_20px_50px_rgba(15,31,23,0.06)] backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/55">{landscape.noteLabel}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--forest-green)]/74">{landscape.note}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
