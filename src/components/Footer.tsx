
const quickLinks = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Golf', href: '#golf' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Location', href: '#location' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'RERA Details', href: '/rera' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--forest-ink)] text-[var(--forest-ivory)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(200,165,97,0.55)] bg-white/5 font-serif text-lg tracking-[0.25em] text-[var(--forest-gold)]">
                TF
              </span>
              <span className="font-serif text-2xl font-semibold tracking-[0.18em] text-[var(--forest-ivory)]">
                The Forest
              </span>
            </a>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/68">
              A grand luxury golf estate in Deeg, Rajasthan — shaped by forest, golf, water,
              wellness, and long-term value.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[var(--forest-gold)]/95">
              ABL Group
            </p>
            <p className="mt-2 max-w-lg text-xs leading-6 text-white/52">
              All specifications, amenities, and pricing are indicative and may evolve with the
              final sales release. RERA and approvals can be shared by the team during enquiry.
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h2 className="text-xs uppercase tracking-[0.32em] text-white/52">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/74 transition-colors hover:text-[var(--forest-gold)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <h2 className="text-xs uppercase tracking-[0.32em] text-white/52">Legal</h2>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/74 transition-colors hover:text-[var(--forest-gold)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.24em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} ABL Group. All rights reserved.</p>
          <p>Where nature meets legacy.</p>
        </div>
      </div>
    </footer>
  );
}
