"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import LitereadMockup from "@/components/LitereadMockup";
import CobaderosWalletMockup from "@/components/CobaderosWalletMockup";

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
    <p className="font-sans text-[16px] leading-[1.7] text-ink-muted mb-5">
      {children}
    </p>
  );
}

function Chips({ items, soon }: { items: string[]; soon?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {items.map((item) => (
        <span
          key={item}
          className={twMerge(
            "font-mono text-[11px] tracking-[0.05em] uppercase px-[13px] py-[5px] border",
            soon
              ? "border-[rgba(230,75,54,0.25)] text-[rgba(230,75,54,0.6)]"
              : "border-edge text-ink-muted",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function CaseLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-20 inline-flex items-center gap-2 font-display font-bold text-[13px] text-brand border border-[rgba(230,75,54,0.3)] bg-brand-dim px-4 py-2 rounded-[4px] no-underline transition-[background,border-color] duration-200 hover:bg-[rgba(230,75,54,0.16)] hover:border-[rgba(230,75,54,0.6)]"
    >
      {label}
    </a>
  );
}

function Case({
  children,
  wide = false,
  full = false,
  href,
}: {
  children: React.ReactNode;
  wide?: boolean;
  full?: boolean;
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
        full && "max-md:col-span-1 md:col-span-2",
      )}
    >
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
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
          {/* 01 — Literead */}
          <Case wide href="https://literead.co">
            <div>
              <CaseNum>01 / 04</CaseNum>
              <CaseCat>EdTech · AI · Web App</CaseCat>
              <CaseTitle>
                An AI reading coach that adapts to every student
              </CaseTitle>
              <CaseBody>
                Most reading apps test with multiple choice. Literead has a real
                voice conversation with your child after every passage. The AI
                listens, follows up, and coaches — like a tutor would.
              </CaseBody>
              <Chips items={["AI coach", "Voice interaction", "No pressure"]} />
              <CaseLink
                href="https://literead.co"
                label="Visit literead.co ↗"
              />
            </div>
            <div className="hidden lg:block">
              <LitereadMockup />
            </div>
          </Case>

          {/* 02 — ShadowGovTT */}
          <Case href="https://shadowgovtt.com">
            <CaseNum>02 / 04</CaseNum>
            <CaseCat>CivicTech · UX · Government</CaseCat>
            <CaseTitle>T&amp;T&apos;s public services reimagined</CaseTitle>
            <CaseBody>
              Government services can be tricky to use. They don&apos;t have to
              be. We explore what they could look like when designed for the
              people who use them — taking existing forms, portals, and websites
              and producing usable alternatives.
            </CaseBody>
            <Chips items={["Citizen-first UX", "Gov forms redesigned"]} />
            <CaseLink
              href="https://shadowgovtt.com"
              label="Visit shadowgovtt.com ↗"
            />
          </Case>

          {/* 03 — Skylark Villa */}
          <Case href="https://theskylarkvilla.com">
            <CaseNum>03 / 04</CaseNum>
            <CaseCat>Hospitality · Web · Conversion</CaseCat>
            <CaseTitle>
              Luxury villa website that converts the right guest
            </CaseTitle>
            <CaseBody>
              Skylark Villa sits on Trinidad&apos;s untouched northern coast. We
              built a site that matches the property — cinematic, unhurried, and
              focused entirely on converting the right guest.
            </CaseBody>
            <Chips items={["Hospitality", "Conversion-led"]} />
            <CaseLink
              href="https://theskylarkvilla.com"
              label="Visit theskylarkvilla.com ↗"
            />
          </Case>

          {/* 04 — Cobaderos (teaser) */}
          <Case full>
            <div className="md:grid md:grid-cols-2 md:gap-[52px] md:items-center">
              <div>
                <CaseNum>04 / 04</CaseNum>
                <CaseCat>Identity · Trust · eID</CaseCat>
                <CaseTitle>An identity wallet</CaseTitle>
                <CaseBody>
                  Proving you&apos;re human shouldn&apos;t be this hard. We make
                  it simple — for businesses that need to verify, and people who
                  need to trust.
                </CaseBody>
                <Chips items={["Coming soon"]} soon />
              </div>
              <div className="hidden lg:block">
                <CobaderosWalletMockup />
              </div>
            </div>
          </Case>
        </div>
      </div>
    </section>
  );
}
