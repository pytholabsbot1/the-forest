import { BlogPostLayout } from '@/components/BlogPostLayout';

export default function Post() {
  return (
    <BlogPostLayout
      title="Agriculture Land Investment India: What Changed in 2025–26"
      description="An update on agriculture land investment in India — regulatory changes, demand trends, the +900% YoY search surge, and what the numbers mean for investors."
      publishedAt="2026-08-24"
      readingMinutes={6}
      pillar="Managed Farmland"
    >
      <h2>The +900% signal: what it means</h2>
      <p>&ldquo;Agriculture land investment&rdquo; searches have grown 900% year-over-year according to Google Keyword Planner data. Buoyed by &ldquo;buy agricultural land&rdquo; at 5,000 monthly searches and &ldquo;farmland investment india&rdquo; at 500/month with strong growth, the data confirms a surge in Indian investor interest in land as an asset class. Three structural changes have driven this.</p>

      <h2>What changed in 2025–26</h2>
      <h3>1. Expressway-led corridor expansion</h3>
      <p>The Delhi-Mumbai Expressway is the most significant catalyst: it made the Rajasthan corridor (Alwar, Deeg, Neemrana) a direct weekend destination from Delhi. Land that was 3.5 hours away is now 2 hours. This is the infrastructure equivalent of a price repricing — accessibility changes, and land values follow.</p>

      <h3>2. RERA maturity across states</h3>
      <p>Rajasthan, Haryana, and UP RERA frameworks have matured. Rajasthan RERA in particular has built a reputation for progressive enforcement. For land investors, this means more projects with mandatory registration, standardised agreements, and formal dispute resolution — reducing the Wild West character that previously defined peripheral land markets.</p>

      <h3>3. Managed farmland as a compliant alternative</h3>
      <p>Agricultural land purchase by non-farmers remains legally complex in most states. Managed farmland — residential-use plots within RERA-registered estates — has emerged as the compliant alternative. Buyers get titled land ownership without navigating agricultural conversion or eligibility restrictions.</p>

      <h2>State-wise regulatory snapshot</h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[#c8a561]/30">
            <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">State</th>
            <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">Can non-farmers buy agricultural land?</th>
            <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[#c8a561] sm:text-xs">Managed farmland alternative</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#c8a561]/15">
          {[
            ['Rajasthan', 'Restricted — generally no', 'Available — RERA-registered estates'],
            ['Haryana', 'Restricted — generally no', 'Available — select projects'],
            ['Uttar Pradesh', 'Restricted — generally no', 'Available — emerging market'],
            ['Maharashtra', 'Allowed under conditions', 'Available'],
            ['Karnataka', 'Allowed under conditions', 'Available'],
          ].map(([state, agri, managed]) => (
            <tr key={state}>
              <td className="py-3 text-[#1a3528] font-medium text-xs">{state}</td>
              <td className="py-3 text-[#1a3528]/70 text-xs">{agri}</td>
              <td className="py-3 text-[#1a3528]/55 text-xs">{managed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>What the demand data tells us about buyer behaviour</h2>
      <p>The +900% growth is not evenly distributed. The fastest-growing searches are location-specific (&ldquo;alwar farmhouse,&rdquo; &ldquo;farm house faridabad&rdquo;) and category-specific (&ldquo;managed farmland&rdquo;). Buyers are not searching generically for &ldquo;agricultural land&rdquo; — they are searching with intent: a location, a use case, a price point. The trend is toward curated, managed land rather than raw agricultural purchase. This is a structural shift in how Indian investors think about land.</p>

      <h2>The managed farmland opportunity in the Alwar-Deeg corridor</h2>
      <p>The Forest by ABL Group in Deeg, Rajasthan represents the managed model: freehold residential plots in a RERA-registered project with executive golf, night golf, spa, clubhouse, and year-round estate maintenance. It sits in the corridor with +900% YoY search growth, at entry-stage pricing (₹50L+). It is the compliant, managed alternative to agricultural land speculation in the same corridor.</p>
    </BlogPostLayout>
  );
}

export const faqSchema = [
  { q: 'Can non-farmers buy agricultural land in India?', a: 'It varies by state. Rajasthan, Haryana, and UP restrict agricultural land purchase by non-farmers. Managed farmland in RERA-registered residential/recreational projects provides a compliant alternative.' },
  { q: 'Why has agricultural land investment surged in India?', a: 'Three drivers: expressway-led corridor accessibility (Delhi-Mumbai Expressway unlocking Rajasthan), RERA maturity reducing legal risk, and managed farmland offering a compliant, amenity-rich alternative to raw land.' },
  { q: 'What is the minimum investment for land in the Alwar-Deeg corridor?', a: 'Managed farmland plots start at approximately ₹50L for a 500 sq.yd plot. Raw agricultural land costs less but carries legal restrictions and higher risk for non-farmer buyers.' },
  { q: 'Is farmland a better investment than flats in 2026?', a: 'Land offers different benefits: no depreciation (unlike buildings), potential for corridor-driven appreciation, and lower holding costs. Flats offer rental income and higher liquidity. They serve different roles in a portfolio.' },
];
