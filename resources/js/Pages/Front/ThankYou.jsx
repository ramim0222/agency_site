import { useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { thankYouPage } from "@/data/front/contact";

export default function ThankYou({ leadName }) {
    const sectionRef = useRef(null);
    const greeting = leadName ? `Thanks, ${leadName}.` : thankYouPage.headline;

    useGSAP(
        () => {
            if (prefersReducedMotion()) return;
            const bits = gsap.utils.toArray("[data-thanks]", sectionRef.current);
            gsap.set(bits, { opacity: 0, y: 20 });
            gsap.to(bits, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: EASE.out,
            });
        },
        { scope: sectionRef }
    );

    return (
        <div className="front bg-front-graphite">
            <Head title="Brief received">
                <meta
                    name="description"
                    content="Your project brief was received. Kiln will reply within one business day."
                />
            </Head>

            <Header />

            <main>
                <section
                    ref={sectionRef}
                    className="relative flex min-h-[100dvh] items-center overflow-hidden py-32"
                >
                    <div className="front-noise" />
                    <div
                        className="pointer-events-none absolute inset-x-0 top-1/4 h-[50%] opacity-[0.14]"
                        style={{
                            backgroundImage:
                                "radial-gradient(45% 50% at 50% 40%, rgba(217,142,74,0.5), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-2xl">
                        <span
                            data-thanks
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {thankYouPage.eyebrow}
                        </span>
                        <h1
                            data-thanks
                            className="mt-5 text-[2.4rem] leading-[1.08] font-semibold tracking-[-0.02em] text-white sm:text-[3.1rem]"
                        >
                            {greeting}
                        </h1>
                        <p
                            data-thanks
                            className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-front-steel"
                        >
                            {thankYouPage.sub}
                        </p>

                        <div data-thanks className="mt-10 flex flex-wrap items-center gap-4">
                            <Link
                                href={thankYouPage.homeCta.href}
                                className="group inline-flex items-center gap-2 rounded-md bg-front-ember px-5 py-3 text-[14px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite"
                            >
                                {thankYouPage.homeCta.label}
                                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                            <WhatsAppButton
                                label="Message us on WhatsApp"
                                message="Hi Kiln — I just submitted a quote request and wanted to follow up."
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
