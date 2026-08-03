"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax() {
  const glowOneRef = useRef<HTMLDivElement | null>(null);
  const glowTwoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) {
      return;
    }

    const heroSection = document.getElementById("home");

    if (!heroSection) {
      return;
    }

    const mainElement = heroSection.closest("main");

    const backgroundLayer = mainElement?.querySelector(
      ":scope > div.absolute.inset-x-0.top-0.h-screen"
    ) as HTMLElement | null;

    const textLayer = heroSection.querySelector(
      ":scope > div.mx-auto.w-full.max-w-7xl"
    ) as HTMLElement | null;

    const statisticsLayer = heroSection.querySelector(
      ":scope > div.absolute.inset-x-0.bottom-0"
    ) as HTMLElement | null;

    let animationFrameId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();

      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      targetX = (relativeX - 0.5) * 2;
      targetY = (relativeY - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;

      if (backgroundLayer) {
        backgroundLayer.style.transform = `translate3d(${
          currentX * -12
        }px, ${currentY * -8}px, 0) scale(1.025)`;
      }

      if (textLayer) {
        textLayer.style.transform = `translate3d(${
          currentX * 10
        }px, ${currentY * 7}px, 0)`;
      }

      if (statisticsLayer) {
        statisticsLayer.style.transform = `translate3d(${
          currentX * -6
        }px, ${currentY * -4}px, 0)`;
      }

      if (glowOneRef.current) {
        glowOneRef.current.style.transform = `translate3d(${
          currentX * 38
        }px, ${currentY * 28}px, 0)`;
      }

      if (glowTwoRef.current) {
        glowTwoRef.current.style.transform = `translate3d(${
          currentX * -30
        }px, ${currentY * -22}px, 0)`;
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    backgroundLayer?.classList.add(
      "will-change-transform",
      "transition-transform",
      "duration-100"
    );

    textLayer?.classList.add("will-change-transform");
    statisticsLayer?.classList.add("will-change-transform");

    heroSection.addEventListener("mousemove", handleMouseMove);
    heroSection.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);

      window.cancelAnimationFrame(animationFrameId);

      if (backgroundLayer) {
        backgroundLayer.style.transform = "";
      }

      if (textLayer) {
        textLayer.style.transform = "";
      }

      if (statisticsLayer) {
        statisticsLayer.style.transform = "";
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      <div
        ref={glowOneRef}
        className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-[#C9A962]/10 blur-[100px] will-change-transform"
      />

      <div
        ref={glowTwoRef}
        className="absolute bottom-[12%] right-[10%] h-96 w-96 rounded-full bg-[#173b2a]/30 blur-[120px] will-change-transform"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,169,98,0.06),transparent_48%)]" />
    </div>
  );
}