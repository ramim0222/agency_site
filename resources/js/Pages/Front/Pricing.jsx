import { useEffect, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import PricingTabSwitcher from "@/Components/Front/PricingTabSwitcher";
import PricingCard from "@/Components/Front/PricingCard";
import SaasPricingTeaser from "@/Components/Front/SaasPricingTeaser";
import FaqAccordion from "@/Components/Front/FaqAccordion";
import CtaBand from "@/Components/Front/CtaBand";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    customDevSections,
    hashToTab,
    pricingFaq,
    pricingPage,
    pricingTabs,
    saasPricingTeaser,
} from "@/data/front/pricing";

function tabFromHash() {
    if (typeof window === "undefined") return "custom";
    const raw = window.location.hash.replace(/^#/, "");
    return hashToTab[raw] ?? "custom";
}

/**
 * Consolidated pricing — custom packages + SaaS teaser. No checkout.
 * Skills: frontend-design (tabbed composition), taste-design (mono ranges),
 * gsap-react (hero + card stagger), ui-ux-pro-max (hash deep-links, a11y tabs).
 */
export default function Pricing() {
    const heroRef = useRef(null);
    const cardsRef = useRef(null);
    const [tab, setTab] = useState("custom");

    useEffect(() => {
        const applyHash = () => {
            const next = tabFromHash();
            setTab(next);
            const raw = window.location.hash.replace(/^#/, "");
            if (raw && hashToTab[raw] === "custom" && raw !== "custom") {
                requestAnimationFrame(() => {
                    document
                        .getElementById(raw)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }
        };

        applyHash();
        window.addEventListener("hashchange", applyHash);
        return () => window.removeEventListener("hashchange", applyHash);
    }, []);

    const selectTab = (key) => {
        setTab(key);
        const hash = pricingTabs.find((t) => t.key === key)?.hash ?? key;
        if (typeof window !== "undefined") {
            window.history.replaceState(null, "", `#${hash}`);
        }
    };

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray(
                "[data-pricing-hero]",
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

    useGSAP(
        () => {
            if (!cardsRef.current || tab !== "custom") return;
            const cards = cardsRef.current.querySelectorAll(
                "[data-pricing-card]"
            );
            if (!cards.length) return;

            if (prefersReducedMotion()) {
                gsap.set(cards, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                cards,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    stagger: 0.04,
                    ease: EASE.out,
                }
            );
        },
        { scope: cardsRef, dependencies: [tab] }
    );

    return (
        <div className="front bg-front-graphite">
            <Head title="Pricing — Kiln">
                <meta
                    name="description"
                    content="Kiln pricing for custom websites, web apps, mobile apps, and SaaS product implementations. Informational ranges — get a quote to scope your build."
                />
            </Head>

            <Header />

            <main>
                <section
                    ref={heroRef}
                    className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-12"
                >
                    <div className="front-noise" />
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[50%] opacity-[0.14]"
                        style={{
                            backgroundImage:
                                "radial-gradient(45% 50% at 85% 0%, rgba(217,142,74,0.45), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-3xl">
                        <span
                            data-pricing-hero
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {pricingPage.eyebrow}
                        </span>
                        <h1
                            data-pricing-hero
                            className="mt-5 max-w-[16ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                        >
                            {pricingPage.title}
                        </h1>
                        <p
                            data-pricing-hero
                            className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                        >
                            {pricingPage.intro}
                        </p>
                    </div>
                </section>

                <section className="front-container pb-8">
                    <PricingTabSwitcher
                        tabs={pricingTabs}
                        value={tab}
                        onChange={selectTab}
                    />
                </section>

                <section
                    id="pricing-panel-custom"
                    role="tabpanel"
                    aria-labelledby="pricing-tab-custom"
                    hidden={tab !== "custom"}
                    className="front-container pb-16 lg:pb-20"
                >
                    {tab === "custom" ? (
                        <div ref={cardsRef} className="flex flex-col gap-16 lg:gap-20">
                            {customDevSections.map((section) => (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-28"
                                >
                                    <Reveal>
                                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                            {section.eyebrow}
                                        </p>
                                        <h2 className="mt-2 text-[1.45rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.7rem]">
                                            {section.title}
                                        </h2>
                                        <p className="mt-2 max-w-[48ch] text-[15px] text-front-steel">
                                            {section.note}
                                        </p>
                                    </Reveal>

                                    <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
                                        {section.packages.map((pkg) => (
                                            <PricingCard key={pkg.key} pkg={pkg} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </section>

                <section
                    id="pricing-panel-saas"
                    role="tabpanel"
                    aria-labelledby="pricing-tab-saas"
                    hidden={tab !== "saas"}
                    className="front-container pb-16 lg:pb-20"
                >
                    {tab === "saas" ? (
                        <div id="saas" className="scroll-mt-28">
                            <SaasPricingTeaser content={saasPricingTeaser} />
                        </div>
                    ) : null}
                </section>

                <FaqAccordion
                    items={pricingFaq}
                    title="Pricing questions"
                    moreHref="/faq#pricing"
                    moreLabel="All FAQs"
                />

                <CtaBand
                    content={pricingPage.cta}
                    whatsappMessage={pricingPage.whatsappMessage}
                />
            </main>

            <Footer />
        </div>
    );
}
