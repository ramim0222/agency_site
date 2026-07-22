import Reveal from "@/Components/Front/Reveal";

export default function FeatureList({ features = [], title = "What you get" }) {
    if (!features.length) {
        return (
            <section className="front-container py-10">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    Feature details for this product are being written up.
                </p>
            </section>
        );
    }

    return (
        <section className="front-container py-12 lg:py-16">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    Capabilities
                </p>
                <h2 className="mt-2 max-w-[18ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                    {title}
                </h2>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {features.map((feature, index) => (
                    <Reveal key={feature.title} delay={index * 0.05} as="li">
                        <article className="border-t border-white/10 pt-5">
                            <h3 className="text-[1.05rem] font-semibold tracking-[-0.015em] text-white">
                                {feature.title}
                            </h3>
                            <p className="mt-2.5 text-[14.5px] leading-relaxed text-front-steel">
                                {feature.body}
                            </p>
                        </article>
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}
