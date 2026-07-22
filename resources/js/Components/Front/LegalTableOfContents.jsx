import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Sticky / mobile TOC for long legal docs.
 * Skills: ui-ux-pro-max (active section, focus), taste-design (underline, not pills).
 */
export default function LegalTableOfContents({
    items = [],
    ariaLabel = "Table of contents",
    className,
}) {
    const [activeId, setActiveId] = useState(items[0]?.id ?? null);

    useEffect(() => {
        if (!items.length || typeof window === "undefined") return;

        const headings = items
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (!headings.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );
                if (visible[0]?.target?.id) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -65% 0px",
                threshold: [0, 0.25, 0.5],
            }
        );

        headings.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [items]);

    if (!items.length) {
        return (
            <p
                className="rounded-xl border border-dashed border-white/12 px-4 py-6 text-[13px] text-front-steel"
                role="status"
            >
                No sections listed.
            </p>
        );
    }

    return (
        <nav aria-label={ariaLabel} className={cn(className)}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                On this page
            </p>
            <ol className="mt-4 flex max-h-[min(70vh,32rem)] flex-col gap-1 overflow-y-auto overscroll-contain pr-1 lg:gap-0.5">
                {items.map((item, index) => {
                    const active = activeId === item.id;
                    return (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={cn(
                                    "block rounded-md border-l-2 py-2 pl-3 text-[13px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55",
                                    active
                                        ? "border-front-ember text-white"
                                        : "border-transparent text-front-steel hover:border-white/20 hover:text-white"
                                )}
                            >
                                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-front-steel-dim">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="mt-0.5 block">{item.label}</span>
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
