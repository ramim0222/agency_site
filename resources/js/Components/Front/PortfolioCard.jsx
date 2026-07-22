import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import { categoryLabels } from "@/data/front/portfolio";

/**
 * Case study teaser — carousel (home) or fluid grid (portfolio index).
 */
export default function PortfolioCard({
    project,
    className = "",
    variant = "carousel",
}) {
    const href = `/portfolio/${project.slug ?? project.key}`;
    const category =
        project.categoryLabel ??
        categoryLabels[project.category] ??
        null;

    const shell =
        variant === "grid"
            ? "flex w-full flex-col"
            : "flex w-[320px] shrink-0 snap-start flex-col sm:w-[380px]";

    return (
        <Link
            href={href}
            data-reveal
            data-portfolio-card
            className={`${shell} group overflow-hidden rounded-2xl border border-white/10 bg-front-panel transition-all duration-300 hover:border-white/20 hover:bg-front-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50 ${className}`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={variant === "grid" ? 800 : 640}
                    height={variant === "grid" ? 520 : 420}
                    className="aspect-[800/520] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-front-panel to-transparent" />
                {category ? (
                    <span className="absolute left-4 top-4 rounded-md border border-white/15 bg-front-graphite/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm">
                        {category}
                    </span>
                ) : null}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-front-ember-soft">
                        {project.client}
                    </span>
                    {project.year ? (
                        <span className="font-mono text-[11px] tabular-nums text-front-steel-dim">
                            {project.year}
                        </span>
                    ) : null}
                </div>
                <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.01em] text-white">
                    {project.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-front-steel">
                    {project.result}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-1.5">
                    {project.stack.map((item) => (
                        <span
                            key={item}
                            className="rounded border border-white/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.04em] text-white/50"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-white">
                    Read the case study
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>
        </Link>
    );
}
