"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        {/* text falls off page with "flex-none" */}
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-brand-primary">&#10038;</span>
              <span>Book a free chat</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
