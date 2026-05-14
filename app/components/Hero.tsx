"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        titleRef.current,
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
      )
        .fromTo(
          subTextRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.7",
        )
        .fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6",
        );

      // Scroll Animation: Scale ko kam rakha hai taake blur na ho
      gsap.to(videoRef.current, {
        scale: 1.03,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: 80,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]"
    >
      {/* Video: Scale 105% taake edges cover hon but blur na ho */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-80 will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        <source src="/video/Herovid.mp4" type="video/mp4" />
      </video>

      {/* Single Clean Overlay: Sirf text ki readability ke liye left side par gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-[1]" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-[85%]">
          <div className="">
            <h1
              ref={titleRef}
              className="font-space text-5xl font-semibold leading-[0.95] tracking-[-3px] text-white md:text-[100px]"
            >
              PURE WATER <br />
              <span className="text-[#1E90FF]">REIMAGINED</span>
            </h1>
          </div>

          <p
            ref={subTextRef}
            className="mt-8 max-w-[520px] font-inter text-sm leading-relaxed text-white/70 md:text-base"
          >
            Crafted with precision purification and a premium hydration
            experience designed for modern luxury living.
          </p>

          <div ref={buttonsRef} className="mt-10 flex flex-wrap gap-4">
            <button className="group relative overflow-hidden rounded-full bg-[#1E90FF] px-8 py-4 font-inter text-sm text-white transition-all duration-300 hover:scale-[1.03]">
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Explore Products
              </span>
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-inter text-sm text-white backdrop-blur-xl transition-all duration-300 hover:border-[#C9A84C] hover:text-[#C9A84C]">
              Watch Story
            </button>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-bebas text-sm tracking-[4px] text-white/40">
          SCROLL
        </span>
        <div className="h-12 w-[1px] bg-white/20 overflow-hidden">
          <div className="animate-bounce h-4 w-full bg-[#1E90FF]" />
        </div>
      </div>
    </section>
  );
}
