import Breadcrumb from "@/Components/Front/Breadcrumb";

/**
 * SaaS category page hero — name, description, breadcrumb.
 * Skills: frontend-design (serif title), taste-design (ember trail).
 */
export default function CategoryHeader({ category, productCount = 0 }) {
    const crumbs = [
        { label: "SaaS", href: "/saas" },
        { label: category.name },
    ];

    return (
        <header className="relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-12">
            <div className="front-noise" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[50%] opacity-[0.14]"
                style={{
                    backgroundImage:
                        "radial-gradient(45% 50% at 85% 0%, rgba(217,142,74,0.45), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="front-container relative max-w-3xl">
                <div data-saas-category-hero>
                    <Breadcrumb items={crumbs} />
                </div>

                <span
                    data-saas-category-hero
                    className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft"
                >
                    <span className="h-px w-6 bg-front-ember-soft/60" />
                    Category
                </span>

                <h1
                    data-saas-category-hero
                    className="mt-5 max-w-[14ch] font-serif text-[clamp(2.4rem,5vw,3.6rem)] italic leading-[1.05] tracking-[-0.02em] text-front-paper"
                >
                    {category.name}
                </h1>

                <p
                    data-saas-category-hero
                    className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-front-steel sm:text-[17px]"
                >
                    {category.description}
                </p>

                <p
                    data-saas-category-hero
                    className="mt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim"
                >
                    {productCount}{" "}
                    {productCount === 1 ? "product" : "products"}
                </p>
            </div>
        </header>
    );
}
