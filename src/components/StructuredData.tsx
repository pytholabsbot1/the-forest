export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateDevelopment',
    name: 'The Forest',
    description: 'A landmark luxury golf estate near NCR with premium farmhouse and estate plots, executive golf course, and wellness ecosystem.',
    url: 'https://theforest.in',
    developer: {
      '@type': 'Organization',
      name: 'ABL Group',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Teski Village, Sikhri Tehsil',
      addressRegion: 'Deeg, Rajasthan',
      addressCountry: 'IN',
    },
    hasMap: 'https://maps.google.com/?q=27.6072,76.9860',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Executive Golf Course',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Night Golf',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Forest Integration',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wellness Center',
        value: true,
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '5000000',
      highPrice: '500000000',
      priceCurrency: 'INR',
      offerCount: '330',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
