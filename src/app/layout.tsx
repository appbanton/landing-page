import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Instrument_Sans, DM_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// Google merged "Big Shoulders Display" into one variable font with an
// optical-size axis. opsz 72 is the old Display cut (pinned in globals.css).
const display = Big_Shoulders({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const body = Instrument_Sans({
  variable: "--font-body-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const DESCRIPTION =
  "A design and build studio in Port of Spain, Trinidad. Film, photography and social posts. Websites, web apps and mobile apps. Residential design, build and renovation.";

// Structured data states only what the studio has confirmed about itself.
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "App Banton Studios",
  url: "https://appbanton.com",
  logo: "https://appbanton.com/logo.svg",
  image: "https://appbanton.com/og.png",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port of Spain",
    addressCountry: "TT",
  },
  knowsAbout: [
    "marketing film and photography",
    "social media content",
    "website and web app development",
    "mobile app development",
    "residential design and construction",
    "home renovation",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://forms.gle/z5g59bT6x1NaZnNv5",
  },
};

const TITLE = "App Banton Studios | Design and build studio, Trinidad";

export const metadata: Metadata = {
  metadataBase: new URL("https://appbanton.com"),
  title: { default: TITLE, template: "%s | App Banton Studios" },
  description: DESCRIPTION,
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://appbanton.com",
    siteName: "App Banton Studios",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "App Banton Studios" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  verification: {
    google: "2dfAe6PpA-5N_7CYDGs5IKHQyHCkUEKtBSLuI_YmyYA",
  },
};

export const viewport: Viewport = {
  themeColor: "#161412",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.GA_ID;
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
