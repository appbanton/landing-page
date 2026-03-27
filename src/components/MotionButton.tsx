"use client";

import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

/* ─────────────────────────────────────────
   ARROW ICON — shared inline
───────────────────────────────────────── */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   PROPS
───────────────────────────────────────── */
type MotionButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Label shown in the pill */
  label?: string;
  /** 'default' = dark pill; 'brand' = semi-transparent brand fill */
  tone?: "default" | "brand";
};

/* ─────────────────────────────────────────
   COMPONENT
   On hover the red circle expands to fill
   the pill behind the label text.
───────────────────────────────────────── */
export default function MotionButton({
  label = "Book a free call",
  tone = "default",
  href,
  className,
  ...props
}: MotionButtonProps) {
  const pillBase =
    "group relative inline-flex items-center h-14 w-[220px] rounded-full border overflow-hidden flex-shrink-0 no-underline cursor-none";

  const pillTone =
    tone === "brand"
      ? "bg-brand-dim border-brand-line backdrop-blur-sm"
      : "bg-canvas-s2 border-edge";

  return (
    <a
      href={href ?? "https://forms.gle/z5g59bT6x1NaZnNv5"}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(pillBase, pillTone, className)}
      {...props}
    >
      {/* Expanding brand circle */}
      <span
        className={twMerge(
          "absolute left-1 top-1/2 -translate-y-1/2",
          "w-[46px] h-[46px] rounded-full bg-brand",
          "transition-[width] duration-[450ms] cubic-bezier-[0.16,1,0.3,1]",
          "group-hover:w-[calc(100%-8px)]",
          "overflow-hidden flex-shrink-0",
        )}
        aria-hidden="true"
      />

      {/* Arrow — sits inside the circle */}
      <ArrowIcon
        className={twMerge(
          "absolute left-[15px] top-1/2 -translate-y-1/2",
          "w-[18px] h-[18px] text-white z-[2] pointer-events-none",
          "transition-transform duration-[350ms]",
          "group-hover:translate-x-[3px]",
        )}
      />

      {/* Label */}
      <span
        className={twMerge(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "font-display font-bold text-[15px] text-ink whitespace-nowrap",
          "transition-colors duration-300 z-[1] pointer-events-none ml-3",
          "group-hover:text-white",
        )}
      >
        {label}
      </span>
    </a>
  );
}
