export default function TechStackBadge({ tech, className }) {
    return (
        <span
            className={
                "inline-flex shrink-0 items-center gap-3 rounded-xl border border-front-ink/10 bg-white px-5 py-3 " +
                (className ?? "")
            }
        >
            <span className="flex size-8 items-center justify-center rounded-lg bg-front-ink font-mono text-[11px] font-medium text-front-paper">
                {tech.mark}
            </span>
            <span className="text-[14px] font-medium text-front-ink">{tech.label}</span>
        </span>
    );
}
