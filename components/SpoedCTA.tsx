import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function SpoedCTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-wide">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-[#1e0e05] via-[#2a1406] to-[#0a0503] p-8 shadow-[0_30px_80px_-40px_rgba(209,122,71,0.7)] sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.06]" />

          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="btn-pill-red">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Direct contact
              </span>
              <h2 className="h-section mt-5 text-white">
                Dakprobleem of klus niet uit te stellen?
                <span className="block text-primary">Wij reageren snel en vakkundig.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Bel of app ons direct voor snel persoonlijk contact. We denken
                met u mee, plannen kort en pakken uw vraag vakkundig op.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={site.phoneHref} className="btn-primary sm:px-7 sm:py-3.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                Bel {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost sm:px-7 sm:py-3.5"
              >
                Stuur WhatsApp bericht
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
