import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bricksdakwerk.nl"),
  title: {
    default: "Bricks Dakwerken — Vakmanschap in dak- en kluswerkzaamheden",
    template: "%s · Bricks Dakwerken",
  },
  description:
    "Bricks Dakwerken uit Zuid-Limburg: specialist in dakbedekking, dakonderhoud, ontmossen, dakisolatie, plastisol en klussen rondom het huis. Vakkundig, lokaal en betrouwbaar.",
  openGraph: {
    title: "Bricks Dakwerken — Vakmanschap in dak- en kluswerkzaamheden",
    description:
      "Specialist in dak- en kluswerkzaamheden in Zuid-Limburg. Dakbedekking, isolatie, ontmossen, plastisol en meer.",
    locale: "nl_NL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
