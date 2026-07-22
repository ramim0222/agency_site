import { useRef } from "react";
import { Link } from "@inertiajs/react";
import SaasProductCard from "@/Components/Front/SaasProductCard";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export default function SaasProductGrid({
    products = [],
    emptyMessage = "No products match.",
    filterKey = "all",
    searchQuery = "",
}) {
    const gridRef = useRef(null);

    useGSAP(
        () => {
            if (!gridRef.current) return;
            const cards = gridRef.current.querySelectorAll("[data-saas-card]");
            if (!cards.length) return;

            if (prefersReducedMotion()) {
                gsap.set(cards, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                cards,
                { opacity: 0, y: 18 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: EASE.out,
                }
            );
        },
        {
            scope: gridRef,
            dependencies: [filterKey, searchQuery, products.length],
        }
    );

    if (products.length === 0) {
        return (
            <div
                className="rounded-2xl border border-dashed border-white/12 bg-front-panel/40 px-6 py-16 text-center"
                role="status"
            >
                <p className="text-[16px] text-white">{emptyMessage}</p>
                <p className="mt-2 text-[14px] text-front-steel">
                    <Link
                        href="/saas"
                        className="text-front-ember-soft underline-offset-4 transition-colors hover:text-front-ember hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                    >
                        Clear filters
                    </Link>
                    {" · "}
                    <Link
                        href="/contact"
                        className="text-front-ember-soft underline-offset-4 transition-colors hover:text-front-ember hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                    >
                        Request a custom build
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div
            ref={gridRef}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
            {products.map((product) => (
                <SaasProductCard key={product.slug} product={product} />
            ))}
        </div>
    );
}
