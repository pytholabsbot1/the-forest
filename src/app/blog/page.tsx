import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Insights | The Forest Golf Estate',
  description: 'Guides on luxury farmhouse estates, managed farmland investment, golf estate living, and second homes near Delhi NCR.',
  alternates: { canonical: 'https://the-forest.online/blog' },
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f0e8] px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c8a561] sm:text-sm">Insights</p>
          <h1 className="mt-4 font-serif text-4xl text-[#1a3528] sm:text-5xl">
            Guides &amp; Perspectives
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#1a3528]/60">
            Research and guides on farmhouse investment near Delhi, managed farmland, golf estates, and legacy property.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group border border-[#c8a561]/30 bg-white/40 p-6 transition-colors hover:border-[#c8a561]/70">
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561]/70 sm:text-xs">{post.pillar.replace('-', ' ')}</p>
                <h2 className="mt-3 font-serif text-xl leading-snug text-[#1a3528] group-hover:text-[#1a3528]/80">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs leading-6 text-[#1a3528]/55">{post.description}</p>
                <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] sm:text-xs text-[#c8a561]/60">
                  {post.readingMinutes} min read · {post.publishedAt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
 );
}
