import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SpoedCTA } from "@/components/SpoedCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Bricks Dakwerken is het bedrijf van William van Dijk uit Zuid-Limburg. Specialist in dak- en kluswerkzaamheden voor particulieren en bedrijven.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Over Bricks Dakwerken"
        title="Vakmanschap, passie en zorg voor elk dak."
        subtitle={`Bricks Dakwerken is het bedrijf van ${site.owner}, actief in heel ${site.baseLocation}. Een lokaal bedrijf met persoonlijke aandacht en oog voor detail.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Over Ons" }]}
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section -mt-10 sm:-mt-16">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80"
                  alt="Vakman op een dak"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </Reveal>

            <Reveal>
              <span className="eyebrow">Wie wij zijn</span>
              <h2 className="h-section mt-5 text-white">
                Een lokaal specialist met een duidelijke handtekening.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Bricks Dakwerken is opgericht door {site.owner}, gevestigd in
                Zuid-Limburg. Dagelijks zijn wij bezig met dakwerk en klussen
                rondom het huis — met een vakkundige hand en oprechte passie
                voor het ambacht.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Wat ons typeert is de combinatie van ervaring, zorgvuldigheid
                en een praktische instelling. Iedere opdracht wordt behandeld
                alsof het ons eigen dak is — van een simpele reparatie tot een
                complete dakbedekking of kluswerk rondom het huis.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <Reveal stagger className="grid gap-5 md:grid-cols-2">
            {[
              {
                t: "Ervaring en vakmanschap",
                b: "Jarenlange ervaring met dakwerk, onderhoud en klussen rondom het huis. Vakkennis die u herkent in elk detail.",
              },
              {
                t: "Voor wie wij werken",
                b: "Zowel particulieren als bedrijven kunnen bij ons terecht — van een kleine reparatie tot grotere projecten.",
              },
              {
                t: "Onze specialisaties",
                b: "Dakbedekking, dakonderhoud, ontmossen, dakisolatie, plastisol, dakinspectie en klussen rondom het huis.",
              },
              {
                t: "Waarom klanten ons kiezen",
                b: "Persoonlijk contact, heldere offertes, een nette werkwijze en werk dat jaren probleemloos meegaat.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="card-surface card-tilt p-7"
              >
                <h3 className="text-lg font-semibold text-white">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.b}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="eyebrow">De vakman achter het werk</span>
              <h2 className="h-section mt-5 text-white">
                {site.owner} — oprichter &amp; uitvoerend vakman.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                William combineert vakmanschap met persoonlijk contact. Hij
                komt zelf langs voor de inventarisatie, voert het werk uit of
                begeleidt het, en zorgt dat elk project netjes en volgens
                afspraak wordt opgeleverd.
              </p>
              <blockquote className="mt-8 rounded-2xl border border-white/10 bg-surface/60 p-6">
                <p className="text-base italic leading-relaxed text-white/90">
                  &ldquo;Een dak beschermt uw huis. Dat moet kloppen — tot in
                  het kleinste detail.&rdquo;
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
                  {site.owner}, oprichter
                </footer>
              </blockquote>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/werkzaamheden" className="btn-primary">
                  Bekijk onze werkzaamheden
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Plan een kennismaking
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
                  alt="Dakwerkzaamheden in uitvoering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SpoedCTA />
    </>
  );
}
