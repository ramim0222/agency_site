import { useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Reveals the direct matches of `selector` inside the returned ref as they
 * scroll into view — a staggered fade + rise, the workhorse entrance used
 * across the marketing site. Respects prefers-reduced-motion.
 *
 * @param {string} selector - CSS selector (scoped to the container ref) for
 *   the elements to animate, e.g. "[data-reveal]".
 * @param {object} [options]
 * @param {number} [options.stagger=0.05]
 * @param {number} [options.y=18]
 * @param {number} [options.duration=0.55]
 * @param {string} [options.start="top 92%"]
 * @param {any[]} [options.deps=[]]
 */
export function useScrollReveal(selector = "[data-reveal]", options = {}) {
    const {
        stagger = 0.05,
        y = 18,
        duration = 0.55,
        start = "top 92%",
        deps = [],
    } = options;

    const containerRef = useRef(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;
            const targets = gsap.utils.toArray(selector, containerRef.current);
            if (!targets.length) return;

            if (prefersReducedMotion()) {
                gsap.set(targets, { opacity: 1, y: 0 });
                return;
            }

            gsap.set(targets, { opacity: 0, y });
            gsap.to(targets, {
                opacity: 1,
                y: 0,
                duration,
                ease: EASE.out,
                stagger,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start,
                    once: true,
                },
            });
        },
        { scope: containerRef, dependencies: deps }
    );

    return containerRef;
}
