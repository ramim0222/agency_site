import { ArrowUpRight } from "lucide-react";
import { roleMailto } from "@/data/front/careers";

/**
 * Single open role — list rhythm, not a heavy card cluster.
 */
export default function RoleCard({ role }) {
    if (!role) return null;

    return (
        <article
            data-role-card
            className="group border-b border-white/10 py-7 first:border-t transition-colors"
        >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                <div className="min-w-0 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-front-steel-dim">
                        <span className="text-front-ember-soft">{role.type}</span>
                        <span aria-hidden="true">·</span>
                        <span>{role.location}</span>
                    </div>
                    <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.015em] text-white sm:text-[1.35rem]">
                        {role.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-front-steel">
                        {role.blurb}
                    </p>
                    {role.focus?.length ? (
                        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                            {role.focus.map((item) => (
                                <li
                                    key={item}
                                    className="font-mono text-[11px] uppercase tracking-[0.08em] text-front-steel-dim"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>

                <a
                    href={roleMailto(role)}
                    className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 active:translate-y-px group-hover:border-front-ember/40"
                >
                    Apply
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </article>
    );
}
