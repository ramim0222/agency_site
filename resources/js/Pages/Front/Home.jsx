import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Hero from "@/Components/Front/Hero";
import Reveal from "@/Components/Front/Reveal";
import ServiceCard from "@/Components/Front/ServiceCard";
import PortfolioCarousel from "@/Components/Front/PortfolioCarousel";
import TechStackBadge from "@/Components/Front/TechStackBadge";
import TestimonialCarousel from "@/Components/Front/TestimonialCarousel";
import StatsBar from "@/Components/Front/StatsBar";
import BlogPreviewCard from "@/Components/Front/BlogPreviewCard";
import CtaBand from "@/Components/Front/CtaBand";
import Footer from "@/Components/Front/Footer";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ScrollTrigger } from "@/lib/motion";
import {
    blogPosts,
    finalCta,
    portfolio,
    services,
    stats,
    techStack,
    testimonials,
} from "@/data/front/home";

export default function Home() {
    const servicesRef = useScrollReveal("[data-reveal]");
    const portfolioRevealRef = useScrollReveal("[data-reveal]");
    const blogRef = useScrollReveal("[data-reveal]");

    // ScrollTrigger measures element positions during its own init (useLayoutEffect).
    // If images or web-fonts haven't loaded yet, those measurements are wrong and
    // some triggers never fire — elements stay invisible forever.
    //
    // Fix: refresh ScrollTrigger at several points so it always has accurate
    // positions.  This replicates what opening DevTools does (a viewport resize
    // automatically triggers a refresh internally).
    useEffect(() => {
        // Tick 1 — 150 ms: after all useLayoutEffect / useGSAP contexts have
        // finished setting up their triggers on this paint cycle.
        const t1 = setTimeout(() => ScrollTrigger.refresh(), 150);

        // Tick 2 — 500 ms: a second pass for any async font/image shifts that
        // settle in the first half-second.
        const t2 = setTimeout(() => ScrollTrigger.refresh(), 500);

        // Tick 3 — window.load: final pass once every resource (hero image, etc.)
        // has finished loading and the full page height is known.
        const onLoad = () => setTimeout(() => ScrollTrigger.refresh(), 100);
        window.addEventListener("load", onLoad, { once: true });

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener("load", onLoad);
        };
    }, []);

    return (
        <div className="front bg-front-graphite">
            <Head title="Kiln — Product Engineering Studio">
                <meta
                    name="description"
                    content="Kiln builds web platforms, mobile apps, and SaaS products for businesses that need working software, not just a plan. Get a free quote today."
                />
            </Head>

            <Header />

            <main>
                <Hero />

                {/* Services -------------------------------------------------- */}
                <section id="services" className="bg-front-paper py-24 lg:py-28">
                    <div className="front-container">
                        <Reveal className="flex flex-col gap-4 lg:max-w-[46ch]">
                            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-slate">
                                What we build
                            </span>
                            <h2 className="text-[2rem] leading-[1.12] font-semibold tracking-[-0.02em] text-front-ink sm:text-[2.5rem]">
                            One team. Four ways we work.
                            </h2>
                            <p className="text-[15.5px] leading-relaxed text-front-slate">
                            Same team on every project — same kickoff call, same handover checklist, whether it's a marketing site or a mobile app. Nothing gets handed off to a second agency halfway through.
                            </p>
                        </Reveal>

                        <div
                            ref={servicesRef}
                            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
                        >
                            {services.map((service, i) => (
                                <ServiceCard key={service.key} service={service} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio --------------------------------------------------- */}
                <section
                    ref={portfolioRevealRef}
                    className="bg-front-graphite py-24 lg:py-28"
                >
                    <div className="front-container">
                        <PortfolioCarousel
                            projects={portfolio}
                            eyebrow="Selected work"
                            title="Products we've shipped for real teams."
                        />
                    </div>
                </section>

                {/* Proof band: tech stack + testimonials + stats --------------- */}
                <section className="bg-front-paper py-24 lg:py-28">
                    <div className="front-container">
                        <Reveal className="text-center font-mono text-[12px] uppercase tracking-[0.18em] text-front-slate">
                            Built with
                        </Reveal>

                        <div className="front-scrollbar-hide mt-8 overflow-x-hidden">
                            <div className="flex w-max gap-4 front-marquee-track">
                                {[...techStack, ...techStack].map((tech, i) => (
                                    <TechStackBadge key={`${tech.key}-${i}`} tech={tech} />
                                ))}
                            </div>
                        </div>

                        <div className="mt-24 grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
                            <Reveal className="flex flex-col gap-4">
                                <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-slate">
                                    Client notes
                                </span>
                                <h2 className="text-[2rem] leading-[1.12] font-semibold tracking-[-0.02em] text-front-ink sm:text-[2.4rem]">
                                    What it's like to work with us.
                                </h2>
                                <p className="max-w-[40ch] text-[15px] leading-relaxed text-front-slate">
                                    Three clients, three very different builds — asked what
                                    stuck with them after launch.
                                </p>
                            </Reveal>

                            <Reveal>
                                <TestimonialCarousel testimonials={testimonials} />
                            </Reveal>
                        </div>

                        <Reveal className="mt-16">
                            <StatsBar stats={stats} />
                        </Reveal>
                    </div>
                </section>

                {/* Blog ---------------------------------------------------------- */}
                <section className="bg-front-graphite py-24 lg:py-28">
                    <div className="front-container">
                        <Reveal className="flex flex-col gap-4 lg:max-w-[46ch]">
                            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft">
                                From the studio
                            </span>
                            <h2 className="text-[2rem] leading-[1.12] font-semibold tracking-[-0.02em] text-white sm:text-[2.5rem]">
                                Notes on shipping software.
                            </h2>
                        </Reveal>

                        <div ref={blogRef} className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {blogPosts
                                .filter((p) => p.featured)
                                .map((post) => (
                                    <BlogPreviewCard
                                        key={post.key}
                                        post={post}
                                        featured
                                        className="lg:row-span-1"
                                    />
                                ))}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
                                {blogPosts
                                    .filter((p) => !p.featured)
                                    .map((post) => (
                                        <BlogPreviewCard key={post.key} post={post} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CtaBand content={finalCta} />
            </main>

            <Footer />
        </div>
    );
}
