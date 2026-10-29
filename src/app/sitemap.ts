import { MetadataRoute } from "next";
import { PROJECTS } from "@/content/construction";

// Only pages with real content are listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://appbanton.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://appbanton.com/software",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://appbanton.com/marketing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://appbanton.com/construction",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...PROJECTS.map((p) => ({
      url: `https://appbanton.com/construction/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
