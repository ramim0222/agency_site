import { useRef } from "react";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Horizontal-on-desktop process steps with scroll reveal.
 * Skills: gsap-react (stagger), taste-design (mono indices that encode sequence).
 */
export default function ProcessTimeline({
    eyebrow = "Process",
    title = "How we work",
    steps = [],
}) {
    const listRef = useRef(null);

    useGSAP(
        () => {
            if (!listRef.current || !steps.length) return;
            const items = gsap.utils.toArray(
                "[data-process-step]",
                listRef.current
            );

            if (prefersReducedMotion()) {
                gsap.set(items, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                items,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.08,
                    ease: EASE.out,
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 82%",
                        once: true,
                    },
                }
            );
        },
        { scope: listRef, dependencies: [steps.length] }
    );

    if (!steps.length) {
        return (
            <section className="front-container py-12">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    Process details are being finalized.
                </p>
            </section>
        );
    }

    return (
        <section className="front-container py-16 lg:py-20">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    {eyebrow}
                </p>
                <h2 className="mt-2 max-w-[22ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                    {title}
                </h2>
            </Reveal>

            <ol
                ref={listRef}
                className="mt-12 grid grid-cols-1 gap-0 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-5"
            >
                {steps.map((step, index) => (
                    <li
                        key={step.key}
                        data-process-step
                        className="relative border-b border-white/10 px-0 py-8 sm:border-b-0 sm:px-4 sm:py-10 lg:border-r lg:border-white/10 lg:px-5 lg:last:border-r-0"
                    >
                        <span className="font-mono text-[11px] tabular-nums uppercase tracking-[0.14em] text-front-ember-soft">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-3 text-[1.1rem] font-semibold tracking-[-0.015em] text-white">
                            {step.label}
                        </h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-front-steel">
                            {step.body}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
