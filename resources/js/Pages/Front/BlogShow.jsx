import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { getPostBySlug } from "@/data/front/blog";

const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
});

/**
 * Thin post shell so /blog/{slug} links from the index resolve.
 * Full article body ships with Front-14.
 */
export default function BlogShow({ slug }) {
    const post = getPostBySlug(slug);

    if (!post) {
        return null;
    }

    return (
        <div className="front bg-front-graphite">
            <Head title={`${post.title} — Kiln Blog`}>
                <meta name="description" content={post.excerpt} />
            </Head>

            <Header />

            <main className="front-container pb-20 pt-28 lg:pb-28 lg:pt-36">
                <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                >
                    <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                    All posts
                </Link>

                <article className="mx-auto mt-10 max-w-3xl">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-ember-soft">
                        <time dateTime={post.date}>
                            {formatter.format(new Date(post.date))}
                        </time>
                        <span className="mx-2 text-front-steel-dim" aria-hidden="true">
                            ·
                        </span>
                        {post.readMinutes} min read
                    </p>
                    <h1 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.1rem)] italic leading-[1.12] tracking-[-0.02em] text-front-paper">
                        {post.title}
                    </h1>
                    <p className="mt-5 text-[17px] leading-relaxed text-front-steel">
                        {post.excerpt}
                    </p>

                    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                        <img
                            src={post.image.src}
                            alt={post.image.alt}
                            width={960}
                            height={540}
                            className="aspect-[16/9] w-full object-cover"
                        />
                    </div>

                    <div className="mt-12 rounded-2xl border border-dashed border-white/12 bg-front-panel/50 px-6 py-10 text-center">
                        <p className="text-[15px] text-front-steel">
                            Full article layout is next — this stub keeps index
                            links live.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                Back to blog
                                <ArrowUpRight className="size-3.5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                Talk to Kiln
                                <ArrowUpRight className="size-3.5" />
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
