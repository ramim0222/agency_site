import { useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import LegalTableOfContents from "@/Components/Front/LegalTableOfContents";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
});

/**
 * Shared layout for Terms / Privacy / Refund.
 * Skills: frontend-design (readable long-form), taste-design (serif title),
 * gsap-react (hero entrance), ui-ux-pro-max (TOC, related links, empty).
 */
export default function LegalDocLayout({
    title,
    metaDescription,
    eyebrow = "Legal",
    updated,
    intro,
    sections = [],
    related = [],
    headTitle,
}) {
    const heroRef = useRef(null);
    const toc = sections.map((s) => ({ id: s.id, label: s.title }));

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray(
                "[data-legal-hero]",
                heroRef.current
            );

            if (prefersReducedMotion()) {
                gsap.set(bits, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                bits,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.07,
                    ease: EASE.out,
                }
            );
        },
        { scope: heroRef }
    );

    return (
        <div className="front bg-front-graphite">
            <Head title={headTitle || `${title} — Kiln`}>
                {metaDescription ? (
                    <meta name="description" content={metaDescription} />
                ) : null}
            </Head>

            <Header minimal />

            <main>
                <header
                    ref={heroRef}
                    className="relative overflow-hidden pt-28 pb-10 lg:pt-32 lg:pb-12"
                >
                    <div className="front-noise" />
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[40%] opacity-[0.1]"
                        style={{
                            backgroundImage:
                                "radial-gradient(40% 50% at 50% 0%, rgba(217,142,74,0.4), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />
                    <div className="front-container relative max-w-3xl lg:max-w-none">
                        <p
                            data-legal-hero
                            className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            {eyebrow}
                        </p>
                        <h1
                            data-legal-hero
                            className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,3.2rem)] italic leading-[1.1] tracking-[-0.02em] text-front-paper"
                        >
                            {title}
                        </h1>
                        {updated ? (
                            <p
                                data-legal-hero
                                className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim"
                            >
                                Last updated{" "}
                                <time dateTime={updated}>
                                    {dateFormatter.format(new Date(updated))}
                                </time>
                            </p>
                        ) : null}
                        {intro ? (
                            <p
                                data-legal-hero
                                className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-front-steel"
                            >
                                {intro}
                            </p>
                        ) : null}
                    </div>
                </header>

                <div className="front-container pb-20 lg:pb-28">
                    {!sections.length ? (
                        <p
                            className="rounded-2xl border border-dashed border-white/12 px-6 py-14 text-center text-[15px] text-front-steel"
                            role="status"
                        >
                            This document is being prepared.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[240px_minmax(0,1fr)]">
                            <aside className="lg:sticky lg:top-28 lg:self-start">
                                <LegalTableOfContents items={toc} />
                            </aside>

                            <article className="min-w-0 max-w-3xl">
                                <div className="space-y-12 sm:space-y-14">
                                    {sections.map((section, index) => (
                                        <section
                                            key={section.id}
                                            id={section.id}
                                            className="scroll-mt-28"
                                        >
                                            <h2 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.4rem]">
                                                <span className="mr-2 font-mono text-[12px] text-front-ember-soft">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>
                                                {section.title}
                                            </h2>
                                            <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-front-steel sm:text-[16px]">
                                                {(section.blocks ?? []).map(
                                                    (block, bi) => (
                                                        <LegalBlock
                                                            key={`${section.id}-${bi}`}
                                                            block={block}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </section>
                                    ))}
                                </div>

                                {related.length ? (
                                    <nav
                                        aria-label="Related legal pages"
                                        className="mt-16 border-t border-white/10 pt-8"
                                    >
                                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                            Related
                                        </p>
                                        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                                            {related.map((link) => (
                                                <li key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-[14px] font-medium text-front-steel underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                ) : null}
                            </article>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

function LegalBlock({ block }) {
    if (!block) return null;

    if (block.type === "ul") {
        return (
            <ul className="list-none space-y-2 border-l border-front-ember/30 pl-5">
                {(block.items ?? []).map((item) => (
                    <li key={item} className="relative">
                        <span
                            className="absolute -left-[1.3rem] top-[0.7em] size-1.5 rounded-full bg-front-ember"
                            aria-hidden="true"
                        />
                        {item}
                    </li>
                ))}
            </ul>
        );
    }

    return <p className="text-pretty">{block.text}</p>;
}
