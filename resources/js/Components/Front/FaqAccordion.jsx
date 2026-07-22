import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Product FAQ — one open panel, GSAP height, keyboard-friendly buttons.
 * Skills: gsap-react (panel height), ui-ux-pro-max (aria-expanded).
 */
export default function FaqAccordion({ items = [], title = "Questions" }) {
    const [openIndex, setOpenIndex] = useState(0);
    const listRef = useRef(null);

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
        { scope: listRef, dependencies: [openIndex, items] }
    );

    if (!items.length) {
        return (
            <section className="front-container py-10">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    FAQ for this product is coming soon.
                </p>
            </section>
        );
    }

    return (
        <section className="front-container py-12 lg:py-16">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    FAQ
                </p>
                <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                    {title}
                </h2>
            </Reveal>

            <ul ref={listRef} className="mt-8 divide-y divide-white/10 border-y border-white/10">
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
                                            open ? "rotate-180 text-front-ember-soft" : ""
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
