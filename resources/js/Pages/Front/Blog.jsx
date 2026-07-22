import { useDeferredValue, useMemo, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import CategoryFilter from "@/Components/Front/CategoryFilter";
import SearchBar from "@/Components/Front/SearchBar";
import BlogPostGrid from "@/Components/Front/BlogPostGrid";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    blogCategories,
    blogPage,
    categoryLabels,
    posts,
} from "@/data/front/blog";

/**
 * Blog index — SEO content hub from static post data.
 * Skills: frontend-design (featured lead + grid), taste-design (serif title, mono meta),
 * gsap-react (hero + filter restagger), ui-ux-pro-max (search, empty, deferred).
 */
export default function Blog() {
    const heroRef = useRef(null);
    const [filter, setFilter] = useState("all");
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    const counts = useMemo(() => {
        const base = { all: posts.length };
        blogCategories.forEach((tab) => {
            if (tab.key === "all") return;
            base[tab.key] = posts.filter((p) => p.category === tab.key).length;
        });
        return base;
    }, []);

    const visible = useMemo(() => {
        const q = deferredQuery.trim().toLowerCase();
        return posts.filter((post) => {
            if (filter !== "all" && post.category !== filter) return false;
            if (!q) return true;
            return (
                post.title.toLowerCase().includes(q) ||
                post.excerpt.toLowerCase().includes(q) ||
                (categoryLabels[post.category] || "").toLowerCase().includes(q)
            );
        });
    }, [filter, deferredQuery]);

    const clearFilters = () => {
        setFilter("all");
        setQuery("");
    };

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray("[data-blog-hero]", heroRef.current);

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
            <Head title="Blog — Kiln Studio Notes">
                <meta
                    name="description"
                    content="Kiln studio notes on scoping, shipping, and running product software — process, engineering, mobile, and SaaS."
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
                                "radial-gradient(42% 48% at 78% 0%, rgba(217,142,74,0.42), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-3xl">
                        <span
                            data-blog-hero
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {blogPage.eyebrow}
                        </span>
                        <h1
                            data-blog-hero
                            className="mt-5 max-w-[14ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                        >
                            {blogPage.title}
                        </h1>
                        <p
                            data-blog-hero
                            className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                        >
                            {blogPage.intro}
                        </p>
                    </div>
                </section>

                <section className="front-container pb-20 lg:pb-28">
                    <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <CategoryFilter
                                tabs={blogCategories}
                                value={filter}
                                counts={counts}
                                onChange={setFilter}
                            />
                        </div>
                        <SearchBar
                            value={query}
                            onChange={setQuery}
                            placeholder={blogPage.searchPlaceholder}
                        />
                    </div>

                    <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim">
                        Showing {visible.length} of {posts.length}
                        {filter !== "all"
                            ? ` · ${blogCategories.find((t) => t.key === filter)?.label ?? filter}`
                            : ""}
                        {deferredQuery.trim()
                            ? ` · “${deferredQuery.trim()}”`
                            : ""}
                    </p>

                    <BlogPostGrid
                        posts={visible}
                        filterKey={filter}
                        searchQuery={deferredQuery}
                        emptyMessage={blogPage.empty}
                        onClear={clearFilters}
                    />
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
