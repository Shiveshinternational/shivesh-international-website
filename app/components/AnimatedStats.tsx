"use client";

import { useEffect, useRef, useState } from "react";

const statistics = [
  {
    value: 30,
    suffix: "+",
    label: "Years",
  },
  {
    value: 800,
    suffix: "+",
    label: "Farmers",
  },
  {
    value: 50,
    suffix: "+",
    label: "Countries",
  },
  {
    value: 100,
    suffix: "%",
    label: "Natural",
  },
];

export default function AnimatedStats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [values, setValues] = useState(statistics.map(() => 0));

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    let animationFrameId = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setValues(
        statistics.map((statistic) =>
          Math.round(statistic.value * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted]);

  return (
    <div
      ref={sectionRef}
      className="grid max-w-2xl grid-cols-2 gap-3 sm:max-w-none sm:grid-cols-4 sm:gap-4"
    >
      {statistics.map((statistic, index) => (
        <div
          key={statistic.label}
          className="group relative overflow-hidden border border-white/[0.08] bg-black/15 px-5 py-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A962]/35 hover:bg-black/30 hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:px-6 sm:py-6"
        >
          <div className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-[#C9A962]/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

          <div className="relative">
            <p className="font-[family-name:var(--font-playfair)] text-xl font-medium text-[#C9A962] drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] sm:text-2xl lg:text-3xl">
              {values[index]}
              {statistic.suffix}
            </p>

            <div className="mt-3 h-px w-0 bg-[#C9A962] transition-all duration-500 group-hover:w-10" />

            <p className="mt-2 font-[family-name:var(--font-cormorant)] text-[9px] font-medium uppercase tracking-[0.28em] text-[#F5F0E6]/50 transition-colors duration-500 group-hover:text-[#F5F0E6]/80 sm:text-[10px]">
              {statistic.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}