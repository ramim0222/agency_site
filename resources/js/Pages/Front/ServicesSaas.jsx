import { Head, Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import ServiceHero from "@/Components/Front/ServiceHero";
import CategoryGrid from "@/Components/Front/CategoryGrid";
import SaasProductCard from "@/Components/Front/SaasProductCard";
import BenefitsSection from "@/Components/Front/BenefitsSection";
import CtaBand from "@/Components/Front/CtaBand";
import Reveal from "@/Components/Front/Reveal";
import { getProductBySlug } from "@/data/front/saas";
import {
    saasBenefits,
    saasFeaturedSlugs,
    saasMarketplaceCategories,
    saasService,
} from "@/data/front/servicesSaas";

/**
 * SaaS subscriptions service — marketplace pitch → catalog → conversation.
 * Skills: frontend-design (full-bleed hero), taste-design (category tiles),
 * gsap-react (reveals), ui-ux-pro-max (empty featured, no fake checkout).
 */
export default function ServicesSaas() {
    const featured = saasFeaturedSlugs
        .map((slug) => getProductBySlug(slug))
        .filter(Boolean);

    return (
        <div className="front bg-front-graphite">
            <Head title="SaaS Subscriptions — Kiln">
                <meta
                    name="description"
                    content="Ready-made SaaS products from Kiln — billing, ops, booking, and commerce starters adapted for your business. Browse the catalog, then talk to us. No self-serve checkout."
                />
            </Head>

            <Header />

            <main>
                <ServiceHero
                    eyebrow={saasService.eyebrow}
                    headline={saasService.headline}
                    sub={saasService.sub}
                    image={saasService.heroImage}
                    primaryCta={saasService.primaryCta}
                    whatsappMessage={saasService.whatsappMessage}
                />

                <CategoryGrid
                    categories={saasMarketplaceCategories}
                    eyebrow={saasService.categoriesEyebrow}
                    title={saasService.categoriesTitle}
                />

                <section className="front-container py-16 lg:py-20">
                    <Reveal>
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                    {saasService.featuredEyebrow}
                                </p>
                                <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                                    {saasService.featuredTitle}
                                </h2>
                            </div>
                            <Link
                                href="/saas"
                                className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                View all products
                                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </Reveal>

                    {featured.length === 0 ? (
                        <p
                            className="rounded-2xl border border-dashed border-white/12 px-6 py-16 text-center text-[16px] text-front-steel"
                            role="status"
                        >
                            {saasService.featuredEmpty}{" "}
                            <Link
                                href="/saas"
                                className="text-front-ember-soft underline-offset-4 hover:underline"
                            >
                                Open catalog
                            </Link>
                            .
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                            {featured.map((product) => (
                                <SaasProductCard
                                    key={product.slug}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}
                </section>

                <BenefitsSection
                    eyebrow={saasService.benefitsEyebrow}
                    title={saasService.benefitsTitle}
                    benefits={saasBenefits}
                />

                <CtaBand
                    content={saasService.cta}
                    whatsappMessage={saasService.whatsappMessage}
                />
            </main>

            <Footer />
        </div>
    );
}
