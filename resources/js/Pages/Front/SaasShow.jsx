import { useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import ProductHeader from "@/Components/Front/ProductHeader";
import ScreenshotGallery from "@/Components/Front/ScreenshotGallery";
import FeatureList from "@/Components/Front/FeatureList";
import PlanComparisonTable from "@/Components/Front/PlanComparisonTable";
import FaqAccordion from "@/Components/Front/FaqAccordion";
import RelatedProducts from "@/Components/Front/RelatedProducts";
import ContactAboutPlanButton from "@/Components/Front/ContactAboutPlanButton";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    getProductDetail,
    getRelatedProducts,
    whatsappMessageForProduct,
} from "@/data/front/saas";

/**
 * SaaS product detail — static brief, informational plans, lead CTAs.
 * Skills: frontend-design (kiln product brief), taste-design (plan columns),
 * gsap-react (hero + FAQ), ui-ux-pro-max (empty states, contact query context).
 */
export default function SaasShow({ slug }) {
    const heroScope = useRef(null);
    const product = getProductDetail(slug);
    const related = getRelatedProducts(slug, 3);
    const recommendedPlan =
        product?.plans?.find((plan) => plan.recommended) ??
        product?.plans?.[0] ??
        null;

    useGSAP(
        () => {
            if (!heroScope.current || !product) return;
            const bits = gsap.utils.toArray(
                "[data-saas-detail-hero]",
                heroScope.current
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
                    stagger: 0.07,
                    ease: EASE.out,
                }
            );
        },
        { scope: heroScope, dependencies: [slug] }
    );

    if (!product) {
        return (
            <div className="front min-h-[100dvh] bg-front-graphite">
                <Head title="Product not found — Kiln" />
                <Header />
                <main className="front-container py-32 text-center">
                    <h1 className="font-serif text-3xl italic text-front-paper">
                        Product not found
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
            <Head title={`${product.name} — Kiln SaaS`}>
                <meta name="description" content={product.tagline} />
            </Head>

            <Header />

            <main>
                <div ref={heroScope}>
                    <ProductHeader product={product} />
                </div>

                <ScreenshotGallery
                    images={product.gallery}
                    eyebrow="Product screens"
                    title="How it looks in use"
                />

                <FeatureList features={product.features} />

                <PlanComparisonTable product={product} plans={product.plans} />

                {recommendedPlan ? (
                    <section className="front-container pb-4">
                        <Reveal>
                            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-front-panel px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                                <div>
                                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                        Get started
                                    </p>
                                    <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-front-steel">
                                        Prefer a quick path? Ask about the{" "}
                                        <span className="text-white">
                                            {recommendedPlan.name}
                                        </span>{" "}
                                        plan for {product.name} — or WhatsApp us
                                        with the same context.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2.5 sm:min-w-[220px]">
                                    <ContactAboutPlanButton
                                        productSlug={product.slug}
                                        planKey={recommendedPlan.key}
                                        label="Get started — contact us"
                                        className="w-full"
                                    />
                                    <WhatsAppButton
                                        variant="outline"
                                        label="WhatsApp Kiln"
                                        message={whatsappMessageForProduct(
                                            product,
                                            recommendedPlan
                                        )}
                                        className="w-full justify-center"
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </section>
                ) : null}

                <FaqAccordion
                    items={product.faq}
                    title={`About ${product.name}`}
                    moreHref="/faq#saas"
                    moreLabel="SaaS FAQs"
                />

                <RelatedProducts products={related} />
            </main>

            <Footer />
        </div>
    );
}
