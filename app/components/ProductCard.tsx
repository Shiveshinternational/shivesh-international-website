import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href?: string;
};

export default function ProductCard({
  title,
  subtitle,
  description,
  image,
  href = "#",
}: ProductCardProps) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[28px] border border-[#D8B76A]/45 bg-[#f5f0e6] text-[#173b2a] shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-all duration-700 hover:-translate-y-5 hover:border-[#C9A962] hover:shadow-[0_45px_110px_rgba(0,0,0,0.28)]">
      {/* Luxury Golden Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#C9A962]/20 blur-3xl" />

        <div className="absolute -bottom-10 -right-20 h-56 w-56 rounded-full bg-[#C9A962]/15 blur-3xl" />
      </div>

      {/* Premium Animated Border */}
      <div className="pointer-events-none absolute inset-[1px] z-30 rounded-[27px] border border-transparent transition-colors duration-700 group-hover:border-[#E4C878]/45" />

      {/* Full Card Glass Reflection */}
      <div className="pointer-events-none absolute -left-[80%] -top-[45%] z-40 h-[190%] w-[38%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 blur-[2px] transition-all duration-[1200ms] ease-out group-hover:left-[145%] group-hover:opacity-100" />

      {/* Fine Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-8 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-30 transition-opacity duration-700 group-hover:opacity-90" />

      {/* Image Area */}
      <div className="relative z-10 flex h-[320px] items-center justify-center overflow-hidden bg-[#efe7d8]">
        <div className="absolute right-5 top-5 z-30 rounded-full border border-[#F1D98F]/50 bg-[#C9A962] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.30em] text-[#173b2a] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#E4C878]">
          Premium
        </div>

        <Image
          src={image}
          alt={title}
          width={520}
          height={520}
          className="relative z-10 max-h-[270px] w-auto object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
        />

        {/* Image Gradient */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#173b2a]/35 via-transparent to-white/10 opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Image Glass Sweep */}
        <div className="pointer-events-none absolute -left-[85%] top-0 z-20 h-full w-[45%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 blur-[1px] transition-all duration-[1000ms] ease-out group-hover:left-[145%] group-hover:opacity-100" />

        {/* Soft Light Reflection */}
        <div className="pointer-events-none absolute left-[8%] top-[8%] z-20 h-24 w-[55%] rotate-[-8deg] rounded-full bg-white/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#C9A962] transition-all duration-500 group-hover:tracking-[0.45em]">
          {subtitle}
        </p>

        <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold transition-colors duration-500 group-hover:text-[#0f3a2b]">
          {title}
        </h3>

        <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-[#9f7f36] via-[#E4C878] to-[#C9A962] shadow-[0_0_10px_rgba(201,169,98,0.45)] transition-all duration-700 group-hover:w-24" />

        <p className="mt-6 leading-8 text-[#4c5f54] transition-colors duration-500 group-hover:text-[#173b2a]">
          {description}
        </p>

        <Link
          href={href}
          className="relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#C9A962]/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#173b2a] transition-all duration-500 hover:border-[#C9A962] hover:bg-[#C9A962] hover:text-[#102f23] hover:shadow-[0_12px_30px_rgba(201,169,98,0.28)]"
        >
          <span className="relative z-10">Explore Product</span>

          <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>

          <span className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-all duration-700 hover:left-[140%]" />
        </Link>
      </div>

      {/* Bottom Glass Edge */}
      <div className="pointer-events-none absolute inset-x-12 bottom-0 z-30 h-px bg-gradient-to-r from-transparent via-[#C9A962]/70 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </article>
  );
}