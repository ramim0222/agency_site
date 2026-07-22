import { Check } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";
import ContactAboutPlanButton from "@/Components/Front/ContactAboutPlanButton";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import {
    formatStartingPrice,
    whatsappMessageForProduct,
} from "@/data/front/saas";

/**
 * Informational plan tiers — CTAs open contact / WhatsApp, never checkout.
 * Skills: ui-ux-pro-max (responsive cards + table), taste-design (recommended column).
 */
export default function PlanComparisonTable({ product, plans = [] }) {
    if (!plans.length) {
        return (
            <section className="front-container py-10">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    Plan options for this product are being finalized.{" "}
                    <a
                        href={`/contact?product=${encodeURIComponent(product.slug)}`}
                        className="text-front-ember-soft underline-offset-4 hover:underline"
                    >
                        Contact us about {product.name}
                    </a>
                    .
                </p>
            </section>
        );
    }

    return (
        <section className="front-container py-12 lg:py-16" id="plans">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    Plans
                </p>
                <h2 className="mt-2 max-w-[20ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                    Implementation tiers — conversation, not checkout
                </h2>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-front-steel">
                    Prices are starting setup ranges. Every CTA opens a lead
                    conversation so we can map the product to your market —
                    nothing bills from this page.
                </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
                {plans.map((plan, index) => (
                    <Reveal key={plan.key} delay={index * 0.06}>
                        <article
                            className={`flex h-full flex-col rounded-2xl border p-6 transition-colors ${
                                plan.recommended
                                    ? "border-front-ember/45 bg-front-panel-2"
                                    : "border-white/10 bg-front-panel hover:border-white/18"
                            }`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.015em] text-white">
                                        {plan.name}
                                    </h3>
                                    {plan.recommended ? (
                                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-front-ember-soft">
                                            Recommended
                                        </p>
                                    ) : null}
                                </div>
                                <div className="text-right">
                                    <p className="font-mono text-[1.35rem] font-semibold tabular-nums tracking-[-0.02em] text-front-ember-soft">
                                        {formatStartingPrice(plan.price)}
                                    </p>
                                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-front-steel-dim">
                                        {plan.cadence}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 text-[14px] leading-relaxed text-front-steel">
                                {plan.blurb}
                            </p>

                            <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                                {(plan.highlights ?? []).map((item) => (
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

                            <div className="mt-6 flex flex-col gap-2.5">
                                <ContactAboutPlanButton
                                    productSlug={product.slug}
                                    planKey={plan.key}
                                    className="w-full"
                                    variant={
                                        plan.recommended ? "primary" : "secondary"
                                    }
                                />
                                <WhatsAppButton
                                    variant="outline"
                                    label="WhatsApp about this plan"
                                    message={whatsappMessageForProduct(
                                        product,
                                        plan
                                    )}
                                    className="w-full justify-center"
                                />
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
