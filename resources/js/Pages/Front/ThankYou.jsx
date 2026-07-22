import { useEffect, useRef } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import SuccessAnimation from "@/Components/Front/SuccessAnimation";
import NextStepsTimeline from "@/Components/Front/NextStepsTimeline";
import SuggestedLinksGrid from "@/Components/Front/SuggestedLinksGrid";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { trackFacebookLead } from "@/lib/facebookPixel";
import { thankYouPage } from "@/data/front/thankYou";

export default function ThankYou({ leadName = null, fireConversion = false }) {
    const heroRef = useRef(null);
    const greeting = leadName
        ? `Thanks, ${leadName}.`
        : thankYouPage.headline;

    // Fire Meta Pixel Lead only after a real form redirect (flash flag).
    useEffect(() => {
        if (!fireConversion) return;
        trackFacebookLead({
            content_name: "Get a Quote",
            content_category: "lead_form",
        });
    }, [fireConversion]);

    useGSAP(
        () => {
            if (prefersReducedMotion()) return;
            const bits = gsap.utils.toArray("[data-thanks-hero]", heroRef.current);
            gsap.set(bits, { opacity: 0, y: 18 });
            gsap.to(bits, {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.09,
                ease: EASE.out,
                delay: 0.15,
            });
        },
        { scope: heroRef }
    );

    return (
        <div className="front bg-front-graphite">
            <Head title="Brief received">
                <meta
                    name="description"
                    content="Your project brief was received. Kiln will reply within one business day via email or WhatsApp."
                />
            </Head>

            <Header minimal />

            <main>
                {/* Confirmation ------------------------------------------------ */}
                <section
                    ref={heroRef}
                    className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20"
                >
                    <div className="front-noise" />
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[60%] opacity-[0.14]"
                        style={{
                            backgroundImage:
                                "radial-gradient(45% 50% at 40% 20%, rgba(217,142,74,0.55), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-2xl">
                        <div data-thanks-hero>
                            <SuccessAnimation />
                        </div>

                        <span
                            data-thanks-hero
                            className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {thankYouPage.eyebrow}
                        </span>

                        <h1
                            data-thanks-hero
                            className="mt-5 text-[2.4rem] leading-[1.08] font-semibold tracking-[-0.02em] text-white sm:text-[3.1rem]"
                        >
                            {greeting}
                        </h1>

                        <p
                            data-thanks-hero
                            className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-front-steel"
                        >
                            {thankYouPage.sub}
                        </p>

                        {!leadName && (
                            <p
                                data-thanks-hero
                                className="mt-4 max-w-[42ch] rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] leading-relaxed text-front-steel"
                                role="status"
                            >
                                If you arrived here without submitting a brief,{" "}
                                <a
                                    href="/contact"
                                    className="font-medium text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 rounded-sm"
                                >
                                    start a quote request
                                </a>{" "}
                                — this page is the confirmation after you send one.
                            </p>
                        )}
                    </div>
                </section>

                {/* What happens next + WhatsApp -------------------------------- */}
                <section className="bg-front-paper py-20 lg:py-24">
                    <div className="front-container grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
                        <div className="lg:col-span-7">
                            <Reveal>
                                <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-slate">
                                    What happens next
                                </span>
                                <h2 className="mt-3 text-[1.85rem] leading-[1.12] font-semibold tracking-[-0.02em] text-front-ink sm:text-[2.15rem]">
                                    From brief to first reply.
                                </h2>
                            </Reveal>
                            <div className="mt-10">
                                <NextStepsTimeline />
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:pt-14">
                            <Reveal delay={0.08}>
                                <div className="rounded-2xl border border-front-ink/10 bg-white p-7 sm:p-8">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-slate">
                                        Don't want to wait
                                    </span>
                                    <p className="mt-3 text-[1.2rem] font-semibold tracking-[-0.01em] text-front-ink">
                                        Or message us right now.
                                    </p>
                                    <p className="mt-2 text-[14.5px] leading-relaxed text-front-slate">
                                        {thankYouPage.whatsapp.note}
                                    </p>
                                    <WhatsAppButton
                                        variant="solid"
                                        label={thankYouPage.whatsapp.label}
                                        message={thankYouPage.whatsapp.message}
                                        className="mt-6 w-full justify-center py-3.5 text-[14px]"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Suggested next pages ---------------------------------------- */}
                <section className="bg-front-paper pb-24 lg:pb-28">
                    <div className="front-container">
                        <Reveal className="max-w-[40ch]">
                            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-slate">
                                While you wait
                            </span>
                            <h2 className="mt-3 text-[1.85rem] leading-[1.12] font-semibold tracking-[-0.02em] text-front-ink sm:text-[2.15rem]">
                                Keep exploring the studio.
                            </h2>
                        </Reveal>

                        <SuggestedLinksGrid className="mt-10" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
