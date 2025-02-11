"use client";

import Image from "next/image";
import { type IntegrationsType } from "../sections/TechStack";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationsColumn(props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((e) => (
            <div
              key={e.name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={e.icon}
                  alt={`${e.name} Icon`}
                  className="size-24"
                />
              </div>
              <h3 className="text-3xl text-center mb-2">{e.name}</h3>
              <p className="text-white/50 text-center">{e.description}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
