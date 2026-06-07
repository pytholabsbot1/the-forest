'use client';

const LAT = 27.66204396286913;
const LNG = 77.01192636234386;
const MAP_SRC = `https://maps.google.com/maps?q=${LAT},${LNG}&z=14&output=embed`;

export function LocationSection() {
  const cx = 260;
  const cy = 260;
  const spokeStart = 96;
  const spokeEnd = 174;
  const arrowTip = 186;

  const toXY = (angleDeg: number, r: number) => ({
    x: cx + r * Math.cos((angleDeg * Math.PI) / 180),
    y: cy + r * Math.sin((angleDeg * Math.PI) / 180),
  });

  const diamond = (angleDeg: number) => {
    const tip = toXY(angleDeg, arrowTip);
    const base = toXY(angleDeg, spokeEnd - 5);
    const p1 = toXY(angleDeg + 90, 4.5);
    const p2 = toXY(angleDeg - 90, 4.5);
    return `M ${tip.x},${tip.y}
      L ${cx + (base.x - cx) + (p1.x - cx)},${cy + (base.y - cy) + (p1.y - cy)}
      L ${base.x},${base.y}
      L ${cx + (base.x - cx) + (p2.x - cx)},${cy + (base.y - cy) + (p2.y - cy)} Z`;
  };

  const cardinalAngles = [-90, 0, 90, 180];
  const diagAngles = [-45, 45, 135, 225];

  return (
    <section id="location" className="flex flex-col lg:flex-row lg:min-h-[88dvh]">

      {/* Left — compass panel */}
      <div className="flex flex-col items-center justify-center bg-[#f5f0e8] px-8 py-20 lg:w-1/2 lg:px-14 lg:py-24">

        {/* Header */}
        <div className="mb-12 w-full max-w-md text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c8a561]/70" />
            <span className="text-[0.5rem] text-[#c8a561]">◆</span>
            <span className="h-px w-8 bg-[#c8a561]/70" />
          </div>
          <p className="mt-4 text-[0.5rem] uppercase tracking-[0.45em] text-[#1a3528]/45">Location</p>
          <h2 className="mt-4 font-serif text-2xl leading-snug text-[#1a3528] sm:text-3xl lg:text-[2rem]">
            Close enough to escape to.
            <br />
            Far enough to actually escape.
          </h2>
        </div>

        {/* Compass */}
        <div className="relative aspect-square w-full max-w-[380px]">

          {/* SVG compass rose */}
          <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full" aria-hidden="true">

            {/* Outermost ring */}
            <circle cx={cx} cy={cy} r={244} stroke="#c8a561" strokeWidth="0.5" fill="none" opacity="0.2" />

            {/* Tick ring */}
            <circle cx={cx} cy={cy} r={216} stroke="#c8a561" strokeWidth="0.4" fill="none" opacity="0.25" />
            {Array.from({ length: 72 }).map((_, i) => {
              const a = (i * 5 * Math.PI) / 180;
              const isMajor = i % 9 === 0;
              const r1 = isMajor ? 204 : 210;
              return (
                <line key={i}
                  x1={cx + r1 * Math.cos(a)} y1={cy + r1 * Math.sin(a)}
                  x2={cx + 216 * Math.cos(a)} y2={cy + 216 * Math.sin(a)}
                  stroke="#c8a561"
                  strokeWidth={isMajor ? '1' : '0.4'}
                  opacity={isMajor ? '0.5' : '0.25'}
                />
              );
            })}

            {/* Inner ring */}
            <circle cx={cx} cy={cy} r={192} stroke="#c8a561" strokeWidth="0.5" fill="none" opacity="0.22" />

            {/* Diagonal decorative spokes */}
            {diagAngles.map((angle) => {
              const s = toXY(angle, spokeStart);
              const e = toXY(angle, spokeEnd - 38);
              return (
                <line key={angle}
                  x1={s.x} y1={s.y} x2={e.x} y2={e.y}
                  stroke="#c8a561" strokeWidth="0.5" opacity="0.28"
                />
              );
            })}

            {/* Cardinal dashed spokes */}
            {cardinalAngles.map((angle) => {
              const s = toXY(angle, spokeStart);
              const e = toXY(angle, spokeEnd);
              return (
                <line key={angle}
                  x1={s.x} y1={s.y} x2={e.x} y2={e.y}
                  stroke="#c8a561" strokeWidth="1" opacity="0.5"
                  strokeDasharray="3 5"
                />
              );
            })}

            {/* Diamond arrowheads */}
            {cardinalAngles.map((angle) => (
              <path key={angle} d={diamond(angle)} fill="#c8a561" opacity="0.7" />
            ))}

            {/* Center fill + rings */}
            <circle cx={cx} cy={cy} r={90} fill="#f5f0e8" />
            <circle cx={cx} cy={cy} r={90} stroke="#c8a561" strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx={cx} cy={cy} r={80} stroke="#c8a561" strokeWidth="0.3" fill="none" opacity="0.3" />

            {/* Center text */}
            <text x={cx} y={cy - 26} textAnchor="middle"
              fontFamily="Georgia, serif" fontSize="6.5"
              fill="#c8a561" letterSpacing="3.5" opacity="0.9">
              THE FOREST
            </text>
            <line x1={cx - 18} y1={cy - 16} x2={cx + 18} y2={cy - 16}
              stroke="#c8a561" strokeWidth="0.5" opacity="0.45" />
            <text x={cx} y={cy + 14} textAnchor="middle"
              fontFamily="Georgia, serif" fontSize="30"
              fontWeight="400" fill="#1a3528">
              60–90
            </text>
            <text x={cx} y={cy + 30} textAnchor="middle"
              fontFamily="Georgia, serif" fontSize="7.5"
              fill="#1a3528" opacity="0.45" letterSpacing="1.5">
              min from NCR
            </text>
          </svg>

          {/* HTML city labels — never truncate */}
          <div className="pointer-events-none absolute inset-0">
            {/* Delhi — top */}
            <div className="absolute left-1/2 top-[2%] -translate-x-1/2 text-center">
              <p className="whitespace-nowrap font-serif text-sm tracking-wide text-[#1a3528] sm:text-base">Delhi</p>
            </div>
            {/* Noida — right */}
            <div className="absolute right-[2%] top-1/2 -translate-y-1/2 text-center">
              <p className="whitespace-nowrap font-serif text-sm tracking-wide text-[#1a3528] sm:text-base">Noida</p>
            </div>
            {/* IGI Airport — bottom */}
            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-center">
              <p className="whitespace-nowrap font-serif text-sm tracking-wide text-[#1a3528] sm:text-base">IGI Airport</p>
            </div>
            {/* Gurugram — left */}
            <div className="absolute left-[2%] top-1/2 -translate-y-1/2 text-center">
              <p className="whitespace-nowrap font-serif text-sm tracking-wide text-[#1a3528] sm:text-base">Gurugram</p>
            </div>
          </div>

        </div>

        {/* Footer note */}
        <p className="mt-8 text-[0.5rem] uppercase tracking-[0.4em] text-[#1a3528]/35">
          Approx. drive time from heart of NCR
        </p>

      </div>

      {/* Right — Google Maps embed */}
      <div className="relative h-[60vw] lg:h-auto lg:w-1/2">
        <iframe
          src={MAP_SRC}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Forest location map"
        />
      </div>

    </section>
  );
}
