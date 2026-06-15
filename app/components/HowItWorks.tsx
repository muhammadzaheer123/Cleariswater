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
        className="w-6 h-6 text-[#1E90FF]"
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
        className="w-6 h-6 text-[#1E90FF]"
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
        className="w-6 h-6 text-[#1E90FF]"
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
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        skewY: 4,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power2.inOut",
        delay: 0.4,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        delay: 0.3,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      cardsRef.current.forEach((card, i) => {
        const numEl = card?.querySelector(".step-num");
        if (!numEl) return;
        gsap.from(numEl, {
          opacity: 0,
          x: -30,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.5 + i * 0.18,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.9,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index: number, entering: boolean): void => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      y: entering ? -8 : 0,
      borderColor: entering
        ? "rgba(30,144,255,0.35)"
        : "rgba(255,255,255,0.06)",
      duration: 0.35,
      ease: "power2.out",
    });

    const numEl = card.querySelector(".step-num");
    if (!numEl) return;
    gsap.to(numEl, {
      color: entering ? "#1E90FF" : "#1f1f1f",
      duration: 0.3,
    });
  };

  return (
    <section
      ref={sectionRef}
      className=" px-6 md:px-12 lg:px-20 py-24 overflow-hidden w-full h-full"
    >
      <div className="w-[85%] h-full mx-auto">
        <p
          ref={labelRef}
          className="text-center font-inter text-[11px] tracking-[4px] text-[#1E90FF] uppercase mb-4"
        >
          The Process
        </p>

        <h2
          ref={titleRef}
          className="font-bebas text-center uppercase text-white text-5xl md:text-[80px] tracking-[-1px] mb-16 leading-none"
        >
          How It <span className="text-[#1E90FF]">Works</span>
        </h2>

        <div className="relative max-w-5xl mx-auto hidden md:block mb-[-32px]">
          <div
            ref={lineRef}
            className="absolute left-[16.67%] right-[16.67%] h-[1px] bg-gradient-to-r from-transparent via-[#1E90FF]/30 to-transparent"
            style={{ top: "28px" }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              onMouseEnter={() => handleCardHover(i, true)}
              onMouseLeave={() => handleCardHover(i, false)}
              className="relative bg-[#111111] rounded-2xl p-8 border border-white/[0.06] cursor-default"
            >
              {/* Number */}
              <p
                className="step-num font-bebas text-5xl mb-6 leading-none select-none"
                style={{ color: "#1f1f1f", letterSpacing: "0.02em" }}
              >
                {step.num}
              </p>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-white/[0.06] flex items-center justify-center mb-5">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-space text-white text-xl font-semibold mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-[#555] text-sm leading-relaxed font-light">
                {step.desc}
              </p>

              {/* Tag — matches Navbar button style */}
              <span className="inline-block mt-5 font-inter text-[11px] tracking-[3px] uppercase text-[#1E90FF] bg-[#1E90FF]/10 border border-[#1E90FF]/20 rounded-full px-3 py-1">
                {step.tag}
              </span>
            </div>
          ))}
        </div>

        {/* CTA — matches Hero button style */}
        <div ref={ctaRef} className="text-center mt-14">
          <button className="group relative overflow-hidden rounded-full bg-[#1E90FF] px-10 py-4 font-inter text-sm tracking-[2px] font-medium uppercase text-white transition-all duration-300 hover:scale-[1.03]">
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
