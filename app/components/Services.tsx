"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Custom Label Bottling",
    description:
      "Your brand, your story — printed on every bottle. We design and produce custom-labeled Clearis water tailored to your restaurant, hotel, or event.",
    tag: "BRAND IDENTITY",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect
          x="12"
          y="4"
          width="16"
          height="32"
          rx="3"
          stroke="#1E90FF"
          strokeWidth="1.5"
        />
        <line
          x1="15"
          y1="12"
          x2="25"
          y2="12"
          stroke="#1E90FF"
          strokeWidth="1.2"
        />
        <line
          x1="15"
          y1="16"
          x2="25"
          y2="16"
          stroke="#1E90FF"
          strokeWidth="1.2"
        />
        <line
          x1="15"
          y1="20"
          x2="21"
          y2="20"
          stroke="#1E90FF"
          strokeWidth="1.2"
        />
        <circle
          cx="28"
          cy="28"
          r="6"
          fill="#1E90FF"
          fillOpacity="0.15"
          stroke="#1E90FF"
          strokeWidth="1.2"
        />
        <path
          d="M25.5 28l1.5 1.5 3-3"
          stroke="#1E90FF"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Premium Purification",
    description:
      "Multi-stage reverse osmosis and mineral balancing ensures every drop meets pharmaceutical-grade purity standards. Taste the difference immediately.",
    tag: "PURITY TECH",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path
          d="M20 6 C20 6 10 18 10 25 C10 30.5 14.5 35 20 35 C25.5 35 30 30.5 30 25 C30 18 20 6 20 6Z"
          stroke="#1E90FF"
          strokeWidth="1.5"
          fill="#1E90FF"
          fillOpacity="0.08"
        />
        <path
          d="M15 26 C15 23 17 21 20 20"
          stroke="#1E90FF"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="25" r="2" fill="#1E90FF" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Restaurant & Hotel Supply",
    description:
      "Reliable bulk delivery schedules designed around your venue's rhythm. Never run out — we manage your stock so you focus on service.",
    tag: "B2B LOGISTICS",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect
          x="5"
          y="18"
          width="30"
          height="16"
          rx="2"
          stroke="#1E90FF"
          strokeWidth="1.5"
        />
        <path d="M5 22 L35 22" stroke="#1E90FF" strokeWidth="1.2" />
        <rect
          x="16"
          y="22"
          width="8"
          height="12"
          stroke="#1E90FF"
          strokeWidth="1.2"
        />
        <path
          d="M13 18 L15 10 L25 10 L27 18"
          stroke="#1E90FF"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="34" r="2" fill="#1E90FF" />
        <circle cx="28" cy="34" r="2" fill="#1E90FF" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Event & Corporate Gifting",
    description:
      "From corporate galas to intimate weddings, impress every guest with premium hydration under your brand. Custom packaging available.",
    tag: "EVENTS",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect
          x="8"
          y="16"
          width="24"
          height="18"
          rx="2"
          stroke="#1E90FF"
          strokeWidth="1.5"
        />
        <path d="M8 22 L32 22" stroke="#1E90FF" strokeWidth="1.2" />
        <path d="M20 16 L20 34" stroke="#1E90FF" strokeWidth="1.2" />
        <path
          d="M20 16 C20 16 14 10 12 8 C10 6 12 4 14 6 C16 8 20 12 20 16Z"
          stroke="#1E90FF"
          strokeWidth="1.2"
          fill="#1E90FF"
          fillOpacity="0.1"
        />
        <path
          d="M20 16 C20 16 26 10 28 8 C30 6 28 4 26 6 C24 8 20 12 20 16Z"
          stroke="#1E90FF"
          strokeWidth="1.2"
          fill="#1E90FF"
          fillOpacity="0.1"
        />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      // Animated line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
          },
        },
      );

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // Hover shimmer on cards — done via CSS, but number counter reveal
      const numbers = cardsRef.current?.querySelectorAll(".service-number");
      if (numbers) {
        gsap.fromTo(
          numbers,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #ffffff 60px, #ffffff 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, #ffffff 60px, #ffffff 61px)`,
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1E90FF]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-[85%]">
        {/* Header */}
        <div ref={headingRef} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div
              ref={lineRef}
              className="h-[1px] w-16 bg-[#1E90FF] origin-left"
            />
            <span className="font-inter text-xs tracking-[4px] text-[#1E90FF] uppercase">
              What We Offer
            </span>
          </div>

          <h2 className="font-space text-5xl md:text-[80px] font-semibold leading-[0.95] tracking-[-2px] text-white">
            OUR <br />
            <span className="text-[#1E90FF]">SERVICES.</span>
          </h2>

          <p className="mt-6 max-w-[480px] font-inter text-sm leading-relaxed text-white/50">
            From precision purification to bespoke branding — every service is
            engineered for luxury and reliability.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group relative bg-[#0a0a0a] p-10 cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-[#0f1a2e]"
            >
              {/* Hover border glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-[#1E90FF]/20" />

              {/* Top row */}
              <div className="flex items-start justify-between mb-8">
                <span className="service-number font-space text-[56px] font-semibold leading-none tracking-[-3px] text-white/8 select-none">
                  {service.number}
                </span>
                <div className="p-3 border border-white/10 rounded-xl group-hover:border-[#1E90FF]/30 transition-colors duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Tag */}
              <div className="mb-4">
                <span className="inline-block font-inter text-[10px] tracking-[3px] text-[#1E90FF]/70 uppercase border border-[#1E90FF]/20 rounded-full px-3 py-1">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space text-2xl font-semibold text-white mb-4 tracking-[-0.5px] group-hover:text-[#1E90FF] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-8 flex items-center gap-2 text-white/20 group-hover:text-[#1E90FF] transition-all duration-300">
                <span className="font-inter text-xs tracking-[2px] uppercase">
                  Learn More
                </span>
                <svg
                  className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
