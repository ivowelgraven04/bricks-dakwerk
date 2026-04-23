import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site, siteUrl, workAreas } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Bricks Dakwerken uit Zuid-Limburg: specialist in dakbedekking, dakonderhoud, ontmossen, dakisolatie, plastisol, dakinspectie en klussen rondom het huis. Vakkundig, lokaal en betrouwbaar.",
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.name,
  keywords: [
    "dakdekker Zuid-Limburg",
    "dakbedekking Limburg",
    "dakonderhoud",
    "ontmossen dak",
    "dakisolatie",
    "plastisol",
    "dakinspectie",
    "dakreparatie",
    "klusbedrijf Zuid-Limburg",
    "Maastricht",
    "Heerlen",
    "Sittard",
    "Kerkrade",
    "Valkenburg",
    "Bricks Dakwerken",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Specialist in dak- en kluswerkzaamheden in Zuid-Limburg. Dakbedekking, isolatie, ontmossen, plastisol, inspectie en meer.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Specialist in dak- en kluswerkzaamheden in Zuid-Limburg. Dakbedekking, isolatie, ontmossen, plastisol, inspectie en meer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "construction",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  description:
    "Bricks Dakwerken is specialist in dak- en kluswerkzaamheden in Zuid-Limburg: dakbedekking, dakonderhoud, ontmossen, dakisolatie, plastisol, dakinspectie en klussen rondom het huis.",
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  image: `${siteUrl}/opengraph-image`,
  logo: `${siteUrl}/icon`,
  priceRange: "€€",
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Limburg",
    addressCountry: "NL",
  },
  areaServed: workAreas.map((city) => ({
    "@type": "City",
    name: city,
  })),
  serviceArea: {
    "@type": "AdministrativeArea",
    name: site.baseLocation,
  },
  sameAs: [],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Werkzaamheden",
    itemListElement: [
      "Dakbedekking vernieuwen",
      "Dakonderhoud",
      "Ontmossen",
      "Dakisolatie",
      "Plastisol",
      "Kluswerkzaamheden",
      "Dakinspectie",
      "Dakreparatie",
    ].map((n) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: n },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
