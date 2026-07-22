import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { suggestedLinks } from "@/data/front/thankYou";
import { cn } from "@/lib/utils";

/**
 * Post-conversion destinations — portfolio, SaaS catalog, blog.
 * Asymmetric layout: featured portfolio card + two stacked companions.
 */
export default function SuggestedLinksGrid({ className }) {
    const gridRef = useScrollReveal("[data-reveal]");
    const [featured, ...rest] = suggestedLinks;

    return (
        <div
            ref={gridRef}
            className={cn("grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5", className)}
        >
            <SuggestedCard link={featured} featured className="lg:col-span-7" />
            <div className="flex flex-col gap-4 lg:col-span-5">
                {rest.map((link) => (
                    <SuggestedCard key={link.key} link={link} />
                ))}
            </div>
        </div>
    );
}

function SuggestedCard({ link, featured = false, className }) {
    return (
        <Link
            href={link.href}
            data-reveal
            className={cn(
                "group flex overflow-hidden rounded-2xl border border-front-ink/10 bg-white transition-all duration-300 hover:border-front-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50",
                featured ? "flex-col sm:flex-row" : "flex-col sm:flex-row lg:flex-col",
                className
            )}
        >
            <div
                className={cn(
                    "shrink-0 overflow-hidden",
                    featured
                        ? "aspect-[16/10] w-full sm:aspect-auto sm:w-[46%] sm:min-h-[220px]"
                        : "aspect-[16/10] w-full sm:w-[42%] lg:aspect-[16/9] lg:w-full"
                )}
            >
                <img
                    src={link.image.src}
                    alt={link.image.alt}
                    width={featured ? 640 : 480}
                    height={featured ? 400 : 300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>
            <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-front-slate">
                    {link.eyebrow}
                </span>
                <h3
                    className={cn(
                        "mt-2 font-semibold tracking-[-0.01em] text-front-ink",
                        featured ? "text-[1.25rem]" : "text-[1.05rem]"
                    )}
                >
                    {link.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-front-slate">
                    {link.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-front-ink">
                    Open
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </Link>
    );
}
