import { Link } from "@inertiajs/react";
import { categoryLabels } from "@/data/front/portfolio";

export default function CaseStudyHeader({ project }) {
    const category = categoryLabels[project.category] ?? project.category;

    return (
        <header className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-14">
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[55%] opacity-[0.14]"
                style={{
                    backgroundImage:
                        "radial-gradient(50% 50% at 80% 0%, rgba(217,142,74,0.5), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative">
                <Link
                    href="/portfolio"
                    className="font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                >
                    ← All case studies
                </Link>

                <div
                    data-case-hero
                    className="mt-8 flex flex-wrap items-center gap-2"
                >
                    <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/85">
                        {category}
                    </span>
                    {project.industry ? (
                        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-front-steel">
                            {project.industry}
                        </span>
                    ) : null}
                    {project.year ? (
                        <span className="font-mono text-[11px] tabular-nums text-front-steel-dim">
                            · {project.year}
                        </span>
                    ) : null}
                </div>

                <p
                    data-case-hero
                    className="mt-5 font-mono text-[12px] uppercase tracking-[0.14em] text-front-ember-soft"
                >
                    {project.client}
                </p>

                <h1
                    data-case-hero
                    className="mt-3 max-w-[18ch] font-serif text-[clamp(2.3rem,5vw,3.5rem)] italic leading-[1.06] tracking-[-0.02em] text-front-paper"
                >
                    {project.title}
                </h1>

                <p
                    data-case-hero
                    className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                >
                    {project.result}
                </p>

                <div
                    data-case-hero
                    className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-front-panel"
                >
                    <img
                        src={project.image.src}
                        alt={project.image.alt}
                        width={800}
                        height={520}
                        className="aspect-[800/520] w-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
