import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});

export default function BlogPreviewCard({ post, featured = false, className }) {
    const href = post.slug ? `/blog/${post.slug}` : "/blog";

    return (
        <Link
            href={href}
            data-reveal
            className={cn(
                "group flex overflow-hidden rounded-2xl border border-white/10 bg-front-panel transition-all duration-300 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50",
                featured ? "flex-col sm:flex-row" : "flex-col",
                className
            )}
        >
            <div
                className={cn(
                    "self-start overflow-hidden",
                    featured ? "aspect-[14/9] w-full sm:aspect-[4/3] sm:w-[46%]" : "aspect-[14/9] w-full"
                )}
            >
                <img
                    src={post.image.src}
                    alt={post.image.alt}
                    width={featured ? 560 : 420}
                    height={featured ? 360 : 300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-front-steel-dim">
                    <time dateTime={post.date}>{formatter.format(new Date(post.date))}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readMinutes} min read</span>
                </div>

                <h3
                    className={cn(
                        "mt-3 font-semibold tracking-[-0.01em] text-white",
                        featured ? "text-[22px]" : "text-[17px]"
                    )}
                >
                    {post.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-front-steel">
                    {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-white">
                    Read the post
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>
        </Link>
    );
}
