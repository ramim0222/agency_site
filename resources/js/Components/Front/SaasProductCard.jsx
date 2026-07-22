import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import {
    categoryLabels,
    formatStartingPrice,
} from "@/data/front/saas";

export default function SaasProductCard({ product }) {
    const category = categoryLabels[product.category] ?? product.category;

    return (
        <Link
            href={`/saas/${product.slug}`}
            data-saas-card
            className="group flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-front-panel transition-all duration-300 hover:border-white/20 hover:bg-front-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50"
        >
            <div className="relative overflow-hidden">
                <img
                    src={product.image.src}
                    alt={product.image.alt}
                    width={720}
                    height={480}
                    className="aspect-[720/480] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-front-panel to-transparent" />
                <span className="absolute left-4 top-4 rounded-md border border-white/15 bg-front-graphite/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm">
                    {category}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.15rem] font-semibold tracking-[-0.015em] text-white">
                        {product.name}
                    </h3>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-front-steel transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-front-ember-soft" />
                </div>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-front-steel">
                    {product.tagline}
                </p>
                <div className="mt-5 border-t border-white/8 pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-front-steel-dim">
                        From
                    </p>
                    <p className="mt-1 font-mono text-[1.2rem] font-semibold tabular-nums tracking-[-0.02em] text-front-ember-soft">
                        {formatStartingPrice(product.startingPrice)}
                    </p>
                    {product.priceNote ? (
                        <p className="mt-0.5 text-[12px] text-front-steel-dim">
                            {product.priceNote}
                        </p>
                    ) : null}
                </div>
            </div>
        </Link>
    );
}
