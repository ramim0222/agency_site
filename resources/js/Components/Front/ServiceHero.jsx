import { useRef } from "react";
import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Conversion-focused service hero — headline, CTAs, full-bleed visual.
 * Skills: frontend-design (one composition), gsap-react (entrance),
 * taste-design (serif headline), ui-ux-pro-max (CTA focus states).
 */
export default function ServiceHero({
    eyebrow,
    headline,
    sub,
    image,
    primaryCta,
    whatsappMessage,
}) {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            if (!sectionRef.current) return;
            const bits = gsap.utils.toArray(
                "[data-service-hero]",
                sectionRef.current
            );

            if (prefersReducedMotion()) {
                gsap.set(bits, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                bits,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: EASE.out,
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
        >
            <div className="absolute inset-0">
                <img
                    src={image.src}
                    alt=""
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-front-graphite via-front-graphite/92 to-front-graphite/55"
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-front-graphite via-transparent to-front-graphite/40"
                    aria-hidden="true"
                />
            </div>
            <div className="front-noise relative" />

            <div className="front-container relative flex min-h-[min(72svh,640px)] flex-col justify-end lg:justify-center">
                <div className="max-w-xl">
                    <span
                        data-service-hero
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                    >
                        <span className="h-px w-6 bg-front-ember-soft/60" />
                        {eyebrow}
                    </span>

                    <h1
                        data-service-hero
                        className="mt-5 font-serif text-[clamp(2.5rem,5.5vw,3.75rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                    >
                        {headline}
                    </h1>

                    <p
                        data-service-hero
                        className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                    >
                        {sub}
                    </p>

                    <div
                        data-service-hero
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <Link
                            href={primaryCta.href}
                            className="group inline-flex items-center gap-2 rounded-md bg-front-ember px-5 py-3 text-[14px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite"
                        >
                            {primaryCta.label}
                            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                        <WhatsAppButton
                            variant="outline"
                            message={whatsappMessage}
                            label="WhatsApp us"
                        />
                    </div>
                </div>

                <span className="sr-only">{image.alt}</span>
            </div>
        </section>
    );
}
