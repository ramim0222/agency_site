import { Link } from "@inertiajs/react";
import StatusBadge from "@/Components/SuperAdmin/StatusBadge";

export default function RecentLeadsFeed({ leads = [] }) {
    const empty = leads.length === 0;

    return (
        <section className="admin-widget rounded-xl border border-admin-line bg-admin-panel">
            <div className="flex items-start justify-between gap-3 border-b border-admin-line px-5 py-4 sm:px-6">
                <div>
                    <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                        Recent leads
                    </h2>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Latest 10 — open any row for the full brief.
                    </p>
                </div>
                <Link
                    href={route("admin.leads.index")}
                    className="shrink-0 rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-accent transition-colors hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                >
                    All leads
                </Link>
            </div>

            {empty ? (
                <div className="px-5 py-10 text-center sm:px-6">
                    <p className="text-[14px] text-admin-ink">No recent leads</p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        New contact-form submissions will land here first.
                    </p>
                </div>
            ) : (
                <ul className="divide-y divide-admin-line">
                    {leads.map((lead) => (
                        <li key={lead.id}>
                            <Link
                                href={route("admin.leads.show", lead.id)}
                                className="flex flex-col gap-2 px-5 py-3.5 transition-colors hover:bg-admin-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-admin-accent/45 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
                            >
                                <div className="min-w-0">
                                    <p className="truncate text-[14px] font-medium text-admin-ink">
                                        {lead.name}
                                    </p>
                                    <p className="mt-0.5 truncate text-[13px] text-admin-muted">
                                        {lead.service} · {lead.sourceLabel} ·{" "}
                                        {lead.email}
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-center gap-3">
                                    <StatusBadge
                                        status={lead.status}
                                        label={lead.statusLabel}
                                    />
                                    <span className="font-mono text-[11px] text-admin-muted tabular-nums">
                                        {lead.createdAtLabel}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
