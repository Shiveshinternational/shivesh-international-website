"use client";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
type StaggerItemProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function StaggerItem({
  children,
  delay = 0,
  className = "",
}: StaggerItemProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
  const element = elementRef.current;

  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.15,
    }
  );

  observer.observe(element);

  return () => observer.disconnect();
}, []);
  return (
    <div
      ref={elementRef}
  style={{
    transitionDelay: `${delay}ms`,
  }}
  className={`transition-all duration-700 ease-out ${className} ${
  isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-8 opacity-0"
}`}
>
      {children}
    </div>
  );
}