import { useRef } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import CaseStudyHeader from "@/Components/Front/CaseStudyHeader";
import ChallengeSolutionBlock from "@/Components/Front/ChallengeSolutionBlock";
import TechStackBadge from "@/Components/Front/TechStackBadge";
import ScreenshotGallery from "@/Components/Front/ScreenshotGallery";
import ResultsMetrics from "@/Components/Front/ResultsMetrics";
import TestimonialQuote from "@/Components/Front/TestimonialQuote";
import CtaBand from "@/Components/Front/CtaBand";
import RelatedPortfolio from "@/Components/Front/RelatedPortfolio";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    caseStudyCta,
    getProjectBySlug,
    getRelatedProjects,
    stackBadges,
} from "@/data/front/portfolio";

/**
 * Individual case study — problem / solution / proof.
 * Skills: frontend-design (editorial kiln brief), taste-design (serif quote),
 * gsap-react (hero + metric stagger), ui-ux-pro-max (gallery a11y, empty states).
 */
export default function PortfolioShow({ slug }) {
    const heroScope = useRef(null);
    const project = getProjectBySlug(slug);
    const related = getRelatedProjects(slug, 3);
    const badges = stackBadges(project?.stack ?? []);

    useGSAP(
        () => {
            if (!heroScope.current || !project) return;
            const bits = gsap.utils.toArray(
                "[data-case-hero]",
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

    if (!project) {
        return (
            <div className="front min-h-[100dvh] bg-front-graphite">
                <Head title="Case study not found — Kiln" />
                <Header />
                <main className="front-container py-32 text-center">
                    <h1 className="font-serif text-3xl italic text-front-paper">
                        Case study not found
                    </h1>
                    <a
                        href="/portfolio"
                        className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft"
                    >
                        ← Back to portfolio
                    </a>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="front bg-front-graphite">
            <Head title={`${project.title} — Kiln`}>
                <meta
                    name="description"
                    content={`${project.client}: ${project.result}`}
                />
            </Head>

            <Header />

            <main>
                <div ref={heroScope}>
                    <CaseStudyHeader project={project} />
                </div>

                <ChallengeSolutionBlock
                    challenge={project.challenge}
                    solution={project.solution}
                />

                <section className="front-container pb-6">
                    <Reveal>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            Stack
                        </p>
                        <h2 className="mt-2 text-[1.35rem] font-semibold tracking-[-0.02em] text-white">
                            What we built it with
                        </h2>
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {badges.map((tech) => (
                                <TechStackBadge
                                    key={tech.label}
                                    tech={tech}
                                    variant="graphite"
                                />
                            ))}
                        </div>
                    </Reveal>
                </section>

                <ScreenshotGallery images={project.gallery} />

                <ResultsMetrics metrics={project.metrics} />

                <TestimonialQuote testimonial={project.testimonial} />

                <CtaBand content={caseStudyCta} />

                <RelatedPortfolio projects={related} />
            </main>

            <Footer />
        </div>
    );
}
