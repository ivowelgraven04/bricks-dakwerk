import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${siteUrl}/over-ons`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteUrl}/werkzaamheden`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.6 },
  ];
  const serviceEntries = services.map((s) => ({
    url: `${siteUrl}/werkzaamheden/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...base, ...serviceEntries];
}
