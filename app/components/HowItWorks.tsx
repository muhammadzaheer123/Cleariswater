"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 text-[#1E90FF]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    title: "Choose Your Design",
    desc: "Pick from our curated label templates or bring your own vision. Share your brand colors, logo, and restaurant name — we handle the rest.",
    tag: "Custom Label",
  },
  {
    num: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 text-[#1E90FF]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    title: "We Customize & Print",
    desc: "Our team applies your branded label to premium Clearis bottles. Each bottle is quality-checked and sealed to maintain purity standards.",
    tag: "Premium Quality",
  },
  {
    num: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 text-[#1E90FF]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
    title: "Delivered to Your Door",
    desc: "Your custom-branded water is delivered directly to your restaurant, ready to impress every guest at the table with your unique identity.",
    tag: "Restaurant Ready",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(labelRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 }
      )
        .fromTo(titleRef.current,
          { opacity: 0, y: 35, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.55 },
          "-=0.2"
        )
        .fromTo(subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.3"
        )
        .fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.25"
        )
        .fromTo(ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        );

      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.9,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index: number, entering: boolean) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      y: entering ? -10 : 0,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden w-full"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] bg-[#1E90FF]/6 blur-[160px] rounded-full" />
        <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-[#1E90FF]/4 blur-[120px] rounded-full" />
        <div className="absolute right-0 top-1/2 w-[300px] h-[300px] bg-[#C9A84C]/4 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-[85%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            ref={labelRef}
            className="font-inter text-[11px] tracking-[5px] text-[#1E90FF] uppercase mb-4"
          >
            The Process
          </p>
          <h2
            ref={titleRef}
            className="font-bebas text-center uppercase text-white text-5xl md:text-[82px] tracking-[-1px] mb-5 leading-none"
          >
            How It <span className="text-[#1E90FF]">Works</span>
          </h2>
          <p
            ref={subtitleRef}
            className="font-inter text-white/40 text-sm max-w-lg mx-auto leading-relaxed"
          >
            From concept to your table — a seamless three-step journey to custom branded premium water.
          </p>
        </div>

        {/* Connector line (desktop only) */}
        <div className="relative max-w-5xl mx-auto hidden md:block mb-[-36px] z-10">
          <div
            ref={lineRef}
            className="absolute left-[16.67%] right-[16.67%] h-[1px]"
            style={{
              top: "31px",
              background:
                "linear-gradient(to right, transparent, rgba(30,144,255,0.5) 30%, rgba(30,144,255,0.5) 70%, transparent)",
            }}
          />
          {/* Dots on the line */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#1E90FF] border border-[#1E90FF]/50 shadow-[0_0_10px_rgba(30,144,255,0.7)]"
              style={{
                top: "27px",
                left: `calc(${16.67 + i * 33.33}% - 4px)`,
              }}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              onMouseEnter={() => handleCardHover(i, true)}
              onMouseLeave={() => handleCardHover(i, false)}
              className="group relative rounded-2xl p-8 border border-white/[0.07] cursor-default transition-all duration-500 hover:border-[#1E90FF]/30 hover:shadow-[0_0_40px_rgba(30,144,255,0.1)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Top inner highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Hover glow spot */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1E90FF]/0 via-[#1E90FF]/0 to-[#1E90FF]/0 opacity-0 group-hover:opacity-100 group-hover:from-[#1E90FF]/5 group-hover:to-transparent transition-all duration-500" />

              {/* Step number */}
              <p
                className="step-num font-bebas text-6xl mb-6 leading-none select-none transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.06)", letterSpacing: "0.02em" }}
              >
                {step.num}
              </p>

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/[0.08] transition-all duration-300 group-hover:border-[#1E90FF]/30 group-hover:shadow-[0_0_20px_rgba(30,144,255,0.15)]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-space text-white text-xl font-semibold mb-3 tracking-tight transition-colors duration-300 group-hover:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-white/35 text-sm leading-relaxed font-light mb-6">
                {step.desc}
              </p>

              {/* Tag */}
              <span className="inline-block font-inter text-[10px] tracking-[3px] uppercase text-[#1E90FF] bg-[#1E90FF]/10 border border-[#1E90FF]/20 rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-[#1E90FF]/15 group-hover:border-[#1E90FF]/35">
                {step.tag}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-14">
          <button className="group relative overflow-hidden rounded-full bg-[#1E90FF] px-10 py-4 font-inter text-sm tracking-[2px] font-medium uppercase text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(30,144,255,0.4)]">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
            <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
