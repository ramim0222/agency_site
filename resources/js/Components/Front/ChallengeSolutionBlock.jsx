import Reveal from "@/Components/Front/Reveal";

export default function ChallengeSolutionBlock({ challenge, solution }) {
    return (
        <section className="front-container py-16 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                <Reveal>
                    <article className="h-full rounded-2xl border border-white/10 bg-front-panel p-6 sm:p-8">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            Challenge
                        </p>
                        <p className="mt-4 text-[16px] leading-relaxed text-front-steel sm:text-[17px]">
                            {challenge}
                        </p>
                    </article>
                </Reveal>
                <Reveal delay={0.08}>
                    <article className="h-full rounded-2xl border border-front-ember/25 bg-front-panel-2 p-6 sm:p-8">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            Solution
                        </p>
                        <p className="mt-4 text-[16px] leading-relaxed text-white/85 sm:text-[17px]">
                            {solution}
                        </p>
                    </article>
                </Reveal>
            </div>
        </section>
    );
}
