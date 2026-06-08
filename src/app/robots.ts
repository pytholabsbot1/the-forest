
import type { MetadataRoute } from 'next';

const siteUrl = 'https://the-forest.online';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Google-Extended', 'PerplexityBot'],
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
