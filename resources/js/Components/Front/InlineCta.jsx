import { Link } from "@inertiajs/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/front/home";
import Reveal from "@/Components/Front/Reveal";

/**
 * Mid-article contextual CTA — quote form, WhatsApp, or service link.
 */
export default function InlineCta({ cta }) {
    if (!cta) return null;

    const wa = cta.whatsappMessage
        ? whatsappHref(cta.whatsappMessage)
        : null;

    return (
        <Reveal className="my-12 sm:my-14">
            <aside className="relative overflow-hidden rounded-2xl border border-white/10 bg-front-panel px-6 py-8 sm:px-8 sm:py-9">
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 100% 50%, rgba(217,142,74,0.35), transparent 70%)",
                    }}
                    aria-hidden="true"
                />

                <p className="relative font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    {cta.eyebrow}
                </p>
                <h2 className="relative mt-2 max-w-[22ch] text-[1.35rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.5rem]">
                    {cta.title}
                </h2>
                <p className="relative mt-3 max-w-[46ch] text-[15px] leading-relaxed text-front-steel">
                    {cta.body}
                </p>

                <div className="relative mt-6 flex flex-wrap items-center gap-3">
                    {cta.primary ? (
                        <Link
                            href={cta.primary.href}
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-front-ember px-4 py-2.5 text-[13px] font-semibold text-front-ember-ink transition-colors hover:bg-front-ember-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 active:translate-y-px"
                        >
                            {cta.primary.label}
                            <ArrowUpRight className="size-3.5" />
                        </Link>
                    ) : null}

                    {cta.secondary ? (
                        <Link
                            href={cta.secondary.href}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            {cta.secondary.label}
                        </Link>
                    ) : null}

                    {wa ? (
                        <a
                            href={wa}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2 py-2.5 text-[13px] font-semibold text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            <MessageCircle className="size-3.5" />
                            WhatsApp
                        </a>
                    ) : null}
                </div>
            </aside>
        </Reveal>
    );
}
