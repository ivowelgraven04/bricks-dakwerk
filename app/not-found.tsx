import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-28 text-center">
      <span className="eyebrow">404</span>
      <h1 className="h-display mt-5 text-white">Pagina niet gevonden</h1>
      <p className="mt-4 max-w-md text-base text-muted">
        De pagina die u zoekt bestaat niet (meer). Ga terug naar de homepagina
        of bekijk onze werkzaamheden.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          Naar homepagina
        </Link>
        <Link href="/werkzaamheden" className="btn-ghost">
          Onze werkzaamheden
        </Link>
      </div>
    </section>
  );
}
