import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Managed Farmland Near Delhi | The Forest Golf Estate',
  description: 'Own land in a fully managed luxury estate near Delhi. The Forest offers curated farmland plots with golf, spa, clubhouse, and full estate management — no self-management required.',
  keywords: ['managed farmland', 'managed farmland india', 'managed farmland near delhi', 'managed farms', 'managed farmland investment'],
  alternates: { canonical: 'https://www.forestfarmhouses.in/managed-farmland' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question', name: 'What is managed farmland?',
      acceptedAnswer: { '@type': 'Answer', text: 'Managed farmland is a model where you own a land plot within a curated estate, and the estate operator handles maintenance, security, landscaping, and amenity management on your behalf. You get the benefits of land ownership without the burden of day-to-day management.' },
    },
    {
      '@type': 'Question', name: 'How does managed farmland work at The Forest?',
      acceptedAnswer: { '@type': 'Answer', text: 'At The Forest, you own your plot outright. ABL Group maintains the common areas, golf course, spa, clubhouse, and landscape infrastructure. Your plot is within the secured, managed estate — you visit when you wish, and the estate is maintained year-round.' },
    },
    {
      '@type': 'Question', name: 'What are the returns on managed farmland investment near Delhi?',
      acceptedAnswer: { '@type': 'Answer', text: 'Land appreciation in the Delhi-Mumbai Expressway corridor has historically outpaced inflation. The Forest plots are priced 50-60% below comparable Gurgaon golf estate land, offering both entry-value advantage and long-term appreciation potential. Specific return projections should be verified with the sales team.' },
    },
  ],
};

export default function ManagedFarmland() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-[#f5f0e8]">

        <section className="px-6 pt-44 pb-28 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a561] sm:text-sm">Managed Farmland</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1a3528] sm:text-6xl lg:text-7xl">
              Own land.<br />Without managing it.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#1a3528]/65 lg:text-lg">
              The Forest is a fully managed luxury estate near Delhi. You own your plot. We maintain the golf course, spa, clubhouse, trails, and landscape — year-round, whether you visit or not.
            </p>
            <a href="/#contact" className="mt-8 inline-flex bg-[#1a3528] px-8 py-3.5 text-xs uppercase tracking-[0.2em] sm:text-sm text-white hover:opacity-80 transition-opacity">
              Request Information
            </a>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl text-[#1a3528]">What is managed farmland?</h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              Managed farmland is a model where you own a plot within a curated, maintained estate — without the responsibilities of individual land management. Security, landscaping, infrastructure, and amenities are operated centrally by the developer. You get the legal ownership, lifestyle access, and long-term value of land, without the burden of day-to-day upkeep.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              It is the fastest-growing category in Indian real estate, particularly in the NCR periphery, where Delhi-based families want land ownership without the complexity of isolated rural plots.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'You own the land', body: 'Freehold plot in your name. Heritable, transferable, mortgageable.' },
                { title: 'We manage the estate', body: 'Golf course, spa, clubhouse, trails, security — all maintained by ABL Group year-round.' },
                { title: 'Visit on your terms', body: 'Weekend escapes, extended stays, or just the reassurance of owning maintained land.' },
                { title: 'No isolation risk', body: 'Unlike raw rural land, your plot sits within a secured, amenity-rich community.' },
                { title: 'Rajasthan RERA', body: 'Regulated transaction with full disclosure. Not an unregistered agricultural scheme.' },
                { title: 'Near Delhi', body: '2 hours from Delhi via Delhi-Mumbai Expressway — accessible enough to use regularly.' },
              ].map((item) => (
                <div key={item.title} className="border border-[#c8a561]/30 p-6">
                  <p className="font-serif text-lg text-[#1a3528]">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[#1a3528]/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-[#1a3528]">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-[#c8a561]/25">
              {[
                { q: 'What is managed farmland?', a: 'Managed farmland is a model where you own a land plot within a curated estate, and the estate operator handles maintenance, security, and amenity management. You get ownership without the management burden.' },
                { q: 'Is managed farmland a good investment in India?', a: 'Managed farmland near Delhi has shown strong appreciation potential, driven by NCR urban expansion and the Delhi-Mumbai Expressway corridor. The key advantage over raw land is reduced risk: managed estates have maintained infrastructure, regulated titles, and existing buyer communities.' },
                { q: 'What is the difference between managed farmland and agricultural land?', a: 'Agricultural land is unimproved, typically remote, and requires the owner to manage cultivation or maintenance independently. Managed farmland within an estate like The Forest is a titled, residential-use plot within a curated, amenity-equipped community.' },
              ].map(({ q, a }) => (
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
