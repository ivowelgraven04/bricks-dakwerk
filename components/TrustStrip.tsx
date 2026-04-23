import { Reveal } from "./Reveal";

const points = [
  {
    title: "Vakkundig",
    body: "Specialist in dakbedekking, onderhoud, isolatie en plastisol.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l9 4v6c0 5-3.5 9-9 10-5.5-1-9-5-9-10V6l9-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Breed vakgebied",
    body: "Van dakwerk tot kluswerkzaamheden — één vast aanspreekpunt.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 11l9-6 9 6" />
        <path d="M5 11v8h14v-8" />
        <path d="M9 19v-4h6v4" />
      </svg>
    ),
  },
  {
    title: "Snel bereikbaar",
    body: "Direct contact via telefoon of WhatsApp — ook voor spoedklussen.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Lokaal & betrokken",
    body: "Vanuit Zuid-Limburg actief met persoonlijk contact en korte lijnen.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container-wide">
        <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5 card-tilt"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-primary">
                {p.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{p.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
