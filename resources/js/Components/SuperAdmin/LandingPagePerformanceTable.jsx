import { Link } from "@inertiajs/react";

export default function LandingPagePerformanceTable({ landings = [] }) {
    return (
        <section className="rounded-xl border border-admin-line bg-admin-panel">
            <div className="border-b border-admin-line px-5 py-4 sm:px-6">
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                    Landing page performance
                </h2>
                <p className="mt-1 text-[13px] text-admin-muted">
                    Which entry paths convert best — including{" "}
                    <span className="font-mono text-[12px]">/landing/*</span>{" "}
                    pages.
                </p>
            </div>

            {landings.length === 0 ? (
                <div className="px-5 py-12 text-center sm:px-6">
                    <p className="text-[14px] text-admin-ink">
                        No landing pages recorded
                    </p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Paths appear from the lead’s captured landing URL.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="border-b border-admin-line bg-admin-canvas/40">
                            <tr>
                                <th className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted sm:px-6">
                                    Path
                                </th>
                                <th className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Top source
                                </th>
                                <th className="px-3 py-3 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Leads
                                </th>
                                <th className="px-3 py-3 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Won
                                </th>
                                <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted sm:px-6">
                                    Conv.
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-admin-line">
                            {landings.map((row) => (
                                <tr
                                    key={row.path}
                                    className="transition-colors hover:bg-admin-panel-2"
                                >
                                    <td className="px-5 py-3 sm:px-6">
                                        <Link
                                            href={row.leadsHref}
                                            className="block truncate font-mono text-[13px] text-admin-ink transition-colors hover:text-admin-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                                        >
                                            {row.path}
                                        </Link>
                                    </td>
                                    <td className="px-3 py-3 text-[13px] text-admin-muted">
                                        {row.topSource}
                                    </td>
                                    <td className="px-3 py-3 text-right font-mono text-[12px] tabular-nums text-admin-ink">
                                        {row.count}
                                    </td>
                                    <td className="px-3 py-3 text-right font-mono text-[12px] tabular-nums text-admin-muted">
                                        {row.won}
                                    </td>
                                    <td className="px-5 py-3 text-right font-mono text-[12px] tabular-nums text-admin-accent sm:px-6">
                                        {row.conversionRate}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}
