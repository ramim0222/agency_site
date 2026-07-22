import { Head, Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import MissionSection from "@/Components/Front/MissionSection";
import TeamGrid from "@/Components/Front/TeamGrid";
import TechStackBadge from "@/Components/Front/TechStackBadge";
import StatsBar from "@/Components/Front/StatsBar";
import CtaBand from "@/Components/Front/CtaBand";
import Reveal from "@/Components/Front/Reveal";
import {
    aboutPage,
    aboutStack,
    aboutStats,
    mission,
    partners,
    team,
} from "@/data/front/about";

/**
 * About — credibility: story, team, stack, partners, stats.
 * Skills: frontend-design (editorial split), taste-design (serif mission),
 * gsap-react (mission + team), ui-ux-pro-max (empty partners/stats).
 */
export default function About() {
    return (
        <div className="front bg-front-graphite">
            <Head title="About — Kiln">
                <meta
                    name="description"
                    content="Kiln is a product engineering studio building websites, web apps, mobile apps, and SaaS products teams actually run. Meet the people and the stack."
                />
            </Head>

            <Header />

            <main>
                <MissionSection
                    mission={mission}
                    eyebrow={aboutPage.eyebrow}
                    title={aboutPage.title}
                />

                <TeamGrid
                    members={team}
                    eyebrow="Team"
                    title="Small studio. Accountable builders."
                />

                <section className="front-container pb-4">
                    <Reveal>
                        <Link
                            href="/careers"
                            className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            Careers at Kiln
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </Reveal>
                </section>

                <section className="front-container py-16 lg:py-20">
                    <Reveal>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            Stack
                        </p>
                        <h2 className="mt-2 max-w-[20ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                            What we build with
                        </h2>
                        <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-front-steel">
                            Laravel and React at the core — with native mobile
                            and billing tools when the product needs them.
                        </p>
                    </Reveal>
                    <div className="mt-8 flex flex-wrap gap-2.5">
                        {aboutStack.map((tech) => (
                            <TechStackBadge
                                key={tech.key}
                                tech={tech}
                                variant="graphite"
                            />
                        ))}
                    </div>
                </section>

                <section className="front-container py-16 lg:py-20">
                    <Reveal>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            Partners
                        </p>
                        <h2 className="mt-2 max-w-[20ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                            Platforms we ship on
                        </h2>
                    </Reveal>

                    {partners.length === 0 ? (
                        <p className="mt-8 rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                            Partnership marks coming soon.
                        </p>
                    ) : (
                        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
                            {partners.map((partner, index) => (
                                <Reveal
                                    key={partner.key}
                                    delay={index * 0.04}
                                    as="li"
                                >
                                    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-front-panel px-4 py-8 text-center transition-colors hover:border-white/18">
                                        <img
                                            src={partner.image.src}
                                            alt={partner.image.alt}
                                            width={200}
                                            height={80}
                                            className="h-10 w-auto object-contain opacity-90"
                                            loading="lazy"
                                        />
                                        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-front-steel-dim">
                                            {partner.note}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </ul>
                    )}
                </section>

                <section className="front-container py-16 lg:py-20">
                    <Reveal>
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                    By the numbers
                                </p>
                                <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                                    Proof in the work
                                </h2>
                            </div>
                            <Link
                                href="/portfolio"
                                className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                See portfolio
                                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </Reveal>
                    <StatsBar stats={aboutStats} variant="graphite" />
                </section>

                <CtaBand
                    content={aboutPage.cta}
                    whatsappMessage={aboutPage.whatsappMessage}
                />
            </main>

            <Footer />
        </div>
    );
}
