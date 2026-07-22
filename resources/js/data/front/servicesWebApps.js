// Static copy for /services/web-apps — dashboards & internal tools, no API.

export const webAppsService = {
    slug: "web-apps",
    eyebrow: "Web apps",
    headline: "Software your team runs the day on — not another brochure site.",
    sub: "Dashboards, portals, and internal tools in Laravel and React. Built around real workflows: roles, data, and the integrations your ops already depend on.",
    heroImage: {
        src: "https://placehold.co/1200x800?text=Ops+Dashboard+App",
        alt: "Operations dashboard web app with job queues and status panels built by Kiln",
    },
    primaryCta: {
        label: "Get a Free Quote",
        href: "/contact?service=webapp",
    },
    whatsappMessage:
        "Hi Kiln — I'm interested in a custom web app (dashboard / internal tool). Here's a quick outline:",
    portfolioEyebrow: "Selected work",
    portfolioTitle: "Web apps we've shipped",
    portfolioEmpty:
        "Web app case studies are being added. Browse the full portfolio or start a quote.",
    processEyebrow: "How we work",
    processTitle: "From messy workflow to working product",
    pricingEyebrow: "Pricing snapshot",
    pricingTitle: "Starting ranges for product work",
    pricingNote:
        "Scope tracks screens, roles, and integrations — not page count. Full tiers live on the pricing page.",
    faqTitle: "Web app questions",
    cta: {
        eyebrow: "Start a web app",
        headline: "Have a workflow that outgrew spreadsheets?",
        sub: "Tell us who uses it and what breaks today. We'll reply within one business day — or WhatsApp us if you'd rather chat.",
        primaryCta: {
            label: "Get a Free Quote",
            href: "/contact?service=webapp",
        },
    },
};

export const webAppsProcess = [
    {
        key: "map",
        label: "Map the work",
        body: "Shadow the real process — who touches what, where data lives, and which steps still hide in email or sheets.",
    },
    {
        key: "shape",
        label: "Shape the product",
        body: "Roles, screens, and edge cases sketched before we commit schema. You see the flows, not just wireframes.",
    },
    {
        key: "build",
        label: "Build the core",
        body: "Laravel + Inertia/React (or the stack that fits), auth, permissions, and the integrations that keep ops honest.",
    },
    {
        key: "harden",
        label: "Harden & train",
        body: "QA against real data paths, permissions checks, and a short training so your team can run it without us.",
    },
    {
        key: "ship",
        label: "Ship & hand off",
        body: "Deploy, monitoring hooks, and a clear backlog for v1.1 — so day-one isn't the last conversation.",
    },
];

export const webAppsPricing = [
    {
        key: "slice",
        name: "Focused slice",
        range: "$8k – $15k",
        blurb: "One primary workflow — a portal, queue, or admin tool with clear roles.",
        href: "/pricing#web-apps",
    },
    {
        key: "ops",
        name: "Ops platform",
        range: "$15k – $35k",
        blurb: "Multi-role product with integrations, reporting, and room to grow.",
        href: "/pricing#web-apps",
        recommended: true,
    },
    {
        key: "system",
        name: "System of record",
        range: "$35k+",
        blurb: "Broader platform work — multiple modules, deeper ERP/CRM hooks, longer engagement.",
        href: "/pricing#web-apps",
    },
];

export const webAppsFaq = [
    {
        q: "How is this different from a marketing website?",
        a: "Websites publish content. Web apps run work — logins, roles, state, and data that has to stay correct. If your team lives in the tool every day, you're in web-app territory.",
    },
    {
        q: "Can you replace our spreadsheet / Notion stack?",
        a: "Often yes for the painful path. We start with the workflow that breaks most, ship that, then expand — not a big-bang rewrite of everything at once.",
    },
    {
        q: "Do you integrate with our existing systems?",
        a: "When there's an API, webhook, or stable export, yes. We scope connectors in discovery so estimates aren't fiction.",
    },
    {
        q: "Who hosts and maintains it after launch?",
        a: "You own the product. We can hand off to your team, stay on for a support retainer, or both — decided before launch, not after.",
    },
    {
        q: "What stack do you use?",
        a: "Usually Laravel with Inertia and React, PostgreSQL, and the auth model your threat model needs. We'll say so if another stack fits better.",
    },
];
