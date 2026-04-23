"use client";

import { useState } from "react";

const werkTypes = [
  "Dakbedekking vernieuwen",
  "Dakonderhoud",
  "Dak ontmossen",
  "Dakisolatie",
  "Plastisol",
  "Kluswerkzaamheden",
  "Dakinspectie",
  "Dakreparatie",
  "Anders / weet ik niet zeker",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [aanvraag, setAanvraag] = useState<"offerte" | "direct">("offerte");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1000);
  };

  if (status === "sent") {
    return (
      <div className="card-surface p-8 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h3 className="mt-6 text-xl font-semibold text-white">Bedankt voor uw aanvraag</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met
          u op, meestal binnen 24 uur. Heeft u haast? Bel of app ons direct.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
      <div className="flex rounded-full border border-white/10 bg-black/40 p-1 text-sm">
        <button
          type="button"
          onClick={() => setAanvraag("offerte")}
          className={`flex-1 rounded-full px-4 py-2 font-medium transition-colors ${
            aanvraag === "offerte"
              ? "bg-white text-black"
              : "text-muted hover:text-white"
          }`}
        >
          Offerteaanvraag
        </button>
        <button
          type="button"
          onClick={() => setAanvraag("direct")}
          className={`flex-1 rounded-full px-4 py-2 font-medium transition-colors ${
            aanvraag === "direct"
              ? "bg-primary text-white"
              : "text-muted hover:text-white"
          }`}
        >
          Direct contact
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Naam" name="naam" required />
        <Field label="Telefoonnummer" name="telefoon" type="tel" required />
        <Field label="E-mailadres" name="email" type="email" required />
        <Field label="Woonplaats" name="plaats" required />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Onderwerp / type werkzaamheden
          </label>
          <select
            name="werkType"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary/60"
            defaultValue=""
          >
            <option value="" disabled className="bg-black">
              Maak een keuze…
            </option>
            {werkTypes.map((t) => (
              <option key={t} value={t} className="bg-black">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Uw bericht
          </label>
          <textarea
            name="bericht"
            rows={5}
            required
            placeholder="Beschrijf kort uw vraag, situatie of wensen…"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary/60"
          />
        </div>
      </div>

      {aanvraag === "direct" && (
        <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-white">
          <strong className="font-semibold">Heeft u haast?</strong> Bel of app
          ons direct — vaak kunnen we dezelfde dag nog meedenken.
        </div>
      )}

      <input type="hidden" name="aanvraagType" value={aanvraag} />

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We reageren zo snel mogelijk, meestal binnen 24 uur.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Bezig met verzenden…" : "Verstuur aanvraag"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary/60"
      />
    </div>
  );
}
