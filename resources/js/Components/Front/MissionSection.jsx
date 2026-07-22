import { useRef } from "react";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * About mission / story — serif title + editorial image.
 * Skills: frontend-design (asymmetric split), gsap-react (hero entrance),
 * taste-design (quiet body), ui-ux-pro-max (empty copy fallback).
 */
export default function MissionSection({ mission, eyebrow, title }) {
    const heroRef = useRef(null);

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray(
                "[data-about-hero]",
                heroRef.current
            );

            if (prefersReducedMotion()) {
                gsap.set(bits, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                bits,
                { opacity: 0, y: 18 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: EASE.out,
                }
            );
        },
        { scope: heroRef }
    );

    if (!mission) {
        return (
            <section className="front-container py-20">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    Our story is being written up.
                </p>
            </section>
        );
    }

    const paragraphs = mission.story ?? [];

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
        >
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[45%] opacity-[0.14]"
                style={{
                    backgroundImage:
                        "radial-gradient(45% 50% at 80% 0%, rgba(217,142,74,0.45), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-6">
                    <span
                        data-about-hero
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                    >
                        <span className="h-px w-6 bg-front-ember-soft/60" />
                        {eyebrow ?? mission.eyebrow}
                    </span>
                    <h1
                        data-about-hero
                        className="mt-5 max-w-[16ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                    >
                        {title}
                    </h1>
                    <div data-about-hero className="mt-8 space-y-4">
                        {paragraphs.length === 0 ? (
                            <p className="max-w-[48ch] text-[16px] leading-relaxed text-front-steel">
                                {mission.title}
                            </p>
                        ) : (
                            paragraphs.map((p) => (
                                <p
                                    key={p.slice(0, 24)}
                                    className="max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                                >
                                    {p}
                                </p>
                            ))
                        )}
                    </div>
                </div>

                <div data-about-hero className="lg:col-span-6">
                    <Reveal>
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-front-panel">
                            <img
                                src={mission.image.src}
                                alt={mission.image.alt}
                                width={960}
                                height={720}
                                className="aspect-[960/720] w-full object-cover"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
