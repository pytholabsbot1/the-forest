
import type { ReactNode } from 'react';

import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StructuredData } from '@/components/StructuredData';

type StatItem = {
  label: string;
  value: string;
  detail?: string;
};

type FeatureItem = {
  eyebrow?: string;
  title: string;
  body: string;
  light?: boolean;
  className?: string;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  light?: boolean;
  center?: boolean;
  className?: string;
};

type StatCardProps = StatItem & {
  light?: boolean;
  className?: string;
};

type PriceTier = {
  name: string;
  size: string;
  price: string;
  note: string;
  ideal: string;
};

const introStats: StatItem[] = [
  {
    label: 'Location',
    value: 'About 2 hours from Delhi',
    detail: 'A quieter address with more breathing room.',
  },
  {
    label: 'Golf',
    value: 'Executive 9-hole + night golf',
    detail: 'A lifestyle-first golf proposition.',
  },
  {
    label: 'Value',
    value: 'Meaningful advantage',
    detail: 'Versus comparable Gurgaon golf estates.',
  },
];

const pillars: FeatureItem[] = [
  {
    eyebrow: '01',
    title: 'Nature is the amenity',
    body: 'The landscape does the work a club usually does. Space, shade, and calm become part of everyday life.',
  },
  {
    eyebrow: '02',
    title: 'Golf is the lifestyle',
    body: 'Play, practice, and linger without feeling rushed. The rhythm is deliberate, not performative.',
  },
  {
    eyebrow: '03',
    title: 'Built for generations',
    body: 'A place to inherit in value and meaning — designed to hold family time, rituals, and memory.',
  },
];

const needCards: FeatureItem[] = [
  {
    eyebrow: '01',
    title: 'Crowded cities compress everyday life',
    body: 'The Forest creates breathing room, slower days, and a calmer address.',
  },
  {
    eyebrow: '02',
    title: 'Second homes should feel restorative',
    body: 'A retreat should refresh the family, not just hold land.',
  },
  {
    eyebrow: '03',
    title: 'Value must feel meaningful',
    body: 'The opportunity should balance price discipline with emotional permanence.',
  },
];

const golfHighlights: FeatureItem[] = [
  {
    title: 'Executive 9-hole course',
    body: 'A relaxed format for lifestyle golfers and unhurried rounds.',
  },
  {
    title: 'Night golf',
    body: 'Evenings extend the play, not just the stay.',
  },
  {
    title: 'Practice range',
    body: 'Designed for repetition, learning, and quiet weekend rhythm.',
  },
];

const amenityCards: FeatureItem[] = [
  {
    eyebrow: 'Night golf',
    title: 'Practice range',
    body: 'Built for play beyond daylight.',
  },
  {
    eyebrow: 'Sports & fitness',
    title: 'Movement every day',
    body: 'Spaces designed for vitality, energy, and a steady routine.',
  },
  {
    eyebrow: 'Spa & wellness',
    title: 'Rooms for restoration',
    body: 'Rituals and environments made for calm, recovery, and reset.',
  },
];

const pricingTiers: PriceTier[] = [
  {
    name: 'Estate Plots',
    size: '500–1000 sq.yd',
    price: '₹50L – 1 Cr',
    note: '₹10,000–12,000 / sq.yd',
    ideal: 'Second-home buyers and professionals',
  },
  {
    name: 'Premium Estate',
    size: '1000–2000 sq.yd',
    price: '₹1 Cr – 2.4 Cr',
    note: '₹9,000–11,000 / sq.yd',
    ideal: 'Business families and HNIs',
  },
  {
    name: 'Large Estate',
    size: '2000–4000 sq.yd',
    price: '₹2.4 Cr – 6 Cr',
    note: '₹8,000–10,000 / sq.yd',
    ideal: 'Legacy buyers and multi-generational families',
  },
  {
    name: 'Farmhouse Plots',
    size: 'Private estate land',
    price: '₹3 Cr – 10 Cr+',
    note: 'Estate-scale land for privacy and space',
    ideal: 'Ultra-HNIs and farmhouse lifestyle seekers',
  },
];

const foundingBenefits: StatItem[] = [
  {
    label: 'First 10 plots',
    value: '20% below launch price',
    detail: 'Priority plot selection and founding access.',
  },
  {
    label: 'Next 15 plots',
    value: '15% below launch price',
    detail: 'Founding member benefits and early selection.',
  },
  {
    label: 'Next 25 plots',
    value: '10% below launch price',
    detail: 'Early access before the pricing steps up.',
  },
];

const locationPoints = [
  {
    label: 'Delhi',
    value: 'About 2 hours away',
  },
  {
    label: 'Delhi-Mumbai Expressway corridor',
    value: 'A strategic growth axis for the region',
  },
  {
    label: 'Teski Village, Deeg District',
    value: 'A quieter landscape with more seclusion',
  },
];

const locationCards: FeatureItem[] = [
  {
    eyebrow: '01',
    title: 'Deeper seclusion',
    body: 'The distance is the point: more calm, less congestion, and a stronger sense of retreat.',
  },
  {
    eyebrow: '02',
    title: 'DME corridor growth',
    body: 'The Delhi-Mumbai Expressway corridor strengthens the long-term narrative.',
  },
  {
    eyebrow: '03',
    title: 'Rajasthan clarity',
    body: 'Rajasthan RERA adds a clearer regulatory framework for the project story.',
  },
];

const masterplanNotes: FeatureItem[] = [
  {
    title: 'Golf-first composition',
    body: 'Open circulation keeps the estate legible and calm.',
  },
  {
    title: 'Water-led landscape',
    body: 'Edges and crossings are treated as part of the experience, not just the backdrop.',
  },
  {
    title: 'Low-density ethos',
    body: 'Space is treated as a luxury, not leftover land.',
  },
];

const lightCard = 'luxe-card';
const darkCard = 'luxe-card-dark';

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
  center = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} ${className} max-w-3xl`}>
      <p className={`kicker ${light ? 'kicker-light' : ''}`}>{eyebrow}</p>
      <h2
        className={`mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl ${
          light ? 'text-[var(--forest-ivory)]' : 'text-[var(--forest-deep)]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-6 text-base leading-8 sm:text-lg ${
          light ? 'text-white/74' : 'text-[var(--forest-green)]/78'
        }`}
      >
        {copy}
      </p>
    </div>
  );
}

function FeatureCard({ eyebrow, title, body, light = true, className = '' }: FeatureItem) {
  return (
    <article
      className={`${light ? lightCard : darkCard} p-6 sm:p-7 ${className}`}
    >
      {eyebrow ? (
        <p
          className={`text-xs uppercase tracking-[0.32em] ${
            light ? 'text-[var(--forest-green)]/55' : 'text-[var(--forest-gold)]/95'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h3
        className={`mt-4 font-serif text-2xl leading-tight sm:text-3xl ${
          light ? 'text-[var(--forest-deep)]' : 'text-[var(--forest-ivory)]'
        }`}
      >
        {title}
      </h3>
      <p className={`mt-4 text-sm leading-7 ${light ? 'text-[var(--forest-green)]/74' : 'text-white/72'}`}>
        {body}
      </p>
    </article>
  );
}

function StatCard({ label, value, detail, light = true, className = '' }: StatCardProps) {
  return (
    <div className={`${light ? lightCard : darkCard} p-4 sm:p-5 ${className}`}>
      <p className={`text-[0.65rem] uppercase tracking-[0.32em] ${light ? 'text-[var(--forest-green)]/50' : 'text-white/50'}`}>
        {label}
      </p>
      <p className={`mt-3 font-serif text-2xl leading-tight ${light ? 'text-[var(--forest-deep)]' : 'text-[var(--forest-ivory)]'}`}>
        {value}
      </p>
      {detail ? (
        <p className={`mt-2 text-sm leading-6 ${light ? 'text-[var(--forest-green)]/68' : 'text-white/66'}`}>
          {detail}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="content" className="overflow-x-hidden">
        <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,165,97,0.14),transparent_36%),linear-gradient(180deg,#f7f2e8_0%,#efe6d5_100%)]" />
          <div className="grain absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="reveal max-w-3xl">
                <p className="kicker">ABL Group presents</p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="h-px w-16 bg-[var(--forest-gold)]/70" />
                  <span className="text-xs uppercase tracking-[0.35em] text-[var(--forest-green)]/65">
                    A grand luxury golf estate
                  </span>
                </div>
                <div className="mt-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(200,165,97,0.55)] bg-white/45 font-serif text-2xl tracking-[0.35em] text-[var(--forest-green)] shadow-[0_10px_30px_rgba(15,31,23,0.08)]">
                  TF
                </div>
                <h1 className="mt-8 max-w-3xl font-serif text-6xl leading-[0.9] text-[var(--forest-deep)] sm:text-7xl lg:text-[7.5rem]">
                  THE FOREST
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--forest-green)]/80 sm:text-xl">
                  About 2 hours from Delhi, a world away from the city.
                </p>
                <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.28em] text-[var(--forest-green)]/60">
                  Premium estate plots • Curated amenities • Legacy value
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-[var(--forest-green)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[var(--forest-ivory)] shadow-[0_16px_30px_rgba(20,49,40,0.18)] transition-transform hover:-translate-y-0.5"
                  >
                    Request the brochure
                  </a>
                  <a
                    href="#manifesto"
                    className="inline-flex items-center rounded-full border border-[rgba(37,76,58,0.2)] bg-white/55 px-6 py-3 text-sm uppercase tracking-[0.2em] text-[var(--forest-green)] transition-colors hover:bg-white"
                  >
                    Explore the estate
                  </a>
                </div>
                <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {introStats.map((item) => (
                    <StatCard key={item.label} {...item} className="h-full" />
                  ))}
                </div>
              </div>

              <div className="reveal reveal-delay-1 relative">
                <div className="absolute -inset-6 rounded-[2rem] border border-[rgba(200,165,97,0.2)]" aria-hidden="true" />
                <div className={`${darkCard} relative overflow-hidden p-6 sm:p-8`}>
                  <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(200,165,97,0.22),transparent_35%),linear-gradient(145deg,rgba(247,242,232,0.14),rgba(247,242,232,0.03))] p-6 sm:p-8">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-gold)]/90">
                          Brochure cover
                        </p>
                        <div className="mt-6 h-px w-24 bg-[var(--forest-gold)]/55" />
                        <p className="mt-6 max-w-sm font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                          Where golf, forest, water, and legacy meet.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/52">Play</p>
                          <p className="mt-2 text-sm text-white/84">Executive golf</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/52">Evenings</p>
                          <p className="mt-2 text-sm text-white/84">Night golf</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/52">Access</p>
                          <p className="mt-2 text-sm text-white/84">Founding benefits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/55">
                    <span>Private viewings by appointment</span>
                    <span>Editorial presentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="manifesto" className="section-shell bg-[var(--forest-parchment)]">
          <div className="grain absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="reveal">
                <SectionHeading
                  eyebrow="Why The Forest exists"
                  title="The Forest is not built for moments. It is built for generations."
                  copy="Modern life has become faster, denser, and more disconnected from nature. The Forest is our quieter answer: a luxury estate where family time, wellness, golf, and long-term value can live at the same address."
                />

                <div className="mt-10 rounded-[1.75rem] border border-[rgba(200,165,97,0.25)] bg-white/70 p-6 shadow-[0_20px_50px_rgba(15,31,23,0.06)] backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/55">Callout</p>
                  <p className="mt-4 font-serif text-3xl leading-tight text-[var(--forest-deep)] sm:text-4xl">
                    Land you own. Life you return to.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3 reveal reveal-delay-1">
                {pillars.map((item) => (
                  <FeatureCard key={item.eyebrow ?? item.title} {...item} />
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {needCards.map((item) => (
                <FeatureCard key={item.eyebrow ?? item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="golf" className="section-shell bg-[var(--forest-deep)] text-[var(--forest-ivory)]">
          <div className="grain absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              light
              eyebrow="Executive golf"
              title="Golf that fits your schedule, day or night."
              copy="An executive 9-hole experience designed for relaxed rounds, practice, and evenings that stretch into conversation."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <article className={`${darkCard} overflow-hidden p-6 sm:p-8`}>
                <div className="flex min-h-[30rem] flex-col justify-between gap-8 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(200,165,97,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-gold)]/90">
                      Executive golf
                    </p>
                    <h3 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                      Play beyond daylight.
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
                      Thoughtfully designed fairways, quiet evenings, and a pace of play that feels leisurely rather than rushed.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {golfHighlights.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-white/52">{item.title}</p>
                        <p className="mt-3 text-sm leading-7 text-white/80">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="grid gap-6">
                <FeatureCard
                  light={false}
                  eyebrow="Quiet luxury"
                  title="A slower rhythm of luxury."
                  body="The course is not positioned as spectacle. It is part of the estate’s daily tempo — something to return to, not rush through."
                />
                <FeatureCard
                  light={false}
                  eyebrow="The point"
                  title="Play, practice, and linger."
                  body="The experience is shaped for unhurried mornings, evening rounds, and the kind of weekends that feel restorative instead of overprogrammed."
                />
              </div>
            </div>
          </div>
        </section>

        <section id="amenities" className="section-shell bg-[var(--forest-ivory)]">
          <div className="grain absolute inset-0 opacity-35" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Curated for the modern elite"
              title="A world curated for the modern elite."
              copy="Thoughtfully curated experiences that balance adventure, wellness, and leisure."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {amenityCards.map((item) => (
                <FeatureCard key={item.eyebrow ?? item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="clubhouse" className="section-shell bg-[var(--forest-parchment)]">
          <div className="grain absolute inset-0 opacity-35" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="reveal">
                <SectionHeading
                  eyebrow="The clubhouse"
                  title="Designed for slow mornings, long conversations, and evenings that extend beyond sunset."
                  copy="A quiet destination for social life — coffee, conversations, and unhurried afternoons that feel intentionally composed."
                />
              </div>

              <article className={`${lightCard} overflow-hidden p-6 sm:p-8 reveal reveal-delay-1`}>
                <div className="aspect-[4/3] rounded-[1.5rem] border border-[rgba(19,45,36,0.08)] bg-[radial-gradient(circle_at_top,rgba(200,165,97,0.14),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.9),rgba(239,230,213,0.72))] p-6 sm:p-8">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-green)]/55">The clubhouse</p>
                      <p className="mt-6 max-w-xl font-serif text-3xl leading-tight text-[var(--forest-deep)] sm:text-4xl">
                        For coffee, conversations, and evenings that don’t feel rushed.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <StatCard label="Morning" value="Slow starts" detail="Coffee, light, and calm." />
                      <StatCard label="Afternoon" value="Longer pauses" detail="A place to meet, read, and linger." />
                      <StatCard label="Evening" value="Quiet social life" detail="Gatherings that extend beyond sunset." />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="landscape" className="section-shell bg-[var(--forest-ivory)]">
          <div className="grain absolute inset-0 opacity-35" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <article className={`${darkCard} overflow-hidden p-6 sm:p-8 reveal`}>
                <div className="aspect-[4/3] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(200,165,97,0.26),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 sm:p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative flex h-64 w-full max-w-lg items-center justify-center">
                      <div className="absolute inset-y-12 left-6 right-6 rounded-full border border-[rgba(200,165,97,0.4)]" />
                      <div className="absolute inset-y-20 left-12 right-12 rounded-full border border-white/10" />
                      <div className="absolute bottom-10 left-8 right-8 h-16 rounded-full bg-[rgba(37,76,58,0.22)] blur-2xl" />
                      <div className="absolute top-[20%] left-[18%] rounded-full border border-[rgba(200,165,97,0.28)] bg-[rgba(200,165,97,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--forest-gold)]">
                        Water edge
                      </div>
                      <div className="absolute top-[28%] right-[15%] rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/74">
                        Tree line
                      </div>
                      <div className="absolute bottom-[20%] left-[20%] rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/74">
                        Open sky
                      </div>
                      <div className="absolute bottom-[26%] right-[18%] rounded-full border border-[rgba(200,165,97,0.28)] bg-[rgba(200,165,97,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--forest-gold)]">
                        Breathing room
                      </div>
                      <div className="text-center text-[var(--forest-ivory)]">
                        <p className="text-xs uppercase tracking-[0.38em] text-white/52">Landscape</p>
                        <p className="mt-4 font-serif text-3xl leading-tight">Water, landscaped.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <div className="reveal reveal-delay-1">
                <SectionHeading
                  eyebrow="Water, landscaped"
                  title="Water, landscaped."
                  copy="The natural terrain becomes the luxury experience: water edges, tree lines, open skies, and the breathing room that makes a place feel complete."
                />
                <div className="mt-10 rounded-[1.75rem] border border-[rgba(19,45,36,0.12)] bg-white/70 p-6 shadow-[0_20px_50px_rgba(15,31,23,0.06)] backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/55">Landscape note</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--forest-green)]/74">
                    Long stretches of water-led landscape woven into the estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="legacy" className="section-shell bg-[var(--forest-deep)] text-[var(--forest-ivory)]">
          <div className="grain absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="reveal">
                <SectionHeading
                  light
                  eyebrow="A foundation for tomorrow"
                  title="A foundation for tomorrow."
                  copy="The Forest is designed as a generational place: for family time, rituals, learning, and the kind of life that becomes memory. Built to be inherited in value and in meaning."
                />
              </div>

              <div className="grid gap-6 reveal reveal-delay-1">
                <article className={`${darkCard} p-6 sm:p-8`}>
                  <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-gold)]/90">
                    Legacy line
                  </p>
                  <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                    The Forest is a place to return to, not just a place to own.
                  </p>
                </article>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      label: 'Family time',
                      value: 'Space for weekends and gatherings',
                    },
                    {
                      label: 'Learning',
                      value: 'A calm setting that supports routine',
                    },
                    {
                      label: 'Meaning',
                      value: 'Built to be carried forward',
                    },
                  ].map((item) => (
                    <StatCard key={item.label} label={item.label} value={item.value} light={false} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-shell bg-[var(--forest-parchment)]">
          <div className="grain absolute inset-0 opacity-35" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Premium plots, positioned for value"
              title="Premium plots, positioned for value."
              copy="The Forest is priced to create real access to luxury estate living, with a meaningful value advantage versus comparable Gurgaon golf estates."
            />

            <div className="mt-6 inline-flex rounded-full border border-[rgba(37,76,58,0.14)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/70 shadow-sm">
              50–60% value advantage vs comparable Gurgaon golf estates
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {pricingTiers.map((tier) => (
                <article key={tier.name} className={`${lightCard} p-6`}>
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/50">{tier.name}</p>
                  <p className="mt-4 font-serif text-2xl leading-tight text-[var(--forest-deep)]">{tier.price}</p>
                  <p className="mt-2 text-sm text-[var(--forest-green)]/66">{tier.size}</p>
                  <div className="mt-6 h-px bg-[linear-gradient(90deg,transparent,rgba(200,165,97,0.8),transparent)]" />
                  <p className="mt-5 text-sm leading-7 text-[var(--forest-green)]/74">{tier.note}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[var(--forest-green)]/52">{tier.ideal}</p>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-[2rem] bg-[var(--forest-green)] p-7 text-[var(--forest-ivory)] shadow-[0_24px_70px_rgba(15,31,23,0.18)] sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="kicker kicker-light">Founding Member Program</p>
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--forest-ivory)] sm:text-4xl">
                    Early access, priority selection, and launch benefits.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                    Early buyers receive priority access, founding member benefits, and the opportunity to secure the strongest locations before launch pricing steps up.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--forest-gold)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[var(--forest-deep)] transition-transform hover:-translate-y-0.5"
                >
                  Apply for founding membership
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {foundingBenefits.map((item) => (
                  <StatCard key={item.label} {...item} light={false} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="section-shell bg-[var(--forest-ivory)]">
          <div className="grain absolute inset-0 opacity-35" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="reveal">
                <SectionHeading
                  eyebrow="An estate shaped by location"
                  title="An estate shaped by location."
                  copy="Teski Village, Sikhri Tehsil, Deeg District, Rajasthan. About 2 hours from Delhi, deeper in nature, and aligned to a corridor with long-term growth potential."
                />

                <div className={`${lightCard} mt-10 p-6 sm:p-8`}>
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/55">
                    Corridor position
                  </p>
                  <div className="mt-6 space-y-6">
                    {locationPoints.map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <div className="flex flex-col items-center pt-1">
                          <span className="h-3 w-3 rounded-full bg-[var(--forest-gold)]" />
                          <span className="mt-2 h-full w-px bg-[rgba(37,76,58,0.16)]" />
                        </div>
                        <div className="pb-2">
                          <p className="text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/52">
                            {item.label}
                          </p>
                          <p className="mt-2 text-lg leading-7 text-[var(--forest-deep)]">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 reveal reveal-delay-1">
                <article className={`${lightCard} p-6 sm:p-8`}>
                  <p className="text-xs uppercase tracking-[0.45em] text-[var(--forest-green)]/55">
                    Positioning statement
                  </p>
                  <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-[var(--forest-deep)] sm:text-4xl">
                    Not closer to Delhi. Deeper in nature.
                  </p>
                </article>

                <div className="grid gap-4 sm:grid-cols-3">
                  {locationCards.map((item) => (
                    <FeatureCard key={item.eyebrow ?? item.title} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="masterplan" className="section-shell bg-[var(--forest-deep)] text-[var(--forest-ivory)]">
          <div className="grain absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="reveal">
                <SectionHeading
                  light
                  eyebrow="Masterplan"
                  title="A composition of golf, water, and open land."
                  copy="The masterplan is conceived as a calm, low-density estate with golf, landscape, and circulation kept legible and generous."
                />
                <p className="mt-8 max-w-xl text-sm leading-7 text-white/66">
                  Indicative only. Detailed plan sharing happens during the brochure walkthrough.
                </p>
              </div>

              <article className={`${darkCard} overflow-hidden p-6 sm:p-8 reveal reveal-delay-1`}>
                <div className="aspect-[4/3] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(200,165,97,0.26),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 sm:p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative flex h-64 w-full max-w-lg items-center justify-center">
                      <div className="absolute inset-y-12 left-6 right-6 rounded-full border border-[rgba(200,165,97,0.4)]" />
                      <div className="absolute inset-y-20 left-12 right-12 rounded-full border border-white/10" />
                      <div className="absolute bottom-10 left-8 right-8 h-16 rounded-full bg-[rgba(37,76,58,0.22)] blur-2xl" />
                      <div className="absolute top-[20%] left-[18%] rounded-full border border-[rgba(200,165,97,0.28)] bg-[rgba(200,165,97,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--forest-gold)]">
                        Water edge
                      </div>
                      <div className="absolute top-[28%] right-[15%] rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/74">
                        Tree line
                      </div>
                      <div className="absolute bottom-[20%] left-[20%] rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/74">
                        Open sky
                      </div>
                      <div className="absolute bottom-[26%] right-[18%] rounded-full border border-[rgba(200,165,97,0.28)] bg-[rgba(200,165,97,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--forest-gold)]">
                        Breathing room
                      </div>
                      <div className="text-center text-[var(--forest-ivory)]">
                        <p className="text-xs uppercase tracking-[0.38em] text-white/52">Indicative composition</p>
                        <p className="mt-4 font-serif text-3xl leading-tight">Estate core</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {masterplanNotes.map((item) => (
                    <FeatureCard key={item.title} {...item} light={false} />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
