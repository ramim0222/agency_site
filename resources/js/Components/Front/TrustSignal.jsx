import { cn } from "@/lib/utils";

/**
 * One trust unit — quote or stat (landing pages: max 1–2).
 */
export default function TrustSignal({ signal, className }) {
    if (!signal) {
        return (
            <p
                className="rounded-2xl border border-dashed border-front-ink/15 px-5 py-8 text-center text-[14px] text-front-slate"
                role="status"
            >
                Trust signal coming soon.
            </p>
        );
    }

    if (signal.type === "stat") {
        return (
            <div
                className={cn(
                    "rounded-2xl border border-front-ink/10 bg-white px-6 py-6",
                    className
                )}
            >
                <p className="font-mono text-[2rem] tracking-[-0.03em] text-front-ink sm:text-[2.25rem]">
                    {signal.value}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-front-slate">
                    {signal.label}
                </p>
            </div>
        );
    }

    return (
        <figure
            className={cn(
                "rounded-2xl border border-front-ink/10 bg-white px-6 py-6",
                className
            )}
        >
            <blockquote className="text-[15.5px] leading-relaxed text-front-ink">
                “{signal.quote}”
            </blockquote>
            <figcaption className="mt-4 text-[13.5px] text-front-slate">
                <span className="font-medium text-front-ink">{signal.name}</span>
                {signal.role ? (
                    <>
                        <br />
                        {signal.role}
                    </>
                ) : null}
            </figcaption>
        </figure>
    );
}
