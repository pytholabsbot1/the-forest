type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  light?: boolean;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
  center = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} ${className} max-w-3xl`}>
      <p className={`kicker ${light ? 'kicker-light' : ''}`}>{eyebrow}</p>
      <h2
        className={`mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl ${
          light ? 'text-[var(--forest-ivory)]' : 'text-[var(--forest-deep)]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-6 text-base leading-8 sm:text-lg ${
          light ? 'text-white/74' : 'text-[var(--forest-green)]/78'
        }`}
      >
        {copy}
      </p>
    </div>
  );
}
