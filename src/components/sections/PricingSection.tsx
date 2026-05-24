'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCard } from '@/components/ui/StatCard';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { pricingTiers, foundingBenefits, sectionCopy } from '@/lib/content';

export function PricingSection() {
  const { pricing } = sectionCopy;

  return (
    <section id="pricing" className="section-shell relative bg-[var(--forest-parchment)]">
      <GrainOverlay />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            copy={pricing.copy}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-6 inline-flex rounded-full border border-[rgba(37,76,58,0.14)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/70 shadow-sm">
            {pricing.valueBadge}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={0.12 + i * 0.08}>
              <article className="luxe-card p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/50">{tier.name}</p>
                <p className="mt-4 font-serif text-2xl leading-tight text-[var(--forest-deep)]">{tier.price}</p>
                <p className="mt-2 text-sm text-[var(--forest-green)]/66">{tier.size}</p>
                <div className="mt-6 h-px bg-[linear-gradient(90deg,transparent,rgba(200,165,97,0.8),transparent)]" />
                <p className="mt-5 text-sm leading-7 text-[var(--forest-green)]/74">{tier.note}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[var(--forest-green)]/52">{tier.ideal}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-14 rounded-[2rem] bg-[var(--forest-green)] p-7 text-[var(--forest-ivory)] shadow-[0_24px_70px_rgba(15,31,23,0.18)] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="kicker kicker-light">Founding Member Program</p>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                  {pricing.foundingTitle}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                  {pricing.foundingBody}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--forest-gold)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[var(--forest-deep)] transition-transform hover:-translate-y-0.5"
              >
                {pricing.foundingCta}
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {foundingBenefits.map((item) => (
                <StatCard key={item.label} {...item} light={false} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
