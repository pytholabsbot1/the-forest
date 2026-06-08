import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Luxury Farmhouse Near Delhi | The Forest Golf Estate, Rajasthan',
  description: 'A curated luxury farmhouse estate 2 hours from Delhi. Legacy plots from ₹50L, executive golf, spa, and gated community living. The Forest, Deeg, Rajasthan.',
  keywords: ['farmhouse near delhi', 'luxury farmhouse near delhi', 'farmland near delhi', 'delhi ncr farmhouse', 'gated farmhouse community'],
  alternates: { canonical: 'https://the-forest.online/farmhouse-near-delhi' },
};

const localFaqs = [
  { q: 'How far is The Forest from Delhi?', a: 'The Forest is approximately 2 hours from central Delhi (Connaught Place), about 130 km via NH-48 and the Delhi-Mumbai Expressway corridor. From Gurugram it is roughly 90 minutes.' },
  { q: 'Is this a farmhouse plot or a built farmhouse?', a: 'The Forest sells legacy farmhouse plots ranging from 500 sq.yd to 4000 sq.yd+. You own the land and can build your own farmhouse within the estate guidelines. Construction advisory services are available.' },
  { q: 'What is the difference between The Forest and farmhouses in Chattarpur or Gurgaon?', a: 'Chattarpur and Gurgaon farmhouses sit in dense urban-peripheral zones — high prices, limited nature, no golf or wellness infrastructure. The Forest is a planned, gated estate in actual forest-adjacent Rajasthan land, with a full amenity ecosystem and significantly lower prices per square yard.' },
  { q: 'Can NRIs buy farmhouse plots at The Forest?', a: 'NRI purchase eligibility under FEMA regulations should be confirmed with the sales team and your legal advisor. Rajasthan RERA provides a regulated framework for the transaction.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localFaqs.map(({ q, a }) => ({
    '@type': 'Question', name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FarmhouseNearDelhi() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-[#f5f0e8]">

        {/* Hero */}
        <section className="px-6 pt-44 pb-28 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a561] sm:text-sm">Farmhouse Near Delhi</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1a3528] sm:text-6xl lg:text-7xl">
              A Luxury Farmhouse Estate,<br />2 Hours from Delhi.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#1a3528]/65 lg:text-lg">
              The Forest is a gated luxury estate in Deeg, Rajasthan — about 130 km from Delhi via the Delhi-Mumbai Expressway. Executive golf, water-led landscape, spa, and legacy plots from ₹50 lakhs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/#pricing" className="inline-flex bg-[#1a3528] px-8 py-3.5 text-xs uppercase tracking-[0.2em] sm:text-sm text-white hover:opacity-80 transition-opacity">
                View Plot Pricing
              </a>
              <a href="/#contact" className="inline-flex border border-[#c8a561]/60 px-8 py-3.5 text-xs uppercase tracking-[0.2em] sm:text-sm text-[#1a3528] hover:bg-[#1a3528]/5 transition-colors">
                Schedule a Visit
              </a>
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="border-t border-[#c8a561]/20 px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl text-[#1a3528] sm:text-4xl">
              Why choose a farmhouse near Delhi in Rajasthan?
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                { title: '50–60% lower price', body: 'vs comparable golf estates in Gurgaon or Faridabad — for equivalent or superior amenities.' },
                { title: 'Rajasthan RERA', body: 'Regulatory clarity and investor protection under one of India\'s more progressive RERA frameworks.' },
                { title: 'Actual nature', body: 'Not urban periphery. Forest-adjacent land, clean air, and a water-led landscape — things city farmhouses cannot offer.' },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-[#c8a561]/40 pl-5">
                  <p className="font-serif text-lg text-[#1a3528]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#1a3528]/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distance table */}
        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl text-[#1a3528] sm:text-3xl">Distance from major NCR cities</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#c8a561]/30">
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">From</th>
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">Distance</th>
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">Drive time</th>
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">Via</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c8a561]/15">
                  {[
                    ['Delhi (CP)', '~130 km', '~2 hrs', 'NH-48 / Delhi-Mumbai Expressway'],
                    ['Gurugram', '~110 km', '~90 min', 'NH-48'],
                    ['Noida', '~150 km', '~2.5 hrs', 'Yamuna Expressway / NH-19'],
                    ['Faridabad', '~120 km', '~2 hrs', 'NH-19'],
                    ['Agra', '~150 km', '~2 hrs', 'NH-19'],
                  ].map(([from, dist, time, via]) => (
                    <tr key={from}>
                      <td className="py-3 text-[#1a3528]">{from}</td>
                      <td className="py-3 text-[#1a3528]/70">{dist}</td>
                      <td className="py-3 text-[#1a3528]/70">{time}</td>
                      <td className="py-3 text-[#1a3528]/50">{via}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-[#1a3528] sm:text-3xl">Common questions</h2>
            <div className="mt-8 divide-y divide-[#c8a561]/25">
              {localFaqs.map(({ q, a }) => (
                <details key={q} className="py-5">
                  <summary className="cursor-pointer list-none font-serif text-base text-[#1a3528]">{q}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#1a3528]/65">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
