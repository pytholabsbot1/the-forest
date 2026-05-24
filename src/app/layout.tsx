import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = 'https://the-forest.online';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Forest | Luxury Golf Estate Near Delhi NCR',
    template: '%s | The Forest',
  },
  description:
    'A serene luxury golf estate in Deeg, Rajasthan — about 2 hours from Delhi, with executive golf, wellness, water-led landscape, and legacy plots.',
  keywords: [
    'The Forest',
    'luxury golf estate',
    'Deeg Rajasthan',
    'legacy plots',
    'executive golf',
    'wellness estate',
  ],
  authors: [{ name: 'ABL Group' }],
  creator: 'ABL Group',
  publisher: 'ABL Group',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'The Forest',
    title: 'The Forest | Luxury Golf Estate Near Delhi NCR',
    description:
      'A quiet luxury estate shaped by forest, golf, water, wellness, and generational value.',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Forest | Luxury Golf Estate Near Delhi NCR',
    description:
      'A quiet luxury estate shaped by forest, golf, water, wellness, and generational value.',
    images: ['/opengraph-image'],
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
};

export const viewport: Viewport = {
  themeColor: '#132d24',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
