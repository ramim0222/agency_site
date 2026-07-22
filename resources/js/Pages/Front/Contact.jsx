import { useRef } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import MultiStepForm from "@/Components/Front/MultiStepForm";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { contactPage } from "@/data/front/contact";

export default function Contact() {
    const heroRef = useRef(null);

    useGSAP(
        () => {
            if (prefersReducedMotion()) return;

            const bits = gsap.utils.toArray("[data-contact-hero]", heroRef.current);
            gsap.set(bits, { opacity: 0, y: 18 });
            gsap.to(bits, {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: EASE.out,
                delay: 0.05,
            });
        },
        { scope: heroRef }
    );

    return (
        <div className="front bg-front-graphite">
            <Head title="Get a Free Quote">
                <meta
                    name="description"
                    content="Request a free project quote from Kiln. Tell us what you're building — website, web app, mobile, or SaaS — and we'll reply within one business day."
                />
            </Head>

            <Header />

            <main>
                <section ref={heroRef} className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-14">
                    <div className="front-noise" />
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[55%] opacity-[0.12]"
                        style={{
                            backgroundImage:
                                "radial-gradient(50% 45% at 70% 0%, rgba(217,142,74,0.55), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-3xl">
                        <span
                            data-contact-hero
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {contactPage.eyebrow}
                        </span>
                        <h1
                            data-contact-hero
                            className="mt-5 text-[2.35rem] leading-[1.08] font-semibold tracking-[-0.02em] text-white sm:text-[3rem]"
                        >
                            {contactPage.headline}
                        </h1>
                        <p
                            data-contact-hero
                            className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-front-steel"
                        >
                            {contactPage.sub}
                        </p>
                    </div>
                </section>

                <section className="bg-front-paper pb-24 pt-4 lg:pb-28 lg:pt-8">
                    <div className="front-container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
                        <aside className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-4 lg:pt-2">
                            <Reveal className="rounded-2xl border border-front-ink/10 bg-white p-6">
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-slate">
                                    Faster path
                                </span>
                                <p className="mt-3 text-[15px] leading-relaxed text-front-ink">
                                    {contactPage.whatsappAlt.note}
                                </p>
                                <WhatsAppButton
                                    variant="solid"
                                    label={contactPage.whatsappAlt.label}
                                    message={contactPage.whatsappAlt.message}
                                    className="mt-5 w-full justify-center py-3"
                                />
                            </Reveal>

                            <Reveal delay={0.08} className="rounded-2xl border border-front-ink/10 bg-white p-6">
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-slate">
                                    From a recent build
                                </span>
                                <blockquote className="mt-4 text-[15.5px] leading-relaxed text-front-ink">
                                    "{contactPage.trust.quote}"
                                </blockquote>
                                <p className="mt-4 text-[13.5px] text-front-slate">
                                    <span className="font-medium text-front-ink">
                                        {contactPage.trust.name}
                                    </span>
                                    <br />
                                    {contactPage.trust.role}
                                </p>
                                <div className="mt-6 border-t border-front-ink/10 pt-5">
                                    <p className="font-mono text-[1.75rem] tracking-[-0.02em] text-front-ink">
                                        {contactPage.trust.stat.value}
                                    </p>
                                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-front-slate">
                                        {contactPage.trust.stat.label}
                                    </p>
                                </div>
                            </Reveal>
                        </aside>

                        <div className="order-1 lg:order-2 lg:col-span-8">
                            <Reveal>
                                <MultiStepForm />
                            </Reveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
