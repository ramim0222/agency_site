// Static Facebook/ad campaign landings — one object per slug.
// Keep slugs in sync with resources/data/front/campaigns.php.
// Never link these from site nav; ads only.

export const campaigns = [
    {
        slug: "saas-starter",
        metaTitle: "Ready-made SaaS for your business — Kiln",
        metaDescription:
            "Adapt a Kiln SaaS starter for billing, ops, or booking. Free scoping call — no self-serve checkout.",
        utmCampaignDefault: "fb-saas-starter",
        hero: {
            eyebrow: "SaaS for operators",
            headline: "Stop rebuilding what a starter already solves.",
            sub: "Pick a Kiln SaaS product, we adapt it for your market — billing, ops, or booking — then you own the stack.",
            offer: "Free 20-minute fit call this week",
            image: {
                src: "https://placehold.co/960x720?text=Ad%3A+SaaS+Starter",
                alt: "Placeholder matching Facebook ad creative for Kiln SaaS starter campaign",
            },
        },
        form: {
            title: "Get the fit call",
            note: "Tell us your category. We’ll reply within one business day.",
            defaults: {
                service_type: "saas",
                message:
                    "Campaign: SaaS starter\n\nI'm interested in adapting a Kiln SaaS product for our business.",
            },
        },
        whatsappMessage:
            "Hi Kiln — I saw your SaaS starter ad. Here's what my business needs:",
        trust: [
            {
                type: "quote",
                quote: "We stopped wiring three tools together. The adapted starter was live before our old build would have left discovery.",
                name: "Mara Chen",
                role: "Ops lead, field services",
            },
            {
                type: "stat",
                value: "2–6 wks",
                label: "Typical adaptation kickoff → staging",
            },
        ],
    },
    {
        slug: "mobile-mvp",
        metaTitle: "Ship a mobile MVP that stores accept — Kiln",
        metaDescription:
            "React Native MVP for both stores — scoped honestly, store-ready path included. Request a free quote.",
        utmCampaignDefault: "fb-mobile-mvp",
        hero: {
            eyebrow: "Mobile MVP",
            headline: "Both stores. One codebase. A scope that survives week two.",
            sub: "We build React Native MVPs operators can run — offline-aware when needed, with a clear path through App Store and Play review.",
            offer: "Fixed discovery → clear MVP range",
            image: {
                src: "https://placehold.co/960x720?text=Ad%3A+Mobile+MVP",
                alt: "Placeholder matching Facebook ad creative for Kiln mobile MVP campaign",
            },
        },
        form: {
            title: "Scope your MVP",
            note: "Share the job your app must do on day one — not the full roadmap.",
            defaults: {
                service_type: "mobile_app",
                message:
                    "Campaign: Mobile MVP\n\nI need a store-ready mobile MVP. Here's the core job to be done:",
            },
        },
        whatsappMessage:
            "Hi Kiln — I saw your mobile MVP ad. Here's the app I want to ship:",
        trust: [
            {
                type: "stat",
                value: "2 stores",
                label: "iOS + Android from one React Native build",
            },
            {
                type: "quote",
                quote: "They told us what would fail review before we wrote a line. That alone paid for discovery.",
                name: "Jonah Reed",
                role: "Founder, B2B field app",
            },
        ],
    },
    {
        slug: "web-app-ops",
        metaTitle: "Replace the spreadsheet with a web app — Kiln",
        metaDescription:
            "Laravel + React ops tools your team will actually use. Free quote — no pitch-deck theater.",
        utmCampaignDefault: "fb-web-app-ops",
        hero: {
            eyebrow: "Ops web apps",
            headline: "Your team outgrew the spreadsheet. Build the board they run on.",
            sub: "We ship Laravel + Inertia web apps for dispatch, orders, and internal ops — one accountable team from brief to handoff.",
            offer: "Free quote in one business day",
            image: {
                src: "https://placehold.co/960x720?text=Ad%3A+Ops+Web+App",
                alt: "Placeholder matching Facebook ad creative for Kiln ops web app campaign",
            },
        },
        form: {
            title: "Request a quote",
            note: "Describe the workflow that breaks today. We’ll scope the first release.",
            defaults: {
                service_type: "web_app",
                message:
                    "Campaign: Ops web app\n\nWe're replacing spreadsheets / shared inboxes with a web app. Core workflow:",
            },
        },
        whatsappMessage:
            "Hi Kiln — I saw your ops web app ad. Here's the workflow we need to fix:",
        trust: [
            {
                type: "stat",
                value: "1 team",
                label: "From discovery to launch — no silent handoffs",
            },
        ],
    },
];

export function getCampaignBySlug(slug) {
    return campaigns.find((c) => c.slug === slug) ?? null;
}
