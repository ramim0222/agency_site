import { useMemo, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import FilterTabs from "@/Components/Front/FilterTabs";
import PortfolioGrid from "@/Components/Front/PortfolioGrid";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    filterTabs,
    portfolioPage,
    projects,
} from "@/data/front/portfolio";

/**
 * Case study index — graphite kiln floor, ember accents, client-side filters.
 * Skills: frontend-design (editorial grid), taste-design (mono meta),
 * gsap-react (hero + filter restagger), ui-ux-pro-max (tabs, empty state).
 */
export default function Portfolio() {
    const heroRef = useRef(null);
    const [filter, setFilter] = useState("all");

    const counts = useMemo(() => {
        const base = { all: projects.length };
        filterTabs.forEach((tab) => {
            if (tab.key === "all") return;
            base[tab.key] = projects.filter((p) => p.category === tab.key).length;
        });
        return base;
    }, []);

    const visible = useMemo(() => {
        if (filter === "all") return projects;
        return projects.filter((project) => project.category === filter);
    }, [filter]);

    useGSAP(
        () => {
            if (!heroRef.current) return;
            const bits = gsap.utils.toArray(
                "[data-portfolio-hero]",
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
            <Head title="Portfolio — Kiln Case Studies">
                <meta
                    name="description"
                    content="Selected Kiln case studies across websites, web apps, mobile apps, and SaaS products. Filter by category and explore the work."
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
                                "radial-gradient(45% 50% at 15% 0%, rgba(217,142,74,0.45), transparent 70%)",
                        }}
                        aria-hidden="true"
                    />

                    <div className="front-container relative max-w-3xl">
                        <span
                            data-portfolio-hero
                            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                        >
                            <span className="h-px w-6 bg-front-ember-soft/60" />
                            {portfolioPage.eyebrow}
                        </span>
                        <h1
                            data-portfolio-hero
                            className="mt-5 max-w-[16ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                        >
                            {portfolioPage.title}
                        </h1>
                        <p
                            data-portfolio-hero
                            className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                        >
                            {portfolioPage.intro}
                        </p>
                    </div>
                </section>

                <section className="front-container pb-20 lg:pb-28">
                    <div className="mb-8">
                        <FilterTabs
                            tabs={filterTabs}
                            value={filter}
                            counts={counts}
                            onChange={setFilter}
                        />
                    </div>

                    <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim">
                        Showing {visible.length} of {projects.length}
                    </p>

                    <PortfolioGrid
                        projects={visible}
                        filterKey={filter}
                        emptyMessage={portfolioPage.empty}
                    />
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
