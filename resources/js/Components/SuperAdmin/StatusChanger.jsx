export default function StatusChanger({
    value,
    options = [],
    onChange,
    disabled = false,
}) {
    return (
        <label className="inline-flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                Status
            </span>
            <select
                value={value}
                disabled={disabled}
                onChange={(e) => onChange?.(e.target.value)}
                className="min-w-[160px] rounded-md border border-admin-line bg-admin-canvas px-3 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-admin-ink transition-colors hover:border-admin-accent/40 focus:border-admin-accent/50 focus:outline-none focus:ring-2 focus:ring-admin-accent/30 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
}
