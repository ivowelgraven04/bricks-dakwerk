import Link from "next/link";
import Image from "next/image";
import { TypewriterText } from "./TypewriterText";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.28]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
        <div className="hero-glow" />
        <div className="grid-mask" />
      </div>

      <div className="container-wide relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {site.tagline} · Actief in {site.baseLocation}
          </span>
          <h1 className="h-display mt-6 text-white">
            Vakmanschap voor uw dak en huis.
          </h1>
          <p
            className="mt-5 flex min-h-[2.25em] items-start text-xl font-medium leading-snug text-primary sm:text-2xl"
            aria-label="Specialismen"
          >
            <TypewriterText
              phrases={[
                "Vakkundige dak- en kluswerkzaamheden",
                "Specialist in dakonderhoud en dakisolatie",
                "Actief in heel Zuid-Limburg",
              ]}
            />
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Bricks Dakwerken is uw lokale specialist voor alle dak- en
            kluswerkzaamheden. Van dakbedekking en isolatie tot ontmossen en
            praktische klussen rondom het huis — vakkundig, betrouwbaar en met
            oog voor detail.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={site.phoneHref} className="btn-primary px-7 py-3.5 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              Neem contact op · {site.phone}
            </a>
            <Link href="/contact" className="btn-ghost px-7 py-3.5 text-sm">
              Vrijblijvende offerte aanvragen
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:max-w-xl sm:grid-cols-3">
            {[
              { k: "Vakkundig", v: "eigen werk" },
              { k: "Lokaal", v: "Zuid-Limburg" },
              { k: "Eerlijk", v: "heldere prijs" },
            ].map((s) => (
              <div key={s.v} className="border-l border-white/10 pl-4">
                <dt className="text-2xl font-semibold text-white sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{s.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
