'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#golf', label: 'Golf' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#legacy', label: 'Legacy' },
  { href: '#location', label: 'Location' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500"
      style={{
        backgroundColor: 'rgba(247,242,232,0.86)',
        borderColor: 'rgba(19,45,36,0.12)',
      }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(200,165,97,0.55)] bg-white/55 font-serif text-lg tracking-[0.25em] text-[var(--forest-green)] transition-transform group-hover:-translate-y-0.5">
            TF
          </span>
          <span className="font-serif text-xl font-semibold tracking-[0.18em] text-[var(--forest-deep)] sm:text-2xl">
            The Forest
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/72 transition-colors hover:text-[var(--forest-deep)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-[rgba(37,76,58,0.16)] bg-white/70 px-5 py-2.5 text-xs uppercase tracking-[0.26em] text-[var(--forest-green)] transition-colors hover:bg-white"
          >
            Request the brochure
          </a>
        </div>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center rounded-full border border-[rgba(37,76,58,0.14)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--forest-green)] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          className="border-t border-[rgba(19,45,36,0.12)] bg-[rgba(247,242,232,0.96)] px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.22em] text-[var(--forest-green)] transition-colors hover:bg-white/70"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[var(--forest-green)] px-5 py-3 text-xs uppercase tracking-[0.26em] text-[var(--forest-ivory)]"
            onClick={() => setMobileOpen(false)}
          >
            Request the brochure
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
