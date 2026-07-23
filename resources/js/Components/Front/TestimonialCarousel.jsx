import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

export default function TestimonialCarousel({ testimonials }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const rootRef = useRef(null);
    const contentRef = useRef(null);
    const indexRef = useRef(0);
    const animatingRef = useRef(false);
    const reduced = useRef(prefersReducedMotion());

    indexRef.current = index;

    const { contextSafe } = useGSAP(
        () => {
            if (contentRef.current) {
                gsap.set(contentRef.current, { autoAlpha: 1, y: 0 });
            }
        },
        { scope: rootRef }
    );

    const resetContent = contextSafe(() => {
        animatingRef.current = false;
        if (contentRef.current) {
            gsap.killTweensOf(contentRef.current);
            gsap.set(contentRef.current, { autoAlpha: 1, y: 0, clearProps: "transform" });
        }
    });

    const goTo = contextSafe((nextIndex) => {
        const count = testimonials.length;
        if (!count) return;

        const normalized = ((nextIndex % count) + count) % count;
        if (normalized === indexRef.current) return;

        if (animatingRef.current) {
            gsap.killTweensOf(contentRef.current);
            animatingRef.current = false;
        }

        const el = contentRef.current;
        if (!el || reduced.current) {
            indexRef.current = normalized;
            setIndex(normalized);
            return;
        }

        animatingRef.current = true;
        gsap.to(el, {
            autoAlpha: 0,
            y: -12,
            duration: 0.35,
            ease: EASE.soft,
            onComplete: () => {
                indexRef.current = normalized;
                setIndex(normalized);
                gsap.fromTo(
                    el,
                    { autoAlpha: 0, y: 12 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.5,
                        ease: EASE.out,
                        onComplete: () => {
                            animatingRef.current = false;
                        },
                    }
                );
            },
        });
    });

    const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
    const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

    useEffect(() => {
        const tick = () => {
            if (paused || reduced.current || document.hidden || animatingRef.current) return;
            goTo(indexRef.current + 1);
        };

        const id = window.setInterval(tick, AUTOPLAY_MS);
        return () => window.clearInterval(id);
    }, [goTo, paused]);

    useEffect(() => {
        const onVisibility = () => {
            if (document.hidden) return;
            resetContent();
        };

        document.addEventListener("visibilitychange", onVisibility);
        return () => document.removeEventListener("visibilitychange", onVisibility);
    }, [resetContent]);

    const active = testimonials[index];

    return (
        <div
            ref={rootRef}
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="relative min-h-[220px] rounded-2xl border border-front-ink/10 bg-white px-7 py-9 sm:min-h-[200px] sm:px-10 sm:py-10">
                <Quote className="size-7 text-front-ember/70" strokeWidth={1.75} />

                <div ref={contentRef} className="absolute inset-x-7 top-16 sm:inset-x-10 sm:top-[4.25rem]">
                    {active ? (
                        <figure key={active.key}>
                            <blockquote className="max-w-[52ch] text-[18px] leading-relaxed text-front-ink sm:text-[20px]">
                                "{active.quote}"
                            </blockquote>
                            <figcaption className="mt-5 flex items-center gap-3">
                                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-front-ink font-mono text-[12px] font-medium text-front-paper">
                                    {initials(active.name)}
                                </span>
                                <span className="text-[13.5px] text-front-slate">
                                    <span className="font-medium text-front-ink">{active.name}</span> —{" "}
                                    {active.role}, {active.company}
                                </span>
                            </figcaption>
                        </figure>
                    ) : null}
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    {testimonials.map((t, i) => (
                        <button
                            key={t.key}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Show testimonial from ${t.name}`}
                            aria-current={i === index}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50",
                                i === index ? "w-6 bg-front-ink" : "w-1.5 bg-front-ink/20 hover:bg-front-ink/40"
                            )}
                        />
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous testimonial"
                        className="flex size-9 items-center justify-center rounded-full border border-front-ink/12 text-front-ink transition-colors hover:bg-front-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50"
                    >
                        <ChevronLeft className="size-4" />
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next testimonial"
                        className="flex size-9 items-center justify-center rounded-full border border-front-ink/12 text-front-ink transition-colors hover:bg-front-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50"
                    >
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function initials(name) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}
