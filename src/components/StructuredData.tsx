
export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.forestfarmhouses.in/#organization',
        name: 'ABL Group',
        url: 'https://www.forestfarmhouses.in',
        founder: { '@type': 'Person', name: 'Murshid Ahmed' },
        description: 'Real estate developer with 32+ years experience across NCR, Rajasthan, and Odisha.',
      },
      {
        '@type': ['Place', 'Resort'],
        '@id': 'https://www.forestfarmhouses.in/#place',
        name: 'The Forest — Luxury Golf Estate',
        description:
          'A luxury golf estate in Deeg, Rajasthan, about 2 hours from Delhi, with executive golf, wellness, clubhouse, water-led landscape, and legacy plots.',
        url: 'https://www.forestfarmhouses.in',
        image: 'https://www.forestfarmhouses.in/opengraph-image',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Teski Village, Sikhri Tehsil',
          addressLocality: 'Deeg',
          addressRegion: 'Rajasthan',
          postalCode: '321613',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 27.66204,
          longitude: 77.01193,
        },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Executive Golf Course', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Night Golf', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Spa & Wellness', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Clubhouse', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Water-Led Landscape', value: true },
        ],
        developer: { '@id': 'https://www.forestfarmhouses.in/#organization' },
        offers: {
          '@type': 'AggregateOffer',
          name: 'Estate Plots at The Forest',
          lowPrice: '5000000',
          highPrice: '100000000',
          priceCurrency: 'INR',
          offerCount: '330',
          description: 'Legacy estate plots from 500 sq.yd to 4000 sq.yd',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
