type StatCardProps = {
  label: string;
  value: string;
  detail?: string;
  light?: boolean;
  className?: string;
};

export function StatCard({ label, value, detail, light = true, className = '' }: StatCardProps) {
  const lightCard = 'luxe-card';
  const darkCard = 'luxe-card-dark';

  return (
    <div className={`${light ? lightCard : darkCard} p-4 sm:p-5 ${className}`}>
      <p className={`text-[0.65rem] uppercase tracking-[0.32em] ${light ? 'text-[var(--forest-green)]/50' : 'text-white/50'}`}>
        {label}
      </p>
      <p className={`mt-3 font-serif text-2xl leading-tight ${light ? 'text-[var(--forest-deep)]' : 'text-[var(--forest-ivory)]'}`}>
        {value}
      </p>
      {detail ? (
        <p className={`mt-2 text-sm leading-6 ${light ? 'text-[var(--forest-green)]/68' : 'text-white/66'}`}>
          {detail}
        </p>
      ) : null}
    </div>
  );
}
