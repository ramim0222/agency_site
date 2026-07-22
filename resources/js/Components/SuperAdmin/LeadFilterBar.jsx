import { Search, X } from "lucide-react";

const selectClass =
    "rounded-md border border-admin-line bg-admin-canvas px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-admin-ink transition-colors hover:border-admin-accent/35 focus:border-admin-accent/50 focus:outline-none focus:ring-2 focus:ring-admin-accent/30 disabled:opacity-50";

const inputClass =
    "w-full rounded-md border border-admin-line bg-admin-canvas px-3 py-2 text-[13px] text-admin-ink placeholder:text-admin-muted/70 transition-colors hover:border-admin-accent/35 focus:border-admin-accent/50 focus:outline-none focus:ring-2 focus:ring-admin-accent/30 disabled:opacity-50";

export default function LeadFilterBar({
    filters,
    meta,
    draft,
    onDraftChange,
    onApply,
    onClear,
    processing = false,
}) {
    const hasActive =
        filters.status ||
        filters.source ||
        filters.service ||
        filters.q ||
        filters.from ||
        filters.to ||
        filters.range ||
        filters.pipeline;

    function setField(key, value) {
        onDraftChange({ ...draft, [key]: value });
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onApply();
            }}
            className="rounded-xl border border-admin-line bg-admin-panel p-4 sm:p-5"
        >
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                        Filters
                    </p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Narrow by channel, status, service, or date.
                    </p>
                </div>
                {hasActive ? (
                    <button
                        type="button"
                        onClick={onClear}
                        disabled={processing}
                        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:bg-white/5 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                    >
                        <X className="size-3.5" strokeWidth={1.75} />
                        Clear
                    </button>
                ) : null}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                <label className="relative xl:col-span-2">
                    <span className="sr-only">Search name or email</span>
                    <Search
                        className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-admin-muted"
                        strokeWidth={1.75}
                    />
                    <input
                        type="search"
                        value={draft.q}
                        onChange={(e) => setField("q", e.target.value)}
                        placeholder="Search name or email"
                        className={`${inputClass} pl-9`}
                        disabled={processing}
                    />
                </label>

                <label>
                    <span className="sr-only">Source</span>
                    <select
                        value={draft.source}
                        onChange={(e) => setField("source", e.target.value)}
                        className={`${selectClass} w-full`}
                        disabled={processing}
                    >
                        <option value="">All sources</option>
                        {meta.sources.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <span className="sr-only">Status</span>
                    <select
                        value={draft.status}
                        onChange={(e) => setField("status", e.target.value)}
                        className={`${selectClass} w-full`}
                        disabled={processing}
                    >
                        <option value="">All statuses</option>
                        {meta.statuses.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <span className="sr-only">Service type</span>
                    <select
                        value={draft.service}
                        onChange={(e) => setField("service", e.target.value)}
                        className={`${selectClass} w-full`}
                        disabled={processing}
                    >
                        <option value="">All services</option>
                        {meta.services.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </label>

                <div className="grid grid-cols-2 gap-2">
                    <label>
                        <span className="sr-only">From date</span>
                        <input
                            type="date"
                            value={draft.from}
                            onChange={(e) => setField("from", e.target.value)}
                            className={inputClass}
                            disabled={processing}
                        />
                    </label>
                    <label>
                        <span className="sr-only">To date</span>
                        <input
                            type="date"
                            value={draft.to}
                            onChange={(e) => setField("to", e.target.value)}
                            className={inputClass}
                            disabled={processing}
                        />
                    </label>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-md bg-admin-accent px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-admin-accent-ink transition-[transform,opacity] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {processing ? "Applying…" : "Apply filters"}
                </button>
                {(filters.range || filters.pipeline) && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-admin-muted">
                        Preset
                        {filters.range ? ` · ${filters.range}` : ""}
                        {filters.pipeline ? ` · ${filters.pipeline}` : ""}
                    </p>
                )}
            </div>
        </form>
    );
}
