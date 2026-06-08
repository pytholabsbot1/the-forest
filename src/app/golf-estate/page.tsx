import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Golf Estate Near Delhi | The Forest — Luxury Golf Estate Plots',
  description: 'India\'s first luxury golf estate with legacy plots near Delhi. Executive golf, night golf, spa, and curated amenity living in Deeg, Rajasthan. Plots from ₹50L.',
  keywords: ['golf estate near delhi', 'luxury golf estate india', 'golf course residential plots', 'golf estate plots', 'executive golf estate'],
  alternates: { canonical: 'https://the-forest.online/golf-estate' },
};

export default function GolfEstate() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f0e8]">

        <section className="px-6 pt-44 pb-28 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a561] sm:text-sm">Golf Estate Near Delhi</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1a3528] sm:text-6xl lg:text-7xl">
              India&apos;s Luxury Golf Estate<br />with Legacy Plots.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#1a3528]/65 lg:text-lg">
              The Forest is a curated golf estate in Deeg, Rajasthan — 2 hours from Delhi. Executive golf, night golf, spa, clubhouse, and water-led landscape. Plots from ₹50 lakhs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/#pricing" className="inline-flex bg-[#1a3528] px-8 py-3.5 text-xs uppercase tracking-[0.2em] sm:text-sm text-white hover:opacity-80 transition-opacity">
                View Plot Pricing
              </a>
              <a href="/#contact" className="inline-flex border border-[#c8a561]/60 px-8 py-3.5 text-xs uppercase tracking-[0.2em] sm:text-sm text-[#1a3528] hover:bg-[#1a3528]/5 transition-colors">
                Download Brochure
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl text-[#1a3528]">What is a golf estate?</h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              A golf estate is a residential or plotted community built around a golf course as its primary amenity and landscape organising principle. Unlike a city golf club membership, a golf estate gives you land ownership adjacent to the course — your home or plot sits within the estate, and the golf course is part of your everyday environment.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              Golf estates are common in the UAE (Emirates Hills, Jumeirah Golf Estates), Europe, and the US. The Forest is one of a small number of planned golf estate developments in India offering freehold residential plots.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                { label: 'Golf Course', value: 'Executive 9-hole — designed for relaxed rounds and lifestyle play' },
                { label: 'Night Golf', value: 'Floodlit fairways and greens — playable after sunset' },
                { label: 'Practice Range', value: 'Driving range and putting greens within the estate' },
                { label: 'Plots', value: '500–4000 sq.yd from ₹50L. Freehold. Heritable.' },
                { label: 'Spa & Wellness', value: 'Restorative spa, sauna, steam, and infinity pool' },
                { label: 'Clubhouse', value: 'Social and dining infrastructure for the estate community' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 border-b border-[#c8a561]/15 pb-5">
                  <p className="w-32 shrink-0 text-xs uppercase tracking-[0.15em] text-[#c8a561]/70">{item.label}</p>
                  <p className="text-sm leading-6 text-[#1a3528]/70">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl text-[#1a3528]">The Forest vs. Gurgaon golf estates</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#c8a561]/30">
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">Factor</th>
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">The Forest</th>
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">Gurgaon Golf Estates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c8a561]/15">
                  {[
                    ['Price per sq.yd', '₹10K–25K', '₹25K–60K+'],
                    ['Golf course', 'Executive 9-hole + Night Golf', 'Premium 18-hole (crowded)'],
                    ['Air quality', 'Rural Rajasthan', 'Urban NCR'],
                    ['Land character', 'Forest-adjacent, nature estate', 'Dense urban periphery'],
                    ['RERA framework', 'Rajasthan RERA', 'Haryana RERA'],
                    ['Drive from Delhi', '~2 hours', '~45–90 min (traffic dependent)'],
                  ].map(([factor, forest, gurugram]) => (
                    <tr key={factor}>
                      <td className="py-3 text-[#1a3528]/60 text-xs">{factor}</td>
                      <td className="py-3 text-[#1a3528] font-medium text-xs">{forest}</td>
                      <td className="py-3 text-[#1a3528]/55 text-xs">{gurugram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
