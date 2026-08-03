"use client";

import { useEffect, useRef, useState } from "react";

export default function PremiumCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  const mousePosition = useRef({
    x: 0,
    y: 0,
  });

  const followerPosition = useRef({
    x: 0,
    y: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) {
      return;
    }

    let animationFrameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = event.clientX;
      mousePosition.current.y = event.clientY;

      setIsVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${
          event.clientX - 4
        }px, ${event.clientY - 4}px, 0)`;
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) {
        return;
      }

      const interactiveElement = target.closest(
        "a, button, [role='button'], input, textarea, select, summary"
      );

      setIsHovering(Boolean(interactiveElement));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    const animateFollower = () => {
      followerPosition.current.x +=
        (mousePosition.current.x - followerPosition.current.x) * 0.16;

      followerPosition.current.y +=
        (mousePosition.current.y - followerPosition.current.y) * 0.16;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${
          followerPosition.current.x - 18
        }px, ${followerPosition.current.y - 18}px, 0)`;
      }

      animationFrameId = window.requestAnimationFrame(animateFollower);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    animationFrameId = window.requestAnimationFrame(animateFollower);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] hidden h-9 w-9 rounded-full border border-[#C9A962]/80 mix-blend-difference transition-[width,height,border-color,background-color,opacity] duration-300 lg:block ${
          isHovering
            ? "h-14 w-14 border-[#E4C878] bg-[#C9A962]/10"
            : "bg-transparent"
        } ${
          isPressed ? "scale-75" : "scale-100"
        } ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      <div
        ref={cursorRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[#E4C878] shadow-[0_0_14px_rgba(228,200,120,0.95)] transition-[opacity,transform] duration-150 lg:block ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isPressed ? "scale-150" : "scale-100"
        }`}
        aria-hidden="true"
      />
    </>
  );
}