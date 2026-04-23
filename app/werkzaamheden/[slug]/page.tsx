import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SpoedCTA } from "@/components/SpoedCTA";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Werkzaamheden" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default function ServiceDetailPage({ params }: Params) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={service.urgent ? "Snel herstel" : "Werkzaamheden"}
        title={service.title}
        subtitle={service.heroTagline}
        image={service.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Werkzaamheden", href: "/werkzaamheden" },
          { label: service.title },
        ]}
      />

      <section className="section -mt-10 sm:-mt-16">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <span className="eyebrow">Over deze dienst</span>
              <h2 className="h-section mt-5 text-white">
                Wat u van ons kunt verwachten.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {service.intro}
              </p>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Wat valt onder deze dienst
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-sm text-foreground/90"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Voor welke situaties
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.suitableFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6">
                  <h3 className="text-base font-semibold text-white">
                    Waarom Bricks Dakwerken
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.why.map((w) => (
                      <li
                        key={w}
                        className="flex items-start gap-3 text-sm text-foreground/90"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        {w}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-2">
                    <Link href="/contact" className="btn-primary">
                      Vrijblijvende offerte
                    </Link>
                    <a href={site.phoneHref} className="btn-ghost">
                      Bel {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SpoedCTA />

      <section className="section">
        <div className="container-wide">
          <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">Andere werkzaamheden</span>
              <h2 className="h-section mt-5 text-white">
                Bekijk ook onze <span className="text-primary">andere diensten.</span>
              </h2>
            </div>
            <Link href="/werkzaamheden" className="btn-ghost">
              Alle werkzaamheden
            </Link>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
