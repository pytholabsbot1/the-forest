import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact | The Forest Golf Estate',
  description: 'Get in touch with The Forest luxury golf estate — schedule a site visit, request the brochure, or speak to the ABL Group sales team.',
  alternates: { canonical: 'https://the-forest.online/contact' },
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f0e8]">
        <section className="px-6 pt-44 pb-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c8a561] sm:text-sm">Contact</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1a3528] sm:text-5xl">
              Speak with us.
            </h1>
            <p className="mt-4 text-sm leading-8 text-[#1a3528]/65 lg:text-base">
              Schedule a site visit, request the project brochure, or ask any questions about The Forest estate. The ABL Group sales team will respond directly.
            </p>
          </div>
        </section>

        <section className="border-t border-[#c8a561]/20 px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-serif text-xl text-[#1a3528]">Visit the Estate</h2>
                <p className="mt-3 text-sm leading-7 text-[#1a3528]/65">
                  Site visits are arranged by appointment. The estate is located in Teski Village, Deeg District, Rajasthan — approximately 2 hours from Delhi via the Delhi-Mumbai Expressway.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#1a3528]/65">
                  We recommend a Saturday morning visit — tour the estate, play a round on the executive course, and see the plots available in your preferred category.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl text-[#1a3528]">Office</h2>
                <p className="mt-3 text-sm leading-7 text-[#1a3528]/65">
                  ABL Group<br />
                  Ascent Buildhome Developers Ltd.<br />
                  Faridabad, NCR
                </p>
                <p className="mt-4 text-sm leading-7 text-[#1a3528]/65">
                  Landmark project: Apna Ghar, Faridabad (est. 2005)<br />
                  32+ years of real estate experience
                </p>
              </div>
            </div>

            <div className="mt-14 rounded-lg border border-[#c8a561]/30 bg-white/50 p-8">
              <h2 className="font-serif text-xl text-[#1a3528]">Enquiry Form</h2>
              <p className="mt-2 text-sm leading-7 text-[#1a3528]/60">
                Fill in your details and the sales team will reach out within 24 hours.
              </p>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-[#1a3528]/60">Full Name</label>
                    <input type="text" id="name" name="name" required className="mt-2 w-full border border-[#c8a561]/30 bg-white px-4 py-3 text-sm text-[#1a3528] placeholder-[#1a3528]/30 outline-none focus:border-[#c8a561]/70" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-[#1a3528]/60">Phone</label>
                    <input type="tel" id="phone" name="phone" required className="mt-2 w-full border border-[#c8a561]/30 bg-white px-4 py-3 text-sm text-[#1a3528] placeholder-[#1a3528]/30 outline-none focus:border-[#c8a561]/70" placeholder="+91" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-[#1a3528]/60">Email</label>
                  <input type="email" id="email" name="email" required className="mt-2 w-full border border-[#c8a561]/30 bg-white px-4 py-3 text-sm text-[#1a3528] placeholder-[#1a3528]/30 outline-none focus:border-[#c8a561]/70" placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-xs uppercase tracking-[0.2em] text-[#1a3528]/60">Interested In</label>
                  <select id="interest" name="interest" className="mt-2 w-full border border-[#c8a561]/30 bg-white px-4 py-3 text-sm text-[#1a3528] outline-none focus:border-[#c8a561]/70">
                    <option value="">Select an option</option>
                    <option value="site-visit">Site Visit</option>
                    <option value="brochure">Brochure Request</option>
                    <option value="pricing">Pricing Enquiry</option>
                    <option value="founding-member">Founding Member Program</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-[#1a3528]/60">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-2 w-full border border-[#c8a561]/30 bg-white px-4 py-3 text-sm text-[#1a3528] placeholder-[#1a3528]/30 outline-none focus:border-[#c8a561]/70" placeholder="Tell us what you're looking for..." />
                </div>
                <button type="submit" className="inline-flex items-center bg-[#1a3528] px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-85">
                  Send Enquiry
                </button>
              </form>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                { title: 'Site Visit', body: 'Schedule a guided tour of the estate. See the course, clubhouse, and available plots in person.' },
                { title: 'Brochure', body: 'Request the full project brochure with plot layouts, pricing, and amenity details.' },
                { title: 'Founding Member', body: 'Enquire about tiered discounts and priority plot selection for the first 50 buyers.' },
              ].map((item) => (
                <div key={item.title} className="border border-[#c8a561]/25 p-5">
                  <p className="font-serif text-base text-[#1a3528]">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[#1a3528]/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
