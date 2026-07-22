import { Link } from "@inertiajs/react";
import SourceBadge from "@/Components/SuperAdmin/SourceBadge";

export default function CampaignPerformanceTable({ campaigns = [] }) {
    return (
        <section className="rounded-xl border border-admin-line bg-admin-panel">
            <div className="border-b border-admin-line px-5 py-4 sm:px-6">
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                    Campaign performance
                </h2>
                <p className="mt-1 text-[13px] text-admin-muted">
                    Paid Facebook / Google campaigns with UTM names — volume and
                    win rate.
                </p>
            </div>

            {campaigns.length === 0 ? (
                <div className="px-5 py-12 text-center sm:px-6">
                    <p className="text-[14px] text-admin-ink">
                        No paid campaigns tagged
                    </p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Campaigns appear when Facebook or Google leads include{" "}
                        <span className="font-mono text-[12px]">utm_campaign</span>
                        .
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="border-b border-admin-line bg-admin-canvas/40">
                            <tr>
                                <th className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted sm:px-6">
                                    Campaign
                                </th>
                                <th className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                    Channel
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
                            {campaigns.map((row) => (
                                <tr
                                    key={`${row.source}-${row.campaign}`}
                                    className="transition-colors hover:bg-admin-panel-2"
                                >
                                    <td className="px-5 py-3 sm:px-6">
                                        <Link
                                            href={row.leadsHref}
                                            className="block min-w-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                                        >
                                            <span className="block truncate font-mono text-[13px] text-admin-ink hover:text-admin-accent">
                                                {row.campaign}
                                            </span>
                                            {row.medium ? (
                                                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.08em] text-admin-muted">
                                                    {row.medium}
                                                </span>
                                            ) : null}
                                        </Link>
                                    </td>
                                    <td className="px-3 py-3">
                                        <SourceBadge
                                            source={row.source}
                                            label={row.sourceLabel}
                                        />
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
