import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";

/**
 * SaaS marketplace category tiles → /saas/category/{slug} or /saas.
 * Skills: frontend-design (asymmetric grid), taste-design (ember hover),
 * ui-ux-pro-max (empty + focus), gsap via Reveal.
 */
export default function CategoryGrid({
    categories = [],
    eyebrow = "Categories",
    title = "Browse by category",
    emptyMessage = "Categories are being added.",
}) {
    if (!categories.length) {
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
                <h2 className="mt-2 max-w-[22ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                    {title}
                </h2>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {categories.map((category, index) => (
                    <Reveal key={category.key} delay={index * 0.04} as="li">
                        <Link
                            href={category.href}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-front-panel transition-all duration-300 hover:border-white/20 hover:bg-front-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={category.image.src}
                                    alt={category.image.alt}
                                    width={480}
                                    height={320}
                                    className="aspect-[480/320] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-front-panel via-transparent to-transparent" />
                            </div>
                            <div className="flex flex-1 items-start justify-between gap-3 p-5">
                                <div>
                                    <h3 className="text-[1.1rem] font-semibold tracking-[-0.015em] text-white">
                                        {category.name}
                                    </h3>
                                    <p className="mt-2 text-[14px] leading-relaxed text-front-steel">
                                        {category.blurb}
                                    </p>
                                </div>
                                <ArrowUpRight className="mt-1 size-4 shrink-0 text-front-steel transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-front-ember-soft" />
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}
