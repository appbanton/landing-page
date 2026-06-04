import type { Metadata } from "next";
import { Outfit, DM_Sans, DM_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

/* ─────────────────────────────────────────
   FONTS
───────────────────────────────────────── */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* ─────────────────────────────────────────
   STRUCTURED DATA — JSON-LD
   Tells Google and AI engines (ChatGPT,
   Claude, Perplexity) what App Banton is,
   what it does, and who it serves.
   Update sameAs once LinkedIn is live.
───────────────────────────────────────── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "App Banton Studios",
  url: "https://appbanton.com",
  logo: "https://appbanton.com/logo.svg",
  image: "https://appbanton.com/og.png",
  description:
    "Full-service software studio specialising in web application and SaaS product development, UX research, product design, and mobile apps. One team takes your idea from research through to a shipped, working product.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port of Spain",
    addressCountry: "TT",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "SaaS product development",
    "web application development",
    "UX research and design",
    "mobile application development",
    "design systems",
    "software product development",
    "product strategy",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Application Development",
        description:
          "Custom web applications including SaaS platforms, dashboards, internal tools, and customer portals. Designed and built to production quality.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "SaaS Product Development",
        description:
          "End-to-end SaaS product development from research and design through to a deployed, scalable product.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mobile App Development",
        description:
          "iOS and Android applications. Native feel, cross-platform efficiency. From concept through to App Store listing.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "UX Research and Product Design",
        description:
          "User interviews, journey mapping, wireframes, prototypes, and usability testing. We validate before we build.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Design Systems",
        description:
          "Component libraries, tokens, and documentation. The foundation that keeps your product consistent as it scales.",
      },
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://forms.gle/z5g59bT6x1NaZnNv5",
  },
  // sameAs: [] — add LinkedIn URL here once the company page is live
};

/* ─────────────────────────────────────────
   METADATA
   Title and description are keyword-
   targeted for "SaaS development studio"
   and "web app development" searches.
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "App Banton Studios — SaaS & Web App Development Studio",
  description:
    "We design and build SaaS products, web applications, and mobile apps — end to end. UX research, product design, and development under one roof. Book a free discovery call.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "App Banton Studios — SaaS & Web App Development Studio",
    description:
      "We design and build SaaS products, web applications, and mobile apps — end to end. UX research, product design, and development under one roof.",
    url: "https://appbanton.com",
    siteName: "App Banton Studios",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "App Banton Studios — SaaS & Web App Development Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Banton Studios — SaaS & Web App Development Studio",
    description:
      "We design and build SaaS products, web applications, and mobile apps — end to end. UX research, product design, and development under one roof.",
    images: ["/og.png"],
  },
  verification: {
    google: "2dfAe6PpA-5N_7CYDGs5IKHQyHCkUEKtBSLuI_YmyYA",
  },
};

/* ─────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${outfit.variable}
          ${dmSans.variable}
          ${dmMono.variable}
          font-sans
          antialiased
        `}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID!} />
    </html>
  );
}
