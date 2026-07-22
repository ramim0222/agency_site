import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";

/**
 * Informational pricing bands — links to full pricing page anchors.
 * Skills: ui-ux-pro-max (focus/hover), taste-design (recommended column).
 */
export default function PricingSnapshot({
    eyebrow = "Pricing",
    title = "Starting ranges",
    note,
    tiers = [],
    viewAllHref = "/pricing",
    viewAllLabel = "See full pricing",
}) {
    if (!tiers.length) {
        return (
            <section className="front-container py-12">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    Pricing details are coming soon.{" "}
                    <Link
                        href="/contact"
                        className="text-front-ember-soft underline-offset-4 hover:underline"
                    >
                        Ask for a quote
                    </Link>
                    .
                </p>
            </section>
        );
    }

    return (
        <section className="front-container py-16 lg:py-20">
            <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            {eyebrow}
                        </p>
                        <h2 className="mt-2 max-w-[22ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                            {title}
                        </h2>
                        {note ? (
                            <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-front-steel">
                                {note}
                            </p>
                        ) : null}
                    </div>
                    <Link
                        href={viewAllHref}
                        className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                    >
                        {viewAllLabel}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
                {tiers.map((tier, index) => (
                    <Reveal key={tier.key} delay={index * 0.05} as="li">
                        <article
                            className={`flex h-full flex-col rounded-2xl border p-6 transition-colors ${
                                tier.recommended
                                    ? "border-front-ember/45 bg-front-panel-2"
                                    : "border-white/10 bg-front-panel hover:border-white/18"
                            }`}
                        >
                            {tier.recommended ? (
                                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-front-ember-soft">
                                    Most common
                                </p>
                            ) : (
                                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-front-steel-dim">
                                    Tier
                                </p>
                            )}
                            <h3 className="mt-3 text-[1.15rem] font-semibold tracking-[-0.015em] text-white">
                                {tier.name}
                            </h3>
                            <p className="mt-2 font-mono text-[1.35rem] font-semibold tabular-nums tracking-[-0.02em] text-front-ember-soft">
                                {tier.range}
                            </p>
                            <p className="mt-4 flex-1 text-[14px] leading-relaxed text-front-steel">
                                {tier.blurb}
                            </p>
                            <Link
                                href={tier.href}
                                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                Details on pricing
                                <ArrowUpRight className="size-3.5" />
                            </Link>
                        </article>
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}
