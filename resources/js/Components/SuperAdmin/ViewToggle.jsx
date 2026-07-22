import { Columns3, Table2 } from "lucide-react";

const OPTIONS = [
    { value: "table", label: "Table", icon: Table2 },
    { value: "kanban", label: "Kanban", icon: Columns3 },
];

export default function ViewToggle({ value = "table", onChange, disabled = false }) {
    return (
        <div
            className="inline-flex rounded-lg border border-admin-line bg-admin-panel p-0.5"
            role="group"
            aria-label="View mode"
        >
            {OPTIONS.map((option) => {
                const Icon = option.icon;
                const active = value === option.value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        disabled={disabled}
                        onClick={() => onChange?.(option.value)}
                        aria-pressed={active}
                        className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:cursor-not-allowed disabled:opacity-50 ${
                            active
                                ? "bg-admin-accent/20 text-admin-ink"
                                : "text-admin-muted hover:bg-white/[0.04] hover:text-admin-ink"
                        }`}
                    >
                        <Icon className="size-3.5" strokeWidth={1.75} />
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
