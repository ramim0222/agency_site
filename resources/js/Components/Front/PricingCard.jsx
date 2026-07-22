import { Link } from "@inertiajs/react";
import { Check } from "lucide-react";

/**
 * Informational package card — CTA to contact, never checkout.
 * Skills: taste-design (recommended column), ui-ux-pro-max (hover/focus).
 */
export default function PricingCard({ pkg }) {
    if (!pkg) return null;

    return (
        <article
            data-pricing-card
            className={`flex h-full flex-col rounded-2xl border p-6 transition-colors ${
                pkg.recommended
                    ? "border-front-ember/45 bg-front-panel-2"
                    : "border-white/10 bg-front-panel hover:border-white/18"
            }`}
        >
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.015em] text-white">
                        {pkg.name}
                    </h3>
                    {pkg.recommended ? (
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-front-ember-soft">
                            Most common
                        </p>
                    ) : null}
                </div>
            </div>

            <p className="mt-4 font-mono text-[1.35rem] font-semibold tabular-nums tracking-[-0.02em] text-front-ember-soft">
                {pkg.range}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-front-steel">
                {pkg.blurb}
            </p>

            <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {(pkg.highlights ?? []).map((item) => (
                    <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13.5px] text-front-steel"
                    >
                        <Check
                            className="mt-0.5 size-3.5 shrink-0 text-front-ember-soft"
                            strokeWidth={2}
                            aria-hidden="true"
                        />
                        {item}
                    </li>
                ))}
            </ul>

            <Link
                href={pkg.cta.href}
                className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite ${
                    pkg.recommended
                        ? "bg-front-ember text-front-ember-ink hover:bg-front-ember-soft"
                        : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                }`}
            >
                {pkg.cta.label}
            </Link>
        </article>
    );
}
