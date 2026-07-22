// Static blog hub + full article bodies — no CMS.

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

export const authors = {
    ramim: {
        key: "ramim",
        name: "Ramim Hassan",
        role: "Founder / Product engineering",
        bio: "Owns scoping, architecture, and the path from brief to launch. Still writes production code at Kiln.",
        href: "/about",
        photo: {
            src: "https://placehold.co/160x160?text=RH",
            alt: "Portrait of Ramim Hassan, founder of Kiln",
        },
    },
};

/**
 * Full post catalog for /blog and /blog/{slug}.
 * Keep slugs in sync with resources/data/front/blog.php.
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
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+Estimating+Fixed+Bids",
            alt: "Placeholder cover for the blog post on estimating fixed-price project bids",
        },
        inlineCta: {
            eyebrow: "Scoping",
            title: "Want a number that survives the first week?",
            body: "Book a short discovery call. We’ll map constraints before anyone talks budget.",
            primary: { label: "Get a Free Quote", href: "/contact?service=website" },
            secondary: {
                label: "Web development",
                href: "/services/web-development",
            },
            whatsappMessage:
                "Hi Kiln — I’d like a scoped quote. Here’s a quick outline of the project:",
        },
        body: [
            {
                type: "p",
                text: "Someone asks for a price on a “simple dashboard.” You give a number. Two weeks later the dashboard has roles, exports, SSO, and a mobile companion. The number didn’t fail — the conversation did.",
            },
            {
                type: "p",
                text: "We stopped quoting fixed bids over the phone because phone quotes reward optimism and punish the team that has to deliver. Now every serious lead gets the same short discovery before a number leaves our side.",
            },
            {
                type: "h2",
                text: "What we need before we price",
            },
            {
                type: "ul",
                items: [
                    "Who decides, and who will use the product daily",
                    "What “done” means for the first release — not the roadmap fantasy",
                    "Integrations that already exist (and which ones are political)",
                    "Hard dates that actually move money if you miss them",
                    "A budget band — even a range beats silence",
                ],
            },
            {
                type: "p",
                text: "That list fits in a 45-minute call. If a prospect won’t do it, they’re not buying a build — they’re shopping for a reassuring figure.",
            },
            { type: "cta" },
            {
                type: "h2",
                text: "How the number gets built",
            },
            {
                type: "p",
                text: "We break the first release into slices we can ship and demo. Each slice gets a range, then we add contingency for the unknowns we already named. The quote document shows what’s in, what’s out, and what triggers a change order.",
            },
            {
                type: "quote",
                text: "A fixed bid without a fixed scope is just a liability wearing a spreadsheet.",
            },
            {
                type: "p",
                text: "Clients who want certainty get it — after we’ve earned the right to be certain. Everyone else gets an honest range and a path to tighten it.",
            },
        ],
    },
    {
        slug: "react-native-vs-native",
        title: "React Native still wins for most client mobile apps",
        excerpt:
            "Fully native makes sense past a certain scale. Below it, a shared codebase gets you to both app stores months sooner.",
        date: "2026-05-18",
        readMinutes: 5,
        category: "mobile",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+React+Native",
            alt: "Placeholder cover comparing React Native and native mobile development",
        },
        inlineCta: {
            eyebrow: "Mobile",
            title: "Shipping to both stores this year?",
            body: "We’ll tell you when React Native is enough — and when it isn’t.",
            primary: { label: "Talk mobile scope", href: "/contact?service=mobile" },
            secondary: {
                label: "Mobile apps service",
                href: "/services/mobile-apps",
            },
            whatsappMessage:
                "Hi Kiln — I’m weighing React Native vs native for a mobile app. Can we talk scope?",
        },
        body: [
            {
                type: "p",
                text: "Founders hear “native” and assume quality. Teams hear “React Native” and assume shortcuts. Both instincts are incomplete. For most client products we ship, React Native is still the right default.",
            },
            {
                type: "h2",
                text: "When shared code wins",
            },
            {
                type: "p",
                text: "If your app is forms, lists, auth, offline sync, and a handful of device APIs, a shared codebase gets you to TestFlight and Play Console months sooner — with one product team, not two. Feature parity stays honest because there is only one backlog.",
            },
            {
                type: "ul",
                items: [
                    "B2B field and ops apps with offline-first paths",
                    "Customer apps that mirror a web product’s core flows",
                    "MVPs that need store presence before raising a round",
                ],
            },
            { type: "cta" },
            {
                type: "h2",
                text: "When we push for fully native",
            },
            {
                type: "p",
                text: "Heavy camera pipelines, unusual Bluetooth stacks, or a product whose entire brand is platform-specific polish — those earn Swift and Kotlin. We say so early, with cost and timeline attached.",
            },
            {
                type: "quote",
                text: "Choose the stack that matches the risk — not the résumé of the loudest engineer in the room.",
            },
            {
                type: "p",
                text: "Most of our mobile clients are not that edge case. They need reliable releases, store compliance, and a team that can fix a bug once.",
            },
        ],
    },
    {
        slug: "billing-dunning",
        title: "The dunning email sequence that saved a client $4k/mo",
        excerpt:
            "Most failed-payment flows are one apologetic email. Here's the three-touch sequence we build into every subscription product.",
        date: "2026-04-29",
        readMinutes: 7,
        category: "saas",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+Dunning+Emails",
            alt: "Placeholder cover for the blog post about subscription dunning email sequences",
        },
        inlineCta: {
            eyebrow: "SaaS billing",
            title: "Need dunning that recovers revenue?",
            body: "We wire failed-payment flows into the products we ship — or adapt one from the catalog.",
            primary: { label: "Browse SaaS products", href: "/saas" },
            secondary: {
                label: "SaaS subscriptions",
                href: "/services/saas",
            },
            whatsappMessage:
                "Hi Kiln — I want to improve failed-payment recovery on our subscription product.",
        },
        body: [
            {
                type: "p",
                text: "A client’s Stripe dashboard showed the same story every month: cards failed, one soft email went out, and churn quietly ate four thousand dollars. The product was fine. The recovery path was polite and useless.",
            },
            {
                type: "h2",
                text: "The three-touch sequence",
            },
            {
                type: "p",
                text: "We rebuilt dunning as a short, timed sequence with clear ownership: email one is a heads-up with an update link. Email two is firmer, with the invoice amount and a deadline. Email three is a final notice before the account moves to read-only.",
            },
            {
                type: "ul",
                items: [
                    "Day 0 — payment failed: plain language, one CTA",
                    "Day 3 — still failing: amount, deadline, support path",
                    "Day 7 — final: what access changes and how to restore it",
                ],
            },
            { type: "cta" },
            {
                type: "h2",
                text: "What actually recovered the money",
            },
            {
                type: "p",
                text: "Smart retries on the processor side mattered, but so did in-app banners for account owners — not just the billing email that nobody monitors. Ops could see who was at risk without opening Stripe.",
            },
            {
                type: "quote",
                text: "Dunning is product work. Treat it like a feature, not a Zapier afterthought.",
            },
            {
                type: "p",
                text: "Within a quarter, involuntary churn dropped enough to clear that $4k/mo hole. We now ship the same skeleton into every subscription build unless the client has a better one.",
            },
        ],
    },
    {
        slug: "discovery-call-checklist",
        title: "The discovery call checklist we reuse on every lead",
        excerpt:
            "Twelve questions that surface constraints early — tech debt, decision makers, launch dates, and the budget that actually exists.",
        date: "2026-04-12",
        readMinutes: 5,
        category: "process",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+Discovery+Checklist",
            alt: "Placeholder cover of a discovery call checklist for software project scoping",
        },
        inlineCta: {
            eyebrow: "Discovery",
            title: "Ready for a real scoping call?",
            body: "Bring what you know. We’ll leave with constraints named — or a clear pass.",
            primary: { label: "Book discovery", href: "/contact" },
            secondary: { label: "See our process", href: "/about" },
            whatsappMessage:
                "Hi Kiln — I’d like to schedule a discovery call for a software project.",
        },
        body: [
            {
                type: "p",
                text: "Discovery calls drift when you wing them. Ours follow a fixed checklist so we don’t leave with vibes and a calendar invite.",
            },
            {
                type: "h2",
                text: "The twelve questions",
            },
            {
                type: "ul",
                items: [
                    "What breaks if this ships three months late?",
                    "Who is the day-to-day owner after launch?",
                    "What systems must this talk to on day one?",
                    "What’s already built that we must keep?",
                    "What’s the smallest useful first release?",
                    "Who signs the contract — and who can kill the project?",
                    "Is there a compliance or audit constraint?",
                    "What’s the real budget band for phase one?",
                    "Have you hired an agency before — what went wrong?",
                    "What does success look like in ninety days?",
                    "What are you unwilling to compromise on?",
                    "Why Kiln, and why now?",
                ],
            },
            { type: "cta" },
            {
                type: "p",
                text: "We don’t ask all twelve out loud every time. We make sure every answer exists in our notes before we write a proposal. Gaps become follow-ups, not assumptions.",
            },
            {
                type: "quote",
                text: "If you can’t answer who owns the product after launch, you’re not ready to buy a build.",
            },
        ],
    },
    {
        slug: "laravel-inertia-stack",
        title: "Why our default stack is still Laravel + Inertia",
        excerpt:
            "One repo, one deploy, server-rendered first paint, React where interaction matters. The boring stack that keeps client ops quiet.",
        date: "2026-03-28",
        readMinutes: 8,
        category: "engineering",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+Laravel+%2B+Inertia",
            alt: "Placeholder cover for the blog post about the Laravel and Inertia product stack",
        },
        inlineCta: {
            eyebrow: "Engineering",
            title: "Need a stack ops can run?",
            body: "We build web apps on Laravel + Inertia when the product needs a durable core — not a framework parade.",
            primary: { label: "Web apps service", href: "/services/web-apps" },
            secondary: { label: "Get a quote", href: "/contact?service=webapp" },
            whatsappMessage:
                "Hi Kiln — I’m evaluating Laravel + Inertia for a web app. Can we talk?",
        },
        body: [
            {
                type: "p",
                text: "We get asked why we don’t default to a separate React SPA and a JSON API for every client. Sometimes we do. Most of the time Laravel + Inertia is still the quieter, cheaper path to a product a small ops team can own.",
            },
            {
                type: "h2",
                text: "One deploy, one mental model",
            },
            {
                type: "p",
                text: "Auth, queues, mail, policies, and the admin live next to the UI. React shows up where interaction density earns it. First paint stays server-rendered. SEO and share previews don’t require a second architecture.",
            },
            {
                type: "ul",
                items: [
                    "Fewer moving parts in production",
                    "Faster onboarding for the next engineer",
                    "Forms and validation that stay honest end-to-end",
                ],
            },
            { type: "cta" },
            {
                type: "h2",
                text: "When we split the frontend",
            },
            {
                type: "p",
                text: "Heavy real-time canvases, multi-tenant marketing sites with a separate design system, or a mobile app that needs a pure API — those get the split. We don’t force Inertia into every shape.",
            },
            {
                type: "quote",
                text: "Boring stacks win when the product’s risk is business logic, not rendering fashion.",
            },
        ],
    },
    {
        slug: "when-not-to-build-saas",
        title: "When we tell founders not to build a SaaS product",
        excerpt:
            "Not every workflow needs multi-tenant billing. Sometimes a sharp internal tool ships faster and makes more money.",
        date: "2026-03-10",
        readMinutes: 6,
        category: "saas",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+When+Not+SaaS",
            alt: "Placeholder cover for the blog post on when not to build a SaaS product",
        },
        inlineCta: {
            eyebrow: "Product strategy",
            title: "Internal tool or multi-tenant SaaS?",
            body: "We’ll help you pick the cheaper path that still moves the metric you care about.",
            primary: { label: "Talk it through", href: "/contact" },
            secondary: { label: "SaaS catalog", href: "/saas" },
            whatsappMessage:
                "Hi Kiln — I’m deciding between an internal tool and a SaaS product. Can we talk?",
        },
        body: [
            {
                type: "p",
                text: "“We’re building a SaaS” sometimes means “we have a painful workflow and a slide deck.” Multi-tenant billing, permissions, and support load are expensive. Plenty of founders would make more money shipping a sharp internal tool first.",
            },
            {
                type: "h2",
                text: "Red flags we call out early",
            },
            {
                type: "ul",
                items: [
                    "One design partner who isn’t paying yet",
                    "No willingness to support strangers on chat",
                    "The “product” is mostly integrations you don’t control",
                    "Success is defined as fundraising, not retained usage",
                ],
            },
            { type: "cta" },
            {
                type: "p",
                text: "We’ll still build SaaS when the market and margins justify it — and we adapt products from our catalog when the shape already exists. We just refuse to pretend every workflow deserves a pricing page.",
            },
            {
                type: "quote",
                text: "Ship the tool that pays for itself before you invent a category.",
            },
        ],
    },
    {
        slug: "app-store-rejection-fixes",
        title: "App Store rejections we see most — and how we fix them",
        excerpt:
            "Login walls, incomplete account deletion, and vague privacy copy. A short punch list from recent store reviews.",
        date: "2026-02-22",
        readMinutes: 4,
        category: "mobile",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+App+Store+Fixes",
            alt: "Placeholder cover for the blog post about common App Store rejection fixes",
        },
        inlineCta: {
            eyebrow: "Store readiness",
            title: "Stuck in review?",
            body: "We ship store-ready builds with account deletion, privacy copy, and review notes that reviewers can follow.",
            primary: {
                label: "Mobile apps service",
                href: "/services/mobile-apps",
            },
            secondary: { label: "Get help", href: "/contact?service=mobile" },
            whatsappMessage:
                "Hi Kiln — our app was rejected by the App Store. Can you help us unblock review?",
        },
        body: [
            {
                type: "p",
                text: "Store rejection emails feel personal. They’re usually the same three issues wearing different ticket numbers. Here’s what we fix most often before resubmitting.",
            },
            {
                type: "h2",
                text: "The usual suspects",
            },
            {
                type: "ul",
                items: [
                    "Login required with no demo account in review notes",
                    "Account deletion missing or buried behind support email",
                    "Privacy policy that doesn’t match actual data collection",
                    "Permissions requested without a clear in-app purpose string",
                ],
            },
            { type: "cta" },
            {
                type: "p",
                text: "None of these need a redesign. They need a checklist before you hit Submit. We keep that checklist in the mobile handoff so clients aren’t improvising under a 48-hour review clock.",
            },
            {
                type: "quote",
                text: "Reviewers aren’t trying to ruin your launch. They’re checking boxes you should have checked first.",
            },
        ],
    },
    {
        slug: "scoping-change-orders",
        title: "How we scope change orders without the drama",
        excerpt:
            "Scope creep is usually a documentation problem. Here's the one-page change note that keeps builds on schedule.",
        date: "2026-02-05",
        readMinutes: 5,
        category: "business",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+Change+Orders",
            alt: "Placeholder cover for the blog post about scoping software change orders",
        },
        inlineCta: {
            eyebrow: "Delivery",
            title: "Want a build with clear change rules?",
            body: "Our proposals spell out what’s in scope — and how new work gets priced before it starts.",
            primary: { label: "Start a project", href: "/contact" },
            secondary: { label: "Pricing overview", href: "/pricing" },
            whatsappMessage:
                "Hi Kiln — I want to discuss a project with clear change-order process.",
        },
        body: [
            {
                type: "p",
                text: "Scope creep rarely starts as malice. Someone has a good idea mid-sprint. Without a change note, that idea becomes unpaid work or a tense Slack thread. We use a one-page change order so neither happens.",
            },
            {
                type: "h2",
                text: "What’s on the page",
            },
            {
                type: "ul",
                items: [
                    "What was requested, in the client’s words",
                    "What’s in / out relative to the signed scope",
                    "Effort range and schedule impact",
                    "Price or “absorb into contingency” decision",
                    "Sign-off from the person who can approve spend",
                ],
            },
            { type: "cta" },
            {
                type: "p",
                text: "Small asks still get documented — even when we absorb them. The paper trail keeps trust intact when the next ask isn’t small.",
            },
            {
                type: "quote",
                text: "If it isn’t written, it isn’t scoped. If it isn’t scoped, it isn’t scheduled.",
            },
        ],
    },
    {
        slug: "handoff-docs-that-stick",
        title: "Handoff docs that ops teams actually keep open",
        excerpt:
            "Runbooks beat slide decks. The minimal documentation set we leave after every launch.",
        date: "2026-01-18",
        readMinutes: 6,
        category: "process",
        authorKey: "ramim",
        image: {
            src: "https://placehold.co/1200x675?text=Blog%3A+Handoff+Docs",
            alt: "Placeholder cover for the blog post about product handoff documentation",
        },
        inlineCta: {
            eyebrow: "Launch",
            title: "Need a handoff your team will use?",
            body: "We leave runbooks, admin paths, and a short video — not a 40-slide graveyard.",
            primary: { label: "See how we work", href: "/about" },
            secondary: { label: "Start a build", href: "/contact" },
            whatsappMessage:
                "Hi Kiln — I’m interested in a build with a clear ops handoff.",
        },
        body: [
            {
                type: "p",
                text: "Launch week is the wrong time to invent documentation. We ship a small, boring set of docs that ops can keep open in a tab — not a PDF that dies in Drive.",
            },
            {
                type: "h2",
                text: "The minimum set",
            },
            {
                type: "ul",
                items: [
                    "Admin runbook: who can do what, and from where",
                    "Incident cheat sheet: common failures and first checks",
                    "Environment map: staging vs production, who holds keys",
                    "Short Loom walkthrough of the critical path",
                ],
            },
            { type: "cta" },
            {
                type: "p",
                text: "If a doc won’t be opened in the first month, we don’t write it. Depth lives in the codebase and issue history. Day-to-day survival lives in the runbook.",
            },
            {
                type: "quote",
                text: "Documentation is a product for the people who stay after we leave.",
            },
        ],
    },
];

/** Home preview cards — featured + two recent companions. */
export const blogPosts = [
    {
        key: "estimating-fixed-bids",
        slug: "estimating-fixed-bids",
        title: posts[0].title,
        excerpt: posts[0].excerpt,
        date: posts[0].date,
        readMinutes: posts[0].readMinutes,
        featured: true,
        image: {
            src: "https://placehold.co/560x360?text=Blog%3A+Estimating+Fixed+Bids",
            alt: posts[0].image.alt,
        },
    },
    {
        key: "react-native-vs-native",
        slug: "react-native-vs-native",
        title: posts[1].title,
        excerpt: posts[1].excerpt,
        date: posts[1].date,
        readMinutes: posts[1].readMinutes,
        image: {
            src: "https://placehold.co/420x300?text=Blog%3A+React+Native",
            alt: posts[1].image.alt,
        },
    },
    {
        key: "billing-dunning",
        slug: "billing-dunning",
        title: posts[2].title,
        excerpt: posts[2].excerpt,
        date: posts[2].date,
        readMinutes: posts[2].readMinutes,
        image: {
            src: "https://placehold.co/420x300?text=Blog%3A+Dunning+Emails",
            alt: posts[2].image.alt,
        },
    },
];

export function getAuthor(authorKey) {
    return authors[authorKey] ?? authors.ramim;
}

export function getPostBySlug(slug) {
    const post = posts.find((p) => p.slug === slug) ?? null;
    if (!post) return null;
    return {
        ...post,
        author: getAuthor(post.authorKey),
    };
}

export function getRelatedPosts(slug, limit = 3) {
    const current = posts.find((p) => p.slug === slug);
    if (!current) return posts.slice(0, limit);

    const same = posts.filter(
        (p) => p.slug !== slug && p.category === current.category
    );
    const others = posts.filter(
        (p) => p.slug !== slug && p.category !== current.category
    );

    return [...same, ...others].slice(0, limit);
}

export function splitBodyAtCta(body = []) {
    const index = body.findIndex((block) => block.type === "cta");
    if (index === -1) {
        return { before: body, after: [] };
    }
    return {
        before: body.slice(0, index),
        after: body.slice(index + 1),
    };
}
