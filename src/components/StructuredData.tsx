
export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateDevelopment',
    name: 'The Forest',
    description:
      'A grand luxury golf estate in Deeg, Rajasthan, about 2 hours from Delhi, with executive golf, wellness, clubhouse, water-led landscape, and legacy plots.',
    url: 'https://the-forest.online',
    image: 'https://the-forest.online/opengraph-image',
    developer: {
      '@type': 'Organization',
      name: 'ABL Group',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Teski Village, Sikhri Tehsil',
      addressLocality: 'Deeg District',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    areaServed: 'Delhi NCR',
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
        name: 'Spa & Wellness',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Clubhouse',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Water-Led Landscape',
        value: true,
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '5000000',
      highPrice: '100000000',
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
