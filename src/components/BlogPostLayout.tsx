import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  pillar: string;
  children: React.ReactNode;
  faqSchema?: { q: string; a: string }[];
}

export function BlogPostLayout({ title, description, publishedAt, updatedAt, readingMinutes, pillar, children, faqSchema }: Props) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: { '@type': 'Organization', name: 'ABL Group', url: 'https://the-forest.online' },
    publisher: { '@type': 'Organization', name: 'The Forest Golf Estate', url: 'https://the-forest.online' },
  };

  const faqSchemaBlock = faqSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchema.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

  return (
    <article className="mx-auto max-w-2xl px-6 py-24 lg:px-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchemaBlock && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaBlock) }} />
      )}

      <Link href="/blog" className="text-[0.5rem] uppercase tracking-[0.38em] text-[#c8a561]/70 hover:text-[#c8a561]">
        ← All Insights
      </Link>

      <p className="mt-6 text-[0.5rem] uppercase tracking-[0.38em] text-[#c8a561]/70">{pillar}</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1a3528] sm:text-5xl">{title}</h1>
      <p className="mt-4 text-sm leading-7 text-[#1a3528]/60">{description}</p>

      <div className="mt-4 flex items-center gap-3 text-[0.5rem] uppercase tracking-[0.35em] text-[#1a3528]/40">
        <span>Published {publishedAt}</span>
        {updatedAt && <><span>·</span><span>Updated {updatedAt}</span></>}
        <span>·</span>
        <span>{readingMinutes} min read</span>
      </div>

      <div className="mt-12 space-y-6 text-sm leading-7 text-[#1a3528]/75 lg:text-base lg:leading-8">
        {children}
      </div>

      <div className="mt-16 border border-[#c8a561]/30 bg-white/40 p-8">
        <p className="text-[0.5rem] uppercase tracking-[0.4em] text-[#c8a561]">Interested in The Forest?</p>
        <p className="mt-3 font-serif text-xl text-[#1a3528]">Schedule a site visit or request the brochure.</p>
        <a href="/#contact"
          className="mt-5 inline-flex items-center bg-[#1a3528] px-7 py-3 text-[0.55rem] uppercase tracking-[0.28em] text-white transition-opacity hover:opacity-80">
          Get in Touch
        </a>
      </div>
    </article>
  );
}
