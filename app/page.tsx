import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { SpoedCTA } from "@/components/SpoedCTA";
import { Werkwijze } from "@/components/Werkwijze";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services";
import { site, workAreas } from "@/lib/site";

export default function HomePage() {
  const featured = services.slice(0, 6);

  return (
    <>
      <Hero />
      <TrustStrip />
      <SpoedCTA />

      {/* Services overview */}
      <section id="werkzaamheden" className="section">
        <div className="container-wide">
          <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Onze werkzaamheden</span>
              <h2 className="h-section mt-5 text-white">
                Specialist in{" "}
                <span className="text-primary">dak- en kluswerk.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Van dakbedekking vernieuwen tot ontmossen, isoleren en klussen
                rondom het huis — u kunt bij Bricks Dakwerken terecht voor
                vakmanschap en een nette oplevering.
              </p>
            </div>
            <Link href="/werkzaamheden" className="btn-ghost">
              Alle werkzaamheden
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* About / craftsmanship */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="eyebrow">Over Bricks Dakwerken</span>
              <h2 className="h-section mt-5 text-white">
                Vakmanschap, persoonlijk contact en oog voor detail.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Bricks Dakwerken is het bedrijf van {site.owner} uit{" "}
                {site.baseLocation}. Wat begon met passie voor het ambacht is
                uitgegroeid tot een vertrouwd aanspreekpunt voor dakwerk en
                klussen — voor zowel particulieren als bedrijven.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Iedere klus wordt met dezelfde zorgvuldigheid aangepakt. Van een
                kleine reparatie tot een complete dakrenovatie — u krijgt werk
                waar u op kunt vertrouwen.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Eén vast aanspreekpunt",
                  "Heldere werkwijze en planning",
                  "Kwalitatieve materialen",
                  "Voor particulieren & bedrijven",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/over-ons" className="btn-primary">
                  Leer ons kennen
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Vraag offerte aan
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=80"
                  alt="Vakman aan het werk op een dak"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      {site.owner}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Oprichter &amp; vakman
                    </p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                    Zuid-Limburg
                  </span>
                </div>
              </div>
              <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-2xl border border-primary/40 bg-primary/10 backdrop-blur lg:block" />
              <div className="absolute -right-6 bottom-16 hidden h-20 w-20 rounded-full border border-white/10 bg-black/50 backdrop-blur lg:block" />
            </Reveal>
          </div>
        </div>
      </section>

      <Werkwijze />

      {/* Why us */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Waarom Bricks Dakwerken</span>
            <h2 className="h-section mt-5 text-white">
              Gekozen door wie <span className="text-primary">kwaliteit serieus neemt.</span>
            </h2>
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Breed vakgebied",
                b: "Van dakbedekking en isolatie tot ontmossen, plastisol en klussen rondom het huis.",
              },
              {
                t: "Lokaal in Zuid-Limburg",
                b: "Korte lijnen, persoonlijk contact en snelle service in de hele regio.",
              },
              {
                t: "Vakkundige uitvoering",
                b: "Eigen ervaring en aandacht voor detail bij iedere opdracht, groot of klein.",
              },
              {
                t: "Heldere communicatie",
                b: "Duidelijke afspraken, eerlijke prijs en geen verrassingen achteraf.",
              },
              {
                t: "Duurzaam resultaat",
                b: "Kwalitatieve materialen en zorgvuldig uitgevoerd werk dat jaren meegaat.",
              },
              {
                t: "Snel bereikbaar",
                b: "Telefoon of WhatsApp — we denken snel met u mee, ook bij onverwachte klussen.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="card-surface card-tilt p-6 sm:p-7"
              >
                <h3 className="text-base font-semibold text-white">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.b}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Work areas */}
      <section className="section">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-40 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <span className="eyebrow">Werkgebied</span>
                <h2 className="h-section mt-5 text-white">
                  Lokaal actief in <span className="text-primary">Zuid-Limburg.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Bricks Dakwerken is actief in heel Zuid-Limburg. Van
                  Maastricht tot Heerlen, van Sittard tot Valkenburg — we rijden
                  dagelijks uit naar klanten in de hele regio. Staat uw plaats
                  er niet tussen? Neem gerust contact op.
                </p>
                <Link href="/contact" className="btn-ghost mt-8">
                  Niet zeker of we uw regio bedienen? Neem contact op
                </Link>
              </Reveal>

              <Reveal className="lg:col-span-7">
                <div className="flex flex-wrap gap-2">
                  {workAreas.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs text-foreground/85 transition-colors hover:border-primary/40 hover:text-white"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pb-32">
        <div className="container-wide">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#140805] via-[#0b0b0b] to-[#050505] p-10 text-center sm:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(600px circle at 50% 0%, rgba(209,122,71,0.22), transparent 60%)",
              }}
            />
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="eyebrow">Klaar om te starten?</span>
              <h2 className="h-section mt-5 text-white">
                Vraag vrijblijvend een offerte aan.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Meestal nemen we binnen 24 uur contact met u op. Liever direct
                contact? Bel of app ons — we denken snel mee.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary px-7 py-3.5">
                  Vrijblijvende offerte
                </Link>
                <a href={site.phoneHref} className="btn-ghost px-7 py-3.5">
                  Bel {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
