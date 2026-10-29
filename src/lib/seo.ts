import type { Metadata } from "next";

const SITE = "https://appbanton.com";

/**
 * Per-page metadata. Next replaces (not merges) openGraph and twitter when a
 * page sets its own, so every field a share card needs is repeated here.
 */
export function pageMeta({
  title,
  description,
  path,
  image = { url: "/og.png", alt: "App Banton Studios" },
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
}): Metadata {
  const full = `${title} | App Banton Studios`;
  const url = `${SITE}${path}`;
  const og =
    image.url === "/og.png" ? { ...image, width: 1200, height: 630 } : image;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: full,
      description,
      url,
      siteName: "App Banton Studios",
      type: "website",
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
      images: [image.url],
    },
  };
}
