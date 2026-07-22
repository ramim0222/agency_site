import { useEffect, useRef, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Components/SuperAdmin/AdminLayout";
import LeadFilterBar from "@/Components/SuperAdmin/LeadFilterBar";
import LeadKanbanBoard from "@/Components/SuperAdmin/LeadKanbanBoard";
import LeadTable from "@/Components/SuperAdmin/LeadTable";
import ViewToggle from "@/Components/SuperAdmin/ViewToggle";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

function toDraft(filters) {
    return {
        q: filters.q ?? "",
        source: filters.source ?? "",
        status: filters.status ?? "",
        service: filters.service ?? "",
        from: filters.from ?? "",
        to: filters.to ?? "",
    };
}

function filterSummary(filters, total) {
    const parts = [];
    if (filters.source) parts.push(`source: ${filters.source}`);
    if (filters.campaign) parts.push(`campaign: ${filters.campaign}`);
    if (filters.landing) parts.push(`landing: ${filters.landing}`);
    if (filters.status) parts.push(`status: ${filters.status}`);
    if (filters.service) parts.push(`service: ${filters.service}`);
    if (filters.q) parts.push(`search: ${filters.q}`);
    if (filters.range) parts.push(`range: ${filters.range}`);
    if (filters.pipeline) parts.push(`pipeline: ${filters.pipeline}`);
    const label = parts.length ? parts.join(" · ") : "All leads";
    return `${label} · ${total} shown`;
}

function buildQuery(filters, overrides = {}) {
    const next = { ...filters, ...overrides };
    const query = {};

    Object.entries(next).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== "") {
            query[key] = value;
        }
    });

    return query;
}

/**
 * Kiln Ops lead desk — filterable table + kanban pipeline.
 * Skills applied: frontend-design (cockpit density), taste-design (mono data),
 * gsap-react (entrance), ui-ux-pro-max (bulk bar, empty/loading, mobile scroll).
 */
export default function LeadsIndex({ leads = [], filters, meta }) {
    const { flash } = usePage().props;
    const rootRef = useRef(null);
    const [draft, setDraft] = useState(() => toDraft(filters));
    const [selectedIds, setSelectedIds] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [notice, setNotice] = useState(null);

    useEffect(() => {
        setDraft(toDraft(filters));
        setSelectedIds([]);
    }, [filters]);

    useEffect(() => {
        if (flash?.success) {
            setNotice(flash.success);
        }
    }, [flash]);

    useGSAP(
        () => {
            if (!rootRef.current) return;
            const targets = rootRef.current.querySelectorAll(
                ".leads-animate"
            );

            if (prefersReducedMotion()) {
                gsap.set(targets, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                targets,
                { opacity: 0, y: 14 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: EASE.out,
                }
            );
        },
        { scope: rootRef, dependencies: [filters.view, leads.length] }
    );

    function visit(overrides = {}, options = {}) {
        setProcessing(true);
        router.get(route("admin.leads.index"), buildQuery(filters, overrides), {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            ...options,
            onFinish: () => setProcessing(false),
        });
    }

    function applyFilters() {
        visit({
            q: draft.q || null,
            source: draft.source || null,
            status: draft.status || null,
            service: draft.service || null,
            from: draft.from || null,
            to: draft.to || null,
            range: null,
            pipeline: null,
            campaign: null,
            landing: null,
        });
    }

    function clearFilters() {
        visit({
            q: null,
            source: null,
            status: null,
            service: null,
            from: null,
            to: null,
            range: null,
            pipeline: null,
            campaign: null,
            landing: null,
        });
    }

    function handleSort(column) {
        if (filters.sort === column) {
            visit({ dir: filters.dir === "asc" ? "desc" : "asc" });
            return;
        }
        visit({
            sort: column,
            dir: column === "name" ? "asc" : "desc",
        });
    }

    function markContacted(id) {
        setProcessing(true);
        router.patch(
            route("admin.leads.status", id),
            { status: "contacted" },
            {
                preserveScroll: true,
                onSuccess: () => setNotice("Marked as contacted."),
                onFinish: () => setProcessing(false),
            }
        );
    }

    function bulkMarkContacted() {
        if (selectedIds.length === 0) return;
        setProcessing(true);
        router.patch(
            route("admin.leads.bulk-status"),
            { ids: selectedIds, status: "contacted" },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setNotice(
                        `Marked ${selectedIds.length} lead${selectedIds.length === 1 ? "" : "s"} as contacted.`
                    );
                    setSelectedIds([]);
                },
                onFinish: () => setProcessing(false),
            }
        );
    }

    function exportSelected() {
        const params = new URLSearchParams();
        if (selectedIds.length > 0) {
            selectedIds.forEach((id) => params.append("ids[]", String(id)));
        } else {
            Object.entries(buildQuery(filters)).forEach(([key, value]) => {
                if (key === "view") return;
                params.set(key, String(value));
            });
        }
        window.location.href = `${route("admin.leads.export")}?${params.toString()}`;
    }

    function onStatusDrop(id, status) {
        setProcessing(true);
        router.patch(
            route("admin.leads.status", id),
            { status },
            {
                preserveScroll: true,
                onSuccess: () => setNotice("Status updated."),
                onFinish: () => setProcessing(false),
            }
        );
    }

    const view = filters.view ?? "table";

    return (
        <AdminLayout title="Leads" eyebrow="Lead desk · all leads">
            <div ref={rootRef} className="mx-auto max-w-7xl">
                <header className="leads-animate mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h1 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-admin-ink sm:text-[2rem]">
                            Leads
                        </h1>
                        <p className="mt-2 text-[14px] text-admin-muted">
                            {filterSummary(filters, meta.total)}
                            {processing ? " · updating…" : ""}
                        </p>
                    </div>
                    <ViewToggle
                        value={view}
                        disabled={processing}
                        onChange={(next) => visit({ view: next })}
                    />
                </header>

                {notice ? (
                    <div
                        className="leads-animate mb-4 flex items-center justify-between gap-3 rounded-lg border border-admin-accent/30 bg-admin-accent/10 px-4 py-2.5 text-[13px] text-admin-ink"
                        role="status"
                    >
                        <span>{notice}</span>
                        <button
                            type="button"
                            onClick={() => setNotice(null)}
                            className="font-mono text-[10px] uppercase tracking-[0.1em] text-admin-muted hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                        >
                            Dismiss
                        </button>
                    </div>
                ) : null}

                <div className="leads-animate">
                    <LeadFilterBar
                        filters={filters}
                        meta={meta}
                        draft={draft}
                        onDraftChange={setDraft}
                        onApply={applyFilters}
                        onClear={clearFilters}
                        processing={processing}
                    />
                </div>

                {selectedIds.length > 0 ? (
                    <div className="leads-animate sticky top-[57px] z-20 mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-admin-accent/35 bg-admin-panel/95 px-4 py-3 backdrop-blur-md">
                        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-admin-ink">
                            {selectedIds.length} selected
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={bulkMarkContacted}
                                disabled={processing}
                                className="rounded-md bg-admin-accent px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-admin-accent-ink transition-[opacity,transform] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.98] disabled:opacity-50"
                            >
                                Mark contacted
                            </button>
                            <button
                                type="button"
                                onClick={exportSelected}
                                disabled={processing}
                                className="rounded-md border border-admin-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:border-admin-accent/40 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                            >
                                Export selected
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedIds([])}
                                disabled={processing}
                                className="rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:bg-white/5 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                            >
                                Clear selection
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="leads-animate mt-4 flex justify-end">
                        <button
                            type="button"
                            onClick={exportSelected}
                            disabled={processing || leads.length === 0}
                            className="rounded-md border border-admin-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:border-admin-accent/40 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Export view
                        </button>
                    </div>
                )}

                <div className="leads-animate mt-4">
                    {view === "kanban" ? (
                        <LeadKanbanBoard
                            leads={leads}
                            onStatusDrop={onStatusDrop}
                            processing={processing}
                        />
                    ) : (
                        <LeadTable
                            leads={leads}
                            selectedIds={selectedIds}
                            sort={filters.sort}
                            dir={filters.dir}
                            onSort={handleSort}
                            onMarkContacted={markContacted}
                            processing={processing}
                            onToggle={(id) =>
                                setSelectedIds((current) =>
                                    current.includes(id)
                                        ? current.filter((item) => item !== id)
                                        : [...current, id]
                                )
                            }
                            onToggleAll={() => {
                                if (
                                    leads.length > 0 &&
                                    leads.every((lead) =>
                                        selectedIds.includes(lead.id)
                                    )
                                ) {
                                    setSelectedIds([]);
                                    return;
                                }
                                setSelectedIds(leads.map((lead) => lead.id));
                            }}
                        />
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
