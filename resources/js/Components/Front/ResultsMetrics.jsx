import { useRef } from "react";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export default function ResultsMetrics({ metrics = [] }) {
    const gridRef = useRef(null);

    useGSAP(
        () => {
            if (!gridRef.current || !metrics.length) return;
            const cards = gridRef.current.querySelectorAll("[data-metric]");

            if (prefersReducedMotion()) {
                gsap.set(cards, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                cards,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: EASE.out,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                    },
                }
            );
        },
        { scope: gridRef, dependencies: [metrics.length] }
    );

    if (!metrics.length) return null;

    return (
        <section className="border-y border-white/8 bg-front-panel/50 py-16 lg:py-20">
            <div className="front-container">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                        Results
                    </p>
                    <h2 className="mt-2 max-w-[20ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                        What changed after launch
                    </h2>
                </Reveal>

                <div
                    ref={gridRef}
                    className="mt-10 grid gap-4 sm:grid-cols-3"
                >
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            data-metric
                            className="rounded-2xl border border-white/10 bg-front-graphite/60 px-5 py-6"
                        >
                            <p className="font-mono text-[2rem] font-semibold tracking-[-0.03em] text-front-ember-soft tabular-nums sm:text-[2.25rem]">
                                {metric.value}
                            </p>
                            <p className="mt-2 text-[14px] leading-snug text-front-steel">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
