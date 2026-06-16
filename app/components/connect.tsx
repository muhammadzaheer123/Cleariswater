"use client";

import { useRef, useState } from "react";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
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
    setSubmitted(true);
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

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/cleariswater?igsh=MWxxNzZzcW13NDF3ZQ==",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/your_profile",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923452724778",
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md px-4 py-3.5 font-inter text-sm text-white placeholder:text-white/25 transition-all duration-300 focus:outline-none focus:border-[#1E90FF]/40 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(30,144,255,0.15)]";

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-10 pt-10"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-[#1E90FF]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#1E90FF]/5 blur-[160px]" />

      {/* Decorative Orbit */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-[0.06] pointer-events-none">
        <div ref={orbitRef} className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full border border-white/40" />
          <div className="absolute inset-[60px] rounded-full border border-white/30" />
          <div className="absolute inset-[120px] rounded-full border border-white/20" />
          <div className="absolute inset-[180px] rounded-full border border-[#1E90FF]/60" />
          <div className="absolute top-[20px] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1E90FF]" />
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E90FF]/30 to-transparent" />

      <div className="relative z-10 mx-auto w-[85%]">
        {/* Heading */}
        <div ref={headingRef} className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-16 bg-[#1E90FF]" />

            <span className="font-inter text-xs uppercase tracking-[4px] text-[#1E90FF]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-space text-5xl font-semibold leading-[0.95] tracking-[-2px] text-white md:text-[80px]">
            LET&apos;S <br />
            <span className="text-[#1E90FF]">CONNECT.</span>
          </h2>

          <p className="mt-6 max-w-[440px] font-inter text-sm leading-relaxed text-white/50">
            Ready to elevate your brand with premium water? Tell us about your
            business and we&apos;ll get back within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Side */}
          <div ref={infoRef} className="space-y-10">
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#1E90FF]/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300 group-hover:border-[#1E90FF]/30">
                    {item.icon}
                  </div>

                  <div>
                    <p className="mb-1 font-inter text-[10px] tracking-[3px] text-white/30">
                      {item.label}
                    </p>

                    <p className="font-inter text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="h-px bg-white/10" />

            {/* Social */}
            <div>
              <p className="mb-5 font-inter text-sm uppercase tracking-[1px] text-white/30">
                Follow Us
              </p>

              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/40 backdrop-blur-md transition-all duration-300 hover:border-[#1E90FF]/30 hover:bg-[#1E90FF]/10 hover:text-[#1E90FF]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-transparent" />

              <div className="relative z-10">
                <p className="font-inter text-sm italic leading-relaxed text-white/50">
                  &ldquo;We don&apos;t just sell water — we deliver a statement.
                  Your guests deserve the best from the very first sip.&rdquo;
                </p>

                <p className="mt-3 font-space text-xs tracking-[2px] text-[#1E90FF]/70">
                  — CLEARIS TEAM
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className="rounded-[32px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-10"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6">
                  <p className="mb-3 font-inter text-xs uppercase tracking-[2px] text-white/30">
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
                        className={`rounded-full px-4 py-2 font-inter text-xs transition-all duration-300 backdrop-blur-md ${
                          formState.type === type
                            ? "border border-[#1E90FF]/40 bg-[#1E90FF]/15 text-[#4EA8FF] shadow-[0_0_20px_rgba(30,144,255,0.15)]"
                            : "border border-white/[0.08] bg-white/[0.03] text-white/50 hover:bg-white/[0.05]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-inter text-[10px] uppercase tracking-[3px] text-white/30">
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
                      className={inputClass}
                      placeholder="Clearis Water"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-inter text-[10px] uppercase tracking-[3px] text-white/30">
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
                      className={inputClass}
                      placeholder="Restaurant name"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-inter text-[10px] uppercase tracking-[3px] text-white/30">
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
                    className={inputClass}
                    placeholder="you@business.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-inter text-[10px] uppercase tracking-[3px] text-white/30">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your water needs, event size, or branding vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative mt-2 w-full overflow-hidden rounded-full bg-[#1E90FF] px-8 py-4 font-inter text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(30,144,255,0.35)]"
                >
                  <span className="relative z-10 tracking-[1px]">
                    Send Message
                  </span>
                </button>

                <p className="mt-3 text-center font-inter text-xs text-white/20">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1E90FF]">
                  <svg
                    className="h-7 w-7 text-[#1E90FF]"
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

                <h3 className="mb-3 font-space text-3xl font-semibold tracking-[-1px] text-white">
                  Message Sent.
                </h3>

                <p className="max-w-[300px] font-inter text-sm leading-relaxed text-white/40">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-[1px] w-[400px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1E90FF]/40 to-transparent" />
    </section>
  );
}
