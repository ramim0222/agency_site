import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";

/**
 * SaaS pricing teaser — points at catalog, not a fake billing UI.
 * Skills: frontend-design (one composition), taste-design (quiet CTA pair).
 */
export default function SaasPricingTeaser({ content }) {
    if (!content) {
        return (
            <div
                className="rounded-2xl border border-dashed border-white/12 px-6 py-16 text-center text-[14px] text-front-steel"
                role="status"
            >
                SaaS pricing details are in the{" "}
                <Link
                    href="/saas"
                    className="text-front-ember-soft underline-offset-4 hover:underline"
                >
                    product catalog
                </Link>
                .
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    {content.eyebrow}
                </p>
                <h2 className="mt-2 max-w-[18ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                    {content.title}
                </h2>
                <p className="mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-front-steel">
                    {content.body}
                </p>
                {content.note ? (
                    <p className="mt-4 max-w-[46ch] font-mono text-[12px] leading-relaxed text-front-steel-dim">
                        {content.note}
                    </p>
                ) : null}

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                        href={content.primaryCta.href}
                        className="group inline-flex items-center gap-2 rounded-md bg-front-ember px-5 py-3 text-[14px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite"
                    >
                        {content.primaryCta.label}
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    {content.secondaryCta ? (
                        <Link
                            href={content.secondaryCta.href}
                            className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            {content.secondaryCta.label}
                            <ArrowUpRight className="size-3.5" />
                        </Link>
                    ) : null}
                </div>
            </Reveal>

            <Reveal delay={0.08}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-front-panel">
                    <img
                        src={content.image.src}
                        alt={content.image.alt}
                        width={960}
                        height={540}
                        className="aspect-[960/540] w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </Reveal>
        </div>
    );
}
