
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for The Forest website.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--forest-ivory)] px-4 py-24 text-[var(--forest-deep)] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="kicker">Terms of Service</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">Terms of Service</h1>
        <div className="mt-10 space-y-6 text-sm leading-7 text-[var(--forest-green)]/78">
          <p>
            The Forest website is provided for informational purposes. The content, visuals, pricing ranges, and
            availability shown on the website may change without notice.
          </p>
          <p>
            Nothing on this website should be treated as a final offer, legal advice, or a guarantee of project
            specifications. Final project details are shared through the sales team and applicable legal documents.
          </p>
          <p>
            You agree to use the website responsibly and not attempt to disrupt, copy, or misuse the materials
            presented here.
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
