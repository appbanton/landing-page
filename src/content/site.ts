/**
 * Single source of truth for home page content.
 * Copy here is locked (see project doc claude/home-page-spec.md).
 * Anything marked TODO needs a real asset or fact from the studio.
 */

export const FORM_URL = "https://forms.gle/z5g59bT6x1NaZnNv5";

export const LONGEST_HOUR = {
  id: "BmJ1-GopThM",
  url: "https://youtu.be/BmJ1-GopThM",
  title: "The Longest Hour",
} as const;

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export type Discipline = {
  slug: "marketing" | "software" | "construction";
  name: string;
  line: string;
  cta: string;
  /** Stand-in photo. TODO: replace with the real project frame named in `brief`. */
  photo: string;
  alt: string;
  brief: string;
  tint: [string, string];
};

export const DISCIPLINES: Discipline[] = [
  {
    slug: "marketing",
    name: "Marketing",
    line: "Film, photography and social posts.",
    cta: "See marketing work",
    photo: u("1781127445118-8140677fdea1"),
    alt: "Cinematographer on a film set",
    brief: "Frame from The Road Never Stops",
    tint: ["#6a4430", "#161412"],
  },
  {
    slug: "software",
    name: "Software",
    line: "Websites, web apps and mobile apps.",
    cta: "See software work",
    photo: u("1735825764485-93a381fd5779"),
    alt: "Person working through paperwork at a laptop",
    brief: "ShadowGovTT, the redesigned form",
    tint: ["#4a443b", "#161412"],
  },
  {
    slug: "construction",
    name: "Construction",
    line: "Residential design, build and renovation.",
    cta: "See construction work",
    photo: u("1634586648651-f1fb9ec10d90"),
    alt: "Room under renovation",
    brief: "San Juan renovation, mid-job",
    tint: ["#4f4a38", "#161412"],
  },
];

export const SKYLARK = {
  eyebrow: "One project, start to finish",
  title: "Skylark Villa",
  blurb:
    "A private villa on Trinidad's northern coast. We designed and built the house, made the film, social posts and website around it.",
  villaPhoto: "/villa-placeholder.jpg", // TODO: replace with real exterior photography of the built villa
  filmPoster: "/longest-hour-poster.jpg", // 1280x720 frame, self-hosted in /public
  sitePhoto: "/skylark-site.jpg", // framed capture of theskylarkvilla.com, 1200x900
  siteUrl: "https://theskylarkvilla.com",
  siteLabel: "theskylarkvilla.com",
} as const;
