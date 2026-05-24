export function Pricing() {
  const pricingTiers = [
    {
      name: 'Estate Plots',
      size: '500-1000 sq.yd',
      price: '₹50L - 1 Cr',
      pricePerSqYd: '₹10,000-12,000/sq.yd',
      inventory: '40% of inventory',
      ideal: 'Second-home buyers, professionals',
      features: [
        'Standard plot in premium location',
        'Access to all amenities',
        'Golf membership available',
        'Flexible payment plans',
      ],
      popular: false,
    },
    {
      name: 'Premium Estate',
      size: '1000-2000 sq.yd',
      price: '₹1 Cr - 2.4 Cr',
      pricePerSqYd: '₹9,000-11,000/sq.yd',
      inventory: '30% of inventory',
      ideal: 'Business families, HNIs',
      features: [
        'Larger plot with premium positioning',
        'Priority location selection',
        'Founding member discounts',
        '5% size discount applied',
      ],
      popular: true,
    },
    {
      name: 'Large Estate',
      size: '2000-4000 sq.yd',
      price: '₹2.4 Cr - 6 Cr',
      pricePerSqYd: '₹8,000-10,000/sq.yd',
      inventory: '15% of inventory',
      ideal: 'Legacy buyers, multi-generational',
      features: [
        'Premium positioning options',
        'Forest-edge available',
        '10% size discount applied',
        'Golf-facing premium options',
      ],
      popular: false,
    },
    {
      name: 'Farmhouse Plots',
      size: '1-5 acres',
      price: '₹3 Cr - 10 Cr+',
      pricePerSqYd: '₹7,500-9,000/sq.yd',
      inventory: '15% of inventory',
      ideal: 'Ultra-HNIs, farmhouse lifestyle',
      features: [
        'Maximum privacy and space',
        'Agricultural/farming options',
        '20% size discount applied',
        'Custom design flexibility',
      ],
      popular: false,
    },
  ];

  const premiums = [
    { name: 'Golf Course Facing', premium: '+25%' },
    { name: 'Forest Edge', premium: '+20%' },
    { name: 'Ridge View', premium: '+15%' },
    { name: 'Corner Plot', premium: '+10%' },
  ];

  return (
    <section id="pricing" className="py-24 bg-forest-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-forest-gold font-medium tracking-widest text-sm mb-4 uppercase">
            Investment Opportunity
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-deep mb-6">
            Premium Plots,
            <br />
            <span className="gradient-text">Accessible Luxury</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-forest-green/80 text-lg max-w-2xl mx-auto">
            50-60% below Gurgaon competitors. The Forest offers premium lifestyle 
            at a price point that makes legacy ownership attainable.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl p-6 shadow-lg ${
                tier.popular ? 'ring-2 ring-forest-gold' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest-gold text-forest-dark text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-serif text-xl font-semibold text-forest-deep mb-1">
                {tier.name}
              </h3>
              <p className="text-forest-green/60 text-sm mb-4">{tier.size}</p>
              
              <div className="mb-4">
                <p className="font-serif text-2xl font-bold text-forest-deep">
                  {tier.price}
                </p>
                <p className="text-forest-gold text-sm font-medium">
                  {tier.pricePerSqYd}
                </p>
              </div>

              <p className="text-xs text-forest-green/50 mb-4">{tier.inventory}</p>

              <ul className="space-y-2 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-forest-green/70">
                    <svg className="w-4 h-4 text-forest-sage mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-medium text-sm transition-all ${
                  tier.popular
                    ? 'bg-forest-green text-forest-ivory hover:bg-forest-sage'
                    : 'border border-forest-green text-forest-green hover:bg-forest-green hover:text-forest-ivory'
                }`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        {/* Location Premiums */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="font-serif text-xl font-semibold text-forest-deep mb-4 text-center">
            Location Premiums
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {premiums.map((premium) => (
              <div
                key={premium.name}
                className="flex items-center justify-between p-4 bg-forest-cream rounded-lg"
              >
                <span className="text-forest-green font-medium">{premium.name}</span>
                <span className="text-forest-gold font-semibold">{premium.premium}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founding Member Offer */}
        <div className="bg-gradient-to-br from-forest-green to-forest-sage rounded-2xl p-8 sm:p-12 text-forest-ivory text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Founding Member Program
          </h3>
          <p className="text-forest-cream/90 text-lg mb-6 max-w-2xl mx-auto">
            Be among the first 50. Get up to 20% below launch price, lifetime golf membership, 
            and priority plot selection.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div>
              <p className="font-serif text-3xl font-bold text-forest-gold">20%</p>
              <p className="text-sm text-forest-cream/70">First 10 plots</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-forest-gold">15%</p>
              <p className="text-sm text-forest-cream/70">Next 15 plots</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-forest-gold">10%</p>
              <p className="text-sm text-forest-cream/70">Next 25 plots</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-block bg-forest-gold text-forest-dark px-8 py-4 rounded-lg font-semibold hover:bg-forest-gold/90 transition-all"
          >
            Apply for Founding Membership
          </a>
        </div>
      </div>
    </section>
  );
}
