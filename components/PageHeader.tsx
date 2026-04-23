import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=2000&q=80",
  crumbs,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-[0.22]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
        <div className="grid-mask" />
      </div>
      <div className="container-wide relative">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Broodkruimelnavigatie"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted"
          >
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="inline-flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <span className="text-white/25">/</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="h-display mt-5 text-white">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
