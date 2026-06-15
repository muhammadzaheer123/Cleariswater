"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const partners = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
];

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full py-30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#1E90FF]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-[85%] mx-auto text-center mb-12">
        <h2 className="font-space font-semibold text-white text-4xl md:text-[70px] uppercase tracking-[1px]">
          Our <span className="text-[#1E90FF]">Clients</span>
        </h2>
        <p className="text-white/50 mt-2 text-[13px] font-inter">
          Restaurants & brands that trust our premium bottled experience
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div ref={trackRef} className="flex items-center gap-50 w-max">
          {/* Logos - Set 1 */}
          <img
            src="/images/logo1.png"
            className="h-25 object-contain opacity-80"
          />
          <img
            src="/images/logo2.png"
            className="h-25 object-contain opacity-80 mix-blend-lighten"
          />
          <img
            src="/images/logo3.png"
            className="h-25 object-contain opacity-80"
          />

          <img
            src="/images/logo1.png"
            className="h-25 object-contain opacity-80"
          />
          <img
            src="/images/logo2.png"
            className="h-25 object-contain opacity-80"
          />
          <img
            src="/images/logo3.png"
            className="h-25 object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
