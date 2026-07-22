import { useRef } from "react";
import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";

export default function CtaBand({ content, whatsappMessage }) {
    const sectionRef = useRef(null);
    const glowRef = useRef(null);

    useGSAP(
        () => {
            if (prefersReducedMotion() || !glowRef.current) return;
            gsap.to(glowRef.current, {
                x: 60,
                y: -30,
                duration: 9,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-front-graphite py-24 lg:py-28">
            <div
                ref={glowRef}
                className="pointer-events-none absolute -top-24 left-1/2 size-[560px] -translate-x-1/2 rounded-full opacity-20"
                style={{
                    background:
                        "radial-gradient(circle, rgba(217,142,74,0.65), transparent 70%)",
                }}
                aria-hidden="true"
            />
            <div className="front-noise" />

            <div
                data-reveal
                className="front-container relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
                <div className="max-w-[34ch]">
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft">
                        {content.eyebrow}
                    </span>
                    <h2 className="mt-4 text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.02em] text-white sm:text-[2.6rem]">
                        {content.headline}
                    </h2>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-front-steel">
                        {content.sub}
                    </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-4">
                    <Link
                        href={content.primaryCta.href}
                        className="group inline-flex items-center gap-2 rounded-md bg-front-ember px-5 py-3 text-[14px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite"
                    >
                        {content.primaryCta.label}
                        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    {content.secondaryCta ? (
                        <Link
                            href={content.secondaryCta.href}
                            className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            {content.secondaryCta.label}
                            <ArrowUpRight className="size-3.5" />
                        </Link>
                    ) : null}
                    <WhatsAppButton message={whatsappMessage} />
                </div>
            </div>
        </section>
    );
}
