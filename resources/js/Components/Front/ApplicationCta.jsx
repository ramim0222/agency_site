import { Link } from "@inertiajs/react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";
import { whatsappHref } from "@/data/front/home";

/**
 * Careers apply band — mailto + WhatsApp (no backend form).
 */
export default function ApplicationCta({ content }) {
    if (!content) return null;

    const wa = content.whatsappMessage
        ? whatsappHref(content.whatsappMessage)
        : null;

    return (
        <section className="relative overflow-hidden border-t border-white/8 py-16 lg:py-24">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.12]"
                style={{
                    backgroundImage:
                        "radial-gradient(40% 60% at 80% 20%, rgba(217,142,74,0.45), transparent 70%)",
                }}
                aria-hidden="true"
            />
            <div className="front-container relative">
                <Reveal>
                    <div className="max-w-2xl rounded-2xl border border-white/10 bg-front-panel px-6 py-8 sm:px-8 sm:py-10">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            {content.eyebrow}
                        </p>
                        <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                            {content.title}
                        </h2>
                        <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-front-steel sm:text-[16px]">
                            {content.body}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            {content.mailto ? (
                                <a
                                    href={content.mailto.href}
                                    className="inline-flex items-center gap-2 rounded-lg bg-front-ember px-4 py-2.5 text-[13px] font-semibold text-front-ember-ink transition-colors hover:bg-front-ember-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 active:translate-y-px"
                                >
                                    <Mail className="size-3.5" strokeWidth={1.75} />
                                    {content.mailto.label}
                                </a>
                            ) : null}

                            {wa ? (
                                <a
                                    href={wa}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                                >
                                    <MessageCircle className="size-3.5" />
                                    WhatsApp
                                </a>
                            ) : null}

                            {content.secondary ? (
                                <Link
                                    href={content.secondary.href}
                                    className="group inline-flex items-center gap-1.5 px-2 py-2.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                                >
                                    {content.secondary.label}
                                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            ) : null}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
