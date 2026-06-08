'use client';

import Image from 'next/image';

const amenities = [
  {
    img: '/amenities/golf-course.jpg',
    title: 'Executive Golf Course',
    desc: 'Championship-level 18 holes designed into the landscape — playable in every season.',
  },
  {
    img: '/amenities/trails.jpg',
    title: 'Water Body & Trails',
    desc: 'A central lake ringed by walking paths through conserved woodland.',
  },
  {
    img: '/amenities/night-golf.jpg',
    title: 'Night Golfing',
    desc: 'Floodlit fairways and greens — the estate comes alive after sunset.',
  },
  {
    img: '/amenities/spa.jpg',
    title: 'Spa & Wellness',
    desc: 'Restorative treatments, sauna, steam, and an infinity pool with estate views.',
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-[#0f1f18] px-6 py-24 lg:px-20 lg:py-36">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#c8a561]/70" />
            <span className="text-[0.6rem] text-[#c8a561]">◆</span>
            <span className="h-px w-10 bg-[#c8a561]/70" />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#c8a561] sm:text-sm/60">
            Amenities
          </p>
          <h2 className="mt-4 font-serif text-2xl text-white sm:text-3xl lg:text-4xl">
            Everything the estate deserves.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40 lg:text-base">
            Every detail at The Forest is designed for the kind of weekends
            that stay with your family.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="group relative border border-[#c8a561]/25 bg-[#1a3528] transition-colors hover:border-[#c8a561]/50"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Label */}
              <div className="px-5 pb-6 pt-4">
                <p className="font-serif text-base text-white lg:text-lg">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                  {item.desc}
                </p>
              </div>

              {/* Gold corner accent */}
              <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#c8a561]/0 transition-colors group-hover:border-[#c8a561]/30" />
            </div>
          ))}
        </div>

        {/* Footer ornament */}
        <div className="mt-16 flex justify-center">
          <span className="text-[0.6rem] text-[#c8a561]/40">◆</span>
        </div>

      </div>

    </section>
  );
}
