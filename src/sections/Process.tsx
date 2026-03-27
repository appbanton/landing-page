"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We interview stakeholders, audit competitors, and map user journeys before writing a line of code.",
    badge: "Research first",
    icon: (
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, high-fidelity mockups, interactive prototypes — validated with real users before a single component gets built.",
    badge: "Tested in Figma",
    icon: (
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop. Clean, accessible code with a component system your team can extend long after handoff.",
    badge: "Production-grade",
    icon: (
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Launch + Support",
    desc: "We ship, monitor early behaviour, and stay on to fix what reality exposes. Support window is in every contract.",
    badge: "Support included",
    icon: (
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

function Step({ num, title, desc, badge, icon }: (typeof STEPS)[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={twMerge(
        "px-7 py-9 transition-colors duration-[250ms]",
        hovered ? "bg-canvas-s1" : "bg-canvas",
      )}
    >
      {/* Ghost number */}
      <div
        className="font-display font-extrabold text-[72px] leading-none tracking-[-0.05em] mb-5 select-none"
        style={{ color: "rgba(237,232,226,0.03)" }}
      >
        {num}
      </div>

      {/* Title */}
      <div className="font-display font-bold text-[18px] text-ink tracking-[-0.02em] mb-3">
        {title}
      </div>

      {/* Description */}
      <div className="font-sans text-[15px] text-ink-muted leading-[1.7]">
        {desc}
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 mt-[18px] font-mono text-[10px] tracking-[0.1em] uppercase text-ink-muted">
        {icon} {badge}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-[120px] border-t border-edge bg-canvas">
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 mb-14">
          <div className="slabel">Our process</div>
          <h2
            className="font-display font-extrabold text-ink leading-[0.94] tracking-[-0.04em]"
            style={{ fontSize: "clamp(34px,4vw,54px)" }}
          >
            How we <em className="text-brand">work</em>
          </h2>
          <p className="font-sans text-[16px] text-ink-muted leading-[1.65] max-w-[480px]">
            Four phases. You see progress at every step. No surprises at launch.
          </p>
        </div>

        {/* Steps grid — 2px gap shows edge colour as divider lines */}
        <div className="grid grid-cols-4 gap-[2px] bg-edge max-md:grid-cols-2 max-sm:grid-cols-1">
          {STEPS.map((step) => (
            <Step key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
