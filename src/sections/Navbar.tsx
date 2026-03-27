"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "What we build", href: "#build" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

const CTA_HREF = "https://forms.gle/z5g59bT6x1NaZnNv5";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={twMerge(
          "fixed top-0 left-0 right-0 z-[500]",
          "flex items-center justify-between",
          "px-12 py-5 transition-[background,border-color] duration-300",
          "max-md:px-5 max-md:py-4",
          scrolled
            ? "bg-[rgba(16,13,12,0.92)] backdrop-blur-[14px] border-b border-edge"
            : "border-b border-transparent",
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display font-extrabold text-[15px] tracking-[-0.01em] text-ink no-underline"
        >
          App Banton<span className="text-brand">.</span>
        </a>

        {/* Desktop nav links */}
        {!mobile && (
          <ul className="flex gap-8 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-[14px] font-medium text-ink-muted no-underline transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          {!mobile && (
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={twMerge(
                "inline-flex items-center gap-2 no-underline cursor-none",
                "font-display font-semibold text-[13px] tracking-[0.02em] text-ink",
                "px-5 py-[9px] rounded-[6px]",
                "border border-edge bg-transparent",
                "transition-[background,border-color] duration-200",
                "hover:bg-brand-dim hover:border-brand-line",
              )}
            >
              Start a project <ArrowIcon />
            </a>
          )}

          {/* Hamburger — mobile only */}
          {mobile && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-none"
            >
              <span
                className={twMerge(
                  "block w-[22px] h-[2px] bg-ink transition-[transform,opacity] duration-300",
                  menuOpen && "rotate-45 translate-y-[7px]",
                )}
              />
              <span
                className={twMerge(
                  "block w-[22px] h-[2px] bg-ink transition-opacity duration-300",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={twMerge(
                  "block w-[22px] h-[2px] bg-ink transition-[transform,opacity] duration-300",
                  menuOpen && "-rotate-45 -translate-y-[7px]",
                )}
              />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[490] flex flex-col items-start justify-center bg-canvas gap-8 px-12"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.06 + 0.1, duration: 0.3 },
                }}
                className="font-display font-bold text-[28px] tracking-[-0.02em] text-ink no-underline hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
              className="inline-flex items-center gap-2 mt-2 no-underline font-display font-bold text-base text-white bg-brand px-7 py-[14px] rounded-[2px]"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.1), 0 0 0 3px rgba(230,75,54,0.18)",
              }}
            >
              Start a project <ArrowIcon className="w-3 h-3" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
