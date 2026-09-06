"use client";

import { useMemo } from "react";

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

export default function GoldenParticles() {
  

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 28 }, (_, index) => {
        const seed = index + 1;

        return {
          id: seed,
          left: (seed * 37) % 100,
          top: (seed * 53) % 100,
          size: 2 + ((seed * 7) % 5),
          duration: 8 + ((seed * 11) % 10),
          delay: -((seed * 13) % 18),
          drift: 18 + ((seed * 17) % 42),
          opacity: 0.18 + ((seed * 9) % 35) / 100,
        };
      }),
    []
  );

  

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="golden-particle absolute rounded-full bg-[#E4C878] shadow-[0_0_12px_rgba(228,200,120,0.85)]"
            style={
              {
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                "--particle-drift": `${particle.drift}px`,
              } as React.CSSProperties
            }
          />
        ))}

        <div className="decorative-pulse absolute left-[12%] top-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#F1D98F]/65 shadow-[0_0_18px_rgba(241,217,143,0.9)]" />

        <div className="decorative-pulse absolute right-[18%] top-[31%] h-1 w-1 animate-pulse rounded-full bg-[#C9A962]/70 shadow-[0_0_16px_rgba(201,169,98,0.9)] [animation-delay:700ms]" />

        <div className="decorative-pulse absolute bottom-[29%] left-[34%] h-1 w-1 animate-pulse rounded-full bg-[#E4C878]/60 shadow-[0_0_14px_rgba(228,200,120,0.8)] [animation-delay:1200ms]" />

        <div className="decorative-pulse absolute bottom-[18%] right-[28%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#F1D98F]/50 shadow-[0_0_20px_rgba(241,217,143,0.75)] [animation-delay:1800ms]" />
      </div>

      <style jsx>{`
        .golden-particle {
          will-change: transform, opacity;
          animation-name: golden-particle-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }

        @keyframes golden-particle-float {
          0% {
            transform: translate3d(0, 22px, 0) scale(0.75);
            opacity: 0.08;
          }

          35% {
            opacity: 0.5;
          }

          70% {
            opacity: 0.28;
          }

          100% {
            transform: translate3d(
                var(--particle-drift),
                -65px,
                0
              )
              scale(1.2);
            opacity: 0.06;
          }
        }

        @media (max-width: 1023px) {
          .golden-particle:nth-child(n + 15) {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .golden-particle,
          .decorative-pulse {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
