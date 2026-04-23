import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Bricks Dakwerken voor een vrijblijvende offerte of direct contact. Bel, mail of vul het contactformulier in.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Laten we samen uw dak of klus aanpakken."
        subtitle="Vraag vrijblijvend een offerte aan of neem direct contact op. We reageren meestal binnen 24 uur."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section -mt-10 sm:-mt-16">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">Direct contact</span>
              <h2 className="h-section mt-5 text-white">
                Liever direct bellen of appen?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Voor directe vragen zijn we goed bereikbaar via telefoon en
                WhatsApp. Liever mailen? Stuur een bericht en we reageren
                meestal binnen 24 uur.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 px-5 py-4 transition-colors hover:border-primary/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                      Telefoon
                    </p>
                    <p className="text-base font-semibold text-white">{site.phone}</p>
                  </div>
                </a>

                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 px-5 py-4 transition-colors hover:border-white/30"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden>
                      <path d="M16.02 5.33c-5.88 0-10.66 4.78-10.66 10.67 0 1.88.5 3.7 1.42 5.3L5.33 26.67l5.56-1.44c1.55.84 3.3 1.29 5.11 1.29 5.88 0 10.66-4.78 10.66-10.67S21.9 5.33 16.02 5.33zm0 19.5c-1.6 0-3.16-.42-4.53-1.22l-.32-.19-3.36.87.9-3.27-.21-.34c-.88-1.4-1.34-3.02-1.34-4.68 0-4.87 3.97-8.83 8.86-8.83s8.86 3.96 8.86 8.83-3.97 8.83-8.86 8.83z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted">WhatsApp</p>
                    <p className="text-base font-semibold text-white">Stuur ons een bericht</p>
                  </div>
                </a>

                <a
                  href={site.emailHref}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 px-5 py-4 transition-colors hover:border-white/30"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted">E-mail</p>
                    <p className="text-base font-semibold text-white">{site.email}</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-surface/40 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Werkgebied
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Actief in heel {site.baseLocation}. Van Maastricht, Heerlen
                  en Sittard tot Valkenburg, Kerkrade en alle omliggende
                  gemeenten in de regio.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
