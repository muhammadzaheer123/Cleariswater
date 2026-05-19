import { gsap } from "gsap";

// ─────────────────────────────────────────────
// PAGE FLIP — Right se screen cover, left se reveal
// ─────────────────────────────────────────────
export function animatedScrollTo(id: string, onStart?: () => void) {
  let curtain = document.getElementById("nav-curtain");

  if (!curtain) {
    curtain = document.createElement("div");
    curtain.id = "nav-curtain";
    curtain.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      transform: translateX(100%);
      overflow: hidden;
    `;

    const page = document.createElement("div");
    page.style.cssText = `position: absolute; inset: 0; background: #050508;`;

    // horizontal texture lines
    const texture = document.createElement("div");
    texture.style.cssText = `
      position: absolute; inset: 0;
      background: repeating-linear-gradient(
        0deg, transparent, transparent 80px,
        rgba(255,255,255,0.012) 80px, rgba(255,255,255,0.012) 81px
      );
    `;

    // leading edge glow (left side — entry edge)
    const edgeGlow = document.createElement("div");
    edgeGlow.style.cssText = `
      position: absolute; top: 0; left: 0;
      width: 3px; height: 100%;
      background: linear-gradient(180deg, transparent 0%, #1E90FF 40%, #1E90FF 60%, transparent 100%);
      box-shadow: 0 0 24px 6px rgba(30,144,255,0.55);
    `;

    // trailing edge glow (right side — exit edge)
    const edgeGlowRight = document.createElement("div");
    edgeGlowRight.id = "nav-curtain-right-edge";
    edgeGlowRight.style.cssText = `
      position: absolute; top: 0; right: 0;
      width: 3px; height: 100%;
      background: linear-gradient(180deg, transparent 0%, #1E90FF 40%, #1E90FF 60%, transparent 100%);
      box-shadow: 0 0 24px 6px rgba(30,144,255,0.55);
      opacity: 0;
    `;

    // CLEARIS watermark
    const watermark = document.createElement("div");
    watermark.innerHTML = "CLEARIS";
    watermark.style.cssText = `
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
      font-size: clamp(36px, 7vw, 72px);
      font-weight: 700; letter-spacing: 14px;
      color: rgba(255,255,255,0.035);
      white-space: nowrap; pointer-events: none; user-select: none;
    `;

    page.appendChild(texture);
    page.appendChild(edgeGlow);
    page.appendChild(edgeGlowRight);
    page.appendChild(watermark);
    curtain.appendChild(page);
    document.body.appendChild(curtain);
  }

  const target = document.getElementById(id);
  if (!target) return;

  const rightEdge = curtain.querySelector(
    "#nav-curtain-right-edge",
  ) as HTMLElement;
  const tl = gsap.timeline();

  tl
    // 1. Sweep IN from right (left edge glows as it enters)
    .fromTo(
      curtain,
      { x: "100%" },
      {
        x: "0%",
        duration: 0.52,
        ease: "power3.inOut",
        onStart: () => {
          if (onStart) onStart();
        },
      },
    )
    // 2. Scroll behind the curtain
    .call(() => {
      const offset = id === "hero" ? 0 : 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
      });
    })
    // 3. Right edge lights up (exit flash)
    .to(rightEdge, { opacity: 1, duration: 0.08 })
    // 4. Sweep OUT to left (right edge now trails)
    .to(curtain, { x: "-100%", duration: 0.58, ease: "power3.inOut" }, "+=0.06")
    // 5. Reset
    .set(curtain, { x: "100%" })
    .set(rightEdge, { opacity: 0 });
}

// ─────────────────────────────────────────────
// NAVBAR ENTRANCE — drops in from top
// ─────────────────────────────────────────────
export function animateNavbarEntrance(el: HTMLElement | null) {
  if (!el) return;
  gsap.fromTo(
    el,
    { y: -80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
  );
}

// ─────────────────────────────────────────────
// MENU OPEN — overlay slides in from left, links stagger
// ─────────────────────────────────────────────
export function animateMenuOpen(
  overlay: HTMLElement | null,
  linkItems: NodeListOf<Element>,
) {
  if (!overlay) return;

  gsap.fromTo(
    overlay,
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.65, ease: "power4.out" },
  );

  if (linkItems.length) {
    gsap.fromTo(
      linkItems,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.25,
      },
    );
  }
}

// ─────────────────────────────────────────────
// MENU CLOSE — overlay slides back left
// ─────────────────────────────────────────────
export function animateMenuClose(overlay: HTMLElement | null) {
  if (!overlay) return;
  gsap.to(overlay, {
    x: "-100%",
    opacity: 0,
    duration: 0.45,
    ease: "power4.in",
  });
}

// ─────────────────────────────────────────────
// HAMBURGER → X morph
// ─────────────────────────────────────────────
export function animateHamburgerOpen(
  line1: HTMLElement | null,
  line2: HTMLElement | null,
) {
  if (!line1 || !line2) return;
  gsap.to(line1, {
    rotation: 45,
    y: 3.5,
    width: 16,
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(line2, {
    rotation: -45,
    y: -3.5,
    width: 16,
    duration: 0.3,
    ease: "power2.out",
  });
}

export function animateHamburgerClose(
  line1: HTMLElement | null,
  line2: HTMLElement | null,
) {
  if (!line1 || !line2) return;
  gsap.to(line1, {
    rotation: 0,
    y: 0,
    width: 16,
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(line2, {
    rotation: 0,
    y: 0,
    width: 12,
    duration: 0.3,
    ease: "power2.out",
  });
}
