import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials ";
import HowItWorks from "./components/HowItWorks";
import Partners from "./components/clients";
import ConnectSection from "./components/connect";

export default function page() {
  return (
    <div>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="reviews">
        <Testimonials />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <Partners />

      <section id="contact">
        <ConnectSection />
      </section>
    </div>
  );
}
