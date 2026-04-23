"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdTime?: number;
  className?: string;
};

export function TypewriterText({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 28,
  holdTime = 1600,
  className = "",
}: TypewriterTextProps) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    if (!phrases.length) return;
    const current = phrases[idx % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), holdTime);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deletingSpeed
        );
      } else {
        setIdx((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, idx, phrases, typingSpeed, deletingSpeed, holdTime]);

  return (
    <span className={className} aria-live="polite">
      <span>{text}</span>
      <span
        className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] animate-blink bg-primary align-middle"
        aria-hidden
      />
    </span>
  );
}
