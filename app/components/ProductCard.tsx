import Image from "next/image";

type ProductCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function ProductCard({
  title,
  subtitle,
  description,
  image,
}: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#D8B76A]/45 bg-[#f5f0e6] text-[#173b2a] shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-all duration-700 hover:-translate-y-5 hover:border-[#C9A962] hover:shadow-[0_45px_110px_rgba(0,0,0,0.28)]">

      {/* Luxury Golden Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#C9A962]/20 blur-3xl"></div>

        <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#C9A962]/15 blur-3xl"></div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-[28px] border border-transparent transition-all duration-700 group-hover:border-[#C9A962]/60"></div>

      <div className="relative h-[330px] overflow-hidden bg-[#efe7d8]">

        <div className="absolute right-5 top-5 z-30 rounded-full bg-[#C9A962] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.30em] text-[#173b2a] shadow-xl">
          Premium
        </div>

        <div className="flex h-full w-full items-center justify-center p-4">
  <Image
    src={image || "/images/factory/factory-hero-wide.png"}
    alt={title || "Product"}
    width={320}
    height={320}
    className="h-[260px] w-auto object-contain transition-all duration-700 group-hover:scale-[1.12] group-hover:rotate-[1deg]"
  />
</div>

        {/* Luxury Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173b2a]/40 via-transparent to-transparent opacity-70 transition-all duration-700 group-hover:opacity-100"></div>

        {/* Shine Animation */}
        <div className="absolute -left-[140%] top-0 h-full w-[70%] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[150%]"></div>

      </div>

      <div className="relative p-8">

        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#C9A962] transition-all duration-500 group-hover:tracking-[0.45em]">

          {subtitle}

        </p>

        <h3 className="mt-4 text-3xl font-semibold transition-colors duration-500 group-hover:text-[#0f3a2b]">

          {title}

        </h3>

        <div className="mt-5 h-[2px] w-0 bg-[#C9A962] transition-all duration-700 group-hover:w-24"></div>

        <p className="mt-6 leading-8 text-[#4c5f54] transition-all duration-500 group-hover:text-[#173b2a]">

          {description}

        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#C9A962]/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#173b2a] transition-all duration-500 hover:bg-[#C9A962] hover:text-[#102f23]"
        >
          Explore Product

          <span className="transition-transform duration-500 group-hover:translate-x-2">

            →

          </span>

        </a>

      </div>

    </article>
  );
}