"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: boolean;
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  stagger = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const base = stagger ? "reveal-stagger" : "reveal";
  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`${base} ${className}`}>
      {children}
    </Component>
  );
}
