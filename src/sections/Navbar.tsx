"use client";

import logoImage from "../assets/images/logo.svg";
import Image from "next/image";
import Button from "../components/Button";
import { useState } from "react";

import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Our Process", href: "#process" },
  { label: "Tech Stack", href: "#stack" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-6xl">
          {/* original nav wrapped in a div so mobile menu could be added */}
          <div className=" border border-white/15 rounded-[24px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            {/* orignial nav */}
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center ">
              {/* lhs - logo */}
              <div>
                <a href="#">
                  <Image
                    src={logoImage}
                    alt="Appbanton Studios"
                    className="h-9 md:h-auto w-auto"
                  />
                </a>
              </div>
              {/* middle chile */}
              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-6">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* rhs - menu icon */}
              <div className="flex justify-end gap-4">
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
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition-transform duration-300 ease-in-out",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge(isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition-transform duration-300 ease-in-out",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
                <Button
                  variant="primary"
                  className="hidden md:flex items-center"
                  href="https://forms.gle/z5g59bT6x1NaZnNv5"
                >
                  Let&apos;s chat
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                // mobile menu
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className=" overflow-hidden"
                >
                  {/* navLinks wrapped in another div as py-4 caused prevented smooth animation */}
                  <div className="flex flex-col gap-4 items-center py-4">
                    {navLinks.map((e) => (
                      <a href={e.href} key={e.label} className="">
                        {e.label}
                      </a>
                    ))}
                    <Button
                      variant="primary"
                      className="flex items-center"
                      href="https://forms.gle/z5g59bT6x1NaZnNv5"
                    >
                      Let's chat
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[80px] md:pb-[96px] lg:pb-[132px]"></div>
    </>
  );
}
