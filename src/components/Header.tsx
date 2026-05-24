'use client';

import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#vision', label: 'Vision' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#location', label: 'Location' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-dark/95 backdrop-blur-sm border-b border-forest-green/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-green to-forest-sage flex items-center justify-center">
              <svg className="w-6 h-6 text-forest-ivory" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L8 8h3v6H8l4 6 4-6h-3V8h3L12 2z" />
              </svg>
            </div>
            <span className="font-serif text-2xl font-semibold text-forest-ivory tracking-wide">
              The Forest
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-forest-cream/80 hover:text-forest-gold transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-forest-gold text-forest-dark px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-forest-gold/90 transition-all hover:shadow-lg hover:shadow-forest-gold/20"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-forest-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-forest-green/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-forest-cream/80 hover:text-forest-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 bg-forest-gold text-forest-dark px-5 py-3 rounded-md text-center font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
