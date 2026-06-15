"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const bottles = [
  {
    id: 1,
    src: "/images/bottle-01.png",
    label: "Pure Still",
    ml: "1.5L",
  },
  {
    id: 2,
    src: "/images/bottle-02.png",
    label: "Classic Still",
    ml: "1.5L",
  },
  {
    id: 3,
    src: "/images/bottle-03.png",
    label: "Mineral Water",
    ml: "1.5L",
  },
  {
    id: 4,
    src: "/images/bottle-04.png",
    label: "Alkaline",
    ml: "500ML",
  },
  {
    id: 5,
    src: "/images/bottle-05.png",
    label: "Sparkling",
    ml: "500ML",
  },
  {
    id: 6,
    src: "/images/bottle-06.png",
    label: "Premium",
    ml: "500ML",
  },
  {
    id: 7,
    src: "/images/bottle-07.png",
    label: "Executive",
    ml: "1.5L",
  },
  {
    id: 8,
    src: "/images/bottle-08.png",
    label: "Reserve",
    ml: "500ML",
  },
];

export default function Products() {
  const [active, setActive] = useState(1);

  return (
    <section id="products" className="relative overflow-hidden py-40 md:py-52">
      {/* Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(30,144,255,.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <p className="font-inter text-sm uppercase tracking-[0.4em] text-[#1E90FF]">
            PREMIUM COLLECTION
          </p>

          <h2 className="mt-4 font-space text-5xl font-semibold tracking-[-3px] text-white md:text-[90px]">
            Explore Our
            <span className="block text-[#1E90FF]">Product Range</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] font-inter text-white/60">
            Crafted with precision purification and premium hydration solutions
            designed for every lifestyle.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex justify-center gap-3 overflow-x-auto pb-12">
          {bottles.map((bottle, idx) => (
            <motion.div
              key={bottle.id}
              className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[28px]"
              animate={{
                width: active === idx ? "450px" : "86px",
                height: "570px",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setActive(idx)}
              onMouseEnter={() => setActive(idx)}
            >
              {/* bg */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    active === idx
                      ? "linear-gradient(180deg,#0B1730 0%,#050A18 100%)"
                      : "rgba(255,255,255,.03)",
                }}
              />

              {/* image */}
              <img
                src={bottle.src}
                alt={bottle.label}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  filter:
                    active === idx ? "none" : "brightness(.45) saturate(.65)",
                  transition: "all .4s ease",
                }}
              />

              {/* active glow */}
              {active === idx && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,10,24,.95) 0%, rgba(5,10,24,.25) 45%, transparent 100%)",
                  }}
                />
              )}

              {/* inactive label */}
              <AnimatePresence>
                {active !== idx && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className="font-space text-[11px] font-medium tracking-[0.35em] text-white/50"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {bottle.ml}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* active content */}
              <AnimatePresence>
                {active === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-8 left-8 z-20"
                  >
                    <p className="font-inter font-medium text-[11px] uppercase tracking-[0.25em] text-[#1E90FF]">
                      PREMIUM WATER
                    </p>

                    <h3 className="mt-2 font-space text-5xl font-semibold tracking-[-2px] text-white">
                      {bottle.ml}
                    </h3>

                    <p className="mt-2 font-inter text-sm text-white/60">
                      {bottle.label}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* active blue line */}
              {active === idx && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  className="absolute left-0 top-0 h-full w-[3px] origin-bottom bg-[#1E90FF]"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-center gap-3">
          {bottles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-[2px] rounded-full transition-all duration-300 ${
                active === idx ? "w-10 bg-[#1E90FF]" : "w-3 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
