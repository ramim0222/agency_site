import { useDeferredValue, useMemo, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import CategoryFilterTabs from "@/Components/Front/CategoryFilterTabs";
import SearchBar from "@/Components/Front/SearchBar";
import SaasProductGrid from "@/Components/Front/SaasProductGrid";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { products, saasCategories, saasPage } from "@/data/front/saas";

/**
 * SaaS product catalog — static products, client search + category URLs.
 * Skills: frontend-design (kiln storefront), taste-design (mono prices),
 * gsap-react (hero + grid restagger), ui-ux-pro-max (search, empty, deferred).
 */
export default function Saas() {
    const heroRef = useRef(null);
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    const counts = useMemo(() => {
        const base = { all: products.length };
        saasCategories.forEach((tab) => {
            if (tab.key === "all") return;
            base[tab.key] = products.filter((p) => p.category === tab.key).length;
        });
        return base;
    }, []);

    const visible = useMemo(() => {
        const q = deferredQuery.trim().toLowerCase();
        if (!q) return products;
        return products.filter(
            (product) =>
                product.name.toLowerCase().includes(q) ||
                product.tagline.toLowerCase().includes(q) ||
                product.category.toLowerCase().includes(q)
        );
    }, [deferredQuery]);

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray(
                "[data-saas-hero]",
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
        { scope: heroRef }
    );

    return (
        <div className="front bg-front-graphite">
            <Head title="SaaS Catalog — Kiln Products">
                <meta
                    name="description"
                    content="Browse Kiln's ready-to-adapt SaaS products — billing, operations, booking, and commerce starters with clear starting prices."
                />
            </Head>

            <Header />

            <main>
                <section
                    ref={heroRef}
                    className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-12"
                >
                    <div className="front-noise" />
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[50%] opacity-[0.14]"
                        style={{
                            backgroundImage:
                                "radial-gradient(45% 50% at 85% 0%, rgba(217,142,74,0.45), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-3xl">
                        <span
                            data-saas-hero
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {saasPage.eyebrow}
                        </span>
                        <h1
                            data-saas-hero
                            className="mt-5 max-w-[16ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                        >
                            {saasPage.title}
                        </h1>
                        <p
                            data-saas-hero
                            className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                        >
                            {saasPage.intro}
                        </p>
                    </div>
                </section>

                <section className="front-container pb-20 lg:pb-28">
                    <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <CategoryFilterTabs
                                tabs={saasCategories}
                                value="all"
                                counts={counts}
                            />
                        </div>
                        <SearchBar
                            value={query}
                            onChange={setQuery}
                            placeholder={saasPage.searchPlaceholder}
                        />
                    </div>

                    <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim">
                        All · showing {visible.length} of {products.length}
                        {deferredQuery.trim()
                            ? ` · “${deferredQuery.trim()}”`
                            : ""}
                    </p>

                    <SaasProductGrid
                        products={visible}
                        filterKey="all"
                        searchQuery={deferredQuery}
                        emptyMessage={saasPage.empty}
                    />
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
