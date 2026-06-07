const quickLinks = [
  { label: 'The Estate', href: '#estate' },
  { label: 'Why The Forest', href: '#why' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
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
    <footer className="border-t border-white/10 bg-[#0b1f18] text-[#f7f2e8]">

      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">

        {/* About Developer + Links side by side */}
        <div className="flex flex-col gap-12 lg:flex-row">

          {/* Left — About the Developer */}
          <div className="lg:w-[60%]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c8a561]/60" />
              <span className="text-[0.5rem] text-[#c8a561]">◆</span>
              <span className="h-px w-8 bg-[#c8a561]/60" />
            </div>
            <h2 className="mt-4 text-[0.55rem] uppercase tracking-[0.42em] text-[#c8a561]/70">
              About the Developer
            </h2>
            <p className="mt-4 font-serif text-lg text-[#c8a561]/90 sm:text-xl">
              ABL Group
            </p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-[#c8a561]/60">
              Led by Mr. Murshid Ahmed, Group Head
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              The Forest is shaped by the 32+ year real-estate journey of Mr. Murshid Ahmed,
              beginning in Faridabad with landmark developments such as Apna Ghar. In 2005,
              this experience was formalised with the founding of Ascent Buildhome Developers
              Ltd., bringing structure, scale, and institutional depth to the group&apos;s
              development vision. Across NCR, Rajasthan, and Odisha, the group has built its
              presence on a disciplined understanding of land, location, infrastructure, and
              enduring value.
            </p>
          </div>

          {/* Right — Links */}
          <div className="flex gap-16 lg:w-[40%] lg:justify-end lg:pt-16">
            <nav aria-label="Footer quick links">
              <h2 className="text-xs uppercase tracking-[0.32em] text-white/52">Quick Links</h2>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/74 transition-colors hover:text-[#c8a561]"
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
                      className="text-sm text-white/74 transition-colors hover:text-[#c8a561]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="mt-14 max-w-3xl text-xs leading-6 text-white/30">
          All specifications, amenities, and pricing are indicative and may evolve with the
          final sales release. RERA and approvals can be shared by the team during enquiry.
        </p>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.24em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} ABL Group. All rights reserved.</p>
          <p>Where nature meets legacy.</p>
        </div>

      </div>

    </footer>
  );
}
