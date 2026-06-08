import { BlogPostLayout } from '@/components/BlogPostLayout';

export default function Post() {
  return (
    <BlogPostLayout
      title="Farmland Investment Near Delhi: A Complete Buyer's Guide"
      description="Step-by-step guide to buying farmland near Delhi — due diligence, legal verification, financing, site visit protocol, and common pitfalls to avoid."
      publishedAt="2026-08-31"
      readingMinutes={7}
      pillar="Managed Farmland"
    >
      <h2>The 8-step buyer checklist</h2>
      <p>Buying farmland near Delhi — whether raw or managed — involves more legal and regulatory steps than a standard apartment purchase. This guide walks through every step, with emphasis on what is different about land transactions.</p>

      <h3>1. Define your category: raw, converted, or managed</h3>
      <p>Raw agricultural land: lowest price, highest legal complexity, restricted for non-farmers in most NCR states. Converted residential plots: agricultural land that has received land-use change approval — legally easier but individually managed. Managed farmland: residential plots within a RERA-registered estate — highest price, lowest complexity. Choose your category before starting the search.</p>

      <h3>2. Verify land use and master plan</h3>
      <p>Check the state master plan or development plan for the district. Confirm the plot falls within a zone designated for residential, recreational, or mixed-use development. Agricultural zone land may not allow farmhouse construction even if you legally own it.</p>

      <h3>3. Title verification — the most important step</h3>
      <p>Engage an independent property lawyer (not referred by the seller or developer). Get a title search covering at least 30 years of ownership chain. Verify: clear title, no encumbrances (mortgages, liens), no pending litigation, and that the seller has the legal right to transfer ownership.</p>

      <h3>4. RERA registration check</h3>
      <p>For managed farmland or plotted developments, verify RERA registration on the state RERA portal. Check: registration number validity, project details match what is being sold, and any complaints or orders against the developer.</p>

      <h3>5. Site visit protocol</h3>
      <p>Visit the site at least twice — once scheduled with the developer, once independently. During the independent visit: verify plot demarcation, check boundary markers, confirm access road condition, observe surrounding land use, and speak to neighbours or nearby residents about the area.</p>

      <h3>6. Understand the payment and agreement structure</h3>
      <p>Never pay any amount without a registered agreement for sale. For RERA projects, the agreement must follow the state RERA&apos;s prescribed format. Understand: payment schedule, possession timeline, penalty clauses for delay, and cancellation/refund terms.</p>

      <h3>7. Financing a farmland purchase</h3>
      <p>Plot loans are available for RERA-registered projects at 70–80% of plot value, 8.5–10% interest, up to 15 years. Banks typically do not finance raw agricultural land for non-farmers. Construction loans are separate and disbursed in phases.</p>

      <h3>8. Registration and possession</h3>
      <p>The sale deed must be registered at the sub-registrar&apos;s office with stamp duty paid (5–7% of plot value depending on state). After registration: apply for mutation of title in your name in the land revenue records, update the property tax record, and for managed estates, complete the association/society membership formalities.</p>

      <h2>Common pitfalls to avoid</h2>
      <ul>
        <li><strong>Skipping the independent title search:</strong> The single most common land dispute in India is unclear title. Do not rely on the seller&apos;s assurances.</li>
        <li><strong>Buying agricultural land as a non-farmer:</strong> In Rajasthan, Haryana, and UP, this creates legal vulnerability. Use managed farmland instead.</li>
        <li><strong>Ignoring access road quality:</strong> A beautiful plot with a mud track access road is a plot you cannot use comfortably. Verify road quality and maintenance responsibility.</li>
        <li><strong>Not verifying completion timelines for amenities:</strong> If a managed estate promises golf, spa, and clubhouse, ask: when will each be completed? What happens if timelines slip?</li>
        <li><strong>Overlooking annual costs:</strong> Maintenance charges, property tax, and security costs are ongoing. Model the total cost of ownership, not just the purchase price.</li>
      </ul>
    </BlogPostLayout>
  );
}

export const faqSchema = [
  { q: 'What is the first step to buying farmland near Delhi?', a: 'Decide your category: raw agricultural land (cheapest, most legal complexity), converted residential (medium), or managed farmland in a RERA-registered estate (highest price, lowest complexity). Then start title verification.' },
  { q: 'How do I verify the title of a farmland plot?', a: 'Engage an independent property lawyer for a 30-year title search. Verify clear title, no encumbrances, no pending litigation, and that the seller has legal authority to transfer the property.' },
  { q: 'Can I get a bank loan for farmland near Delhi?', a: 'Plot loans are available for RERA-registered projects (70–80% of value, 8.5–10%, up to 15 years). Banks typically do not finance raw agricultural land for non-farmers.' },
  { q: 'What are the most common mistakes when buying farmland?', a: 'Skipping independent title verification, buying agricultural land as a non-farmer in restricted states, not checking access road quality, and overlooking ongoing maintenance costs.' },
  { q: 'How much stamp duty is payable on farmland near Delhi?', a: 'Stamp duty ranges from 5–7% of the plot value depending on the state. Rajasthan is approximately 6%. This is a significant cost — factor it into your total budget.' },
];
