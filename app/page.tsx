import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials ";
import HowItWorks from "./components/HowItWorks";
import ConnectSection from "./components/connect";
import Partners from "./components/clients";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <Partners />

      <ConnectSection />
    </div>
  );
}
