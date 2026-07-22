import { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Product / page FAQ — one open panel, GSAP height, keyboard-friendly.
 * Skills: gsap-react (panel height), ui-ux-pro-max (aria-expanded, empty).
 */
export default function FaqAccordion({
    items = [],
    title = "Questions",
    eyebrow = "FAQ",
    showHeading = true,
    emptyMessage = "FAQ for this topic is coming soon.",
    moreHref,
    moreLabel = "All FAQs",
    className,
    listClassName,
    topicKey,
}) {
    const [openIndex, setOpenIndex] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        setOpenIndex(items.length ? 0 : -1);
    }, [items, topicKey]);

    useGSAP(
        () => {
            if (!listRef.current) return;
            const panels = listRef.current.querySelectorAll("[data-faq-panel]");

            panels.forEach((panel, index) => {
                const inner = panel.querySelector("[data-faq-inner]");
                if (!inner) return;

                if (prefersReducedMotion()) {
                    gsap.set(panel, {
                        height: index === openIndex ? "auto" : 0,
                        opacity: index === openIndex ? 1 : 0,
                    });
                    return;
                }

                if (index === openIndex) {
                    gsap.to(panel, {
                        height: inner.offsetHeight,
                        opacity: 1,
                        duration: 0.35,
                        ease: EASE.out,
                        onComplete: () => gsap.set(panel, { height: "auto" }),
                    });
                } else {
                    gsap.to(panel, {
                        height: 0,
                        opacity: 0,
                        duration: 0.28,
                        ease: EASE.soft,
                    });
                }
            });
        },
        { scope: listRef, dependencies: [openIndex, items, topicKey] }
    );

    if (!items.length) {
        return (
            <section className={cn("front-container py-10", className)}>
                <p
                    className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel"
                    role="status"
                >
                    {emptyMessage}
                </p>
            </section>
        );
    }

    return (
        <section
            className={cn("front-container py-12 lg:py-16", className)}
            id={topicKey ? `faq-panel-${topicKey}` : undefined}
            role={topicKey ? "tabpanel" : undefined}
            aria-labelledby={topicKey ? `faq-tab-${topicKey}` : undefined}
        >
            {showHeading ? (
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                            {eyebrow ? (
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                    {eyebrow}
                                </p>
                            ) : null}
                            <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                                {title}
                            </h2>
                        </div>
                        {moreHref ? (
                            <Link
                                href={moreHref}
                                className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                {moreLabel}
                                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        ) : null}
                    </div>
                </Reveal>
            ) : null}

            <ul
                ref={listRef}
                className={cn(
                    "divide-y divide-white/10 border-y border-white/10",
                    showHeading ? "mt-8" : "mt-0",
                    listClassName
                )}
            >
                {items.map((item, index) => {
                    const open = index === openIndex;
                    return (
                        <li key={item.q}>
                            <h3>
                                <button
                                    type="button"
                                    aria-expanded={open}
                                    onClick={() =>
                                        setOpenIndex(open ? -1 : index)
                                    }
                                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-front-ember-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                                >
                                    <span className="text-[15.5px] font-semibold tracking-[-0.01em] text-white">
                                        {item.q}
                                    </span>
                                    <ChevronDown
                                        className={`size-4 shrink-0 text-front-steel transition-transform duration-300 ${
                                            open
                                                ? "rotate-180 text-front-ember-soft"
                                                : ""
                                        }`}
                                        aria-hidden="true"
                                    />
                                </button>
                            </h3>
                            <div
                                data-faq-panel
                                className="overflow-hidden"
                                style={{ height: open ? "auto" : 0 }}
                            >
                                <div data-faq-inner className="pb-5 pr-8">
                                    <p className="max-w-[58ch] text-[14.5px] leading-relaxed text-front-steel">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
