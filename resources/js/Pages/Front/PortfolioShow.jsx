import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import { categoryLabels } from "@/data/front/portfolio";

/**
 * Lightweight case-study landing so /portfolio/{slug} links resolve.
 * Full narrative layout ships in a later Front prompt.
 */
export default function PortfolioShow({ project }) {
    const category = categoryLabels[project.category] ?? project.category;

    return (
        <div className="front min-h-[100dvh] bg-front-graphite">
            <Head title={`${project.title} — Kiln`}>
                <meta name="description" content={project.result} />
            </Head>

            <Header />

            <main className="front-container pt-28 pb-20 lg:pt-36">
                <Link
                    href="/portfolio"
                    className="font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                >
                    ← All case studies
                </Link>

                <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.12em] text-front-steel">
                    {category} · {project.client}
                    {project.year ? ` · ${project.year}` : ""}
                </p>
                <h1 className="mt-3 max-w-[18ch] font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] italic leading-[1.08] tracking-[-0.02em] text-front-paper">
                    {project.title}
                </h1>
                <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel">
                    {project.result}
                </p>

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                    <img
                        src={project.image.src}
                        alt={project.image.alt}
                        width={800}
                        height={520}
                        className="aspect-[800/520] w-full object-cover"
                    />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <span
                            key={item}
                            className="rounded border border-white/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-white/60"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <p className="mt-12 max-w-[42ch] text-[14px] text-front-steel">
                    Full case-study narrative is coming next. Meanwhile,{" "}
                    <Link
                        href="/contact"
                        className="text-front-ember-soft underline-offset-4 hover:underline"
                    >
                        ask us how we’d approach yours
                    </Link>
                    .
                </p>
            </main>

            <Footer />
        </div>
    );
}
