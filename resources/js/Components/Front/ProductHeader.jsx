import { Link } from "@inertiajs/react";
import {
    categoryLabels,
    formatStartingPrice,
} from "@/data/front/saas";

/**
 * SaaS product hero — brand mark, name, tagline, lead screenshot.
 * Skills: frontend-design (serif name + mark), taste-design (quiet chrome).
 */
export default function ProductHeader({ product }) {
    const category = categoryLabels[product.category] ?? product.category;

    return (
        <header className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-14">
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[55%] opacity-[0.14]"
                style={{
                    backgroundImage:
                        "radial-gradient(50% 50% at 80% 0%, rgba(217,142,74,0.5), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative">
                <Link
                    href="/saas"
                    className="font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                >
                    ← All products
                </Link>

                <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_minmax(0,1.1fr)] lg:gap-14">
                    <div>
                        <div
                            data-saas-detail-hero
                            className="flex flex-wrap items-center gap-3"
                        >
                            {product.logo ? (
                                <img
                                    src={product.logo.src}
                                    alt={product.logo.alt}
                                    width={56}
                                    height={56}
                                    className="size-14 rounded-xl border border-white/12 bg-front-panel object-cover"
                                />
                            ) : null}
                            <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/85">
                                {category}
                            </span>
                        </div>

                        <h1
                            data-saas-detail-hero
                            className="mt-6 max-w-[12ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                        >
                            {product.name}
                        </h1>

                        <p
                            data-saas-detail-hero
                            className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                        >
                            {product.tagline}
                        </p>

                        <p
                            data-saas-detail-hero
                            className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-front-steel-dim"
                        >
                            From{" "}
                            <span className="text-[1.35rem] font-semibold normal-case tracking-[-0.02em] text-front-ember-soft">
                                {formatStartingPrice(product.startingPrice)}
                            </span>
                            {product.priceNote ? (
                                <span className="ml-2 normal-case tracking-normal text-front-steel-dim">
                                    · {product.priceNote}
                                </span>
                            ) : null}
                        </p>

                        {product.description ? (
                            <p
                                data-saas-detail-hero
                                className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-front-steel"
                            >
                                {product.description}
                            </p>
                        ) : null}
                    </div>

                    <div
                        data-saas-detail-hero
                        className="overflow-hidden rounded-2xl border border-white/10 bg-front-panel"
                    >
                        <img
                            src={product.image.src}
                            alt={product.image.alt}
                            width={720}
                            height={480}
                            className="aspect-[720/480] w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
