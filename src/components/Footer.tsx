export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'Vision', href: '#vision' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Location', href: '#location' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'RERA Details', href: '/rera' },
    ],
  };

  return (
    <footer className="bg-forest-dark text-forest-cream border-t border-forest-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-green to-forest-sage flex items-center justify-center">
                <svg className="w-6 h-6 text-forest-ivory" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L8 8h3v6H8l4 6 4-6h-3V8h3L12 2z" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-semibold text-forest-ivory">
                The Forest
              </span>
            </a>
            <p className="text-forest-cream/70 mb-6 max-w-md leading-relaxed">
              A landmark luxury golf estate near NCR. Premium farmhouse and estate plots 
              with executive golf course, forest integration, and wellness ecosystem. 
              Where nature meets legacy.
            </p>
            <p className="text-sm text-forest-gold font-medium mb-2">Developed by ABL Group</p>
            <p className="text-sm text-forest-cream/50">
              Building legacies across NCR
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-forest-ivory mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-forest-cream/70 hover:text-forest-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-forest-ivory mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-forest-cream/70 hover:text-forest-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* RERA Disclaimer */}
            <div className="mt-6 p-4 bg-forest-green/10 rounded-lg">
              <p className="text-xs text-forest-cream/50 leading-relaxed">
                <strong className="text-forest-cream/70">RERA Registration:</strong> 
                {' '}Pending. All specifications, amenities, and pricing are indicative and 
                subject to change without notice.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-forest-green/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-forest-cream/50">
              &copy; {currentYear} ABL Group. All rights reserved.
            </p>
            <p className="text-sm text-forest-cream/50">
              Where Nature Meets Legacy
            </p>
          </div>
        </div>
      </div>

      {/* llms.txt for AI discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'The Forest',
            url: 'https://theforest.in',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://theforest.in/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </footer>
  );
}
