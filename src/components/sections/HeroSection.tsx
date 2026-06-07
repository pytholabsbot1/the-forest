'use client';

import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ui/ParallaxSection';
import { heroImages } from '@/lib/images';

export function HeroSection() {
  return (
    <section id="top">
      <ParallaxSection src={heroImages.main} alt="Luxury golf estate at golden hour" speed={0.25} priority>
        <div className="flex min-h-[90dvh] flex-col items-center justify-center px-4 pb-20 pt-24 text-center sm:px-6 lg:px-8">

          <h1
            className="mt-6 font-serif text-7xl leading-none tracking-wide text-white sm:text-8xl lg:text-[9rem]"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}
          >
            THE FOREST
          </h1>

          <p
            className="mt-4 text-[0.65rem] uppercase tracking-[0.45em] text-white"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
          >
            A Grand Luxury Golf Estate
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-12 bg-[#c8a561]/90" />
            <span className="text-[#c8a561] text-xs">◆</span>
            <span className="h-px w-12 bg-[#c8a561]/90" />
          </div>

          <p
            className="mt-4 text-[0.6rem] uppercase tracking-[0.38em] text-white/90"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
          >
            Premium Farmhouse Plots &nbsp;·&nbsp; Curated Amenities
          </p>
          <p
            className="mt-1.5 text-[0.6rem] uppercase tracking-[0.38em] text-white/90"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
          >
            Legacy Estate Value
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#estate"
              className="inline-flex items-center bg-[#1a3528] px-8 py-3.5 text-[0.6rem] uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-80"
            >
              Explore the Estate
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-[#c8a561]/60 px-8 py-3.5 text-[0.6rem] uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/10"
            >
              Schedule a Visit
            </a>
          </div>

        </div>
      </ParallaxSection>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <svg className="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
