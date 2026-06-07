'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { href: '#estate', label: 'The Estate' },
  { href: '#golf', label: 'Golf' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#legacy', label: 'Legacy' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
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

          {/* Right side: CONTACT + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center bg-[#1a3528] px-6 py-2.5 text-[0.6rem] uppercase tracking-[0.35em] text-white transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] transition-opacity hover:opacity-70"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block h-px w-6 bg-white"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px w-6 bg-white"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-6 bg-white"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0f1f17]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl text-white/80 transition-colors hover:text-[#c8a561] sm:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-12 border border-[#c8a561]/50 px-10 py-3.5 text-[0.6rem] uppercase tracking-[0.4em] text-[#c8a561] transition-colors hover:bg-[#c8a561]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Schedule a Visit
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
