import { useMemo, useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import ArticleHeader from "@/Components/Front/ArticleHeader";
import ArticleContent from "@/Components/Front/ArticleContent";
import InlineCta from "@/Components/Front/InlineCta";
import AuthorBio from "@/Components/Front/AuthorBio";
import SocialShareButtons from "@/Components/Front/SocialShareButtons";
import RelatedPosts from "@/Components/Front/RelatedPosts";
import WhatsAppButton from "@/Components/Front/WhatsAppButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import {
    getPostBySlug,
    getRelatedPosts,
    splitBodyAtCta,
} from "@/data/front/blog";

/**
 * Individual blog article — static body, mid-article CTA, share, related.
 * Skills: frontend-design (long-form type), taste-design (serif title/quotes),
 * gsap-react (hero entrance), ui-ux-pro-max (share feedback, empty states).
 */
export default function BlogShow({ slug }) {
    const heroRef = useRef(null);
    const page = usePage();
    const post = useMemo(() => getPostBySlug(slug), [slug]);
    const related = useMemo(() => getRelatedPosts(slug, 3), [slug]);
    const { before, after } = useMemo(
        () => splitBodyAtCta(post?.body ?? []),
        [post]
    );

    const shareUrl =
        typeof window !== "undefined"
            ? window.location.href
            : `${String(page?.props?.ziggy?.url ?? "").replace(/\/$/, "")}/blog/${slug}`;

    useGSAP(
        () => {
            if (!heroRef.current || !post) return;
            const bits = gsap.utils.toArray(
                "[data-article-hero]",
                heroRef.current
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
        { scope: heroRef, dependencies: [slug] }
    );

    if (!post) {
        return (
            <div className="front min-h-[100dvh] bg-front-graphite">
                <Head title="Post not found — Kiln" />
                <Header />
                <main className="front-container py-32 text-center">
                    <h1 className="font-serif text-3xl italic text-front-paper">
                        Post not found
                    </h1>
                    <a
                        href="/blog"
                        className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                    >
                        ← Back to blog
                    </a>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="front bg-front-graphite">
            <Head title={`${post.title} — Kiln Blog`}>
                <meta name="description" content={post.excerpt} />
            </Head>

            <Header />

            <main>
                <div ref={heroRef}>
                    <ArticleHeader post={post} />
                </div>

                <article className="front-container max-w-3xl pb-6">
                    <ArticleContent blocks={before} />
                    <InlineCta cta={post.inlineCta} />
                    <ArticleContent blocks={after} />

                    <div className="mt-14 space-y-10 border-t border-white/8 pt-12">
                        <AuthorBio author={post.author} />
                        <SocialShareButtons
                            title={post.title}
                            url={shareUrl}
                        />
                    </div>
                </article>

                <RelatedPosts posts={related} />
            </main>

            <Footer />
            <WhatsAppButton
                message={
                    post.inlineCta?.whatsappMessage ||
                    `Hi Kiln — I read “${post.title}” and want to talk.`
                }
            />
        </div>
    );
}
