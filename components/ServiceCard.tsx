import Link from "next/link";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/werkzaamheden/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/70 p-7 card-tilt hover:shadow-card"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--x,50%) var(--y,0%), rgba(209,122,71,0.14), transparent 45%)",
        }}
      />
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-primary transition-colors group-hover:border-primary/40">
          <ServiceIcon name={service.icon} />
        </span>
        {service.urgent && (
          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            Snel contact
          </span>
        )}
      </div>

      <h3 className="relative z-10 mt-6 text-lg font-semibold text-white">
        {service.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted">
        {service.short}
      </p>

      <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-white">
        <span className="transition-colors group-hover:text-primary">
          Meer over deze dienst
        </span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-primary/40 group-hover:bg-primary/20">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
