const faqs = [
  {
    q: 'Where is The Forest golf estate located?',
    a: 'The Forest is located in Teski Village, Sikhri Tehsil, Deeg District, Rajasthan — approximately 2 hours from Delhi and 90 minutes from Gurugram via the Delhi-Mumbai Expressway corridor.',
  },
  {
    q: 'What are the plot sizes and prices at The Forest?',
    a: 'The Forest offers four plot categories: Estate Plots (500–1000 sq.yd, from ₹50L), Premium Estate (1000–2000 sq.yd, ₹1–2.4 Cr), Large Estate (2000–4000 sq.yd, ₹2.4–6 Cr), and Farmhouse Plots (private estate land, ₹3–10 Cr+).',
  },
  {
    q: 'Is The Forest RERA registered?',
    a: 'RERA registration details and all project approvals are shared directly by the ABL Group sales team during enquiry. Contact us to receive the full disclosure documentation.',
  },
  {
    q: 'What golf facilities does The Forest offer?',
    a: 'The Forest features an executive golf course, a practice range, and India\'s rare night golf experience with floodlit fairways — designed for relaxed rounds and lifestyle play rather than tournament competition.',
  },
  {
    q: 'How does The Forest compare to golf estates near Gurgaon?',
    a: 'The Forest offers a 50–60% price advantage versus comparable Gurgaon golf estates, with equivalent or superior amenities. It sits in Rajasthan, giving buyers regulatory flexibility and a genuine nature setting that the urban periphery cannot provide.',
  },
  {
    q: 'What is the Founding Member Program?',
    a: 'The first 50 buyers receive tiered discounts: first 10 plots at 20% below launch price, next 15 plots at 15% below, and the following 25 plots at 10% below launch price.',
  },
  {
    q: 'Who is the developer of The Forest?',
    a: 'The Forest is developed by ABL Group (Ascent Buildhome Developers Ltd.), led by Mr. Murshid Ahmed. The group has 32+ years of real estate experience across NCR, Rajasthan, and Odisha, with landmark developments including Apna Ghar in Faridabad.',
  },
  {
    q: 'Can I visit The Forest before booking?',
    a: 'Yes. Site visits are arranged by appointment. Contact the ABL Group sales team to schedule a visit and receive the project brochure.',
  },
];

export function FaqSection() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section id="faq" className="bg-[#f5f0e8] px-6 py-20 lg:px-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#c8a561]/70" />
          <span className="text-[0.5rem] text-[#c8a561]">◆</span>
        </div>
        <h2 className="mt-6 font-serif text-3xl text-[#1a3528] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-[#c8a561]/25">
          {faqs.map(({ q, a }, i) => (
            <details key={i} className="group py-5">
              <summary className="cursor-pointer list-none font-serif text-lg text-[#1a3528] lg:text-xl">
                {q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-[#1a3528]/65 lg:text-base">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
