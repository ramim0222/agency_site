import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

export default function TestimonialCarousel({ testimonials }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const slidesRef = useRef(null);
    const reduced = useRef(prefersReducedMotion());

    const { contextSafe } = useGSAP({ scope: slidesRef });

    const goTo = contextSafe((next) => {
        const slides = gsap.utils.toArray("[data-testimonial-slide]", slidesRef.current);
        const current = slides[index];
        const target = slides[(next + slides.length) % slides.length];
        if (!current || !target || current === target) {
            setIndex((next + slides.length) % slides.length);
            return;
        }

        if (reduced.current) {
            gsap.set(current, { opacity: 0, pointerEvents: "none" });
            gsap.set(target, { opacity: 1, pointerEvents: "auto" });
        } else {
            gsap.to(current, {
                opacity: 0,
                y: -12,
                duration: 0.35,
                ease: EASE.soft,
                pointerEvents: "none",
            });
            gsap.fromTo(
                target,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.5, ease: EASE.out, pointerEvents: "auto" }
            );
        }

        setIndex((next + slides.length) % slides.length);
    });

    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    useEffect(() => {
        if (paused || reduced.current) return;
        const id = window.setInterval(next, AUTOPLAY_MS);
        return () => window.clearInterval(id);
    }, [next, paused]);

    return (
        <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div
                ref={slidesRef}
                className="relative min-h-[220px] rounded-2xl border border-front-ink/10 bg-white px-7 py-9 sm:min-h-[200px] sm:px-10 sm:py-10"
            >
                <Quote className="size-7 text-front-ember/70" strokeWidth={1.75} />

                {testimonials.map((t, i) => (
                    <figure
                        key={t.key}
                        data-testimonial-slide
                        className="absolute inset-x-7 top-16 sm:inset-x-10 sm:top-[4.25rem]"
                        style={{ opacity: i === 0 ? 1 : 0, pointerEvents: i === 0 ? "auto" : "none" }}
                        aria-hidden={i !== index}
                    >
                        <blockquote className="max-w-[52ch] text-[18px] leading-relaxed text-front-ink sm:text-[20px]">
                            "{t.quote}"
                        </blockquote>
                        <figcaption className="mt-5 flex items-center gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-front-ink font-mono text-[12px] font-medium text-front-paper">
                                {initials(t.name)}
                            </span>
                            <span className="text-[13.5px] text-front-slate">
                                <span className="font-medium text-front-ink">{t.name}</span> —{" "}
                                {t.role}, {t.company}
                            </span>
                        </figcaption>
                    </figure>
                ))}
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
