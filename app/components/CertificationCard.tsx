type CertificationCardProps = {
  title: string;
  subtitle: string;
  icon: string;
};

export default function CertificationCard({
  title,
  subtitle,
  icon,
}: CertificationCardProps) {
  return (
    <article className="group rounded-3xl border border-[#C9A962]/35 bg-white/70 p-8 text-center shadow-[0_20px_55px_rgba(23,59,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A962] hover:shadow-[0_30px_80px_rgba(23,59,42,0.18)]">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A962]/45 bg-[#173b2a] text-3xl text-[#D6B768] shadow-lg">
        {icon}
      </div>

      <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#173b2a]">
        {title}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#173b2a]/60">
        {subtitle}
      </p>

    </article>
  );
}