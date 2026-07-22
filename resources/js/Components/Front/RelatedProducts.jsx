import { Link } from "@inertiajs/react";
import SaasProductCard from "@/Components/Front/SaasProductCard";
import Reveal from "@/Components/Front/Reveal";

export default function RelatedProducts({ products = [] }) {
    if (!products.length) return null;

    return (
        <section className="front-container py-16 lg:py-20">
            <Reveal>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            More products
                        </p>
                        <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                            Related in the catalog
                        </h2>
                    </div>
                    <Link
                        href="/saas"
                        className="font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                    >
                        View all →
                    </Link>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {products.map((product) => (
                    <SaasProductCard key={product.slug} product={product} />
                ))}
            </div>
        </section>
    );
}
