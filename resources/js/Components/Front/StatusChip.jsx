import { cn } from "@/lib/utils";

const STATE_STYLES = {
    active: "bg-front-ember/15 text-front-ember-soft border-front-ember/30",
    queued: "bg-white/5 text-white/50 border-white/12",
    shipped: "bg-emerald-500/10 text-emerald-300/90 border-emerald-500/25",
};

const STATE_LABEL = {
    active: "In build",
    queued: "Queued",
    shipped: "Shipped",
};

/** Small mono status pill — e.g. "Mobile Apps · In build" in the hero. */
export default function StatusChip({ label, state = "active", className }) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em]",
                STATE_STYLES[state],
                className
            )}
        >
            <span className="relative flex size-1.5">
                <span
                    className={cn(
                        "absolute inline-flex size-full rounded-full opacity-60",
                        state === "active" && "animate-ping bg-front-ember"
                    )}
                    aria-hidden="true"
                />
                <span
                    className={cn(
                        "relative inline-flex size-1.5 rounded-full",
                        state === "active" && "bg-front-ember",
                        state === "queued" && "bg-white/40",
                        state === "shipped" && "bg-emerald-400"
                    )}
                />
            </span>
            {label}
            <span className="text-current/60">— {STATE_LABEL[state]}</span>
        </span>
    );
}
