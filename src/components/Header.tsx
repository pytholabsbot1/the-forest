'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;
    const onScroll = () => {
      setScrolled(window.scrollY > hero.offsetHeight - 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{ backgroundColor: scrolled ? 'rgba(15,31,24,0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10 lg:py-4">

        {/* Logo — hidden at top, fades in on scroll */}
        <a
          href="#top"
          className="transition-all duration-500 hover:opacity-85"
          style={{ opacity: scrolled ? 1 : 0, transform: `translateY(${scrolled ? 0 : -8}px)` }}
        >
          <Image
            src="/logo.png"
            alt="The Forest"
            width={56}
            height={56}
            className="h-14 w-14 object-contain brightness-110 drop-shadow-[0_2px_16px_rgba(200,165,97,0.6)]"
            priority
          />
        </a>

        {/* Nav links — hidden until past hero */}
        <div
          className="flex items-center gap-6 transition-all duration-500"
          style={{ opacity: scrolled ? 1 : 0, transform: `translateY(${scrolled ? 0 : -8}px)` }}
        >
          <a href="/farmhouse-near-delhi" className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors sm:text-sm">
            Farmhouse
          </a>
          <a href="/golf-estate" className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors sm:text-sm">
            Golf
          </a>
          <a href="/managed-farmland" className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors sm:text-sm">
            Farmland
          </a>
          <a href="/blog" className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors sm:text-sm">
            Insights
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-[#c8a561]/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#c8a561]/10 sm:text-sm"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
