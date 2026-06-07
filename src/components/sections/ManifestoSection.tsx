'use client';

import { useEffect, useRef, useState } from 'react';

export function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="estate"
      ref={ref}
      className="relative overflow-hidden bg-[#f5f0e8] px-6 py-24 lg:px-20 lg:py-36"
    >
      {/* Topographic contour texture — right side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.07]">
        <svg
          viewBox="0 0 500 700"
          className="h-full w-full"
          fill="none"
          stroke="#1a3528"
          strokeWidth="1"
          preserveAspectRatio="xMidYMid slice"
        >
          {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((r, i) => (
            <ellipse key={i} cx="380" cy="350" rx={r} ry={r * 0.55} />
          ))}
          {[30, 60, 90, 120, 150, 180, 210].map((r, i) => (
            <ellipse key={`b${i}`} cx="180" cy="580" rx={r} ry={r * 0.4} />
          ))}
          {[20, 45, 70, 95, 120].map((r, i) => (
            <ellipse key={`c${i}`} cx="420" cy="100" rx={r} ry={r * 0.6} />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#c8a561]/70" />
            <span className="text-[0.5rem] text-[#c8a561]">◆</span>
          </div>

          {/* Impactful headline */}
          <h2 className="mt-10 font-serif text-5xl leading-[1.05] text-[#1a3528] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            The Forest is not built
            <br />
            for moments. It is built
            <br />
            for{' '}
            <span
              className="relative inline-block transition-all duration-700 ease-out"
              style={{
                color: inView ? '#c8a561' : '#1a3528',
                textShadow: inView ? '0 0 60px rgba(200,165,97,0.25)' : 'none',
                transitionDelay: inView ? '0.5s' : '0s',
              }}
            >
              generations
              {/* Underline draw animation */}
              <span
                className="absolute bottom-1 left-0 h-[2px] bg-[#c8a561] transition-all duration-700 ease-out"
                style={{
                  width: inView ? '100%' : '0%',
                  transitionDelay: inView ? '0.8s' : '0s',
                }}
              />
            </span>
            .
          </h2>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-[#1a3528]/65 lg:text-lg">
            Modern life has become faster, denser, and more disconnected from nature. The Forest is our quieter answer: a luxury estate where family time, wellness, golf, and long-term value can live at the same address.
          </p>

          <div className="mt-12 border-l-2 border-[#c8a561]/60 pl-6">
            <p className="font-serif text-xl italic text-[#1a3528]/75 sm:text-2xl">
              Land you own. Life you return to.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
