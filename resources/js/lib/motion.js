import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/** Shared easing curves — weighty, premium, never linear. */
export const EASE = {
    out: "power3.out",
    inOut: "power2.inOut",
    soft: "power1.out",
    back: "back.out(1.6)",
};

/** True when the visitor has asked the OS for reduced motion. */
export function prefersReducedMotion() {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger, useGSAP };
