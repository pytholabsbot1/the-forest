
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
        userAgent: ['GPTBot', 'ChatGPT-User', 'anthropic-ai', 'ClaudeBot',
                    'Google-Extended', 'PerplexityBot', 'Bingbot'],
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
