import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { categoryLabels } from "@/data/front/blog";

const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});

export default function BlogPostCard({ post, featured = false, className }) {
    const category = categoryLabels[post.category] ?? post.category;

    return (
        <Link
            href={`/blog/${post.slug}`}
            data-blog-card
            className={cn(
                "group flex overflow-hidden rounded-2xl border border-white/10 bg-front-panel transition-all duration-300 hover:border-white/20 hover:bg-front-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50",
                featured ? "flex-col lg:flex-row" : "flex-col",
                className
            )}
        >
            <div
                className={cn(
                    "relative self-start overflow-hidden",
                    featured
                        ? "aspect-[16/9] w-full lg:aspect-[5/4] lg:w-[48%]"
                        : "aspect-[16/10] w-full"
                )}
            >
                <img
                    src={post.image.src}
                    alt={post.image.alt}
                    width={featured ? 960 : 720}
                    height={featured ? 540 : 480}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-md border border-white/15 bg-front-graphite/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm">
                    {category}
                </span>
            </div>

            <div
                className={cn(
                    "flex flex-1 flex-col",
                    featured ? "p-7 sm:p-8 lg:justify-center" : "p-6"
                )}
            >
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.08em] text-front-steel-dim">
                    <time dateTime={post.date}>
                        {formatter.format(new Date(post.date))}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readMinutes} min read</span>
                </div>

                <h3
                    className={cn(
                        "mt-3 font-semibold tracking-[-0.015em] text-white",
                        featured
                            ? "text-[1.35rem] leading-snug sm:text-[1.55rem]"
                            : "text-[1.05rem] leading-snug"
                    )}
                >
                    {post.title}
                </h3>
                <p
                    className={cn(
                        "mt-2.5 flex-1 leading-relaxed text-front-steel",
                        featured ? "text-[15px] sm:text-[16px]" : "text-[14px]"
                    )}
                >
                    {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-white">
                    Read the post
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-front-ember-soft" />
                </div>
            </div>
        </Link>
    );
}
