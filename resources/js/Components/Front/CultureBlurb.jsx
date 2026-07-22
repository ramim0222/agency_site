import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { useRef } from "react";

/**
 * Careers page header + culture story.
 * Skills: frontend-design (editorial split), taste-design (serif title),
 * gsap-react (hero entrance).
 */
export default function CultureBlurb({ page, culture, aboutLink }) {
    const heroRef = useRef(null);

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray(
                "[data-careers-hero]",
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

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
        >
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[50%] opacity-[0.14]"
                style={{
                    backgroundImage:
                        "radial-gradient(42% 48% at 18% 0%, rgba(217,142,74,0.42), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative">
                <div className="max-w-3xl">
                    <span
                        data-careers-hero
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                    >
                        <span className="h-px w-6 bg-front-ember-soft/60" />
                        {page.eyebrow}
                    </span>
                    <h1
                        data-careers-hero
                        className="mt-5 max-w-[16ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                    >
                        {page.title}
                    </h1>
                    <p
                        data-careers-hero
                        className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                    >
                        {page.intro}
                    </p>
                    {aboutLink ? (
                        <div data-careers-hero className="mt-6">
                            <Link
                                href={aboutLink.href}
                                className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                {aboutLink.label}
                                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    ) : null}
                </div>

                <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
                    <Reveal className="lg:col-span-5">
                        <div className="overflow-hidden rounded-2xl border border-white/10">
                            <img
                                src={culture.image.src}
                                alt={culture.image.alt}
                                width={960}
                                height={720}
                                className="aspect-[4/3] w-full object-cover"
                            />
                        </div>
                    </Reveal>

                    <div className="lg:col-span-7">
                        <Reveal>
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                {culture.eyebrow}
                            </p>
                            <h2 className="mt-2 max-w-[22ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                                {culture.title}
                            </h2>
                        </Reveal>
                        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-front-steel sm:text-[16px]">
                            {culture.paragraphs.map((p) => (
                                <Reveal key={p.slice(0, 24)}>
                                    <p>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {culture.points.map((point, index) => (
                                <Reveal
                                    key={point.key}
                                    delay={index * 0.05}
                                    as="li"
                                >
                                    <div className="h-full border-t border-white/12 pt-4">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-ember-soft">
                                            {point.label}
                                        </p>
                                        <p className="mt-2 text-[14px] leading-relaxed text-front-steel">
                                            {point.body}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
