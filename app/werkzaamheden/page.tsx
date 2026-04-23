import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SpoedCTA } from "@/components/SpoedCTA";
import { Werkwijze } from "@/components/Werkwijze";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Onze Werkzaamheden",
  description:
    "Een overzicht van alle dak- en kluswerkzaamheden van Bricks Dakwerken: dakbedekking, dakonderhoud, ontmossen, isolatie, plastisol, reparaties en klussen rondom het huis.",
};

export default function WerkzaamhedenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Onze Werkzaamheden"
        title="Alle dak- en kluswerkzaamheden onder één adres."
        subtitle="Van dakbedekking vernieuwen en isolatie tot ontmossen, plastisol en klussen rondom het huis. Bekijk hieronder het volledige aanbod van Bricks Dakwerken."
        crumbs={[{ label: "Home", href: "/" }, { label: "Onze Werkzaamheden" }]}
        image="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section -mt-10 sm:-mt-16">
        <div className="container-wide">
          <Reveal stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </Reveal>

          <Reveal className="mt-14 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-surface/60 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Niet zeker welke oplossing bij u past?
              </h3>
              <p className="mt-1 text-sm text-muted">
                We denken graag mee. Bel of app ons, dan vinden we samen het
                juiste antwoord.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Vrijblijvende offerte
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                Bel {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Werkwijze />
      <SpoedCTA />
    </>
  );
}
