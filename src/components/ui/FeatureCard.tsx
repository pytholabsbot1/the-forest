type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  body: string;
  light?: boolean;
  className?: string;
};

const lightCard = 'luxe-card';
const darkCard = 'luxe-card-dark';

export function FeatureCard({ eyebrow, title, body, light = true, className = '' }: FeatureCardProps) {
  return (
    <article className={`${light ? lightCard : darkCard} p-6 sm:p-7 ${className}`}>
      {eyebrow ? (
        <p
          className={`text-xs uppercase tracking-[0.32em] ${
            light ? 'text-[var(--forest-green)]/55' : 'text-[var(--forest-gold)]/95'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h3
        className={`mt-4 font-serif text-2xl leading-tight sm:text-3xl ${
          light ? 'text-[var(--forest-deep)]' : 'text-[var(--forest-ivory)]'
        }`}
      >
        {title}
      </h3>
      <p className={`mt-4 text-sm leading-7 ${light ? 'text-[var(--forest-green)]/74' : 'text-white/72'}`}>
        {body}
      </p>
    </article>
  );
}
