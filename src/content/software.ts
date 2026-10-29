/**
 * /software: live projects, not case studies. Each entry says what it is,
 * what the person using it gets, and links to the live site. Copy is the
 * wording from the old site; do not add detail pages.
 */

export type Project = {
  id: string;
  name: string;
  category: string;
  headline: string;
  text: string;
  url: string;
  /** Shown in the "Visit …" link. */
  label: string;
  /** In /public, 1200x900, framed capture on #c9c2b8. */
  image: string;
  alt: string;
};

export const PROJECTS: Project[] = [
  {
    id: "shadowgovtt",
    name: "ShadowGovTT",
    category: "Civictech · UX · Government",
    headline: "T&T's public services reimagined",
    text: "Government services can be tricky to use. They don't have to be. We explore what they could look like when designed for the people who use them taking existing forms, portals, and websites and producing usable alternatives.",
    url: "https://shadowgovtt.com",
    label: "shadowgovtt.com",
    image: "/shadowgovtt-site.jpg",
    alt: "The ShadowGovTT Arrival and Departure Card form in a browser window",
  },
  {
    id: "skylark-villa",
    name: "Skylark Villa",
    category: "Hospitality · Web · Conversion",
    headline: "Luxury villa website that converts the right guest",
    text: "Skylark Villa sits on Trinidad's untouched northern coast. We built a site that matches the property, cinematic, unhurried, and focused entirely on converting the right guest.",
    url: "https://theskylarkvilla.com",
    label: "theskylarkvilla.com",
    image: "/skylark-site.jpg",
    alt: "The Skylark Villa website on a screen",
  },
  {
    id: "literead",
    name: "Literead",
    category: "Edtech · AI · Web app",
    headline: "An AI reading coach that adapts to every student",
    text: "Most reading apps test with multiple choice. Literead gives readers a patient AI voice coach that asks the right questions after every passage, building real comprehension.",
    url: "https://literead.co",
    label: "literead.co",
    image: "/literead-site.jpg",
    alt: "The Literead home page on a tablet",
  },
  {
    id: "cobaderos",
    name: "Cobaderos",
    category: "eID · EUDI · Monetisation",
    headline: "A monetisation layer for digital credentials",
    text: "Cobaderos provides an auditable, issuer-facing signal of credential verification activity that can support commercial billing, without violating the ARF's privacy prohibitions.",
    url: "https://cobaderos.com",
    label: "cobaderos.com",
    image: "/cobaderos-site.jpg",
    alt: "The Cobaderos revenue simulator dashboard on a screen",
  },
];
