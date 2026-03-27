"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const FAQS = [
  {
    q: "Can I afford you?",
    a: "We are likely more expensive than other options. What we guarantee in return is real outcomes — not just deliverables handed over a wall.",
  },
  {
    q: "Do you design only, or do you build too?",
    a: "Both. We can design and hand off to your team, or take it all the way through to a deployed, working product. Tell us where you are and we'll scope from there.",
  },
  {
    q: "How long does a typical project take?",
    a: "Design-only projects run 4–8 weeks. Full-build projects range from 6 weeks to 6 months depending on scope. You get a straight timeline on the first call — not a vague estimate followed by scope creep.",
  },
  {
    q: "When do I get the final deliverables?",
    a: "Files and code ship after balances are settled. We don't disappear post-delivery — a support window is built into every contract.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-edge">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-6 gap-5 bg-transparent border-none cursor-none text-left font-display font-semibold text-[16px] text-ink tracking-[-0.01em] transition-colors duration-200"
      >
        <span>{q}</span>

        {/* Plus circle — rotates to × when open */}
        <span
          className={twMerge(
            "w-[22px] h-[22px] rounded-full shrink-0 flex items-center justify-center",
            "border transition-[transform,background,border-color,color] duration-300",
            open
              ? "bg-brand border-brand text-white rotate-45"
              : "bg-transparent border-edge text-ink-muted rotate-0",
          )}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          >
            <line x1="5" y1="1" x2="5" y2="9" />
            <line x1="1" y1="5" x2="9" y2="5" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[17px] text-ink-muted leading-[1.75] pb-[22px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faqs" className="py-[120px] border-t border-edge bg-canvas">
      <div className="wrap">
        <div className="grid grid-cols-[1fr_1.5fr] gap-20 max-md:grid-cols-1 max-md:gap-10">
          {/* LHS */}
          <div>
            <div className="slabel mb-5">FAQs</div>
            <h2
              className="font-display font-extrabold text-ink leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: "clamp(30px,3.5vw,46px)" }}
            >
              Common <em className="text-brand">questions</em>
            </h2>
            <p className="font-sans text-[18px] text-ink-muted leading-[1.7] mt-5 max-w-[280px]">
              Didn&apos;t find what you need? The first call is free — just ask.
            </p>
          </div>

          {/* RHS — accordion */}
          <div className="border-t border-edge">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
