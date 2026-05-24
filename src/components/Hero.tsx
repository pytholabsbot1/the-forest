'use client';

import { useState } from 'react';

export function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In production, send to your API endpoint
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headlines */}
          <div className="text-center lg:text-left">
            <p className="text-forest-gold font-medium tracking-widest text-sm mb-4 uppercase">
              ABL Group Presents
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-forest-ivory leading-tight mb-6">
              Where Nature
              <br />
              <span className="gradient-text">Meets Legacy</span>
            </h1>
            <p className="text-forest-cream/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              A landmark luxury golf estate near NCR. Premium farmhouse and estate plots 
              nestled within nature, designed for generations to inherit.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <p className="text-forest-gold font-serif text-3xl sm:text-4xl font-bold">
                  330+
                </p>
                <p className="text-forest-cream/70 text-sm mt-1">Premium Plots</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-forest-gold font-serif text-3xl sm:text-4xl font-bold">
                  9-Hole
                </p>
                <p className="text-forest-cream/70 text-sm mt-1">Golf Course</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-forest-gold font-serif text-3xl sm:text-4xl font-bold">
                  2 hrs
                </p>
                <p className="text-forest-cream/70 text-sm mt-1">From Delhi</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#pricing" className="btn-primary text-center">
                View Pricing
              </a>
              <a href="#features" className="btn-secondary text-center">
                Explore Features
              </a>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="bg-forest-ivory/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-forest-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-forest-deep mb-2">Thank You!</h3>
                <p className="text-forest-green/80">Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl text-forest-deep mb-2">
                    Register Your Interest
                  </h3>
                  <p className="text-forest-green/70 text-sm">
                    Be among the first to secure your legacy plot
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest-deep mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-forest-deep mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forest-deep mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-forest-sage/30 bg-white text-forest-deep focus:ring-2 focus:ring-forest-gold focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      'Register Now'
                    )}
                  </button>
                </form>

                <p className="text-center text-xs text-forest-green/60 mt-4">
                  By submitting, you agree to receive updates via email/WhatsApp.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#vision" className="text-forest-cream/50 hover:text-forest-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
