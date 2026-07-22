import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Animated stats strip. `paper` for light home bands; `graphite` for About.
 */
export default function StatsBar({ stats = [], variant = "paper" }) {
    const containerRef = useRef(null);
    const cols =
        stats.length >= 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-3";

    useGSAP(
        () => {
            const numberEls = gsap.utils.toArray(
                "[data-stat]",
                containerRef.current
            );
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
        { scope: containerRef, dependencies: [stats.length, variant] }
    );

    if (!stats.length) {
        return (
            <div
                className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel"
                role="status"
            >
                Stats coming soon.
            </div>
        );
    }

    const shell =
        variant === "graphite"
            ? "divide-white/10 border-white/10 bg-front-panel"
            : "divide-front-ink/10 border-front-ink/10 bg-white";
    const valueColor =
        variant === "graphite" ? "text-front-ember-soft" : "text-front-ink";
    const labelColor =
        variant === "graphite" ? "text-front-steel-dim" : "text-front-slate";

    return (
        <div
            ref={containerRef}
            className={cn(
                "grid grid-cols-1 divide-y rounded-2xl border sm:divide-x sm:divide-y-0",
                cols,
                shell
            )}
        >
            {stats.map((stat) => (
                <div
                    key={stat.key}
                    className="flex flex-col gap-1.5 px-8 py-9 text-center sm:text-left"
                >
                    <span
                        data-stat
                        data-stat-value={stat.value}
                        data-stat-suffix={stat.suffix}
                        className={cn(
                            "font-mono text-[2.75rem] leading-none tracking-[-0.02em] tabular-nums",
                            valueColor
                        )}
                    >
                        0{stat.suffix}
                    </span>
                    <span
                        className={cn(
                            "font-mono text-[11px] uppercase tracking-[0.1em]",
                            labelColor
                        )}
                    >
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
