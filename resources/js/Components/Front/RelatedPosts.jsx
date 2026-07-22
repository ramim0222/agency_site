import { Link } from "@inertiajs/react";
import BlogPostCard from "@/Components/Front/BlogPostCard";
import Reveal from "@/Components/Front/Reveal";

export default function RelatedPosts({ posts = [] }) {
    if (!posts.length) {
        return (
            <section className="front-container py-16 lg:py-20">
                <p
                    className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel"
                    role="status"
                >
                    No related posts yet.{" "}
                    <Link
                        href="/blog"
                        className="text-front-ember-soft underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                    >
                        Browse the blog
                    </Link>
                </p>
            </section>
        );
    }

    return (
        <section className="border-t border-white/8 py-16 lg:py-20">
            <div className="front-container">
                <Reveal>
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                                Keep reading
                            </p>
                            <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                                Related posts
                            </h2>
                        </div>
                        <Link
                            href="/blog"
                            className="font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            All posts →
                        </Link>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {posts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
