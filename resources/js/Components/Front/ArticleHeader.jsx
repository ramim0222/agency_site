import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { categoryLabels } from "@/data/front/blog";

const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
});

/**
 * Article masthead — long-form typography first (frontend-design / taste-design).
 */
export default function ArticleHeader({ post }) {
    if (!post) return null;

    const category = categoryLabels[post.category] ?? post.category;
    const author = post.author;

    return (
        <header className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-12">
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[45%] opacity-[0.12]"
                style={{
                    backgroundImage:
                        "radial-gradient(40% 50% at 20% 0%, rgba(217,142,74,0.5), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative max-w-3xl">
                <Link
                    href="/blog"
                    data-article-hero
                    className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                >
                    <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                    All posts
                </Link>

                <div
                    data-article-hero
                    className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-front-steel-dim"
                >
                    <span className="text-front-ember-soft">{category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>
                        {formatter.format(new Date(post.date))}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readMinutes} min read</span>
                </div>

                <h1
                    data-article-hero
                    className="mt-4 font-serif text-[clamp(2.1rem,4.8vw,3.25rem)] italic leading-[1.1] tracking-[-0.02em] text-front-paper"
                >
                    {post.title}
                </h1>

                <p
                    data-article-hero
                    className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-front-steel sm:text-[18px]"
                >
                    {post.excerpt}
                </p>

                {author ? (
                    <div
                        data-article-hero
                        className="mt-8 flex items-center gap-3"
                    >
                        <img
                            src={author.photo.src}
                            alt={author.photo.alt}
                            width={48}
                            height={48}
                            className="size-12 rounded-full border border-white/10 object-cover"
                        />
                        <div>
                            <p className="text-[14px] font-semibold text-white">
                                {author.name}
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-front-steel-dim">
                                {author.role}
                            </p>
                        </div>
                    </div>
                ) : null}

                <div
                    data-article-hero
                    className="mt-10 overflow-hidden rounded-2xl border border-white/10"
                >
                    <img
                        src={post.image.src}
                        alt={post.image.alt}
                        width={1200}
                        height={675}
                        className="aspect-[16/9] w-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
