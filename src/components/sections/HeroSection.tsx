'use client';

import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ui/ParallaxSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StatCard } from '@/components/ui/StatCard';
import { heroImages, sectionImages } from '@/lib/images';
import { introStats, sectionCopy } from '@/lib/content';

export function HeroSection() {
  const { hero, clubhouse } = sectionCopy;

  const titleLetters = 'THE FOREST'.split('');

  return (
    <section id="top">
      <ParallaxSection src={heroImages.main} alt="Luxury golf estate at golden hour" speed={0.25} priority>
        <div className="flex min-h-screen items-center px-4 pb-8 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <motion.p
                  className="kicker kicker-light"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {hero.eyebrow}
                </motion.p>

                <motion.div
                  className="mt-6 flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                >
                  <span className="h-px w-16 bg-[var(--forest-gold)]/70" />
                  <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                    {hero.tagline}
                  </span>
                </motion.div>

                <motion.div
                  className="mt-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(200,165,97,0.55)] bg-white/10 font-serif text-2xl tracking-[0.35em] text-[var(--forest-gold)] backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  TF
                </motion.div>

                <h1 className="mt-8 max-w-3xl font-serif text-6xl leading-[0.9] text-[var(--forest-ivory)] sm:text-7xl lg:text-[7.5rem]">
                  {titleLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={letter === ' ' ? 'inline-block w-[0.35em]' : 'inline-block'}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  className="mt-8 max-w-xl text-lg leading-8 text-white/82 sm:text-xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 }}
                >
                  {hero.subtitle}
                </motion.p>

                <motion.p
                  className="mt-4 max-w-2xl text-sm uppercase tracking-[0.28em] text-[var(--forest-gold)]/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                >
                  {hero.microline}
                </motion.p>

                <motion.div
                  className="mt-10 flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-[var(--forest-gold)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[var(--forest-deep)] shadow-[0_16px_30px_rgba(15,31,23,0.25)] transition-transform hover:-translate-y-0.5"
                  >
                    {hero.ctaPrimary}
                  </a>
                  <a
                    href="#manifesto"
                    className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-[var(--forest-ivory)] backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    {hero.ctaSecondary}
                  </a>
                </motion.div>

                <motion.div
                  className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.3 }}
                >
                  {introStats.map((item) => (
                    <StatCard key={item.label} {...item} light={false} className="h-full" />
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="absolute -inset-6 rounded-[2rem] border border-[rgba(200,165,97,0.2)]" aria-hidden="true" />
                <div className="luxe-card-dark relative overflow-hidden p-6 sm:p-8">
                  <div
                    className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${sectionImages.golfSunset})`,
                    }}
                  >
                    <div className="flex h-full flex-col justify-between bg-black/30 p-6 sm:p-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-gold)]/90">
                          Brochure cover
                        </p>
                        <div className="mt-6 h-px w-24 bg-[var(--forest-gold)]/55" />
                        <p className="mt-6 max-w-sm font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                          {hero.brochureTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/52">Play</p>
                      <p className="mt-2 text-sm text-white/84">Executive golf</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/52">Evenings</p>
                      <p className="mt-2 text-sm text-white/84">Night golf</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/52">Access</p>
                      <p className="mt-2 text-sm text-white/84">Founding benefits</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/55">
                    <span>{hero.brochurePreview}</span>
                    <span>{hero.brochureSubtitle}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <a href="#manifesto" className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-[var(--forest-gold)]">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Explore</span>
          <motion.svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
}
