import { useEffect, useMemo, useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import FaqTopicTabs from "@/Components/Front/FaqTopicTabs";
import FaqAccordion from "@/Components/Front/FaqAccordion";
import CtaBand from "@/Components/Front/CtaBand";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    faqByTopic,
    faqPage,
    faqTopics,
    getFaqItems,
    resolveFaqTopic,
} from "@/data/front/faq";

/**
 * FAQ hub — objection handling by topic before contact.
 * Skills: frontend-design (editorial Q&A), taste-design (serif title, underline tabs),
 * gsap-react (hero + accordion), ui-ux-pro-max (tabs, empty, hash deep-link).
 */
export default function Faq() {
    const heroRef = useRef(null);
    const [topic, setTopic] = useState("general");

    useEffect(() => {
        const fromHash = resolveFaqTopic(window.location.hash);
        setTopic(fromHash);

        const onHash = () => setTopic(resolveFaqTopic(window.location.hash));
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, []);

    const counts = useMemo(() => {
        const base = {};
        faqTopics.forEach((tab) => {
            base[tab.key] = (faqByTopic[tab.key] ?? []).length;
        });
        return base;
    }, []);

    const items = useMemo(() => getFaqItems(topic), [topic]);

    const selectTopic = (key) => {
        setTopic(key);
        const tab = faqTopics.find((t) => t.key === key);
        const hash = tab?.hash ?? key;
        if (typeof window !== "undefined") {
            window.history.replaceState(null, "", `#${hash}`);
        }
    };

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray("[data-faq-hero]", heroRef.current);

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

    const activeLabel =
        faqTopics.find((t) => t.key === topic)?.label ?? "General";

    return (
        <div className="front bg-front-graphite">
            <Head title="FAQ — Kiln">
                <meta
                    name="description"
                    content="Answers on Kiln’s pricing, process, and SaaS work — before you request a quote."
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
                                "radial-gradient(42% 48% at 70% 0%, rgba(217,142,74,0.4), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-3xl">
                        <span
                            data-faq-hero
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {faqPage.eyebrow}
                        </span>
                        <h1
                            data-faq-hero
                            className="mt-5 max-w-[14ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                        >
                            {faqPage.title}
                        </h1>
                        <p
                            data-faq-hero
                            className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                        >
                            {faqPage.intro}
                        </p>
                        <p
                            data-faq-hero
                            className="mt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim"
                        >
                            Prefer numbers?{" "}
                            <Link
                                href="/pricing"
                                className="text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                View pricing
                            </Link>
                        </p>
                    </div>
                </section>

                <section className="front-container pb-6 lg:pb-8">
                    <FaqTopicTabs
                        tabs={faqTopics}
                        value={topic}
                        counts={counts}
                        onChange={selectTopic}
                    />
                    <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim">
                        {activeLabel} · {items.length}{" "}
                        {items.length === 1 ? "question" : "questions"}
                    </p>
                </section>

                <FaqAccordion
                    key={topic}
                    items={items}
                    topicKey={topic}
                    showHeading={false}
                    emptyMessage={faqPage.empty}
                    className="pt-0 pb-16 lg:pb-24"
                />

                <CtaBand
                    content={faqPage.cta}
                    whatsappMessage={faqPage.whatsappMessage}
                />
            </main>

            <Footer />
            <WhatsAppButton message={faqPage.whatsappMessage} />
        </div>
    );
}
