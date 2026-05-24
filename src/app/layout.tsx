import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Forest | Luxury Golf Estate Near NCR | ABL Group',
  description: 'A landmark luxury golf estate near NCR. Premium farmhouse and estate plots with executive golf course, forest integration, and wellness ecosystem. Where nature meets legacy. Plots starting ₹50L.',
  keywords: ['luxury golf estate', 'farmhouse plots NCR', 'golf course property', 'second home Delhi', 'legacy estate', 'ABL Group', 'Naugaon property'],
  authors: [{ name: 'ABL Group' }],
  creator: 'ABL Group',
  publisher: 'ABL Group',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://theforest.in',
    siteName: 'The Forest',
    title: 'The Forest | Luxury Golf Estate Near NCR',
    description: 'A landmark luxury golf estate near NCR. Premium plots with golf, nature, and wellness. Starting ₹50L.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Forest - Luxury Golf Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Forest | Luxury Golf Estate Near NCR',
    description: 'Premium plots with golf, nature, and wellness. Starting ₹50L.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://theforest.in" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1a2f23" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
