'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top');
      if (hero) {
        setScrolled(window.scrollY > hero.offsetHeight - 80);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-3 pt-6 lg:px-10 lg:pt-8">

        {/* Logo — hidden at top, fades in on scroll */}
        <a
          href="#top"
          className="transition-all duration-500 hover:opacity-85"
          style={{ opacity: scrolled ? 1 : 0, transform: `translateY(${scrolled ? 0 : -8}px)` }}
        >
          <Image
            src="/logo.png"
            alt="The Forest"
            width={64}
            height={64}
            className="h-16 w-16 object-contain brightness-110 drop-shadow-[0_2px_16px_rgba(200,165,97,0.6)]"
            priority
          />
        </a>

        {/* Contact Us */}
        <a
          href="#contact"
          className="inline-flex items-center border border-[#c8a561]/60 px-6 py-2.5 text-[0.6rem] uppercase tracking-[0.35em] text-white transition-colors hover:bg-white/10"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
