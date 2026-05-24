'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { sectionCopy } from '@/lib/content';

const contactDetails = [
  {
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@theforest.in',
    href: 'mailto:info@theforest.in',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'Site Address',
    value: 'Teski Village, Sikhri Tehsil, Deeg District, Rajasthan',
    href: 'https://maps.google.com/?q=Teski+Village+Sikhri+Tehsil+Deeg+District+Rajasthan',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const fieldClass =
  'w-full rounded-2xl border border-[rgba(19,45,36,0.12)] bg-white px-4 py-3 text-sm text-[var(--forest-deep)] shadow-sm transition-colors placeholder:text-[rgba(19,45,36,0.42)] focus:border-[rgba(37,76,58,0.3)] focus:outline-none focus:ring-2 focus:ring-[rgba(200,165,97,0.22)]';

export function ContactSection() {
  const { contact } = sectionCopy;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell bg-[var(--forest-deep)] text-[var(--forest-ivory)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <p className="kicker kicker-light">{contact.eyebrow}</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--forest-ivory)] sm:text-5xl lg:text-6xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/74">
              {contact.copy}
            </p>

            <div className="mt-10 space-y-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/8"
                >
                  <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[rgba(200,165,97,0.16)] text-[var(--forest-gold)]">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.32em] text-white/46">{item.label}</span>
                    <span className="mt-2 block text-sm leading-7 text-white/74">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-[rgba(200,165,97,0.18)] bg-[rgba(200,165,97,0.08)] p-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-gold)]/95">{contact.privateLabel}</p>
              <p className="mt-3 text-sm leading-7 text-white/74">{contact.privateNote}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="luxe-card bg-[rgba(247,242,232,0.94)] p-6 text-[var(--forest-deep)] shadow-[0_24px_70px_rgba(15,31,23,0.18)] sm:p-8">
              {isSubmitted ? (
                <div className="flex min-h-[32rem] flex-col items-center justify-center rounded-[1.5rem] border border-[rgba(19,45,36,0.08)] bg-white/65 px-6 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--forest-green)] text-[var(--forest-ivory)]">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-[var(--forest-deep)]">{contact.successTitle}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[var(--forest-green)]/72">{contact.successBody}</p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--forest-green)]/55">{contact.formEyebrow}</p>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-[var(--forest-deep)]">{contact.formTitle}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--forest-green)]/72">{contact.formBody}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/60" htmlFor="name">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                        className={fieldClass}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/60" htmlFor="phone">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                        className={fieldClass}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/60" htmlFor="email">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                        className={fieldClass}
                        placeholder="name@example.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/60" htmlFor="interest">
                        I would like to see
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={(event) => setFormData((current) => ({ ...current, interest: event.target.value }))}
                        className={fieldClass}
                      >
                        <option value="">Select one</option>
                        <option value="brochure">Brochure</option>
                        <option value="pricing">Pricing</option>
                        <option value="masterplan">Masterplan</option>
                        <option value="founding-membership">Founding membership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-[var(--forest-green)]/60" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                      className={fieldClass}
                      placeholder="Tell us what you'd like to know..."
                    />
                  </div>

                  {error && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[var(--forest-green)] px-6 py-4 text-sm uppercase tracking-[0.26em] text-[var(--forest-ivory)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending…' : 'Request the brochure'}
                  </button>

                  <p className="text-center text-xs leading-6 text-[var(--forest-green)]/56">
                    By submitting, you agree to receive updates via phone, email, and WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
