// Static pricing reference — informational only, no checkout.

export const pricingPage = {
    eyebrow: "Pricing",
    title: "Clear starting ranges. Conversation before commit.",
    intro:
        "Custom builds and SaaS starters are scoped with you — nothing on this page is a live checkout. Pick a package or browse the catalog, then get a quote.",
    whatsappMessage:
        "Hi Kiln — I'd like to talk about pricing for a project. Here's a quick outline:",
    cta: {
        eyebrow: "Get a quote",
        headline: "Ready to size your build?",
        sub: "Tell us what you're shipping. We'll reply within one business day with honest ranges — or WhatsApp us if you'd rather chat.",
        primaryCta: {
            label: "Get a Free Quote",
            href: "/contact",
        },
    },
};

export const pricingTabs = [
    { key: "custom", label: "Custom Development", hash: "custom" },
    { key: "saas", label: "SaaS Plans", hash: "saas" },
];

/** Hash → tab. Service page anchors land on Custom Development. */
export const hashToTab = {
    custom: "custom",
    "web-development": "custom",
    "web-apps": "custom",
    "mobile-apps": "custom",
    saas: "saas",
    "saas-plans": "saas",
};

export const customDevSections = [
    {
        id: "web-development",
        eyebrow: "Websites",
        title: "Web development",
        note: "Marketing sites and content platforms.",
        packages: [
            {
                key: "wd-starter",
                name: "Starter",
                range: "$2.5k – $5k",
                blurb: "Landing or campaign site with form capture and analytics.",
                highlights: ["1–3 pages", "Contact / lead form", "Basic CMS hooks"],
                cta: { label: "Get a quote", href: "/contact?service=website" },
                recommended: false,
            },
            {
                key: "wd-business",
                name: "Business",
                range: "$5k – $12k",
                blurb: "Multi-page marketing site with CMS and a conversion path.",
                highlights: ["Multi-page IA", "CMS for your team", "SEO foundations"],
                cta: { label: "Get a quote", href: "/contact?service=website" },
                recommended: true,
            },
            {
                key: "wd-enterprise",
                name: "Enterprise",
                range: "$12k – $25k+",
                blurb: "Larger content platforms and custom modules.",
                highlights: ["Custom modules", "Integrations", "Priority scoping"],
                cta: { label: "Get custom quote", href: "/contact?service=website" },
                recommended: false,
            },
        ],
    },
    {
        id: "web-apps",
        eyebrow: "Product",
        title: "Web apps",
        note: "Dashboards, portals, and internal tools.",
        packages: [
            {
                key: "wa-starter",
                name: "Starter",
                range: "$8k – $15k",
                blurb: "One primary workflow with clear roles.",
                highlights: ["Focused slice", "Auth & roles", "Core integrations"],
                cta: { label: "Get a quote", href: "/contact?service=webapp" },
                recommended: false,
            },
            {
                key: "wa-business",
                name: "Business",
                range: "$15k – $35k",
                blurb: "Multi-role ops platform with room to grow.",
                highlights: ["Multi-role UX", "Reporting", "API hooks"],
                cta: { label: "Get a quote", href: "/contact?service=webapp" },
                recommended: true,
            },
            {
                key: "wa-enterprise",
                name: "Enterprise",
                range: "$35k+",
                blurb: "Broader system-of-record work.",
                highlights: ["Multiple modules", "Deep ERP/CRM", "Longer engagement"],
                cta: { label: "Get custom quote", href: "/contact?service=webapp" },
                recommended: false,
            },
        ],
    },
    {
        id: "mobile-apps",
        eyebrow: "Mobile",
        title: "Mobile apps",
        note: "React Native — iOS and Android with a Laravel API.",
        packages: [
            {
                key: "ma-starter",
                name: "Starter",
                range: "$12k – $22k",
                blurb: "MVP on both stores with a focused API.",
                highlights: ["iOS + Android", "Auth", "Store submission support"],
                cta: { label: "Get a quote", href: "/contact?service=mobile_app" },
                recommended: false,
            },
            {
                key: "ma-business",
                name: "Business",
                range: "$22k – $45k",
                blurb: "Richer offline, push, and day-to-day product flows.",
                highlights: ["Offline paths", "Push", "Roles & sync"],
                cta: { label: "Get a quote", href: "/contact?service=mobile_app" },
                recommended: true,
            },
            {
                key: "ma-enterprise",
                name: "Enterprise",
                range: "$45k+",
                blurb: "Platform companions and deeper field tooling.",
                highlights: ["Complex sync", "Multi-role field", "Priority install"],
                cta: { label: "Get custom quote", href: "/contact?service=mobile_app" },
                recommended: false,
            },
        ],
    },
];

export const saasPricingTeaser = {
    eyebrow: "SaaS plans",
    title: "Ready-to-adapt products — priced per implementation",
    body: "SaaS starters show informational setup ranges on each product page. There's no self-serve checkout: browse the catalog, pick a product, then talk to us about the plan that fits.",
    note: "Typical setup ranges start around $1.8k–$9k depending on product and tier. Exact numbers live on each product brief.",
    image: {
        src: "https://placehold.co/960x540?text=SaaS+Catalog+Pricing",
        alt: "Preview of Kiln SaaS catalog product cards with starting prices",
    },
    primaryCta: { label: "Browse SaaS catalog", href: "/saas" },
    secondaryCta: {
        label: "SaaS service overview",
        href: "/services/saas",
    },
};

export const pricingFaq = [
    {
        q: "Is this a live checkout?",
        a: "No. Every price on this page is informational. Quotes and SaaS plans start with a conversation — contact form or WhatsApp — never an automated subscription on kiln's site.",
    },
    {
        q: "Why ranges instead of fixed prices?",
        a: "Scope shifts with pages, roles, offline needs, and integrations. Ranges keep expectations honest until we see your brief.",
    },
    {
        q: "What's included in a custom package?",
        a: "Design and build for the stated scope, staging, launch support, and a handoff so your team can run day-to-day. Hosting and third-party fees are scoped separately when needed.",
    },
    {
        q: "How do SaaS product prices work?",
        a: "Each catalog product lists setup tiers (Pilot / Growth, etc.). Those are implementation starting points — not monthly SaaS fees billed by Kiln. Your Stripe (or processor) stays yours.",
    },
    {
        q: "Can we mix custom work and a SaaS starter?",
        a: "Yes. Many engagements adapt a catalog product, then add custom modules. We'll say so early if a greenfield build is the better path.",
    },
];
