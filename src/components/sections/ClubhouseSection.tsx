'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCard } from '@/components/ui/StatCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { sectionImages } from '@/lib/images';
import { sectionCopy } from '@/lib/content';

export function ClubhouseSection() {
  const { clubhouse } = sectionCopy;
  const clubhouseStats = [clubhouse.morning, clubhouse.afternoon, clubhouse.evening];

  return (
    <section id="clubhouse" className="section-shell relative bg-[var(--forest-parchment)]">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow={clubhouse.eyebrow}
              title={clubhouse.title}
              copy={clubhouse.copy}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <article className="luxe-card overflow-hidden p-6 sm:p-8">
              <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[rgba(19,45,36,0.08)] p-6 sm:p-8">
                <Image
                  src={sectionImages.clubhouse}
                  alt="Clubhouse at sunset over water"
                  fill
                  className="absolute inset-0 object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-gold)]/90">{clubhouse.cardLabel}</p>
                    <p className="mt-6 max-w-xl font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                      {clubhouse.cardTitle}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {clubhouseStats.map((stat) => (
                      <StatCard key={stat.label} {...stat} light={false} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
