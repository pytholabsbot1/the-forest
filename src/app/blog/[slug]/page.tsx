import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/lib/blog';

const postComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'luxury-farmhouse-near-delhi-ncr': lazy(() => import('@/app/blog/luxury-farmhouse-near-delhi-ncr/page')),
  'farmhouse-near-delhi-locations': lazy(() => import('@/app/blog/farmhouse-near-delhi-locations/page')),
  'the-forest-vs-gurgaon-golf-estates': lazy(() => import('@/app/blog/the-forest-vs-gurgaon-golf-estates/page')),
  'second-home-near-delhi-guide': lazy(() => import('@/app/blog/second-home-near-delhi-guide/page')),
  'alwar-rajasthan-farmhouse-guide': lazy(() => import('@/app/blog/alwar-rajasthan-farmhouse-guide/page')),
  'gated-farmhouse-community-near-delhi': lazy(() => import('@/app/blog/gated-farmhouse-community-near-delhi/page')),
  'faridabad-vs-rajasthan-farmhouse': lazy(() => import('@/app/blog/faridabad-vs-rajasthan-farmhouse/page')),
  'weekend-home-investment-near-delhi': lazy(() => import('@/app/blog/weekend-home-investment-near-delhi/page')),
  'what-is-managed-farmland': lazy(() => import('@/app/blog/what-is-managed-farmland/page')),
  'managed-farmland-vs-raw-land': lazy(() => import('@/app/blog/managed-farmland-vs-raw-land/page')),
  'managed-farmland-investment-returns': lazy(() => import('@/app/blog/managed-farmland-investment-returns/page')),
  'best-managed-farmland-near-delhi': lazy(() => import('@/app/blog/best-managed-farmland-near-delhi/page')),
  'agriculture-land-investment-india-2026': lazy(() => import('@/app/blog/agriculture-land-investment-india-2026/page')),
  'farmland-investment-near-delhi': lazy(() => import('@/app/blog/farmland-investment-near-delhi/page')),
  'golf-estate-india-guide': lazy(() => import('@/app/blog/golf-estate-india-guide/page')),
  'executive-golf-vs-championship-golf': lazy(() => import('@/app/blog/executive-golf-vs-championship-golf/page')),
  'night-golf-india': lazy(() => import('@/app/blog/night-golf-india/page')),
  'golf-course-residential-plots-india': lazy(() => import('@/app/blog/golf-course-residential-plots-india/page')),
  'the-forest-golf-estate-review': lazy(() => import('@/app/blog/the-forest-golf-estate-review/page')),
  'luxury-golf-estate-near-delhi': lazy(() => import('@/app/blog/luxury-golf-estate-near-delhi/page')),
  'golf-lifestyle-homes-property-values': lazy(() => import('@/app/blog/golf-lifestyle-homes-property-values/page')),
  'weekend-golf-retreat-near-delhi': lazy(() => import('@/app/blog/weekend-golf-retreat-near-delhi/page')),
  'plot-vs-flat-investment-delhi': lazy(() => import('@/app/blog/plot-vs-flat-investment-delhi/page')),
  'real-estate-investment-near-delhi-ncr': lazy(() => import('@/app/blog/real-estate-investment-near-delhi-ncr/page')),
  'land-investment-near-delhi': lazy(() => import('@/app/blog/land-investment-near-delhi/page')),
  'agriculture-land-investment-india': lazy(() => import('@/app/blog/agriculture-land-investment-india/page')),
  'farmland-investment-vs-stock-market': lazy(() => import('@/app/blog/farmland-investment-vs-stock-market/page')),
  'rajasthan-real-estate-investment': lazy(() => import('@/app/blog/rajasthan-real-estate-investment/page')),
  'founding-member-program-real-estate': lazy(() => import('@/app/blog/founding-member-program-real-estate/page')),
  'legacy-wealth-land-estate-plots': lazy(() => import('@/app/blog/legacy-wealth-land-estate-plots/page')),
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://www.forestfarmhouses.in/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const PostContent = postComponents[params.slug];
  if (!PostContent) notFound();
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f0e8]">
        <Suspense fallback={<div className="min-h-screen" />}>
          <PostContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
