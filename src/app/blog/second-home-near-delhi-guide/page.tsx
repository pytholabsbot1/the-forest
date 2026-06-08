import { BlogPostLayout } from '@/components/BlogPostLayout';

export default function Post() {
  return (
    <BlogPostLayout
      title="Second Home Near Delhi: Buying Guide for 2026"
      description="Everything you need to know about buying a second home near Delhi — budget brackets, plot vs. built, legal checklist, financing, and the best locations by buyer profile."
      publishedAt="2026-07-06"
      readingMinutes={7}
      pillar="Farmhouse"
    >
      <h2>Why second home demand near Delhi is rising</h2>
      <p>
        Three structural shifts are driving second home demand near Delhi NCR: increasing urban density (Gurgaon and Delhi population pressure), permanent WFH and hybrid work culture enabling more frequent weekend use, and the expressway-led accessibility revolution (Delhi-Mumbai Expressway bringing Rajasthan within comfortable weekend range). Keyword data confirms the trend: &ldquo;managed farmland&rdquo; and &ldquo;farmhouse near delhi&rdquo; are both surging. The second home is no longer a retirement fantasy — it is an active lifestyle decision for Delhi professionals in their 30s and 40s.
      </p>

      <h2>What you can get at each budget level</h2>
      <h3>₹50L – ₹1 Cr</h3>
      <p>Entry-level second home: a 500–1,000 sq.yd plot in a managed estate (The Forest, Rajasthan corridor) or a smaller standalone plot in Greater Noida. At this budget, you are buying a plot, not a built house. Construction would add ₹50L–₹1.5 Cr depending on specifications.</p>
      <h3>₹1 Cr – ₹3 Cr</h3>
      <p>Mid-range: a 1,000–2,000 sq.yd plot in a premium managed estate (The Forest Premium Estate tier) with enough budget for initial construction, or a fully built smaller farmhouse in Faridabad. This is the sweet spot for most second home buyers.</p>
      <h3>₹3 Cr+</h3>
      <p>Premium: a 2,000–4,000+ sq.yd estate plot with a fully custom-built luxury farmhouse in a curated estate. The Forest Large Estate and Farmhouse Plot tiers sit here. At this level, you are buying a generational asset, not just a weekend retreat.</p>

      <h2>Plot vs. built house: the trade-offs</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#c8a561]/30">
              <th className="pb-3 text-left text-[0.5rem] uppercase tracking-[0.35em] text-[#c8a561]">Factor</th>
              <th className="pb-3 text-left text-[0.5rem] uppercase tracking-[0.35em] text-[#c8a561]">Plot only</th>
              <th className="pb-3 text-left text-[0.5rem] uppercase tracking-[0.35em] text-[#c8a561]">Built farmhouse</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c8a561]/15">
            {[
              ['Entry cost', 'Lower — land only', 'Higher — land + construction'],
              ['Customisation', 'Full control over design and build', 'Limited to what exists or can be renovated'],
              ['Time to use', '6–18 months construction', 'Immediate — move in after purchase'],
              ['Financing', 'Plot loan (8.5–10%, 15yr)', 'Home loan (8.5–9.5%, 20–30yr)'],
              ['Capital gains tax', 'LTCG on land sale', 'LTCG on property sale (same rate)'],
              ['Maintenance', 'Minimal — estate-managed grounds', 'Full property maintenance required'],
            ].map(([factor, plot, built]) => (
              <tr key={factor}>
                <td className="py-3 text-[#1a3528]/60 text-xs">{factor}</td>
                <td className="py-3 text-[#1a3528]/70 text-xs">{plot}</td>
                <td className="py-3 text-[#1a3528]/70 text-xs">{built}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Legal checklist for second home buyers</h2>
      <ul>
        <li><strong>Land use classification:</strong> Verify the plot is classified for residential/recreational use in the master plan. Agricultural land may not allow farmhouse construction.</li>
        <li><strong>RERA registration:</strong> The project must be RERA-registered in its respective state. Check the registration number on the state RERA portal.</li>
        <li><strong>Title verification:</strong> Get an independent title search by a local property lawyer. Verify the chain of ownership for at least 30 years.</li>
        <li><strong>Encumbrance certificate:</strong> Confirm there are no existing mortgages, liens, or legal disputes on the property.</li>
        <li><strong>Approvals:</strong> Verify layout plan approval, environmental clearance (if applicable), and local body approvals.</li>
        <li><strong>Society and maintenance:</strong> Understand the estate management structure, annual charges, and what is covered before signing.</li>
      </ul>

      <h2>Financing a second home near Delhi</h2>
      <p>Most banks offer plot loans at 70–80% of the plot value for RERA-registered projects, at 8.5–10% interest, with tenure up to 15 years. Construction loans are separate and are disbursed in phases linked to construction progress. For built properties, standard home loans apply (8.5–9.5%, up to 30 years). Note: a second home loan may have a slightly higher interest rate than a primary residence. NRIs should confirm FEMA compliance with their bank.</p>

      <h2>Tax implications</h2>
      <p>Land held for more than 24 months qualifies for long-term capital gains treatment. The LTCG tax rate is 12.5% without indexation (as per the 2024 Budget). A second home is considered a second property for income tax purposes — you can claim interest deduction on the home loan under Section 24(b) for one self-occupied property, while the other is treated as &ldquo;deemed to be let out&rdquo; with notional rental income.</p>
    </BlogPostLayout>
  );
}

export const faqSchema = [
  { q: 'What is the best budget for a second home near Delhi?', a: 'The sweet spot is ₹1–3 Cr: this gets you a 1,000–2,000 sq.yd plot in a managed estate with budget for construction, or a built farmhouse in Faridabad. Entry-level is ₹50L for a plot.' },
  { q: 'Should I buy a plot or a built farmhouse?', a: 'Buy a plot for full customisation and lower entry cost. Buy a built farmhouse for immediate use. Most first-time second home buyers start with a plot in a managed estate.' },
  { q: 'Can I get a home loan for a farmhouse plot?', a: 'Yes. Plot loans are available for RERA-registered projects at 70–80% of plot value, 8.5–10% interest, 15-year tenure. Construction loans are separate.' },
  { q: 'What is the tax on selling a second home?', a: 'Long-term capital gains (held 24+ months) are taxed at 12.5% without indexation. Short-term gains are taxed at your income slab rate.' },
  { q: 'Can NRIs buy a second home near Delhi?', a: 'NRIs can buy residential plots and built properties under FEMA regulations. Agricultural land has restrictions. Always confirm with your bank and a property lawyer.' },
];
