/**
 * Tech mark + label. `paper` for light marquee strips; `graphite` for case studies.
 */
export default function TechStackBadge({ tech, variant = "paper", className = "" }) {
    const label = typeof tech === "string" ? tech : tech.label;
    const mark =
        typeof tech === "string"
            ? tech.slice(0, 2)
            : (tech.mark ?? tech.label.slice(0, 2));

    if (variant === "graphite") {
        return (
            <span
                className={`inline-flex items-center gap-2.5 rounded-lg border border-white/12 bg-front-panel px-3.5 py-2.5 ${className}`}
            >
                <span className="flex size-7 items-center justify-center rounded-md bg-front-ember/15 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-front-ember-soft">
                    {mark}
                </span>
                <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-white/75">
                    {label}
                </span>
            </span>
        );
    }

    return (
        <span
            className={`inline-flex shrink-0 items-center gap-3 rounded-xl border border-front-ink/10 bg-white px-5 py-3 ${className}`}
        >
            <span className="flex size-8 items-center justify-center rounded-lg bg-front-ink font-mono text-[11px] font-medium text-front-paper">
                {mark}
            </span>
            <span className="text-[14px] font-medium text-front-ink">{label}</span>
        </span>
    );
}
