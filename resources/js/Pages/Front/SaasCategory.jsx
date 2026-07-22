import { useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import CategoryHeader from "@/Components/Front/CategoryHeader";
import SaasProductGrid from "@/Components/Front/SaasProductGrid";
import CategoryFilterTabs from "@/Components/Front/CategoryFilterTabs";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    getCategoryPage,
    getProductsByCategory,
    products,
    saasCategories,
} from "@/data/front/saas";

/**
 * Dedicated category catalog — static filter per slug.
 * Skills: frontend-design (category composition), taste-design (breadcrumb quiet),
 * gsap-react (hero + grid), ui-ux-pro-max (empty + sibling tabs).
 */
export default function SaasCategory({ categorySlug }) {
    const heroRef = useRef(null);
    const category = getCategoryPage(categorySlug);
    const categoryProducts = category
        ? getProductsByCategory(category.key)
        : [];

    const counts = {
        all: products.length,
        ...Object.fromEntries(
            saasCategories
                .filter((tab) => tab.key !== "all")
                .map((tab) => [
                    tab.key,
                    getProductsByCategory(tab.key).length,
                ])
        ),
    };

    useGSAP(
        () => {
            if (!heroRef.current || !category) return;
            const bits = gsap.utils.toArray(
                "[data-saas-category-hero]",
                heroRef.current
            );

            if (prefersReducedMotion()) {
                gsap.set(bits, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                bits,
                { opacity: 0, y: 18 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: EASE.out,
                }
            );
        },
        { scope: heroRef, dependencies: [categorySlug] }
    );

    if (!category) {
        return (
            <div className="front min-h-[100dvh] bg-front-graphite">
                <Head title="Category not found — Kiln" />
                <Header />
                <main className="front-container py-32 text-center">
                    <h1 className="font-serif text-3xl italic text-front-paper">
                        Category not found
                    </h1>
                    <Link
                        href="/saas"
                        className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft"
                    >
                        ← Back to catalog
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="front bg-front-graphite">
            <Head title={`${category.name} SaaS — Kiln`}>
                <meta name="description" content={category.description} />
            </Head>

            <Header />

            <main>
                <div ref={heroRef}>
                    <CategoryHeader
                        category={category}
                        productCount={categoryProducts.length}
                    />
                </div>

                <section className="front-container pb-20 lg:pb-28">
                    <div className="mb-8">
                        <CategoryFilterTabs
                            tabs={saasCategories}
                            value={category.key}
                            counts={counts}
                            ariaLabel="Browse other SaaS categories"
                        />
                    </div>

                    <SaasProductGrid
                        products={categoryProducts}
                        filterKey={category.key}
                        emptyMessage={category.empty}
                    />
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
