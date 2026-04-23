# Bricks Dakwerken

Premium website voor Bricks Dakwerken — dak- en kluswerkzaamheden in Zuid-Limburg.
Gebouwd op Next.js 14 (App Router), Tailwind CSS en TypeScript.

## Starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structuur

```
app/                   — routes (Home, Over Ons, Werkzaamheden, Contact)
components/            — gedeelde UI-componenten
lib/                   — site data en services
public/                — statische assets
```

## Brand-tokens

Alle brand kleuren en design-tokens staan in:

- `tailwind.config.js` — kleuren, shadows, animaties
- `app/globals.css` — CSS variabelen en component classes
- `lib/site.ts` — bedrijfsgegevens, navigatie, werkgebied
- `lib/services.ts` — alle werkzaamheden / diensten

Pas deze bestanden aan om het merk, de content of de lay-out te wijzigen.
