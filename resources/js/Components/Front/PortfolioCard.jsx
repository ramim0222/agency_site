import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({ project, className }) {
    return (
        <Link
            href="/portfolio"
            data-reveal
            className={
                "group flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-front-panel transition-all duration-300 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50 sm:w-[380px] " +
                (className ?? "")
            }
        >
            <div className="relative overflow-hidden">
                <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={640}
                    height={420}
                    className="aspect-[640/420] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-front-panel to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-front-ember-soft">
                    {project.client}
                </span>
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
                            className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.04em] text-white/50"
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
