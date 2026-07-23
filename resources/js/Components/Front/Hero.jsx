import { useRef } from "react";
import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { hero } from "@/data/front/home";
import StatusChip from "@/Components/Front/StatusChip";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";

/** Groups the flat headline token list into lines, splitting on `break`. */
function toLines(tokens) {
    const lines = [[]];
    for (const token of tokens) {
        if (token.type === "break") {
            lines.push([]);
        } else {
            lines[lines.length - 1].push(token);
        }
    }
    return lines;
}

export default function Hero() {
    const sectionRef = useRef(null);
    const visualRef = useRef(null);

    useGSAP(
        () => {
            const reduced = prefersReducedMotion();
            const lineEls = gsap.utils.toArray("[data-hero-line]", sectionRef.current);
            const imgTokens = gsap.utils.toArray("[data-hero-img]", sectionRef.current);

            if (reduced) {
                gsap.set(
                    [
                        "[data-hero-eyebrow]",
                        lineEls,
                        "[data-hero-sub]",
                        "[data-hero-cta]",
                        "[data-hero-chips]",
                        visualRef.current,
                    ],
                    { opacity: 1, y: 0, scale: 1, clearProps: "transform" }
                );
                return;
            }

            gsap.set("[data-hero-eyebrow]", { opacity: 0, y: 14 });
            gsap.set(lineEls, { yPercent: 110, opacity: 0 });
            gsap.set(imgTokens, { opacity: 0, scale: 0.85 });
            gsap.set(["[data-hero-sub]", "[data-hero-cta]", "[data-hero-chips]"], {
                opacity: 0,
                y: 18,
            });
            gsap.set(visualRef.current, { opacity: 0, y: 36, scale: 0.97 });

            const tl = gsap.timeline({ defaults: { ease: EASE.out } });
            tl.to("[data-hero-eyebrow]", { opacity: 1, y: 0, duration: 0.6 })
                .to(lineEls, { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.1 }, 0.15)
                .to(imgTokens, { opacity: 1, scale: 1, duration: 0.6 }, 0.5)
                .to("[data-hero-sub]", { opacity: 1, y: 0, duration: 0.7 }, 0.55)
                .to("[data-hero-cta]", { opacity: 1, y: 0, duration: 0.7 }, 0.68)
                .to(
                    "[data-hero-chips]",
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
                    0.78
                )
                .to(visualRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, 0.35);

            gsap.to(visualRef.current, {
                y: -28,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        },
        { scope: sectionRef }
    );

    const lines = toLines(hero.headline);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-front-graphite pt-32 pb-24 lg:pt-40 lg:pb-32"
        >
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[70%] opacity-[0.14]"
                style={{
                    backgroundImage:
                        "radial-gradient(60% 50% at 78% 8%, rgba(217,142,74,0.55), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
                <div className="relative lg:col-span-7">
                    <span
                        data-hero-eyebrow
                        className="mb-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                    >
                        <span className="h-px w-6 bg-front-ember-soft/60" />
                        {hero.eyebrow}
                    </span>

                    <h1 className="max-w-[15ch] font-sans text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.02em] text-white sm:text-[3.4rem] lg:text-[3.9rem]">
                        {lines.map((line, i) => (
                            <span key={i} className="block overflow-hidden py-[0.08em]">
                                <span
                                    data-hero-line
                                    className="flex flex-wrap items-center gap-x-3"
                                >
                                    {line.map((token, j) => (
                                        <HeadlineToken key={j} token={token} />
                                    ))}
                                </span>
                            </span>
                        ))}
                    </h1>

                    <p
                        data-hero-sub
                        className="mt-7 max-w-[42ch] text-[17px] leading-relaxed text-front-steel"
                    >
                        {hero.sub}
                    </p>

                    <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            href={hero.primaryCta.href}
                            className="group inline-flex items-center gap-2 rounded-md bg-front-ember px-5 py-3 text-[14px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite"
                        >
                            {hero.primaryCta.label}
                            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                        <WhatsAppButton />
                    </div>

                    <div className="mt-11 flex flex-wrap items-center gap-2.5 border-t border-white/8 pt-6">
                        {hero.statusChips.map((chip) => (
                            <span key={chip.label} data-hero-chips>
                                <StatusChip label={chip.label} />
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative lg:col-span-5 lg:mt-16">
                    <div ref={visualRef} className="relative">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-front-panel shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
                            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                                <span className="size-2 rounded-full bg-white/15" />
                                <span className="size-2 rounded-full bg-white/15" />
                                <span className="size-2 rounded-full bg-white/15" />
                                <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
                                You think it, We ship it
                                </span>
                            </div>
                            <img
                                src={hero.visual.src}
                                alt={hero.visual.alt}
                                width={960}
                                height={680}
                                className="aspect-[960/680] w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HeadlineToken({ token }) {
    if (token.type === "image") {
        return (
            <img
                data-hero-img
                src={token.src}
                alt={token.alt}
                width={72}
                height={44}
                className="inline-block h-9 w-auto rounded-md border border-white/15 object-cover align-middle sm:h-11"
            />
        );
    }

    if (token.type === "serif") {
        return (
            <em className="font-serif text-[1.08em] font-normal not-italic text-front-ember-soft ">
                {token.value}
            </em>
        );
    }

    return <span>{token.value}</span>;
}
