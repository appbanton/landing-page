/**
 * /construction: completed work, shown as photo galleries. Each project has a
 * fact strip and photos grouped in chapters. No case-study copy beyond that.
 * Photos live in /public/construction. A photo with no `src` renders as a
 * "coming soon" slot: add the file and its `src` when the photo exists.
 */

export type Photo = {
  /** Omit while the photo does not exist yet: the slot shows "Photo coming soon". */
  src?: string;
  alt: string;
  /** Columns out of 12 on desktop. */
  span: 3 | 4 | 5 | 6 | 7 | 8 | 12;
  /** Spans two grid rows (portrait photos). */
  tall?: boolean;
  /** CSS object-position for the grid crop; the lightbox always shows the full frame. */
  pos?: string;
};

export type Chapter = { title: string; photos: Photo[] };

export type Project = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  text: string;
  cover: { src: string; alt: string };
  facts: { label: string; value: string }[];
  chapters: Chapter[];
};

const P = "/construction/";

export const PROJECTS: Project[] = [
  {
    slug: "skylark-villa",
    name: "Blanchisseuse",
    category: "New build · 16 months",
    headline: "A private villa on Trinidad's northern coast, designed and built",
    text: "Footings and retaining walls on a sloping site, a framed structure over two levels, four flights of stairs, a carport and driveway.",
    cover: {
      src: `${P}skylark-villa-08.jpg`,
      alt: "Concrete frame of the villa over two levels, with stairs",
    },
    facts: [
      { label: "Where", value: "Blanchisseuse, north coast" },
      { label: "Type", value: "New build" },
      { label: "Duration", value: "16 months" },
      {
        label: "Scope",
        value: "Design and construction, from site clearing to the roof parapets",
      },
    ],
    chapters: [
      {
        title: "Site and foundations",
        photos: [
          { src: `${P}skylark-villa-01.jpg`, alt: "The site before work, from above", span: 7 },
          { src: `${P}skylark-villa-02.jpg`, alt: "Excavation to construction levels", span: 5 },
          { src: `${P}skylark-villa-03.jpg`, alt: "Footing reinforcement, from above", span: 4, tall: true },
          { src: `${P}skylark-villa-04.jpg`, alt: "Ground beams formed", span: 4 },
          { src: `${P}skylark-villa-05.jpg`, alt: "Ground beams poured", span: 4 },
          { src: `${P}skylark-villa-06.jpg`, alt: "Retaining walls rising on the slope", span: 8 },
        ],
      },
      {
        title: "Structure",
        photos: [
          { src: `${P}skylark-villa-07.jpg`, alt: "Block walls with slab shoring", span: 5 },
          { src: `${P}skylark-villa-08.jpg`, alt: "Concrete frame over two levels, with stairs", span: 7 },
        ],
      },
      {
        title: "Finished",
        photos: [
          { alt: "Full exterior of the finished villa", span: 12 },
          { alt: "Carport and driveway", span: 6 },
          { alt: "Stairs, finished", span: 6 },
        ],
      },
    ],
  },
  {
    slug: "cascade",
    name: "Cascade",
    category: "Renovation · 5 months",
    headline: "A retaining wall, hillside stairs and a bridge to a renovated bedroom",
    text: "French drain, stairs up a 15 ft slope, security door, masonry and plumbing.",
    cover: {
      src: `${P}cascade-08.jpg`,
      alt: "Renovated bedroom with new floors, ceiling lights and air conditioning",
    },
    facts: [
      { label: "Where", value: "Cascade" },
      { label: "Type", value: "Renovation" },
      { label: "Duration", value: "5 months" },
      {
        label: "Scope",
        value:
          "Retaining wall with French drain, stair access up the hillside, bridge platform from stair to room, bedroom renovation, security door, masonry and plumbing",
      },
    ],
    chapters: [
      {
        title: "Before",
        photos: [
          { src: `${P}cascade-01.jpg`, alt: "Side of the house and the narrow passage along the hillside", span: 4, tall: true },
          { src: `${P}cascade-02.jpg`, alt: "Stored materials beside the paved path", span: 4, tall: true },
          { src: `${P}cascade-03.jpg`, alt: "Stored materials against the retaining wall", span: 4, tall: true },
        ],
      },
      {
        title: "Works",
        photos: [
          { src: `${P}cascade-04.jpg`, alt: "Retaining wall, waterproofed on the slope side", span: 6, tall: true, pos: "50% 35%" },
          { src: `${P}cascade-05.jpg`, alt: "French drain: gravel bed, filter fabric and drain pipe", span: 6, tall: true, pos: "40% 80%" },
          { src: `${P}cascade-06.jpg`, alt: "First flight of concrete stairs and the platform slab", span: 6, tall: true, pos: "50% 60%" },
          { src: `${P}cascade-07.jpg`, alt: "Bridge platform meeting the bedroom opening", span: 6, tall: true, pos: "50% 40%" },
        ],
      },
      {
        title: "After",
        photos: [
          { src: `${P}cascade-08.jpg`, alt: "Renovated bedroom with new floors, ceiling lights and air conditioning", span: 8, tall: true },
          { src: `${P}cascade-09.jpg`, alt: "Concrete stairs and landing with block retaining walls", span: 4, tall: true },
        ],
      },
    ],
  },
  {
    slug: "san-juan",
    name: "San Juan",
    category: "Renovation · 7 weeks",
    headline: "A bathroom, kitchen and living room renovated in seven weeks",
    text: "New ceiling, tile, shower and door, plus the kitchen and living room.",
    cover: { src: `${P}san-juan-05.jpg`, alt: "Renovated living room with a wood-look tile feature wall" },
    facts: [
      { label: "Where", value: "San Juan" },
      { label: "Type", value: "Renovation" },
      { label: "Duration", value: "7 weeks" },
      {
        label: "Scope",
        value:
          "Full renovation of the bathroom, kitchen and living room: new gypsum ceilings with downlighters, tile, fittings, glass shower enclosure, solid wood sliding door, new window and fresh paint throughout",
      },
    ],
    chapters: [
      {
        title: "Before",
        photos: [
          { src: `${P}san-juan-01.jpg`, alt: "Existing living room", span: 7 },
          { src: `${P}san-juan-02.jpg`, alt: "Existing kitchen counter and shelving, from the hall", span: 5 },
          { src: `${P}san-juan-03.jpg`, alt: "Existing kitchen", span: 6 },
          { src: `${P}san-juan-04.jpg`, alt: "Existing bathroom", span: 6 },
        ],
      },
      {
        title: "After",
        photos: [
          { src: `${P}san-juan-05.jpg`, alt: "Renovated living room with a wood-look tile feature wall", span: 7 },
          { src: `${P}san-juan-06.jpg`, alt: "Renovated kitchen with white cabinets and a central island", span: 5 },
          { src: `${P}san-juan-07.jpg`, alt: "Renovated bathroom with a glass shower enclosure", span: 6 },
          { src: `${P}san-juan-08.jpg`, alt: "Kitchen and living room, from the hall", span: 6 },
        ],
      },
    ],
  },
];
