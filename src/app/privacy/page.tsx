
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Forest website.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--forest-ivory)] px-4 py-24 text-[var(--forest-deep)] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="kicker">Privacy Policy</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6 text-sm leading-7 text-[var(--forest-green)]/78">
          <p>
            The Forest website may collect the information you submit through enquiry forms, such as your name,
            phone number, email address, message, and the brochure or pricing material you request.
          </p>
          <p>
            We use this information only to respond to your enquiry, share project information, and provide
            related updates you have asked to receive. We do not sell your personal information.
          </p>
          <p>
            We may use standard analytics or security tools to understand site usage and keep the website safe.
            If you would like your details updated or removed, please contact the team directly.
          </p>
          <p>
            For questions about privacy, please write to info@theforest.in.
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
