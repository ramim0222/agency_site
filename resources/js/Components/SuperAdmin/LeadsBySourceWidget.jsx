import { Link } from "@inertiajs/react";

export default function LeadsBySourceWidget({ items = [], total = 0 }) {
    const empty = total === 0;

    return (
        <section className="admin-widget rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                        Leads by source
                    </h2>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Channel mix across all captured leads.
                    </p>
                </div>
                <Link
                    href={route("admin.sources.index")}
                    className="shrink-0 rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-accent transition-colors hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                >
                    Sources
                </Link>
            </div>

            {empty ? (
                <div className="mt-8 rounded-lg border border-dashed border-admin-line bg-admin-canvas/40 px-4 py-8 text-center">
                    <p className="text-[14px] text-admin-ink">No leads yet</p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Source mix appears once the contact form starts capturing traffic.
                    </p>
                </div>
            ) : (
                <ul className="mt-6 space-y-3.5">
                    {items.map((item) => (
                        <li key={item.key}>
                            <Link
                                href={route("admin.leads.index", {
                                    source: item.key,
                                })}
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
                                <div className="h-1.5 overflow-hidden rounded-full bg-admin-canvas">
                                    <div
                                        className="h-full rounded-full bg-admin-accent transition-[width] duration-500 ease-out"
                                        style={{
                                            width: `${Math.max(item.pct, item.count > 0 ? 4 : 0)}%`,
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
