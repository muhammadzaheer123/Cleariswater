"use client";

import { useState } from "react";
import { gsap } from "gsap";

export default function ConnectSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // mailto fallback (no backend needed)
    const subject = `Message from ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.email}`;

    window.location.href = `mailto:cleariswater@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 md:px-20 bg-[#050814] overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1E90FF]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-[#C9A84C]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT — Info */}
        <div className="text-white flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-space tracking-[6px] uppercase">
            Let’s Connect
          </h2>
          <p className="text-white/60 mt-4 max-w-md">
            Reach out for business inquiries, partnerships, or just say hello.
            We respond fast.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col gap-4 mt-10">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923452724778"
              target="_blank"
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-white hover:border-green-400 hover:text-green-300 transition-all duration-300 flex items-center justify-between"
            >
              <span>Chat on WhatsApp</span>
              <span>↗</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-white hover:border-pink-400 hover:text-pink-300 transition-all duration-300 flex items-center justify-between"
            >
              <span>Visit Instagram</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-[#1E90FF]"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-4 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-[#1E90FF]"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message..."
              rows={5}
              className="p-4 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-[#1E90FF]"
            />

            <button
              type="submit"
              className="py-4 rounded-lg bg-gradient-to-r from-[#1E90FF] to-[#C9A84C] text-black font-semibold hover:scale-[1.02] transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
