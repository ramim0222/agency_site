const TONE = {
    new: "border-sky-400/30 bg-sky-400/10 text-sky-200",
    contacted: "border-admin-accent/30 bg-admin-accent/10 text-admin-accent",
    quoted: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    won: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    lost: "border-admin-danger/30 bg-admin-danger/10 text-admin-danger",
};

export default function StatusBadge({ status, label, className = "" }) {
    return (
        <span
            className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${TONE[status] ?? TONE.new} ${className}`}
        >
            {label ?? status}
        </span>
    );
}
