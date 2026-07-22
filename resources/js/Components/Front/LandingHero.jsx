import { useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Single-focus campaign hero — message match for the ad creative.
 * Skills: frontend-design (one promise), gsap-react (entrance), taste-design (serif offer).
 */
export default function LandingHero({ hero }) {
    const ref = useRef(null);

    useGSAP(
        () => {
            if (!ref.current || !hero) return;
            const bits = gsap.utils.toArray("[data-lp-hero]", ref.current);

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
        { scope: ref, dependencies: [hero?.headline] }
    );

    if (!hero) return null;

    return (
        <section
            ref={ref}
            className="relative overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16"
        >
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[55%] opacity-[0.16]"
                style={{
                    backgroundImage:
                        "radial-gradient(45% 50% at 85% 0%, rgba(217,142,74,0.5), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-6 xl:col-span-6">
                    <span
                        data-lp-hero
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                    >
                        <span className="h-px w-6 bg-front-ember-soft/60" />
                        {hero.eyebrow}
                    </span>
                    <h1
                        data-lp-hero
                        className="mt-5 max-w-[16ch] font-serif text-[clamp(2.35rem,5vw,3.5rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                    >
                        {hero.headline}
                    </h1>
                    <p
                        data-lp-hero
                        className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                    >
                        {hero.sub}
                    </p>
                    {hero.offer ? (
                        <p
                            data-lp-hero
                            className="mt-6 inline-flex border-l-2 border-front-ember/60 pl-4 font-mono text-[13px] uppercase tracking-[0.1em] text-front-ember-soft"
                        >
                            {hero.offer}
                        </p>
                    ) : null}
                </div>

                <div data-lp-hero className="lg:col-span-6">
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                        <img
                            src={hero.image.src}
                            alt={hero.image.alt}
                            width={960}
                            height={720}
                            className="aspect-[4/3] w-full object-cover"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
