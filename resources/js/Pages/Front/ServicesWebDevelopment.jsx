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
    webDevFaq,
    webDevPricing,
    webDevProcess,
    webDevService,
} from "@/data/front/servicesWebDevelopment";

/**
 * Web development service — conversion landing for ads + organic.
 * Skills: frontend-design (full-bleed hero), taste-design (process indices),
 * gsap-react (hero + timeline), ui-ux-pro-max (CTAs, empty portfolio).
 */
export default function ServicesWebDevelopment() {
    const websiteProjects = getProjectsByCategory("website", 3);

    return (
        <div className="front bg-front-graphite">
            <Head title="Web Development — Kiln">
                <meta
                    name="description"
                    content="Custom website development from Kiln — fast marketing sites and content platforms in Laravel and React. Get a free quote or WhatsApp us."
                />
            </Head>

            <Header />

            <main>
                <ServiceHero
                    eyebrow={webDevService.eyebrow}
                    headline={webDevService.headline}
                    sub={webDevService.sub}
                    image={webDevService.heroImage}
                    primaryCta={webDevService.primaryCta}
                    whatsappMessage={webDevService.whatsappMessage}
                />

                <ProcessTimeline
                    eyebrow={webDevService.processEyebrow}
                    title={webDevService.processTitle}
                    steps={webDevProcess}
                />

                <section className="front-container py-16 lg:py-20">
                    <Reveal>
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                    {webDevService.portfolioEyebrow}
                                </p>
                                <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                                    {webDevService.portfolioTitle}
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
                        projects={websiteProjects}
                        filterKey="website"
                        emptyMessage={webDevService.portfolioEmpty}
                    />
                </section>

                <PricingSnapshot
                    eyebrow={webDevService.pricingEyebrow}
                    title={webDevService.pricingTitle}
                    note={webDevService.pricingNote}
                    tiers={webDevPricing}
                    viewAllHref="/pricing#web-development"
                    viewAllLabel="Full pricing"
                />

                <FaqAccordion
                    items={webDevFaq}
                    title={webDevService.faqTitle}
                    moreHref="/faq#process"
                    moreLabel="All FAQs"
                />

                <CtaBand
                    content={webDevService.cta}
                    whatsappMessage={webDevService.whatsappMessage}
                />
            </main>

            <Footer />
        </div>
    );
}
