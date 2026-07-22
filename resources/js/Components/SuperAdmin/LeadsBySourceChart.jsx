import { useRef } from "react";
import { Link } from "@inertiajs/react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export default function LeadsBySourceChart({ items = [], total = 0 }) {
    const rootRef = useRef(null);
    const empty = total === 0;

    useGSAP(
        () => {
            if (!rootRef.current || empty) return;
            const bars = rootRef.current.querySelectorAll(".source-bar-fill");

            if (prefersReducedMotion()) {
                gsap.set(bars, { scaleX: 1 });
                return;
            }

            gsap.fromTo(
                bars,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 0.7,
                    stagger: 0.06,
                    ease: EASE.out,
                    transformOrigin: "left center",
                }
            );
        },
        { scope: rootRef, dependencies: [items, total] }
    );

    return (
        <section
            ref={rootRef}
            className="rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6"
        >
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                        Leads by source
                    </h2>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Volume by channel in the selected range.
                    </p>
                </div>
                <p className="font-mono text-[12px] tabular-nums text-admin-muted">
                    {total} total
                </p>
            </div>

            {empty ? (
                <div className="mt-8 rounded-lg border border-dashed border-admin-line px-4 py-10 text-center">
                    <p className="text-[14px] text-admin-ink">No leads in range</p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Widen the date range or wait for new form submissions.
                    </p>
                </div>
            ) : (
                <ul className="mt-6 space-y-3.5" aria-label="Source volume chart">
                    {items.map((item) => (
                        <li key={item.key}>
                            <Link
                                href={item.leadsHref}
                                className="group block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                            >
                                <div className="mb-1.5 flex items-baseline justify-between gap-3">
                                    <span className="text-[14px] text-admin-ink group-hover:text-admin-accent">
                                        {item.label}
                                    </span>
                                    <span className="font-mono text-[12px] tabular-nums text-admin-muted">
                                        {item.count}
                                        <span className="ml-2 text-admin-muted/70">
                                            {item.pct}%
                                        </span>
                                    </span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-admin-canvas">
                                    <div
                                        className="source-bar-fill h-full rounded-full bg-admin-accent"
                                        style={{
                                            width: `${Math.max(item.barPct, item.count > 0 ? 4 : 0)}%`,
                                        }}
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
