// app/components/ConnectSection.tsx
"use client";

import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useConnectSectionAnimations } from "../animations/useConnectSectionAnimations";

export default function ConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
    type: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useConnectSectionAnimations({
    sectionRef,
    headingRef,
    formRef,
    infoRef,
    orbitRef,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      label: "EMAIL",
      value: "cleariswater62145@gmail.com",
      href: "mailto:cleariswater62145@gmail.com",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
          <rect
            x="2"
            y="4"
            width="16"
            height="12"
            rx="2"
            stroke="#1E90FF"
            strokeWidth="1.3"
          />
          <path d="M2 7l8 5 8-5" stroke="#1E90FF" strokeWidth="1.3" />
        </svg>
      ),
    },
    {
      label: "PHONE",
      value: "+92 345 2724778",
      href: "https://wa.me/923452724778",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
          <path
            d="M4 3h4l2 4-2 1.5a11 11 0 004.5 4.5L14 11l4 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 011-2z"
            stroke="#1E90FF"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "LOCATION",
      value: "Karachi, Pakistan",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
          <path
            d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z"
            stroke="#1E90FF"
            strokeWidth="1.3"
          />
          <circle cx="10" cy="7" r="2" stroke="#1E90FF" strokeWidth="1.3" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">
      {/* Decorative orbit graphic */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none">
        <div ref={orbitRef} className="w-full h-full relative">
          <div className="absolute inset-0 rounded-full border border-white/40" />
          <div className="absolute inset-[60px] rounded-full border border-white/30" />
          <div className="absolute inset-[120px] rounded-full border border-white/20" />
          <div className="absolute inset-[180px] rounded-full border border-[#1E90FF]/60" />
          <div className="absolute top-[20px] left-1/2 w-3 h-3 rounded-full bg-[#1E90FF] -translate-x-1/2" />
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E90FF]/30 to-transparent" />

      <div className="mx-auto w-[85%]">
        {/* Heading */}
        <div ref={headingRef} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-[#1E90FF]" />
            <span className="font-inter text-xs tracking-[4px] text-[#1E90FF] uppercase">
              Get In Touch
            </span>
          </div>

          <h2 className="font-space text-5xl md:text-[80px] font-semibold leading-[0.95] tracking-[-2px] text-white">
            LET&apos;S <br />
            <span className="text-[#1E90FF]">CONNECT.</span>
          </h2>

          <p className="mt-6 max-w-[440px] font-inter text-sm leading-relaxed text-white/50">
            Ready to elevate your brand with premium water? Tell us about your
            business and we&apos;ll get back within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left */}
          <div ref={infoRef} className="space-y-10">
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 p-5 border border-white/8 rounded-2xl hover:border-[#1E90FF]/30 hover:bg-[#1E90FF]/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-white/10 group-hover:border-[#1E90FF]/30 flex items-center justify-center transition-colors duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-inter text-[10px] tracking-[3px] text-white/30 mb-1">
                      {item.label}
                    </p>

                    <p className="font-inter text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="h-px bg-white/8" />

            {/* Social */}
            <div>
              <p className="font-inter text-[14px] tracking-[1px] text-white/30 uppercase mb-5">
                Follow Us
              </p>

              <div className="flex gap-3">
                <button className="w-10 h-10 cursor-pointer rounded-xl border border-white/10 hover:border-[#1E90FF]/40 hover:bg-[#1E90FF]/10 text-white/40 hover:text-[#1E90FF] transition-all duration-300 flex items-center justify-center">
                  <FaInstagram size={16} />
                </button>

                <button className="w-10 h-10 cursor-pointer rounded-xl border border-white/10 hover:border-[#1E90FF]/40 hover:bg-[#1E90FF]/10 text-white/40 hover:text-[#1E90FF] transition-all duration-300 flex items-center justify-center">
                  <FaLinkedinIn size={16} />
                </button>

                <button className="w-10 h-10 cursor-pointer rounded-xl border border-white/10 hover:border-[#1E90FF]/40 hover:bg-[#1E90FF]/10 text-white/40 hover:text-[#1E90FF] transition-all duration-300 flex items-center justify-center">
                  <FaWhatsapp size={16} href="https://wa.me/923452724778" />
                </button>
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 border-l-2 border-[#1E90FF]/40 bg-[#1E90FF]/5 rounded-r-xl">
              <p className="font-inter text-sm leading-relaxed text-white/50 italic">
                &ldquo;We don&apos;t just sell water — we deliver a statement.
                Your guests deserve the best from the very first sip.&rdquo;
              </p>

              <p className="mt-3 font-space text-xs tracking-[2px] text-[#1E90FF]/70">
                — CLEARIS TEAM
              </p>
            </div>
          </div>

          {/* Right */}
          <div ref={formRef}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6">
                  <p className="font-inter text-xs tracking-[2px] text-white/30 uppercase mb-3">
                    I&apos;m interested in
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Custom Labels",
                      "Bulk Supply",
                      "Events",
                      "Corporate",
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState({ ...formState, type })}
                        className={`px-4 py-2 rounded-full font-inter text-xs border transition-all duration-200 ${
                          formState.type === type
                            ? "border-[#1E90FF] bg-[#1E90FF]/15 text-[#1E90FF]"
                            : "border-white/10 text-white/40 hover:border-white/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-[10px] tracking-[3px] text-white/30 uppercase mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1E90FF]/50 focus:bg-[#1E90FF]/5 transition-all duration-300"
                      placeholder="Clearis Water"
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-[10px] tracking-[3px] text-white/30 uppercase mb-2">
                      Business
                    </label>

                    <input
                      type="text"
                      value={formState.business}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          business: e.target.value,
                        })
                      }
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1E90FF]/50 focus:bg-[#1E90FF]/5 transition-all duration-300"
                      placeholder="Restaurant name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-[10px] tracking-[3px] text-white/30 uppercase mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1E90FF]/50 focus:bg-[#1E90FF]/5 transition-all duration-300"
                    placeholder="you@business.com"
                  />
                </div>

                <div>
                  <label className="block font-inter text-[10px] tracking-[3px] text-white/30 uppercase mb-2">
                    Message
                  </label>

                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3.5 font-inter text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#1E90FF]/50 focus:bg-[#1E90FF]/5 transition-all duration-300 resize-none"
                    placeholder="Tell us about your water needs, event size, or branding vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn group relative w-full overflow-hidden rounded-full bg-[#1E90FF] px-8 py-4 font-inter text-sm text-white transition-all duration-300 hover:scale-[1.02] mt-2"
                >
                  <span className="relative z-10 tracking-[1px]">
                    Send Message
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />

                  <span className="absolute inset-0 z-20 flex items-center justify-center text-[#1E90FF] font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Send Message →
                  </span>
                </button>

                <p className="font-inter text-xs text-white/20 text-center mt-3">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#1E90FF] flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-[#1E90FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className="font-space text-3xl font-semibold text-white tracking-[-1px] mb-3">
                  Message Sent.
                </h3>

                <p className="font-inter text-sm text-white/40 max-w-[300px] leading-relaxed">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-inter text-xs tracking-[2px] text-[#1E90FF]/60 hover:text-[#1E90FF] transition-colors uppercase"
                >
                  Send Another →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#1E90FF]/40 to-transparent" />
    </section>
  );
}
