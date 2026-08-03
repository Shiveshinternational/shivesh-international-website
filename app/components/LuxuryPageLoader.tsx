"use client";

import { useEffect, useRef, useState } from "react";

export default function LuxuryPageLoader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (prefersReducedMotion) {
      setProgress(100);

      const reducedMotionTimer = window.setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = previousOverflow;
      }, 250);

      return () => {
        window.clearTimeout(reducedMotionTimer);
        document.body.style.overflow = previousOverflow;
      };
    }

    const duration = 1900;
    const startTime = performance.now();

    const animateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const rawProgress = Math.min(elapsedTime / duration, 1);

      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      const calculatedProgress = Math.round(easedProgress * 100);

      setProgress(calculatedProgress);

      if (rawProgress < 1) {
        animationFrameRef.current =
          window.requestAnimationFrame(animateProgress);
        return;
      }

      window.setTimeout(() => {
        setIsExiting(true);

        window.setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = previousOverflow;
        }, 800);
      }, 180);
    };

    animationFrameRef.current =
      window.requestAnimationFrame(animateProgress);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[#0b2a1f] transition-all duration-700 ${
        isExiting
          ? "pointer-events-none translate-y-[-100%] opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      role="status"
      aria-label="Loading Shivesh International website"
      aria-live="polite"
    >
      {/* Background light effects */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#C9A962]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-48 -right-32 h-[440px] w-[440px] rounded-full border border-[#C9A962]/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_100%)]"
      />

      {/* Main loader */}
      <div
        className={`relative flex w-full max-w-md flex-col items-center px-8 text-center transition-all duration-700 ${
          isExiting
            ? "scale-110 opacity-0 blur-sm"
            : "scale-100 opacity-100 blur-0"
        }`}
      >
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#C9A962]/20 blur-2xl" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#C9A962]/55 bg-[#123b2c]/80 shadow-[0_0_60px_rgba(201,169,98,0.15)] backdrop-blur-xl">
            <div className="absolute inset-[7px] rounded-full border border-[#C9A962]/20" />

            <span className="font-[family-name:var(--font-playfair)] text-4xl font-semibold tracking-[0.08em] text-[#F5F0E6]">
              SI
            </span>

            <span className="absolute -right-1 top-2 h-3 w-3 rotate-45 border-r border-t border-[#C9A962]" />
          </div>
        </div>

        {/* Company name */}
        <div className="mt-9">
          <p className="font-[family-name:var(--font-playfair)] text-2xl font-semibold uppercase tracking-[0.24em] text-[#F5F0E6]">
            Shivesh
          </p>

          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.52em] text-[#C9A962]">
            International
          </p>
        </div>

        <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.34em] text-[#F5F0E6]/45">
          Nature · Quality · Trust
        </p>

        {/* Progress line */}
        <div className="mt-12 w-full max-w-[310px]">
          <div className="relative h-px overflow-visible bg-[#F5F0E6]/15">
            <div
              className="absolute left-0 top-0 h-px bg-gradient-to-r from-[#8f6f2d] via-[#E4C878] to-[#C9A962] shadow-[0_0_14px_rgba(228,200,120,0.8)] transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute -right-1 -top-[3px] h-[7px] w-[7px] rounded-full bg-[#E4C878] shadow-[0_0_16px_rgba(228,200,120,1)]" />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-[9px] font-medium uppercase tracking-[0.30em] text-[#F5F0E6]/35">
              Loading
            </span>

            <span className="min-w-12 text-right font-[family-name:var(--font-playfair)] text-sm text-[#C9A962]">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom caption */}
      <p className="absolute bottom-8 text-[9px] font-medium uppercase tracking-[0.30em] text-[#F5F0E6]/25">
        Premium Natural Products · Global Export
      </p>
    </div>
  );
}