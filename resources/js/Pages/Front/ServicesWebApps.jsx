import { Head, Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import ServiceHero from "@/Components/Front/ServiceHero";
import ProcessTimeline from "@/Components/Front/ProcessTimeline";
import PortfolioGrid from "@/Components/Front/PortfolioGrid";
import PricingSnapshot from "@/Components/Front/PricingSnapshot";
import FaqAccordion from "@/Components/Front/FaqAccordion";
import CtaBand from "@/Components/Front/CtaBand";
import Reveal from "@/Components/Front/Reveal";
import { getProjectsByCategory } from "@/data/front/portfolio";
import {
    webAppsFaq,
    webAppsPricing,
    webAppsProcess,
    webAppsService,
} from "@/data/front/servicesWebApps";

/**
 * Web apps service — dashboards & internal tools (not marketing sites).
 * Skills: frontend-design (full-bleed hero), taste-design (process indices),
 * gsap-react (hero + timeline), ui-ux-pro-max (CTAs, empty portfolio).
 */
export default function ServicesWebApps() {
    const appProjects = getProjectsByCategory("web_app", 3);

    return (
        <div className="front bg-front-graphite">
            <Head title="Web Apps — Kiln">
                <meta
                    name="description"
                    content="Custom web applications from Kiln — dashboards, portals, and internal tools in Laravel and React. Get a free quote or WhatsApp us."
                />
            </Head>

            <Header />

            <main>
                <ServiceHero
                    eyebrow={webAppsService.eyebrow}
                    headline={webAppsService.headline}
                    sub={webAppsService.sub}
                    image={webAppsService.heroImage}
                    primaryCta={webAppsService.primaryCta}
                    whatsappMessage={webAppsService.whatsappMessage}
                />

                <ProcessTimeline
                    eyebrow={webAppsService.processEyebrow}
                    title={webAppsService.processTitle}
                    steps={webAppsProcess}
                />

                <section className="front-container py-16 lg:py-20">
                    <Reveal>
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                    {webAppsService.portfolioEyebrow}
                                </p>
                                <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                                    {webAppsService.portfolioTitle}
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

                    <PortfolioGrid
                        projects={appProjects}
                        filterKey="web_app"
                        emptyMessage={webAppsService.portfolioEmpty}
                    />
                </section>

                <PricingSnapshot
                    eyebrow={webAppsService.pricingEyebrow}
                    title={webAppsService.pricingTitle}
                    note={webAppsService.pricingNote}
                    tiers={webAppsPricing}
                    viewAllHref="/pricing#web-apps"
                    viewAllLabel="Full pricing"
                />

                <FaqAccordion
                    items={webAppsFaq}
                    title={webAppsService.faqTitle}
                    moreHref="/faq#process"
                    moreLabel="All FAQs"
                />

                <CtaBand
                    content={webAppsService.cta}
                    whatsappMessage={webAppsService.whatsappMessage}
                />
            </main>

            <Footer />
        </div>
    );
}
