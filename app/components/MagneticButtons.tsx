"use client";

import { useEffect } from "react";

export default function MagneticButtons() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    const magneticElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "a.inline-flex, button.inline-flex"
      )
    );

    const cleanups: Array<() => void> = [];

    magneticElements.forEach((element) => {
      element.style.willChange = "translate";
      element.style.transitionProperty =
        "translate, transform, box-shadow, background-color, color, border-color";
      element.style.transitionDuration = "220ms";
      element.style.transitionTimingFunction =
        "cubic-bezier(0.22, 1, 0.36, 1)";

      const handleMouseMove = (event: MouseEvent) => {
        const rectangle = element.getBoundingClientRect();

        const centerX = rectangle.left + rectangle.width / 2;
        const centerY = rectangle.top + rectangle.height / 2;

        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;

        const magneticStrength = 0.18;

        const moveX = Math.max(
          -12,
          Math.min(12, distanceX * magneticStrength)
        );

        const moveY = Math.max(
          -8,
          Math.min(8, distanceY * magneticStrength)
        );

        element.style.translate = `${moveX}px ${moveY}px`;
      };

      const handleMouseEnter = () => {
        element.style.transitionDuration = "120ms";
      };

      const handleMouseLeave = () => {
        element.style.transitionDuration = "550ms";
        element.style.translate = "0px 0px";
      };

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      cleanups.push(() => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);

        element.style.translate = "";
        element.style.willChange = "";
        element.style.transitionProperty = "";
        element.style.transitionDuration = "";
        element.style.transitionTimingFunction = "";
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
