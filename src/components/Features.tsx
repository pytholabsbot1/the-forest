export function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeWidth={1.5} d="M12 2v20M2 12h20M12 7l3 3-3 3-3-3 3-3z" />
        </svg>
      ),
      title: 'Executive Golf Course',
      subtitle: '9-Hole + Night Golf',
      description: 'The only golf estate in the Naugaon corridor. Play at your pace, day or night. Executive 9-hole course designed for lifestyle golfers, not tournaments.',
      highlights: [
        'Only golf course in 50km radius',
        'Night golf with LED lighting',
        'Driving range & practice facility',
        'Golf academy for all ages',
        'Lifetime membership for founding members',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Forest & Ridge Integration',
      subtitle: 'Nature as Your Backyard',
      description: '200+ acres of preserved forest and natural ridge. Your plot doesn\'t just face nature—it\'s immersed in it. Wake up to birds, walk to trails, live within the forest.',
      highlights: [
        '200+ acres preserved forest',
        'Natural ridge with panoramic views',
        'Private forest trails (8km+)',
        'Bird watching & nature zones',
        'Forest-edge premium plots available',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Wellness Ecosystem',
      subtitle: 'Mind, Body, Soul',
      description: 'A dedicated wellness zone with spa, fitness center, yoga pavilions, and organic farming options. Wellness isn\'t an amenity here—it\'s woven into daily life.',
      highlights: [
        'Luxury spa & wellness center',
        'State-of-the-art fitness facility',
        'Yoga & meditation pavilions',
        'Organic farming plots available',
        'Ayurveda & holistic wellness programs',
      ],
    },
  ];

  return (
    <section id="features" className="py-24 bg-forest-dark text-forest-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-forest-gold font-medium tracking-widest text-sm mb-4 uppercase">
            Features & Amenities
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Three Pillars of
            <br />
            <span className="gradient-text">Elevated Living</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Feature Cards */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 text-forest-gold mb-4">
                  {feature.icon}
                  <span className="text-sm font-medium tracking-wider uppercase">
                    {feature.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-forest-cream/80 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-forest-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-forest-cream/90">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-forest-green/20">
                  {/* Placeholder gradient - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-green/40 to-forest-sage/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-forest-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <p className="text-forest-cream/60 text-sm">Visual coming soon</p>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-forest-gold/10 rounded-full blur-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-forest-gold text-forest-dark px-8 py-4 rounded-lg font-semibold hover:bg-forest-gold/90 transition-all hover:shadow-lg hover:shadow-forest-gold/20"
          >
            Schedule a Site Visit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
