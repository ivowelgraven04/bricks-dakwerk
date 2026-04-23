import type { Service } from "@/lib/services";

const common = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ServiceIcon({ name }: { name: Service["icon"] }) {
  switch (name) {
    case "flat":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 18h18" />
          <path d="M4 14l6-4 5 3 5-2" />
          <path d="M3 21h18" />
        </svg>
      );
    case "maintain":
      return (
        <svg {...common} aria-hidden>
          <path d="M14.7 6.3a4 4 0 1 0 3 3l-2.6 2.6-3-3 2.6-2.6z" />
          <path d="M7 14l-4 4 3 3 4-4" />
        </svg>
      );
    case "moss":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 18c3-4 5-6 8-6s5 2 8 6" />
          <path d="M8 12c0-3 2-5 4-5s4 2 4 5" />
          <path d="M12 4v3" />
        </svg>
      );
    case "insulate":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 7h18v10H3z" />
          <path d="M3 11h18M3 15h18" />
          <path d="M8 7v10M14 7v10" />
        </svg>
      );
    case "plastisol":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 6l6-3 12 3-6 3z" />
          <path d="M3 6v12l12 3V9" />
          <path d="M15 9l6-3v12l-6 3" />
        </svg>
      );
    case "handy":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 21v-4l8-8 4 4-8 8z" />
          <path d="M14 10l4-4a2.83 2.83 0 0 0-4-4l-4 4" />
          <path d="M2 21h20" />
        </svg>
      );
    case "inspect":
      return (
        <svg {...common} aria-hidden>
          <circle cx="11" cy="11" r="6" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M8 11h6M11 8v6" />
        </svg>
      );
    case "repair":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3l7 7a7 7 0 1 1-14 0l7-7z" />
          <path d="M10 14a2 2 0 0 0 4 0" />
        </svg>
      );
    default:
      return null;
  }
}
