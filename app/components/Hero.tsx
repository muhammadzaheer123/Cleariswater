"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        skewY: 4,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const CardIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
      {children}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-28 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1E90FF]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-0 w-[400px] h-[400px] bg-[#C9A84C]/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative w-[85%] mx-auto">
        {/* Heading */}
        <h2
          ref={titleRef}
          className="text-center font-space text-5xl md:text-[80px] uppercase tracking-[-2px] text-white leading-none"
        >
          Let’s <span className="text-[#1E90FF]">Connect</span>
        </h2>

        <p className="text-center font-inter text-white/50 mt-6 max-w-xl mx-auto">
          Choose your preferred way to reach us. We respond instantly.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923452724778"
            target="_blank"
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-[#1E90FF]/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <CardIcon>
              {/* WhatsApp Icon */}
              <svg
                className="w-6 h-6 text-[#1E90FF]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.38 0 .02 5.36.02 11.97c0 2.11.55 4.16 1.6 5.98L0 24l6.27-1.64a11.94 11.94 0 005.79 1.47h.01c6.68 0 12.11-5.36 12.11-11.97a11.8 11.8 0 00-3.66-8.38z" />
              </svg>
            </CardIcon>

            <h3 className="font-space text-white text-xl mt-6">WhatsApp</h3>
            <p className="font-inter text-white/50 text-sm mt-2">
              Chat instantly with our team
            </p>

            <span className="mt-6 inline-block text-[#1E90FF] font-inter text-xs tracking-[3px] uppercase">
              Message Now →
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:cleariswater@gmail.com"
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <CardIcon>
              {/* Mail Icon */}
              <svg
                className="w-6 h-6 text-[#C9A84C]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0l-9.75 6.75L2.25 6.75"
                />
              </svg>
            </CardIcon>

            <h3 className="font-space text-white text-xl mt-6">Email</h3>
            <p className="font-inter text-white/50 text-sm mt-2">
              Business inquiries & partnerships
            </p>

            <span className="mt-6 inline-block text-[#C9A84C] font-inter text-xs tracking-[3px] uppercase">
              Send Email →
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            ref={(el) => {
              if (el) cardsRef.current[2] = el;
            }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-pink-400/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <CardIcon>
              {/* Instagram Icon */}
              <svg
                className="w-6 h-6 text-pink-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2z" />
              </svg>
            </CardIcon>

            <h3 className="font-space text-white text-xl mt-6">Instagram</h3>
            <p className="font-inter text-white/50 text-sm mt-2">
              See our latest branding work
            </p>

            <span className="mt-6 inline-block text-pink-400 font-inter text-xs tracking-[3px] uppercase">
              Visit Profile →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
