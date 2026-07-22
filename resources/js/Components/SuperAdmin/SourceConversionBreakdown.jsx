import { Link } from "@inertiajs/react";

const STATUS_TONE = {
    new: "bg-sky-400/80",
    contacted: "bg-admin-accent/80",
    quoted: "bg-amber-400/70",
    won: "bg-emerald-400/75",
    lost: "bg-admin-danger/70",
};

export default function SourceConversionBreakdown({
    items = [],
    statuses = [],
    total = 0,
}) {
    const rows = items.filter((item) => item.count > 0);

    return (
        <section className="rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6">
            <div>
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                    Status by source
                </h2>
                <p className="mt-1 text-[13px] text-admin-muted">
                    Which channels produce wins — not just volume.
                </p>
            </div>

            {total === 0 || rows.length === 0 ? (
                <div className="mt-8 rounded-lg border border-dashed border-admin-line px-4 py-10 text-center">
                    <p className="text-[14px] text-admin-ink">Nothing to break down</p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Conversion mix appears once leads land in this range.
                    </p>
                </div>
            ) : (
                <div className="mt-5 overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="border-b border-admin-line">
                                <th className="py-2 pr-3 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Channel
                                </th>
                                <th className="px-2 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Mix
                                </th>
                                <th className="px-2 py-2 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Won %
                                </th>
                                <th className="py-2 pl-2 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Leads
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-admin-line">
                            {rows.map((item) => (
                                <tr key={item.key} className="align-middle">
                                    <td className="py-3 pr-3">
                                        <Link
                                            href={item.leadsHref}
                                            className="text-[13px] text-admin-ink transition-colors hover:text-admin-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                                        >
                                            {item.label}
                                        </Link>
                                    </td>
                                    <td className="px-2 py-3 min-w-[160px]">
                                        <div
                                            className="flex h-2 overflow-hidden rounded-full bg-admin-canvas"
                                            role="img"
                                            aria-label={`${item.label} status mix`}
                                        >
                                            {statuses.map((status) => {
                                                const count =
                                                    item.statusCounts?.[
                                                        status.key
                                                    ] ?? 0;
                                                if (!count) return null;
                                                return (
                                                    <div
                                                        key={status.key}
                                                        className={
                                                            STATUS_TONE[
                                                                status.key
                                                            ] ?? "bg-admin-muted"
                                                        }
                                                        style={{
                                                            flexGrow: count,
                                                        }}
                                                        title={`${status.label}: ${count}`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </td>
                                    <td className="px-2 py-3 text-right font-mono text-[12px] tabular-nums text-admin-accent">
                                        {item.conversionRate}%
                                    </td>
                                    <td className="py-3 pl-2 text-right font-mono text-[12px] tabular-nums text-admin-muted">
                                        {item.count}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <ul className="mt-4 flex flex-wrap gap-3">
                        {statuses.map((status) => (
                            <li
                                key={status.key}
                                className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-admin-muted"
                            >
                                <span
                                    className={`size-2 rounded-full ${STATUS_TONE[status.key] ?? "bg-admin-muted"}`}
                                    aria-hidden="true"
                                />
                                {status.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}
