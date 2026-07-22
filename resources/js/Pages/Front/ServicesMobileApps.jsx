import { Head, Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import ServiceHero from "@/Components/Front/ServiceHero";
import AppStoreBadgeRow from "@/Components/Front/AppStoreBadgeRow";
import ProcessTimeline from "@/Components/Front/ProcessTimeline";
import PortfolioGrid from "@/Components/Front/PortfolioGrid";
import PricingSnapshot from "@/Components/Front/PricingSnapshot";
import FaqAccordion from "@/Components/Front/FaqAccordion";
import CtaBand from "@/Components/Front/CtaBand";
import Reveal from "@/Components/Front/Reveal";
import { getProjectsByCategory } from "@/data/front/portfolio";
import {
    mobileAppsFaq,
    mobileAppsPricing,
    mobileAppsProcess,
    mobileAppsService,
    mobileStoreBadges,
} from "@/data/front/servicesMobileApps";

/**
 * Mobile apps service — React Native, iOS + Android, Laravel API.
 * Skills: frontend-design (full-bleed hero), taste-design (store badge row),
 * gsap-react (hero + process), ui-ux-pro-max (placeholder store links).
 */
export default function ServicesMobileApps() {
    const mobileProjects = getProjectsByCategory("mobile_app", 3);

    return (
        <div className="front bg-front-graphite">
            <Head title="Mobile Apps — Kiln">
                <meta
                    name="description"
                    content="Cross-platform React Native apps from Kiln — iOS and Android with a Laravel backend. Get a free quote or WhatsApp us."
                />
            </Head>

            <Header />

            <main>
                <ServiceHero
                    eyebrow={mobileAppsService.eyebrow}
                    headline={mobileAppsService.headline}
                    sub={mobileAppsService.sub}
                    image={mobileAppsService.heroImage}
                    primaryCta={mobileAppsService.primaryCta}
                    whatsappMessage={mobileAppsService.whatsappMessage}
                />

                <section className="front-container py-16 lg:py-20">
                    <Reveal>
                        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                    {mobileAppsService.portfolioEyebrow}
                                </p>
                                <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                                    {mobileAppsService.portfolioTitle}
                                </h2>
                            </div>
                            <Link
                                href="/portfolio"
                                className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                View portfolio
                                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </Reveal>

                    <AppStoreBadgeRow
                        badges={mobileStoreBadges}
                        note={mobileAppsService.storeNote}
                        className="mb-8"
                    />

                    <PortfolioGrid
                        projects={mobileProjects}
                        filterKey="mobile_app"
                        emptyMessage={mobileAppsService.portfolioEmpty}
                    />
                </section>

                <ProcessTimeline
                    eyebrow={mobileAppsService.processEyebrow}
                    title={mobileAppsService.processTitle}
                    steps={mobileAppsProcess}
                />

                <PricingSnapshot
                    eyebrow={mobileAppsService.pricingEyebrow}
                    title={mobileAppsService.pricingTitle}
                    note={mobileAppsService.pricingNote}
                    tiers={mobileAppsPricing}
                    viewAllHref="/pricing#mobile-apps"
                    viewAllLabel="Full pricing"
                />

                <FaqAccordion
                    items={mobileAppsFaq}
                    title={mobileAppsService.faqTitle}
                    moreHref="/faq#process"
                    moreLabel="All FAQs"
                />

                <CtaBand
                    content={mobileAppsService.cta}
                    whatsappMessage={mobileAppsService.whatsappMessage}
                />
            </main>

            <Footer />
        </div>
    );
}
