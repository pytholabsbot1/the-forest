import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About | The Forest Golf Estate',
  description: 'The Forest is a luxury golf estate by ABL Group in Deeg, Rajasthan — 32+ years of real estate experience, executive golf, and legacy plots near Delhi.',
  alternates: { canonical: 'https://www.forestfarmhouses.in/about' },
};

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f0e8]">
        <section className="px-6 pt-44 pb-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c8a561] sm:text-sm">About</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1a3528] sm:text-5xl">
              Built for generations.<br />Not for moments.
            </h1>
            <p className="mt-6 text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              The Forest is a luxury golf estate by ABL Group, located in Teski Village, Deeg District, Rajasthan. It is a curated community of 330 legacy estate plots, anchored by an executive 9-hole golf course with night golf — one of the few floodlit courses in India.
            </p>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-[#1a3528] sm:text-3xl">The Developer</h2>
            <p className="mt-5 text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              ABL Group (Ascent Buildhome Developers Ltd.) is led by Mr. Murshid Ahmed, with 32+ years of real estate experience across NCR, Rajasthan, and Odisha. The group&apos;s landmark developments include Apna Ghar in Faridabad, founded in 2005. The Forest represents ABL Group&apos;s flagship luxury estate — a project built on decades of trust, delivered phases, and deep regional knowledge.
            </p>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-[#1a3528] sm:text-3xl">The Location</h2>
            <p className="mt-5 text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              Teski Village, Sikhri Tehsil, Deeg District, Rajasthan — approximately 2 hours from Delhi and 90 minutes from Gurugram via the Delhi-Mumbai Expressway. The estate sits at the heart of the Alwar–Deeg corridor, which is the fastest-growing farmhouse and managed estate market near Delhi NCR.
            </p>
            <p className="mt-3 text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              Unlike urban-peripheral developments in Gurgaon, Deeg offers genuine rural character: open skies, cleaner air, forest-adjacent land, and a pace of life that city farmhouses cannot provide. The expressway makes it accessible enough for weekend use while keeping it far enough to feel like a real escape.
            </p>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-[#1a3528] sm:text-3xl">The Estate</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Golf', value: 'Executive 9-hole course with floodlit night golf and practice range' },
                { label: 'Wellness', value: 'Spa, sauna, steam, and infinity pool' },
                { label: 'Clubhouse', value: 'Social and dining spaces for the estate community' },
                { label: 'Landscape', value: 'Water-led design with trails, open green spaces, and forest adjacency' },
                { label: 'Plots', value: '330 freehold legacy plots from 500–4,000+ sq.yd' },
                { label: 'Management', value: 'Year-round estate maintenance by ABL Group' },
              ].map((item) => (
                <div key={item.label} className="border border-[#c8a561]/25 p-5">
                  <p className="font-serif text-base text-[#1a3528]">{item.label}</p>
                  <p className="mt-2 text-xs leading-6 text-[#1a3528]/60">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-[#1a3528] sm:text-3xl">RERA & Regulatory</h2>
            <p className="mt-5 text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              The Forest is registered under Rajasthan RERA. Rajasthan RERA is widely regarded as one of India&apos;s more progressive real estate regulatory frameworks, with mandatory project registration, standardised agreements, and enforceable dispute resolution. Full disclosure documentation is shared during the enquiry process.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
