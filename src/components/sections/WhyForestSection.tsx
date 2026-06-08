'use client';

import Image from 'next/image';
import { useRef } from 'react';

const promises = [
  {
    title: 'A better weekend life.',
    body: 'Golf at sunrise, picnics on the lawn, evenings that slow down.',
  },
  {
    title: 'A better second home.',
    body: 'Space, nature, and a community worth returning to.',
  },
  {
    title: 'A better legacy.',
    body: 'Land that holds value and meaning across generations.',
  },
];

const cards = [
  {
    num: '01',
    title: 'Crowded Cities. Rising Stress.',
    body: 'Urban density, pollution and noise are making everyday life exhausting.',
  },
  {
    num: '02',
    title: 'The Rise of Second Homes.',
    body: 'More families are looking for weekend escapes and second homes close to Delhi and Gurugram.',
  },
  {
    num: '03',
    title: 'Fragmented Land. Limited Value.',
    body: 'Most plotted offerings are disconnected, unplanned and lack long-term ecosystem value.',
  },
  {
    num: '04',
    title: 'Desire for Community and Connection.',
    body: 'People want a safe, like-minded community and spaces to connect, relax and belong.',
  },
  {
    num: '05',
    title: 'Health, Nature and Wellbeing.',
    body: 'Access to greenery, clean air and outdoor living is no longer a luxury—it\'s essential.',
  },
];

export function WhyForestSection() {
  const stripRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!stripRef.current) return;
    stripRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
  };

  return (
    <section id="why" className="bg-[#f5f0e8]">

      {/* Split — image + content */}
      <div className="flex flex-col lg:flex-row">

        {/* Image — top on mobile, right on desktop */}
        <div className="relative h-[55vw] min-h-[300px] lg:order-2 lg:h-auto lg:min-h-[90dvh] lg:w-[58%]">
          <Image
            src="/family.jpg"
            alt="Family enjoying the estate at golden hour"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 58vw"
            quality={90}
          />
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f5f0e8] to-transparent" />
        </div>

        {/* Left content panel */}
        <div className="flex flex-col justify-center px-7 py-12 lg:order-1 lg:w-[42%] lg:px-16 lg:py-24">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c8a561]/70" />
            <span className="text-[0.6rem] text-[#c8a561]">◆</span>
          </div>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1a3528] sm:text-4xl lg:text-[2.6rem]">
            Why The Forest Exists
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#1a3528]/60 lg:text-base">
            Most second homes are bought for investment. The Forest is built for something harder to measure — the kind of weekends that stay with a family for years.
          </p>

          <div className="mt-8 border border-[#c8a561]/45 p-6 lg:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a561] sm:text-sm">The Promise</p>
            <div className="mt-5 divide-y divide-[#c8a561]/20">
              {promises.map((item, i) => (
                <div key={i} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-serif text-lg text-[#1a3528] lg:text-xl">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#1a3528]/55 lg:text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal scroll cards — Page 5 */}
      <div className="border-t border-[#c8a561]/20 px-7 py-14 lg:px-16 lg:py-20">

        <div className="flex items-center justify-between">
          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-[#1a3528]/50">
            The need we are addressing
          </p>
          {/* Arrow buttons — desktop */}
          <div className="hidden gap-2 lg:flex">
            <button
              onClick={() => scroll('left')}
              className="flex h-9 w-9 items-center justify-center border border-[#c8a561]/40 text-[#1a3528]/50 transition-colors hover:border-[#c8a561] hover:text-[#1a3528]"
              aria-label="Previous"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-9 w-9 items-center justify-center border border-[#c8a561]/40 text-[#1a3528]/50 transition-colors hover:border-[#c8a561] hover:text-[#1a3528]"
              aria-label="Next"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card strip */}
        <div
          ref={stripRef}
          className="mt-8 flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex w-[78vw] shrink-0 flex-col justify-between border border-[#c8a561]/30 p-6 sm:w-[44vw] lg:w-[300px] lg:shrink-0"
            >
              <div>
                <p className="font-serif text-3xl text-[#c8a561]/35">{card.num}</p>
                <p className="mt-4 font-serif text-lg leading-snug text-[#1a3528] lg:text-xl">
                  {card.title}
                </p>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-[#1a3528]/55 lg:text-sm">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[0.5rem] uppercase tracking-[0.35em] text-[#1a3528]/30 lg:hidden">
          Swipe to explore
        </p>

        {/* Closing tagline from brochure */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-[#c8a561]/20 pt-10">
          <span className="text-[0.6rem] text-[#c8a561]/60">◆</span>
          <p className="text-center text-[0.55rem] uppercase tracking-[0.38em] text-[#1a3528]/50 max-w-lg">
            The Forest Golf Estate is designed to meet these needs—beautifully, thoughtfully, and for the long term.
          </p>
        </div>

      </div>

    </section>
  );
}
