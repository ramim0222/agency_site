import { Link } from "@inertiajs/react";

const TONE = {
    new: "bg-sky-400/80",
    contacted: "bg-admin-accent/80",
    quoted: "bg-amber-400/70",
    won: "bg-emerald-400/75",
    lost: "bg-admin-danger/70",
};

export default function LeadsByStatusWidget({ items = [], total = 0 }) {
    const empty = total === 0;

    return (
        <section className="admin-widget rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6">
            <div>
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                    Leads by status
                </h2>
                <p className="mt-1 text-[13px] text-admin-muted">
                    Pipeline shape — new through won / lost.
                </p>
            </div>

            {empty ? (
                <div className="mt-8 rounded-lg border border-dashed border-admin-line bg-admin-canvas/40 px-4 py-8 text-center">
                    <p className="text-[14px] text-admin-ink">Pipeline is empty</p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Status counts fill in as leads move through the desk.
                    </p>
                </div>
            ) : (
                <>
                    <div
                        className="mt-6 flex h-3 overflow-hidden rounded-full bg-admin-canvas"
                        role="img"
                        aria-label="Status distribution"
                    >
                        {items.map((item) =>
                            item.count > 0 ? (
                                <div
                                    key={item.key}
                                    className={`${TONE[item.key] ?? "bg-admin-muted"} transition-[flex-grow] duration-500`}
                                    style={{ flexGrow: item.count }}
                                    title={`${item.label}: ${item.count}`}
                                />
                            ) : null
                        )}
                    </div>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {items.map((item) => (
                            <li key={item.key}>
                                <Link
                                    href={route("admin.leads.index", {
                                        status: item.key,
                                    })}
                                    className="flex items-center justify-between gap-3 rounded-lg border border-transparent px-2.5 py-2 transition-colors hover:border-admin-line hover:bg-admin-canvas/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                                >
                                    <span className="flex items-center gap-2.5 text-[14px] text-admin-ink">
                                        <span
                                            className={`size-2 shrink-0 rounded-full ${TONE[item.key] ?? "bg-admin-muted"}`}
                                            aria-hidden="true"
                                        />
                                        {item.label}
                                    </span>
                                    <span className="font-mono text-[12px] tabular-nums text-admin-muted">
                                        {item.count}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
}
