import Link from "next/link";

type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string;
};

export function Logo({ size = 48, showText = true, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Bricks Dakwerken — home"
    >
      <span
        className="relative flex items-center justify-center rounded-xl border border-white/10 bg-black/60 p-1.5 transition-all duration-300 group-hover:border-white/20"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 64 64"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle
            cx="32"
            cy="32"
            r="22"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <path
            d="M22 36 L32 24 L42 36 L42 44 L22 44 Z"
            stroke="#D17A47"
            strokeWidth="2.4"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="28"
            y="34"
            width="8"
            height="8"
            stroke="#D17A47"
            strokeWidth="2.2"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-[0.14em] text-white">
            BRICKS
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
            Dak- &amp; Kluswerkzaamheden
          </span>
        </span>
      )}
    </Link>
  );
}
