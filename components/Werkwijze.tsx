import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Contact opnemen",
    body: "U belt, appt of mailt ons. We luisteren naar uw vraag en plannen kort een moment om de situatie te beoordelen.",
  },
  {
    n: "02",
    title: "Inventarisatie",
    body: "Op locatie bekijken we uw dak of klus, meten we op en adviseren we over de beste aanpak en materialen.",
  },
  {
    n: "03",
    title: "Offerte",
    body: "U ontvangt een heldere, vrijblijvende offerte met een duidelijke omschrijving en een eerlijke prijs.",
  },
  {
    n: "04",
    title: "Uitvoering",
    body: "Na uw akkoord plannen we de klus in en voeren we het werk vakkundig uit — met oog voor detail en een nette werkplek.",
  },
  {
    n: "05",
    title: "Oplevering",
    body: "We leveren samen met u op en laten uw dak of klus zien. Tevreden klanten zijn ons belangrijkste doel.",
  },
];

export function Werkwijze() {
  return (
    <section className="section">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Onze werkwijze</span>
          <h2 className="h-section mt-5 text-white">
            Van eerste contact tot oplevering — <span className="text-primary">helder en vakkundig.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Goede dak- en kluswerkzaamheden beginnen bij een goed proces. Dit is
            hoe wij te werk gaan, bij iedere opdracht — groot of klein.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-surface/70 p-6 card-tilt"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-primary">{s.n}</span>
                {i < steps.length - 1 && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="text-white/30"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
