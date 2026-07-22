const PRESETS = [
    { value: "7d", label: "7d" },
    { value: "30d", label: "30d" },
    { value: "90d", label: "90d" },
    { value: "all", label: "All" },
];

const inputClass =
    "rounded-md border border-admin-line bg-admin-canvas px-2.5 py-2 font-mono text-[11px] text-admin-ink transition-colors hover:border-admin-accent/35 focus:border-admin-accent/50 focus:outline-none focus:ring-2 focus:ring-admin-accent/30 disabled:opacity-50";

export default function DateRangePicker({
    range,
    draft,
    onDraftChange,
    onPreset,
    onApplyCustom,
    processing = false,
}) {
    return (
        <div className="rounded-xl border border-admin-line bg-admin-panel p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                        Date range
                    </p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        {range.label}
                    </p>
                </div>
                <div
                    className="inline-flex rounded-lg border border-admin-line bg-admin-canvas p-0.5"
                    role="group"
                    aria-label="Range presets"
                >
                    {PRESETS.map((preset) => {
                        const active = range.preset === preset.value;
                        return (
                            <button
                                key={preset.value}
                                type="button"
                                disabled={processing}
                                onClick={() => onPreset?.(preset.value)}
                                aria-pressed={active}
                                className={`rounded-md px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50 ${
                                    active
                                        ? "bg-admin-accent/20 text-admin-ink"
                                        : "text-admin-muted hover:bg-white/[0.04] hover:text-admin-ink"
                                }`}
                            >
                                {preset.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <form
                className="mt-4 flex flex-wrap items-end gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    onApplyCustom?.();
                }}
            >
                <label className="min-w-[140px] flex-1">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                        From
                    </span>
                    <input
                        type="date"
                        value={draft.from}
                        disabled={processing}
                        onChange={(e) =>
                            onDraftChange?.({ ...draft, from: e.target.value })
                        }
                        className={`${inputClass} w-full`}
                    />
                </label>
                <label className="min-w-[140px] flex-1">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                        To
                    </span>
                    <input
                        type="date"
                        value={draft.to}
                        disabled={processing}
                        onChange={(e) =>
                            onDraftChange?.({ ...draft, to: e.target.value })
                        }
                        className={`${inputClass} w-full`}
                    />
                </label>
                <button
                    type="submit"
                    disabled={processing || (!draft.from && !draft.to)}
                    className="rounded-md bg-admin-accent px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-admin-accent-ink transition-[opacity,transform] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                    {processing ? "Loading…" : "Apply"}
                </button>
            </form>
        </div>
    );
}
