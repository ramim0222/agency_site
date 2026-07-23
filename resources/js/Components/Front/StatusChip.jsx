import { cn } from "@/lib/utils";

/** Small mono chip — e.g. "Mobile Apps" in the hero. */
export default function StatusChip({ label, className }) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 rounded-full border border-front-ember/30 bg-front-ember/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-front-ember-soft",
                className
            )}
        >
            <span className="relative flex size-1.5">
                <span
                    className="absolute inline-flex size-full animate-ping rounded-full bg-front-ember opacity-60"
                    aria-hidden="true"
                />
                <span className="relative inline-flex size-1.5 rounded-full bg-front-ember" />
            </span>
            {label}
        </span>
    );
}
