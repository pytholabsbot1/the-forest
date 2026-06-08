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
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(15,31,24,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,165,97,0.12)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10 lg:py-4">

        {/* Logo */}
        <a
          href="/"
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

        {/* Nav links */}
        <div
          className="flex items-center gap-6 transition-all duration-500"
          style={{ opacity: scrolled ? 1 : 0, transform: `translateY(${scrolled ? 0 : -8}px)` }}
        >
          <a href="/" className="text-[0.55rem] uppercase tracking-[0.28em] text-white/70 hover:text-white transition-colors">
            Home
          </a>
          <a href="/farmhouse-near-delhi" className="text-[0.55rem] uppercase tracking-[0.28em] text-white/70 hover:text-white transition-colors">
            Farmhouse
          </a>
          <a href="/golf-estate" className="text-[0.55rem] uppercase tracking-[0.28em] text-white/70 hover:text-white transition-colors">
            Golf Estate
          </a>
          <a href="/managed-farmland" className="text-[0.55rem] uppercase tracking-[0.28em] text-white/70 hover:text-white transition-colors">
            Farmland
          </a>
          <a href="/blog" className="text-[0.55rem] uppercase tracking-[0.28em] text-white/70 hover:text-white transition-colors">
            Insights
          </a>
          <a href="/about" className="text-[0.55rem] uppercase tracking-[0.28em] text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a
            href="/contact"
            className="inline-flex items-center border border-[#c8a561]/40 px-4 py-1.5 text-[0.55rem] uppercase tracking-[0.28em] text-white/70 transition-all duration-500 hover:border-[#c8a561]/70 hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
