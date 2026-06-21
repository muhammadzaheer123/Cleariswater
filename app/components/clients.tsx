"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Client {
  name: string;
  logo: string;
  imgClass?: string;
}

const clientLogos: Client[] = [
  { name: "Client 1", logo: "/images/logo1.png" },
  { name: "Client 2", logo: "/images/logo2.png", imgClass: "mix-blend-lighten" },
  { name: "Client 3", logo: "/images/logo3.png" },
  { name: "Client 4", logo: "/images/logo4.png" },
  { name: "Client 5", logo: "/images/logo5.jpg" },
  { name: "Client 6", logo: "/images/logo6.jpg" },
  { name: "Client 7", logo: "/images/logo7.avif" },
];

const row1 = [...clientLogos];
const row2 = [...clientLogos].reverse();

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth ScrollTrigger entrance animation for header elements
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderCard = (client: Client, index: number) => (
    <div
      key={`${client.name}-${index}`}
      className="group relative flex h-28 w-60 flex-shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-8 backdrop-blur-md transition-all duration-500 hover:scale-115 hover:border-[#1E90FF]/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(30,144,255,0.15)] cursor-pointer"
    >
      {/* Dynamic light spot background on card hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#1E90FF]/0 via-[#1E90FF]/3 to-[#1E90FF]/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <img
        src={client.logo}
        alt={client.name}
        className={`h-18 w-30 rounded-full  object-contain opacity-45 grayscale contrast-75 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 ${client.imgClass || ""}`}
      />
    </div>
  );

  const edgeFadeStyle = {
    WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
    maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 overflow-hidden bg-transparent"
    >
      {/* Decorative ambient background spots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#1E90FF]/8 to-[#C9A84C]/3 blur-[140px] rounded-full opacity-60" />
      </div>

      {/* GSAP Animated Header */}
      <div ref={headerRef} className="relative w-[85%] mx-auto text-center mb-16 md:mb-20">
        <p className="font-inter text-xs uppercase tracking-[0.4em] text-[#1E90FF] mb-3">
          Our Partners
        </p>
        <h2 className="font-space font-semibold text-white text-4xl md:text-[70px] uppercase tracking-[1px] leading-none">
          Trusted By <span className="text-[#1E90FF]">The Best</span>
        </h2>
        <p className="text-white/50 mt-4 text-xs md:text-sm max-w-xl mx-auto font-inter leading-relaxed">
          Premium hotels, restaurants, and lounges that trust Clearis Water to deliver an exceptional hydration experience.
        </p>
      </div>

      {/* Marquee Carousel Tracks */}
      <div className="flex flex-col gap-6 md:gap-8 w-full relative">

        {/* Row 1: Left-to-Right Scrolling */}
        <div className="w-full overflow-hidden py-2" style={edgeFadeStyle}>
          <div className="flex w-max gap-6 md:gap-14 animate-marquee-left">
            {/* Set 1 */}
            <div className="flex gap-6 md:gap-14">
              {row1.map((client, idx) => renderCard(client, idx))}
            </div>
            {/* Set 2 (for seamless loop) */}
            <div className="flex gap-6 md:gap-14" aria-hidden="true">
              {row1.map((client, idx) => renderCard(client, idx))}
            </div>
            {/* Set 3 (ensures screen width is fully covered on ultra-wide screens) */}
            <div className="flex gap-6 md:gap-14" aria-hidden="true">
              {row1.map((client, idx) => renderCard(client, idx))}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
