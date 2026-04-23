export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.bricksdakwerk.nl");

export const site = {
  name: "Bricks Dakwerken",
  tagline: "Vakmanschap in dak- en kluswerkzaamheden",
  phone: "06-48041380",
  phoneHref: "tel:+31648041380",
  whatsapp: "+31648041380",
  whatsappHref: "https://wa.me/31648041380",
  email: "info@bricksdakwerk.nl",
  emailHref: "mailto:info@bricksdakwerk.nl",
  baseLocation: "Zuid-Limburg",
  owner: "William van Dijk",
  yearSince: null as number | null,
  url: siteUrl,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Onze Werkzaamheden", href: "/werkzaamheden" },
  { label: "Contact", href: "/contact" },
];

export const workAreas = [
  "Maastricht", "Heerlen", "Sittard", "Geleen", "Kerkrade", "Brunssum",
  "Landgraaf", "Stein", "Beek", "Meerssen", "Valkenburg", "Gulpen",
  "Wittem", "Vaals", "Simpelveld", "Voerendaal", "Nuth", "Onderbanken",
  "Schinnen", "Eijsden", "Margraten", "Cadier en Keer", "Bunde", "Elsloo",
  "Urmond", "Born", "Echt", "Susteren", "Roermond", "Maasbracht",
  "Hoensbroek", "Amstenrade", "Oirsbeek", "Epen", "Mechelen",
  "Bocholtz", "Klimmen", "Hulsberg", "Geulle", "Ulestraten",
  "Bemelen", "Gronsveld", "Rijckholt", "Noorbeek",
];
