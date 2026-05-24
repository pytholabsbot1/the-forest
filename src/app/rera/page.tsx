
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RERA Details',
  description: 'RERA and project disclosure information for The Forest.',
};

export default function ReraPage() {
  return (
    <main className="min-h-screen bg-[var(--forest-ivory)] px-4 py-24 text-[var(--forest-deep)] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="kicker">RERA Details</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">RERA Details</h1>
        <div className="mt-10 space-y-6 text-sm leading-7 text-[var(--forest-green)]/78">
          <p>
            Project registration, approvals, and formal disclosures are shared directly by the sales team and must
            be verified before any booking or financial commitment.
          </p>
          <p>
            Any drawings, masterplan visuals, pricing ladders, amenities, or timeline references shown on the
            website are indicative and can evolve as the project is refined.
          </p>
          <p>
            For the latest legal and registration information, please contact the team at info@theforest.in.
          </p>
        </div>
        <a
          href="/"
          className="mt-10 inline-flex items-center rounded-full bg-[var(--forest-green)] px-5 py-3 text-xs uppercase tracking-[0.22em] text-[var(--forest-ivory)]"
        >
          Back to home
        </a>
      </article>
    </main>
  );
}
