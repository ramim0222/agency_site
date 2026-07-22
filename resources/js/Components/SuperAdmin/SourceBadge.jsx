const TONE = {
    facebook: "border-[#5b7cfa]/35 bg-[#5b7cfa]/10 text-[#9db0ff]",
    google: "border-amber-400/35 bg-amber-400/10 text-amber-200",
    organic: "border-emerald-400/35 bg-emerald-400/10 text-emerald-200",
    referral: "border-violet-400/30 bg-violet-400/10 text-violet-200",
    whatsapp: "border-[#4a9b8c]/40 bg-[#4a9b8c]/12 text-admin-accent",
    other: "border-admin-line bg-white/[0.03] text-admin-muted",
};

export default function SourceBadge({ source, label, className = "" }) {
    return (
        <span
            className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] ${TONE[source] ?? TONE.other} ${className}`}
        >
            {label ?? source}
        </span>
    );
}
