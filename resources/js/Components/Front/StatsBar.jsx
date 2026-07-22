import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export default function StatsBar({ stats }) {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const numberEls = gsap.utils.toArray("[data-stat]", containerRef.current);
            if (!numberEls.length) return;

            if (prefersReducedMotion()) {
                numberEls.forEach((el) => {
                    el.textContent = `${el.dataset.statValue}${el.dataset.statSuffix ?? ""}`;
                });
                return;
            }

            numberEls.forEach((el) => {
                const target = Number(el.dataset.statValue);
                const suffix = el.dataset.statSuffix ?? "";
                const counter = { value: 0 };

                gsap.to(counter, {
                    value: target,
                    duration: 1.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        once: true,
                    },
                    onUpdate: () => {
                        el.textContent = `${Math.round(counter.value)}${suffix}`;
                    },
                });
            });
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="grid grid-cols-1 divide-y divide-front-ink/10 rounded-2xl border border-front-ink/10 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
            {stats.map((stat) => (
                <div key={stat.key} className="flex flex-col gap-1.5 px-8 py-9 text-center sm:text-left">
                    <span
                        data-stat
                        data-stat-value={stat.value}
                        data-stat-suffix={stat.suffix}
                        className="font-mono text-[2.75rem] leading-none tracking-[-0.02em] text-front-ink tabular-nums"
                    >
                        0{stat.suffix}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-front-slate">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
