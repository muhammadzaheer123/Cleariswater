"use client";

import { useEffect, useRef, useState } from "react";
import {
  animatedScrollTo,
  animateNavbarEntrance,
  animateMenuOpen,
  animateMenuClose,
  animateHamburgerOpen,
  animateHamburgerClose,
} from "../animations/useNavAnimations";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLUListElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact", id: "contact" },
  ];

  // ── scroll listener ──────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── navbar entrance (from animations file) ───
  useEffect(() => {
    animateNavbarEntrance(navRef.current);
  }, []);

  // ── menu open / close (from animations file) ─
  useEffect(() => {
    const overlay = overlayRef.current;
    const linkItems =
      menuLinksRef.current?.querySelectorAll("li") ??
      ([] as unknown as NodeListOf<Element>);

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      animateMenuOpen(overlay, linkItems);
      animateHamburgerOpen(line1Ref.current, line2Ref.current);
    } else {
      document.body.style.overflow = "";
      animateMenuClose(overlay);
      animateHamburgerClose(line1Ref.current, line2Ref.current);
    }
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    animatedScrollTo(id, () => setMenuOpen(false));
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
          py-3 md:py-5
          ${
            scrolled
              ? "bg-black/10 backdrop-blur-sm border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              : "bg-transparent"
          }`}
      >
        {/* Gold shimmer top line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60" />

        <div className="w-[92%] md:w-[90%] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* ── LEFT: Menu / Hamburger ── */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 md:gap-4
              px-4 md:px-7 py-2.5 md:py-3
              rounded-full border border-white/20
              text-white/80 hover:border-[#1E90FF] hover:text-[#1E90FF]
              transition-all duration-300
              text-[11px] md:text-[14px] tracking-[3px] md:tracking-[4px]
              uppercase backdrop-blur-sm bg-white/5
              font-space"
          >
            <span className="flex flex-col gap-[4px] md:gap-[5px]">
              <span
                ref={line1Ref}
                className="w-4 h-[1.5px] bg-current block origin-center"
              />
              <span
                ref={line2Ref}
                className="w-3 h-[1.5px] bg-current block origin-center"
              />
            </span>
            {/* Hide "MENU" text on very small screens */}
            <span className="hidden xs:inline lg:block">MENU</span>
          </button>

          {/* ── CENTER: Logo ── */}
          <button
            onClick={() => handleNavClick("hero")}
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none
              hover:opacity-80 transition-opacity duration-300"
          >
            <span
              className="text-[22px] sm:text-[24px] md:text-[30px]
              tracking-[2px] md:tracking-[3px]
              uppercase font-space font-bold text-white"
            >
              CLEARIS
            </span>
            <p className="text-white/60 text-[10px] md:text-[12px] font-inter hidden sm:block">
              Premium Water
            </p>
          </button>

          {/* ── RIGHT: Connect button ── */}
          <button
            onClick={() => handleNavClick("contact")}
            className="flex items-center gap-2 md:gap-3
              px-2 md:px-6 py-1.5 md:py-3
              rounded-full border border-white/20
              text-white/80 hover:border-[#C9A84C] hover:text-[#C9A84C]
              transition-all duration-300
              text-[10px] md:text-[14px] tracking-[2px] md:tracking-[2px]
              uppercase backdrop-blur-sm bg-white/5
              font-space"
          >
            {/* Hide the dash line on mobile */}
            <span className="w-5 md:w-8 h-[1.5px] bg-current hidden sm:block" />
            CONNECT
          </button>
        </div>
      </nav>

      {/* ══════════════ FULLSCREEN MENU OVERLAY ══════════════ */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] flex"
        style={{ transform: "translateX(-100%)", opacity: 0 }}
      >
        {/* ── Left panel ── */}
        <div
          className="w-full md:w-[55%] bg-[#0A0F1E] h-full flex flex-col justify-between
          px-6 sm:px-10 md:px-20 py-8 md:py-12 overflow-y-auto"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between flex-shrink-0">
            <span className="text-[28px] md:text-[35px] text-white tracking-[5px] md:tracking-[6px] uppercase font-bebas">
              CLEARIS
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center
                rounded-full border border-white/20
                text-white/70 hover:border-[#1E90FF] hover:text-[#1E90FF]
                transition-all duration-300 text-sm"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <ul
            ref={menuLinksRef}
            className="flex flex-col gap-1 my-8 flex-1 justify-center"
          >
            {links.map((link, i) => (
              <li
                key={link.label}
                className="overflow-hidden border-b border-white/5 py-3 md:py-4"
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="group w-full flex items-center justify-between
                    text-3xl sm:text-4xl md:text-6xl
                    text-white/80 hover:text-[#1E90FF]
                    transition-colors duration-300 font-space text-left"
                >
                  <span className="flex items-center gap-4 md:gap-6">
                    <span
                      className="text-xs md:text-sm font-inter text-white/20
                      group-hover:text-[#1E90FF]/60 transition-colors w-5 md:w-6"
                    >
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
                  <span
                    className="text-lg md:text-xl text-white/20
                    group-hover:text-[#1E90FF] transition-all duration-300
                    group-hover:translate-x-2"
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Bottom contact info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 flex-shrink-0">
            <div>
              <p className="text-[9px] md:text-[10px] text-white/30 tracking-[3px] uppercase mb-1">
                Phone
              </p>
              <p className="text-white/60 text-xs md:text-sm">
                +92 345 2724778
              </p>
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] text-white/30 tracking-[3px] uppercase mb-1">
                Email
              </p>
              <p className="text-white/60 text-xs md:text-sm">
                cleariswater@gmail.com
              </p>
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] text-white/30 tracking-[3px] uppercase mb-1">
                City
              </p>
              <p className="text-white/60 text-xs md:text-sm">
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* ── Right dark panel (click to close) ── */}
        <div
          className="hidden md:block flex-1 bg-black/70 backdrop-blur-sm cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}
