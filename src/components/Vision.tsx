export function Vision() {
  return (
    <section id="vision" className="py-24 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-forest-gold font-medium tracking-widest text-sm mb-4 uppercase">
            Our Vision
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-deep mb-6">
            Connected to NCR,
            <br />
            Hidden Within Nature
          </h2>
          <div className="section-divider" />
        </div>

        {/* Vision Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-forest-green/80 leading-relaxed">
            The Forest is not just a plotted development. It&apos;s a multi-generational estate 
            where nature and modern luxury coexist, families build legacy assets, wellness 
            becomes part of daily life, and land ownership gains emotional and long-term value.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Nature */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-14 h-14 bg-forest-green/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-forest-deep mb-3">
              Nature as Amenity
            </h3>
            <p className="text-forest-green/70 leading-relaxed">
              200+ acres of preserved forest and ridge form the heart of The Forest. 
              This isn&apos;t a development with some greenery—it&apos;s nature with curated estates within it.
            </p>
          </div>

          {/* Legacy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-14 h-14 bg-forest-gold/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-forest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-forest-deep mb-3">
              Generational Wealth
            </h3>
            <p className="text-forest-green/70 leading-relaxed">
              Not just a plot. A place for generations. Each estate is designed to be 
              inherited, cherished, and passed down—a legacy asset that grows in value and meaning.
            </p>
          </div>

          {/* Lifestyle */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="w-14 h-14 bg-forest-sage/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-forest-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-forest-deep mb-3">
              Elevated Living
            </h3>
            <p className="text-forest-green/70 leading-relaxed">
              Executive golf, spa & wellness, forest trails, organic farming options—every 
              element designed to elevate your weekends and your life.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-serif text-2xl sm:text-3xl text-forest-deep italic max-w-2xl mx-auto">
            &ldquo;A second home, a first calling—wake up to birds, walk to the golf course, 
            build something that lasts.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
