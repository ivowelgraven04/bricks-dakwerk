import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site, workAreas } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  const half = Math.ceil(workAreas.length / 2);
  const col1 = workAreas.slice(0, half);
  const col2 = workAreas.slice(half);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070707]">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(209,122,71,0.25), transparent 70%)",
        }}
      />
      <div className="container-wide relative z-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size={56} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Specialist in dak- en kluswerkzaamheden in Zuid-Limburg. Van
              onderhoud en isolatie tot vakkundige reparaties — voor
              particulieren én bedrijven.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 text-muted hover:text-white transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Navigatie
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Werkzaamheden
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/werkzaamheden/${s.slug}`}
                    className="text-muted transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/werkzaamheden"
                  className="text-primary transition-colors hover:text-white"
                >
                  Bekijk alles →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Werkgebied
            </h4>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted">
              <ul className="space-y-1.5">
                {col1.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <ul className="space-y-1.5">
                {col2.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Alle rechten voorbehouden.
          </p>
          <p>
            Actief in {site.baseLocation} · {site.owner}
          </p>
        </div>
      </div>
    </footer>
  );
}
