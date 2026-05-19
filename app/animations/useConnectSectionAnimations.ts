// app/animations/useConnectSectionAnimations.ts
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  sectionRef: React.RefObject<HTMLElement | null>;
  headingRef: React.RefObject<HTMLDivElement | null>;
  formRef: React.RefObject<HTMLDivElement | null>;
  infoRef: React.RefObject<HTMLDivElement | null>;
  orbitRef: React.RefObject<HTMLDivElement | null>;
}

export const useConnectSectionAnimations = ({
  sectionRef,
  headingRef,
  formRef,
  infoRef,
  orbitRef,
}: Props) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        {
          x: 60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        },
      );

      // Info animation
      gsap.fromTo(
        infoRef.current,
        {
          x: -60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        },
      );

      // Orbit animation
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, headingRef, formRef, infoRef, orbitRef]);
};
