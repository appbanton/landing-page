import type { Metadata } from "next";
import { Outfit, DM_Sans, DM_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

/* ─────────────────────────────────────────
   FONTS
   DM_Sans is a variable font — do NOT set
   explicit weights alongside axes. Outfit
   and DM_Mono are static, so explicit
   weights are fine there.
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
  // Variable font — no explicit weight array needed.
  // Next.js will load the full variable font range.
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* ─────────────────────────────────────────
   METADATA
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "App Banton Studios — Software Studio",
  description:
    "Full-service software studio. UX research, product design, and development — from your first idea to a product your users love.",
  icons: {
    icon: "/logo.svg",
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
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID!} />
    </html>
  );
}
