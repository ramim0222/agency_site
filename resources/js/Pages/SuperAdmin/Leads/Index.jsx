import { Link } from "@inertiajs/react";
import AdminLayout from "@/Components/SuperAdmin/AdminLayout";

const STATUS_CHIP = {
    new: "border-sky-400/30 bg-sky-400/10 text-sky-200",
    contacted: "border-admin-accent/30 bg-admin-accent/10 text-admin-accent",
    quoted: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    won: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    lost: "border-admin-danger/30 bg-admin-danger/10 text-admin-danger",
};

function activeFilterLabel(filters) {
    const parts = [];
    if (filters.status) parts.push(`status: ${filters.status}`);
    if (filters.source) parts.push(`source: ${filters.source}`);
    if (filters.range) parts.push(`range: ${filters.range}`);
    if (filters.pipeline) parts.push(`pipeline: ${filters.pipeline}`);
    return parts.length ? parts.join(" · ") : "All leads";
}

export default function LeadsIndex({ leads = [], filters = {} }) {
    return (
        <AdminLayout title="Leads" eyebrow="Lead desk · all leads">
            <div className="mx-auto max-w-6xl">
                <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <h1 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-admin-ink">
                            Leads
                        </h1>
                        <p className="mt-2 text-[14px] text-admin-muted">
                            {activeFilterLabel(filters)} · {leads.length} shown
                        </p>
                    </div>
                    <Link
                        href={route("admin.dashboard")}
                        className="rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-accent transition-colors hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                    >
                        ← Dashboard
                    </Link>
                </header>

                <div className="overflow-hidden rounded-xl border border-admin-line bg-admin-panel">
                    {leads.length === 0 ? (
                        <div className="px-5 py-12 text-center">
                            <p className="text-[14px] text-admin-ink">
                                No leads match this filter
                            </p>
                            <Link
                                href={route("admin.leads.index")}
                                className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.1em] text-admin-accent hover:underline"
                            >
                                Clear filters
                            </Link>
                        </div>
                    ) : (
                        <ul className="divide-y divide-admin-line">
                            {leads.map((lead) => (
                                <li key={lead.id}>
                                    <Link
                                        href={route("admin.leads.show", lead.id)}
                                        className="flex flex-col gap-2 px-5 py-3.5 transition-colors hover:bg-admin-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-admin-accent/45 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="min-w-0">
                                            <p className="truncate text-[14px] font-medium text-admin-ink">
                                                {lead.name}
                                            </p>
                                            <p className="mt-0.5 truncate text-[13px] text-admin-muted">
                                                {lead.service} · {lead.sourceLabel}{" "}
                                                · {lead.email}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${STATUS_CHIP[lead.status] ?? STATUS_CHIP.new}`}
                                            >
                                                {lead.statusLabel}
                                            </span>
                                            <span className="font-mono text-[11px] text-admin-muted">
                                                {lead.createdAtLabel}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
