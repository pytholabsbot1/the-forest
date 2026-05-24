'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { sectionImages } from '@/lib/images';
import { golfHighlights, sectionCopy } from '@/lib/content';

export function GolfSection() {
  const { golf } = sectionCopy;

  return (
    <section id="golf" className="section-shell relative bg-[var(--forest-deep)] text-[var(--forest-ivory)]">
      <GrainOverlay />
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url(${sectionImages.golf})` }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            light
            eyebrow={golf.eyebrow}
            title={golf.title}
            copy={golf.copy}
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <ScrollReveal>
            <article className="luxe-card-dark overflow-hidden p-6 sm:p-8">
              <div className="relative flex min-h-[28rem] flex-col justify-between gap-8 overflow-hidden rounded-[1.5rem] border border-white/10 p-6 sm:p-8">
                <Image
                  src={sectionImages.golfSunset}
                  alt="Golf course at sunset"
                  fill
                  className="absolute inset-0 object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-gold)]/90">{golf.heroCardLabel}</p>
                  <h3 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                    {golf.heroCardTitle}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">{golf.heroCardBody}</p>
                </div>

                <div className="relative z-10 grid gap-3 sm:grid-cols-3">
                  {golfHighlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/52">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-white/80">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal delay={0.1}>
              <FeatureCard
                light={false}
                eyebrow={golf.quietEyebrow}
                title={golf.quietTitle}
                body={golf.quietBody}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <FeatureCard
                light={false}
                eyebrow={golf.lingerEyebrow}
                title={golf.lingerTitle}
                body={golf.lingerBody}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
