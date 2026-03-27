"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const SERVICES = [
  {
    num: "01",
    name: "Web Applications",
    desc: "Custom web apps — dashboards, SaaS platforms, internal tools, customer portals. Designed and built to production quality.",
  },
  {
    num: "02",
    name: "Mobile Apps",
    desc: "iOS and Android applications. Native feel, cross-platform efficiency. From concept through to App Store listing.",
  },
  {
    num: "03",
    name: "UX Research + Design",
    desc: "User interviews, journey mapping, wireframes, prototypes, usability testing. We validate before we build so nothing ships broken.",
  },
  {
    num: "04",
    name: "Design Systems",
    desc: "Component libraries, tokens, documentation. The foundation that keeps your product consistent as it scales.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

function ServiceItem({
  num,
  name,
  desc,
}: {
  num: string;
  name: string;
  desc: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={twMerge(
        "grid items-start gap-6 border-b border-edge transition-[padding-left] duration-300",
        "py-[30px]",
        hovered ? "pl-3" : "pl-0",
      )}
      style={{ gridTemplateColumns: "40px 1fr 32px" }}
    >
      {/* Number */}
      <span className="font-mono text-[11px] text-ink-muted tracking-[0.08em] pt-1">
        {num}
      </span>

      {/* Name + description */}
      <div>
        <div
          className="font-display font-bold text-ink tracking-[-0.025em] mb-2"
          style={{ fontSize: "clamp(18px,1.8vw,24px)" }}
        >
          {name}
        </div>
        <div className="font-sans text-[16px] leading-[1.7] text-ink-muted">
          {desc}
        </div>
      </div>

      {/* Arrow circle */}
      <div
        className={twMerge(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
          "transition-[background,border-color,color,transform] duration-300",
          "border",
          hovered
            ? "bg-brand border-brand text-white rotate-45"
            : "bg-transparent border-edge text-ink-muted rotate-0",
        )}
      >
        <ArrowIcon />
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section
      id="build"
      className="py-[120px] border-t border-edge bg-canvas-s1"
    >
      <div className="wrap">
        <div className="grid items-start gap-20 grid-cols-[1fr_2fr] max-md:grid-cols-1 max-md:gap-10">
          {/* LHS */}
          <div>
            <div className="slabel mb-7">What we build</div>
            <h2
              className="font-display font-extrabold text-ink leading-[0.95] tracking-[-0.04em] mb-5"
              style={{ fontSize: "clamp(30px,3.2vw,46px)" }}
            >
              End-to-end
              <br />
              <em className="text-brand">software</em>
            </h2>
            <p className="font-sans text-[18px] leading-[1.7] text-ink-muted max-w-[280px]">
              From user research to a deployed product. We cover the full cycle
              so you don&apos;t have to stitch three agencies together.
            </p>
          </div>

          {/* Service list */}
          <div className="border-t border-edge">
            {SERVICES.map((svc) => (
              <ServiceItem key={svc.num} {...svc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
