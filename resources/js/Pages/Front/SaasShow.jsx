import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Front/Header";
import Footer from "@/Components/Front/Footer";
import {
    categoryLabels,
    formatStartingPrice,
    getProductBySlug,
} from "@/data/front/saas";

/**
 * Lightweight product landing so /saas/{slug} links resolve.
 * Full product detail ships in a later Front prompt.
 */
export default function SaasShow({ slug }) {
    const product = getProductBySlug(slug);
    const category = product
        ? (categoryLabels[product.category] ?? product.category)
        : null;

    if (!product) {
        return (
            <div className="front min-h-[100dvh] bg-front-graphite">
                <Head title="Product not found — Kiln" />
                <Header />
                <main className="front-container py-32 text-center">
                    <h1 className="font-serif text-3xl italic text-front-paper">
                        Product not found
                    </h1>
                    <Link
                        href="/saas"
                        className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft"
                    >
                        ← Back to catalog
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="front min-h-[100dvh] bg-front-graphite">
            <Head title={`${product.name} — Kiln SaaS`}>
                <meta name="description" content={product.tagline} />
            </Head>

            <Header />

            <main className="front-container pt-28 pb-20 lg:pt-36">
                <Link
                    href={`/saas/category/${product.category}`}
                    className="font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                >
                    ← {category}
                </Link>

                <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.12em] text-front-steel">
                    {category}
                </p>
                <h1 className="mt-3 max-w-[14ch] font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] italic leading-[1.08] tracking-[-0.02em] text-front-paper">
                    {product.name}
                </h1>
                <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel">
                    {product.tagline}
                </p>
                <p className="mt-4 font-mono text-[1.25rem] font-semibold tabular-nums text-front-ember-soft">
                    From {formatStartingPrice(product.startingPrice)}
                </p>

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                    <img
                        src={product.image.src}
                        alt={product.image.alt}
                        width={720}
                        height={480}
                        className="aspect-[720/480] w-full object-cover"
                    />
                </div>

                <p className="mt-12 max-w-[42ch] text-[14px] text-front-steel">
                    Full product brief is coming next.{" "}
                    <Link
                        href="/contact"
                        className="text-front-ember-soft underline-offset-4 hover:underline"
                    >
                        Ask us about adapting this for your market
                    </Link>
                    , or{" "}
                    <Link
                        href="/saas"
                        className="text-front-ember-soft underline-offset-4 hover:underline"
                    >
                        browse the catalog
                    </Link>
                    .
                </p>
            </main>

            <Footer />
        </div>
    );
}
