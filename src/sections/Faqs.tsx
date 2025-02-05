"use client";

import { useState } from "react";
import Tag from "../components/Tag";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Can I afford you?",
    answer:
      "We are likely to be more expensive than other options under consideration. However, what we can guarantee is unparalleled service and product delivery.",
  },
  {
    question: "Do you only design applications?",
    answer:
      "While we specialize in designing beautiful products we can also develop small applications. Reach out to us to see if you qualify.",
  },
  {
    question: "When will I get my designs?",
    answer:
      "The final designs are handed off to the client after balances are paid in full.",
  },
  {
    question: "Now that I have my designs, what's next?",
    answer:
      "You hand them over to a development team. If you would like us to oversee this process, we also offer this service.",
  },
  {
    question: "Do you offer any design courses?",
    answer:
      "We do not. However, if you want to started in design we'd recommend getting your hands on a copy of 'The UX Generalist: Product Delivery on a Design Team of One'.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSlectedIndex] = useState(0);
  return (
    <section className="py-24" id="faqs">
      <div className="container">
        <div className="flex justify-center mb-10">
          <Tag variant="default">Faqs</Tag>
        </div>
        <h2 className="text-5xl md:text-6xl font-medium text-center md:max-w-2xl mx-auto">
          Questions? We&apos;ve got
          <span className="text-brand-primary"> answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 md:max-w-2xl mx-auto">
          {faqs.map((e, faqIndex) => (
            <div
              key={e.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              {/* question */}
              <div
                className="flex justify-between items-center"
                onClick={() => setSlectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{e.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-brand-primary flex-shrink-0 transition duration-300",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              {/* answer */}
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 24 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-white/50">{e.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
