'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    plotType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In production, send to your API endpoint
    console.log('Contact form submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'info@theforest.in',
      href: 'mailto:info@theforest.in',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Site Address',
      value: 'Teski Village, Deeg, Rajasthan',
      href: 'https://maps.google.com/?q=27.6072,76.9860',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-forest-dark text-forest-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-forest-gold font-medium tracking-widest text-sm mb-4 uppercase">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Begin Your
            <br />
            <span className="gradient-text">Legacy Journey</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-forest-cream/80 mb-8 leading-relaxed">
              Whether you&apos;re looking for a weekend retreat, a legacy asset, or an investment 
              with long-term appreciation, our team is here to guide you through every step.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-forest-green/20 rounded-lg hover:bg-forest-green/30 transition-colors group"
                >
                  <div className="w-10 h-10 bg-forest-gold/20 rounded-lg flex items-center justify-center text-forest-gold group-hover:bg-forest-gold group-hover:text-forest-dark transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-forest-cream/60">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Address */}
            <div className="p-6 bg-forest-green/10 rounded-xl border border-forest-green/20">
              <p className="text-sm text-forest-gold font-medium mb-2">Corporate Office</p>
              <p className="text-forest-cream/80">
                ABL Group<br />
                [Office Address]<br />
                Delhi NCR, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-forest-ivory rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-forest-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-forest-deep mb-2">Thank You!</h3>
                <p className="text-forest-green/70">
                  Our team will reach out within 24 hours to discuss your requirements.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-semibold text-forest-deep mb-6">
                  Schedule a Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-forest-deep mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-forest-deep mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-forest-deep mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-medium text-forest-deep mb-1">
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                      >
                        <option value="">Select budget</option>
                        <option value="50L-1Cr">₹50L - 1 Cr</option>
                        <option value="1Cr-2Cr">₹1 Cr - 2 Cr</option>
                        <option value="2Cr-5Cr">₹2 Cr - 5 Cr</option>
                        <option value="5Cr+">₹5 Cr+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-plot" className="block text-sm font-medium text-forest-deep mb-1">
                        Plot Type
                      </label>
                      <select
                        id="contact-plot"
                        value={formData.plotType}
                        onChange={(e) => setFormData({ ...formData, plotType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="estate">Estate Plot (500-1000 sq.yd)</option>
                        <option value="premium">Premium Estate (1000-2000 sq.yd)</option>
                        <option value="large">Large Estate (2000-4000 sq.yd)</option>
                        <option value="farmhouse">Farmhouse Plot (1-5 acres)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-forest-deep mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-forest-green text-forest-ivory py-4 rounded-lg font-semibold hover:bg-forest-sage transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Request Callback'
                    )}
                  </button>

                  <p className="text-center text-xs text-forest-green/60 mt-4">
                    By submitting, you agree to receive communications via email, phone, and WhatsApp.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
