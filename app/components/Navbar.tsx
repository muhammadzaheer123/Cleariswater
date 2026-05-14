"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLUListElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Services", "How It Works", "Gallery", "Contact"];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navbar entrance
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
    );
  }, []);

  // Menu open/close animation
  useEffect(() => {
    const overlay = overlayRef.current;
    const linkItems = menuLinksRef.current?.querySelectorAll("li") || [];

    if (menuOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Slide overlay in from left
      gsap.fromTo(
        overlay,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.7, ease: "power4.out" },
      );

      // Stagger links in
      gsap.fromTo(
        linkItems,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.3,
        },
      );
    } else {
      document.body.style.overflow = "";

      // Slide overlay out
      gsap.to(overlay, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 py-5 transition-all duration-500
  ${
    scrolled
      ? "bg-black/10 backdrop-blur-sm border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      : "bg-transparent"
  }`}
      >
        {/* Top gold line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60" />

        <div className="w-[90%] mx-auto px-8 flex items-center justify-between">
          {/* Left — Menu Button (Pinea style) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center font-space gap-4 px-7 py-3 rounded-full border border-white/20 text-white/80 hover:border-[#1E90FF] hover:text-[#1E90FF] transition-all duration-300 text-[14px] tracking-[4px] uppercase backdrop-blur-sm bg-white/5"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="w-4 h-[1.5px] bg-current block" />
              <span className="w-3 h-[1.5px] bg-current block" />
            </span>
            MENU
          </button>

          {/* Center — Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none">
            <span className="text-2xl md:text-[30px] tracking-[3px] uppercase font-space font-bold">
              CLEARIS
            </span>
            <p className="text-white/60 text-[12px] font-inter">
              Premium Water
            </p>
          </div>

          {/* Right — Connect Button (Pinea style) */}
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center font-space gap-3 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 text-[14px] tracking-[4px] uppercase backdrop-blur-sm bg-white/5"
          >
            <span className="w-8 h-[1.5px] bg-current block" />
            CONNECT
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] flex"
        style={{ transform: "translateX(-100%)", opacity: 0 }}
      >
        {/* Left panel — links */}
        <div className="w-full md:w-[55%] bg-[#0A0F1E] h-full flex flex-col justify-between px-10 md:px-20 py-12">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <span className="text-[35px] text-white tracking-[6px] uppercase font-bebas">
              CLEARIS
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#1E90FF] hover:text-[#1E90FF] transition-all duration-300"
            >
              ✕
            </button>
          </div>

          <ul
            ref={menuLinksRef}
            className="flex flex-col gap-2 mt-16 flex-1 justify-center"
          >
            {links.map((link) => (
              <li
                key={link}
                className="overflow-hidden border-b border-white/5 py-4"
              >
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between text-4xl md:text-6xl text-white/80 hover:text-[#1E90FF] transition-colors font-space"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  <span>{link}</span>

                  <span className="text-xl text-white/20 group-hover:text-[#1E90FF] transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          {/* Bottom info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-10">
            <div>
              <p className="text-[10px] text-white/30 tracking-[3px] uppercase mb-1">
                Phone
              </p>
              <p className="text-white/60 text-sm">+92 345 2724778</p>
            </div>
            <div>
              <p className="text-[10px] text-white/30 tracking-[3px] uppercase mb-1">
                Email
              </p>
              <p className="text-white/60 text-sm">cleariswater@gmail.com</p>
            </div>
            <div>
              <p className="text-[10px] text-white/30 tracking-[3px] uppercase mb-1">
                City
              </p>
              <p className="text-white/60 text-sm">Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Right panel — dark overlay (click to close) */}
        <div
          className="hidden md:block flex-1 bg-black/70 backdrop-blur-sm cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}
