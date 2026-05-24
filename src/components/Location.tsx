export function Location() {
  const distances = [
    { landmark: 'IGI Airport Delhi', distance: '~106 km', time: '2-2.5 hrs' },
    { landmark: 'Gurgaon MG Road', distance: '~95 km', time: '2 hrs' },
    { landmark: 'DME Entry (Dausa)', distance: '~61 km', time: '1 hr' },
    { landmark: 'Karma Lakelands', distance: '~84 km', time: '—' },
    { landmark: 'Aravali Hills', distance: '~86 km', time: '—' },
  ];

  const advantages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Deeper Seclusion',
      description: '2 hours from Delhi means true escape. Not a quick weekend spot—a real retreat from urban chaos.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'DME Corridor Growth',
      description: 'Delhi-Mumbai Expressway is transforming the region. Strategic location for long-term appreciation.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '50% Price Arbitrage',
      description: 'Half the price of Gurgaon golf estates. Same lifestyle, better seclusion, smarter investment.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Rajasthan RERA',
      description: 'Regulatory flexibility and faster approvals compared to Haryana. Your investment is protected.',
    },
  ];

  return (
    <section id="location" className="py-24 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-forest-gold font-medium tracking-widest text-sm mb-4 uppercase">
            Location
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-deep mb-6">
            Two Hours from Delhi,
            <br />
            <span className="gradient-text">A World Away</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-forest-green/80 text-lg max-w-2xl mx-auto">
            Teski Village, Sikhri Tehsil, Deeg District, Rajasthan. 
            Where the Delhi-Mumbai Expressway corridor meets untouched nature.
          </p>
        </div>

        {/* Map & Distances */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map Placeholder */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-forest-sage/10 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-forest-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-forest-green font-medium mb-1">The Forest</p>
                <p className="text-forest-green/60 text-sm">27.6072°N, 76.9860°E</p>
                <p className="text-forest-green/40 text-xs mt-2">Interactive map coming soon</p>
              </div>
            </div>
          </div>

          {/* Distance Table */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-forest-deep mb-6">
              Distance from Key Landmarks
            </h3>
            <div className="space-y-4">
              {distances.map((item) => (
                <div
                  key={item.landmark}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                >
                  <div>
                    <p className="font-medium text-forest-deep">{item.landmark}</p>
                    <p className="text-sm text-forest-green/60">{item.time}</p>
                  </div>
                  <p className="font-semibold text-forest-green">{item.distance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Advantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="w-12 h-12 bg-forest-green/10 rounded-lg flex items-center justify-center mb-4 text-forest-green">
                {advantage.icon}
              </div>
              <h4 className="font-semibold text-forest-deep mb-2">{advantage.title}</h4>
              <p className="text-sm text-forest-green/70">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Positioning Statement */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <p className="font-serif text-xl text-forest-deep italic">
            &ldquo;Not closer to Delhi. Deeper in nature. That&apos;s the trade-off that makes 
            The Forest special—true seclusion at half the price.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
