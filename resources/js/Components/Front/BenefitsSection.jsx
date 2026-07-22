import Reveal from "@/Components/Front/Reveal";

/**
 * Why-choose benefits — quiet list, not icon soup.
 * Skills: taste-design (border rhythm), frontend-design (one job section).
 */
export default function BenefitsSection({
    eyebrow = "Benefits",
    title = "Why choose us",
    benefits = [],
    emptyMessage = "Benefits are being written up.",
}) {
    if (!benefits.length) {
        return (
            <section className="front-container py-12">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    {emptyMessage}
                </p>
            </section>
        );
    }

    return (
        <section className="front-container py-16 lg:py-20">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    {eyebrow}
                </p>
                <h2 className="mt-2 max-w-[20ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                    {title}
                </h2>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {benefits.map((benefit, index) => (
                    <Reveal key={benefit.key} delay={index * 0.05} as="li">
                        <article className="border-t border-white/10 pt-5">
                            <span className="font-mono text-[11px] tabular-nums uppercase tracking-[0.14em] text-front-ember-soft">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="mt-3 text-[1.1rem] font-semibold tracking-[-0.015em] text-white">
                                {benefit.title}
                            </h3>
                            <p className="mt-2.5 max-w-[42ch] text-[14.5px] leading-relaxed text-front-steel">
                                {benefit.body}
                            </p>
                        </article>
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}
