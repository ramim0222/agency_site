// Static blog hub + post registry — no CMS.

export const blogPage = {
    eyebrow: "Studio notes",
    title: "Writing from the kiln floor.",
    intro: "Practical notes on scoping, shipping, and running product software — written for founders and ops leads who want fewer surprises.",
    searchPlaceholder: "Search posts…",
    empty: "No posts match that filter or search.",
};

export const blogCategories = [
    { key: "all", label: "All" },
    { key: "process", label: "Process" },
    { key: "engineering", label: "Engineering" },
    { key: "mobile", label: "Mobile" },
    { key: "saas", label: "SaaS" },
    { key: "business", label: "Business" },
];

export const categoryLabels = Object.fromEntries(
    blogCategories.filter((c) => c.key !== "all").map((c) => [c.key, c.label])
);

/**
 * Full post list for /blog. Keep slugs in sync with resources/data/front/blog.php.
 */
export const posts = [
    {
        slug: "estimating-fixed-bids",
        title: "Why we stopped giving fixed bids over the phone",
        excerpt:
            "A quote without a scoping call is a guess wearing a suit. Here's the short discovery process we run before any number leaves our side.",
        date: "2026-06-02",
        readMinutes: 6,
        category: "process",
        featured: true,
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/960x540?text=Blog%3A+Estimating+Fixed+Bids",
            alt: "Placeholder illustration for the blog post on estimating fixed-price project bids",
        },
    },
    {
        slug: "react-native-vs-native",
        title: "React Native still wins for most client mobile apps",
        excerpt:
            "Fully native makes sense past a certain scale. Below it, a shared codebase gets you to both app stores months sooner.",
        date: "2026-05-18",
        readMinutes: 5,
        category: "mobile",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+React+Native",
            alt: "Placeholder illustration for the blog post comparing React Native and native mobile development",
        },
    },
    {
        slug: "billing-dunning",
        title: "The dunning email sequence that saved a client $4k/mo",
        excerpt:
            "Most failed-payment flows are one apologetic email. Here's the three-touch sequence we build into every subscription product.",
        date: "2026-04-29",
        readMinutes: 7,
        category: "saas",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+Dunning+Emails",
            alt: "Placeholder illustration for the blog post about subscription dunning email sequences",
        },
    },
    {
        slug: "discovery-call-checklist",
        title: "The discovery call checklist we reuse on every lead",
        excerpt:
            "Twelve questions that surface constraints early — tech debt, decision makers, launch dates, and the budget that actually exists.",
        date: "2026-04-12",
        readMinutes: 5,
        category: "process",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+Discovery+Checklist",
            alt: "Placeholder illustration of a discovery call checklist for software project scoping",
        },
    },
    {
        slug: "laravel-inertia-stack",
        title: "Why our default stack is still Laravel + Inertia",
        excerpt:
            "One repo, one deploy, server-rendered first paint, React where interaction matters. The boring stack that keeps client ops quiet.",
        date: "2026-03-28",
        readMinutes: 8,
        category: "engineering",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+Laravel+%2B+Inertia",
            alt: "Placeholder illustration for the blog post about the Laravel and Inertia product stack",
        },
    },
    {
        slug: "when-not-to-build-saas",
        title: "When we tell founders not to build a SaaS product",
        excerpt:
            "Not every workflow needs multi-tenant billing. Sometimes a sharp internal tool ships faster and makes more money.",
        date: "2026-03-10",
        readMinutes: 6,
        category: "saas",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+When+Not+SaaS",
            alt: "Placeholder illustration for the blog post on when not to build a SaaS product",
        },
    },
    {
        slug: "app-store-rejection-fixes",
        title: "App Store rejections we see most — and how we fix them",
        excerpt:
            "Login walls, incomplete account deletion, and vague privacy copy. A short punch list from recent store reviews.",
        date: "2026-02-22",
        readMinutes: 4,
        category: "mobile",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+App+Store+Fixes",
            alt: "Placeholder illustration for the blog post about common App Store rejection fixes",
        },
    },
    {
        slug: "scoping-change-orders",
        title: "How we scope change orders without the drama",
        excerpt:
            "Scope creep is usually a documentation problem. Here's the one-page change note that keeps builds on schedule.",
        date: "2026-02-05",
        readMinutes: 5,
        category: "business",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+Change+Orders",
            alt: "Placeholder illustration for the blog post about scoping software change orders",
        },
    },
    {
        slug: "handoff-docs-that-stick",
        title: "Handoff docs that ops teams actually keep open",
        excerpt:
            "Runbooks beat slide decks. The minimal documentation set we leave after every launch.",
        date: "2026-01-18",
        readMinutes: 6,
        category: "process",
        author: {
            name: "Ramim Hassan",
            role: "Founder / Product engineering",
        },
        image: {
            src: "https://placehold.co/720x480?text=Blog%3A+Handoff+Docs",
            alt: "Placeholder illustration for the blog post about product handoff documentation",
        },
    },
];

/** Home preview cards — featured + two recent companions. */
export const blogPosts = [
    posts[0],
    posts[1],
    posts[2],
].map((post) => ({
    key: post.slug,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    readMinutes: post.readMinutes,
    featured: Boolean(post.featured),
    image: {
        src:
            post.featured
                ? "https://placehold.co/560x360?text=Blog%3A+Estimating+Fixed+Bids"
                : post.image.src.replace("720x480", "420x300"),
        alt: post.image.alt,
    },
}));

export function getPostBySlug(slug) {
    return posts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedPosts(slug, limit = 3) {
    const current = getPostBySlug(slug);
    if (!current) return posts.slice(0, limit);

    const same = posts.filter(
        (p) => p.slug !== slug && p.category === current.category
    );
    const others = posts.filter(
        (p) => p.slug !== slug && p.category !== current.category
    );

    return [...same, ...others].slice(0, limit);
}
