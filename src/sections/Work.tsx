"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import LitereadMockup from "@/components/LitereadMockup";
import SkylarMockup from "@/components/SkylarkMockup";
import CasePhoneMockup from "@/components/CasePhoneMockup";

function CaseNum({ children }: { children: string }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted mb-7 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-edge" />
    </div>
  );
}

function CaseCat({ children }: { children: string }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-brand mb-3.5">
      {children}
    </div>
  );
}

function CaseTitle({ children }: { children: string }) {
  return (
    <h3
      className="font-display font-bold text-ink leading-[1.1] tracking-[-0.025em] mb-4"
      style={{ fontSize: "clamp(20px,2.2vw,30px)" }}
    >
      {children}
    </h3>
  );
}

function CaseBody({ children }: { children: string }) {
  return (
    <p className="font-sans text-[16px] leading-[1.7] text-ink-muted mb-7">
      {children}
    </p>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="font-mono text-[11px] tracking-[0.05em] uppercase px-[13px] py-[5px] border border-edge text-ink-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Case({
  children,
  wide = false,
  href,
}: {
  children: React.ReactNode;
  wide?: boolean;
  href?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={twMerge(
        "p-[52px] max-md:p-6 relative transition-[background,border-left-color] duration-300 border-l-[3px]",
        hovered
          ? "bg-canvas border-l-brand"
          : "bg-canvas-s1 border-l-transparent",
        wide &&
          "max-md:col-span-1 md:col-span-2 grid max-md:grid-cols-1 md:grid-cols-2 gap-[52px] items-center",
      )}
    >
      {/* Full-card link overlay — only rendered when href is provided */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="origin"
          className="absolute inset-0 z-10"
          aria-label="View project"
        />
      )}
      {children}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-[120px] bg-canvas">
      <div className="wrap">
        {/* Header */}
        <div className="grid grid-cols-2 gap-10 items-end mb-14 max-md:grid-cols-1">
          <div>
            <div className="slabel mb-4">Selected work</div>
            <h2
              className="font-display font-extrabold text-ink leading-[0.94] tracking-[-0.04em]"
              style={{ fontSize: "clamp(34px,4vw,54px)" }}
            >
              Products we&apos;ve <em className="text-brand">shipped</em>
            </h2>
          </div>
          <p className="font-sans text-[18px] leading-[1.65] text-ink-muted">
            Real problems, real solutions. Here&apos;s what we&apos;ve built and
            the results that followed.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-2 gap-[2px] bg-edge border border-edge max-md:grid-cols-1">
          {/* ── Case 01 — Literead ── */}
          <Case wide href="https://literead.vercel.app">
            <div>
              <CaseNum>01 / 02</CaseNum>
              <CaseCat>EdTech · Web App · AI-powered</CaseCat>
              <CaseTitle>
                AI reading coach that adapts to every student
              </CaseTitle>
              <CaseBody>
                Literead needed a product that felt like a tutor, not a test. We
                designed the full reading experience: passage flow, AI coaching
                interface, and voice interaction. Shipped it to production.
              </CaseBody>
              <Chips
                items={[
                  "Live at literead.vercel.app",
                  "AI coach UX",
                  "Voice interaction",
                ]}
              />
            </div>
            <LitereadMockup />
          </Case>

          {/* ── Case 02 — Skylark Villa ── */}
          <Case wide href="https://theskylarkvilla.com">
            <div>
              <CaseNum>02 / 02</CaseNum>
              <CaseCat>Hospitality · Web · Trinidad</CaseCat>
              <CaseTitle>
                Luxury villa website that converts the right guest
              </CaseTitle>
              <CaseBody>
                Skylark Villa sits on Trinidad&apos;s untouched northern coast.
                We built a site that matches the property — cinematic,
                unhurried, and focused entirely on converting the right guest.
              </CaseBody>
              <Chips
                items={[
                  "Live at theskylarkvilla.com",
                  "Hospitality web",
                  "Next.js",
                ]}
              />
            </div>
            <SkylarMockup />
          </Case>

          {/*
          ── Case 02 — Marketplace (commented out) ──
          <Case>
            <CaseNum>02 / 04</CaseNum>
            <CaseCat>Marketplace · Mobile · iOS + Android</CaseCat>
            <CaseTitle>
              Caribbean marketplace from 0 to 3,400 active sellers
            </CaseTitle>
            <CaseBody>
              End-to-end product design for onboarding, seller dashboard, and
              buyer discovery. Shipped in 6 weeks. 4.8★ on App Store at launch.
            </CaseBody>
            <Chips
              items={["3,400 sellers", "4.8★ App Store", "6-week delivery"]}
            />
          </Case>

          ── Case 03 — Healthcare (commented out) ──
          <Case>
            <CaseNum>03 / 04</CaseNum>
            <CaseCat>Healthcare · Web App · 3 hospitals</CaseCat>
            <CaseTitle>Patient portal that reduced no-shows by 29%</CaseTitle>
            <CaseBody>
              Redesigned booking, reminders, and teleconsult flows for a
              regional healthcare group. NPS went up 38 points post-launch.
            </CaseBody>
            <Chips
              items={["29% fewer no-shows", "NPS +38pts", "3 hospitals"]}
            />
          </Case>
          

          ── Case 03 — Travel app (commented out) ──
          <Case wide>
            <div>
              <CaseNum>03 / 03</CaseNum>
              <CaseCat>Travel · iOS + Android · 6 Islands</CaseCat>
              <CaseTitle>
                Tourism discovery app for the Southern Caribbean — designed
                &amp; handed off in 8 weeks
              </CaseTitle>
              <CaseBody>
                UX strategy, interaction design, component library, and full
                developer handoff for a native app serving tour operators across
                Barbados, Trinidad, Jamaica, Antigua, St. Lucia, and Grenada.
              </CaseBody>
              <Chips items={["6 islands", "iOS + Android", "8-week handoff"]} />
            </div>
            <CasePhoneMockup />
          </Case>*/}
        </div>
      </div>
    </section>
  );
}
