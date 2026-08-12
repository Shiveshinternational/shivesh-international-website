"use client";

import Image from "next/image";
import Link from "next/link";

type ShowcaseProduct = {
  name: string;
  subtitle: string;
  image: string;
  href: string;
  position: string;
  width: string;
  imageHeight: string;
  rotation: string;
  duration: string;
  delay: string;
  badge: string;
};

const showcaseProducts: ShowcaseProduct[] = [
  {
    name: "Natural Henna Powder",
    subtitle: "Pure & Natural",
    image: "/images/products/henna-powder/natural-henna-powder.png",
    href: "/products/natural-henna-powder",
    position: "right-[3%] top-[12%] xl:right-[5%] xl:top-[11%]",
    width: "w-[232px] xl:w-[262px]",
    imageHeight: "h-[158px] xl:h-[178px]",
    rotation: "-rotate-[3.5deg]",
    duration: "12s",
    delay: "0s",
    badge: "01",
  },
  {
    name: "Natural Indigo Powder",
    subtitle: "Premium Botanical Powder",
    image: "/images/products/indigo-powder/natural-indigo-powder.png",
    href: "/products/natural-indigo-powder",
    position: "right-[18%] top-[42%] xl:right-[20%] xl:top-[41%]",
    width: "w-[200px] xl:w-[224px]",
    imageHeight: "h-[140px] xl:h-[154px]",
    rotation: "rotate-[2.5deg]",
    duration: "14s",
    delay: "1.2s",
    badge: "02",
  },
  {
    name: "Natural Henna Hair Colors",
    subtitle: "18 Premium Shades",
    image: "/images/products/henna-hair-colors/natural-henna-hair-colors.png",
    href: "/products/natural-henna-hair-colors",
    position: "right-[2%] top-[68%] xl:right-[6%] xl:top-[66%]",
    width: "w-[214px] xl:w-[244px]",
    imageHeight: "h-[148px] xl:h-[166px]",
    rotation: "-rotate-[1.8deg]",
    duration: "13s",
    delay: "2.2s",
    badge: "03",
  },
];

export default function FloatingProductShowcase() {
  return (
    <div
      aria-label="Featured products"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {showcaseProducts.map((product) => (
        <Link
          key={product.name}
          href={product.href}
          className={`pointer-events-auto absolute ${product.position} ${product.width} ${product.rotation} group`}
          style={{
            animationName: "luxuryProductFloat",
            animationDuration: product.duration,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: product.delay,
          }}
        >
          <div className="absolute -inset-4 rounded-[34px] bg-[#C9A962]/0 blur-2xl transition-all duration-700 group-hover:bg-[#C9A962]/18" />

          <article className="relative overflow-hidden rounded-[28px] border border-[#C9A962]/40 bg-[#102f23]/68 shadow-[0_38px_95px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:border-[#E4C878]/80 group-hover:bg-[#102f23]/84 group-hover:shadow-[0_45px_120px_rgba(0,0,0,0.52),0_0_35px_rgba(201,169,98,0.20)]">
            <div className="pointer-events-none absolute inset-[5px] rounded-[23px] border border-white/[0.05]" />

            <div
              className={`relative ${product.imageHeight} flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f1e6] via-[#eee3d2] to-[#d9ccb6] p-4`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.55),transparent_34%)]" />

              <Image
                src={product.image}
                alt={product.name}
                width={420}
                height={420}
                className="relative z-10 max-h-[84%] w-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.22)] transition-transform duration-1000 ease-out group-hover:scale-[1.09]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102f23]/12 via-transparent to-white/25" />

              <div className="absolute left-3 top-3 z-20 flex h-8 min-w-8 items-center justify-center rounded-full border border-[#C9A962]/55 bg-[#102f23]/92 px-2 text-[8px] font-bold tracking-[0.16em] text-[#E4C878] shadow-[0_8px_18px_rgba(0,0,0,0.20)]">
                {product.badge}
              </div>

              <div className="pointer-events-none absolute -left-[95%] top-0 h-full w-[42%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-all duration-[1500ms] ease-out group-hover:left-[145%]" />
            </div>

            <div className="relative p-5">
              <p className="text-[8px] font-bold uppercase tracking-[0.26em] text-[#C9A962]">
                {product.subtitle}
              </p>

              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-[21px] font-semibold leading-tight text-[#F5F0E6]">
                {product.name}
              </h3>

              <div className="mt-4 flex items-center justify-between border-t border-[#F5F0E6]/10 pt-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A962]/30 bg-[#173b2a]/70 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#E4C878] transition-all duration-400 group-hover:border-[#C9A962]/70 group-hover:bg-[#C9A962] group-hover:text-[#102f23]">
                  Explore Product
                </span>

                <span className="text-lg text-[#C9A962] transition-transform duration-400 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E4C878]/80 to-transparent" />
          </article>
        </Link>
      ))}

      <style jsx global>{`
        @keyframes luxuryProductFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          25% {
            transform: translate3d(4px, -7px, 0);
          }
          50% {
            transform: translate3d(0, -14px, 0);
          }
          75% {
            transform: translate3d(-4px, -7px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="luxuryProductFloat"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}