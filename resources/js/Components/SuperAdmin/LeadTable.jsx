import { Link } from "@inertiajs/react";
import { ArrowDown, ArrowUp, ArrowUpDown, ExternalLink } from "lucide-react";
import SourceBadge from "@/Components/SuperAdmin/SourceBadge";
import StatusBadge from "@/Components/SuperAdmin/StatusBadge";

const COLUMNS = [
    { key: "name", label: "Name", sortable: true },
    { key: "source", label: "Source", sortable: true },
    { key: "service", label: "Service", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "date", label: "Date", sortable: true },
    { key: "actions", label: "Actions", sortable: false },
];

function SortIcon({ active, dir }) {
    if (!active) {
        return <ArrowUpDown className="size-3 opacity-50" strokeWidth={1.75} />;
    }
    return dir === "asc" ? (
        <ArrowUp className="size-3 text-admin-accent" strokeWidth={1.75} />
    ) : (
        <ArrowDown className="size-3 text-admin-accent" strokeWidth={1.75} />
    );
}

export default function LeadTable({
    leads,
    selectedIds,
    onToggle,
    onToggleAll,
    sort,
    dir,
    onSort,
    onMarkContacted,
    processing = false,
}) {
    const allSelected =
        leads.length > 0 && leads.every((lead) => selectedIds.includes(lead.id));
    const someSelected =
        leads.some((lead) => selectedIds.includes(lead.id)) && !allSelected;

    if (leads.length === 0) {
        return (
            <div className="rounded-xl border border-dashed border-admin-line bg-admin-panel px-5 py-14 text-center">
                <p className="text-[15px] text-admin-ink">No leads match</p>
                <p className="mt-1 text-[13px] text-admin-muted">
                    Clear filters or wait for the next contact-form brief.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border border-admin-line bg-admin-panel">
            <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead className="border-b border-admin-line bg-admin-canvas/50">
                        <tr>
                            <th scope="col" className="w-12 px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    ref={(el) => {
                                        if (el) el.indeterminate = someSelected;
                                    }}
                                    onChange={onToggleAll}
                                    disabled={processing}
                                    className="size-3.5 rounded border-admin-line bg-admin-canvas text-admin-accent focus:ring-admin-accent/40"
                                    aria-label="Select all leads"
                                />
                            </th>
                            {COLUMNS.map((col) => (
                                <th
                                    key={col.key}
                                    scope="col"
                                    className="px-3 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted"
                                >
                                    {col.sortable ? (
                                        <button
                                            type="button"
                                            onClick={() => onSort(col.key)}
                                            disabled={processing}
                                            className="inline-flex items-center gap-1.5 rounded transition-colors hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                                        >
                                            {col.label}
                                            <SortIcon
                                                active={sort === col.key}
                                                dir={dir}
                                            />
                                        </button>
                                    ) : (
                                        col.label
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-admin-line">
                        {leads.map((lead) => {
                            const checked = selectedIds.includes(lead.id);

                            return (
                                <tr
                                    key={lead.id}
                                    className="lead-row transition-colors hover:bg-admin-panel-2"
                                >
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() => onToggle(lead.id)}
                                            disabled={processing}
                                            className="size-3.5 rounded border-admin-line bg-admin-canvas text-admin-accent focus:ring-admin-accent/40"
                                            aria-label={`Select ${lead.name}`}
                                        />
                                    </td>
                                    <td className="px-3 py-3">
                                        <Link
                                            href={route("admin.leads.show", lead.id)}
                                            className="block min-w-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                                        >
                                            <span className="block truncate text-[14px] font-medium text-admin-ink">
                                                {lead.name}
                                            </span>
                                            <span className="mt-0.5 block truncate text-[12px] text-admin-muted">
                                                {lead.email}
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="px-3 py-3">
                                        <SourceBadge
                                            source={lead.source}
                                            label={lead.sourceLabel}
                                        />
                                    </td>
                                    <td className="px-3 py-3 text-[13px] text-admin-ink">
                                        {lead.service}
                                    </td>
                                    <td className="px-3 py-3">
                                        <StatusBadge
                                            status={lead.status}
                                            label={lead.statusLabel}
                                        />
                                    </td>
                                    <td className="px-3 py-3 whitespace-nowrap font-mono text-[11px] text-admin-muted">
                                        <span title={lead.createdAtLabel}>
                                            {lead.createdAtShort}
                                        </span>
                                    </td>
                                    <td className="px-3 py-3">
                                        <div className="flex items-center gap-1.5">
                                            {lead.status === "new" ? (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onMarkContacted(lead.id)
                                                    }
                                                    disabled={processing}
                                                    className="rounded-md border border-admin-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-admin-muted transition-colors hover:border-admin-accent/40 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                                                >
                                                    Contacted
                                                </button>
                                            ) : null}
                                            <Link
                                                href={route(
                                                    "admin.leads.show",
                                                    lead.id
                                                )}
                                                className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-admin-accent transition-colors hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                                            >
                                                Open
                                                <ExternalLink
                                                    className="size-3"
                                                    strokeWidth={1.75}
                                                />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
