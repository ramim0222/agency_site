// Static copy for /services/web-development — ad-landing friendly, no API.

export const webDevService = {
    slug: "web-development",
    eyebrow: "Web development",
    headline: "Websites that load fast and hold up after launch.",
    sub: "Marketing sites and content platforms built in Laravel and React — designed to rank, convert, and stay maintainable when your team owns the CMS day-to-day.",
    heroImage: {
        src: "https://placehold.co/1200x800?text=Marketing+Site+Build",
        alt: "Marketing website homepage layout built by Kiln with clear navigation and hero",
    },
    primaryCta: {
        label: "Get a Free Quote",
        href: "/contact?service=website",
    },
    whatsappMessage:
        "Hi Kiln — I'm interested in a website build. Here's a quick outline:",
    portfolioEyebrow: "Selected work",
    portfolioTitle: "Websites we've shipped",
    portfolioEmpty:
        "Website case studies are being added. Browse the full portfolio or start a quote.",
    processEyebrow: "How we work",
    processTitle: "Discovery to launch — one accountable team",
    pricingEyebrow: "Pricing snapshot",
    pricingTitle: "Clear starting ranges for website work",
    pricingNote:
        "Final scope depends on pages, CMS needs, and integrations. Full tiers live on the pricing page.",
    faqTitle: "Website build questions",
    cta: {
        eyebrow: "Start a website",
        headline: "Ready to scope your site?",
        sub: "Tell us what you're launching. We'll reply within one business day — or WhatsApp us if you'd rather chat.",
        primaryCta: {
            label: "Get a Free Quote",
            href: "/contact?service=website",
        },
    },
};

export const webDevProcess = [
    {
        key: "discovery",
        label: "Discovery",
        body: "Goals, audience, sitemap, and the content you already have — so we don't design into a vacuum.",
    },
    {
        key: "design",
        label: "Design",
        body: "Layout and type that match your brand. Desktop and mobile comps before we write production CSS.",
    },
    {
        key: "development",
        label: "Development",
        body: "Laravel + React (or the stack that fits), CMS hooks, forms, and performance budgets from the first commit.",
    },
    {
        key: "testing",
        label: "Testing",
        body: "Cross-browser checks, form paths, accessibility passes, and content QA with your team.",
    },
    {
        key: "launch",
        label: "Launch",
        body: "DNS, analytics, redirects, and a handoff so your team can publish without pinging us for every edit.",
    },
];

export const webDevPricing = [
    {
        key: "landing",
        name: "Landing / campaign",
        range: "$2.5k – $5k",
        blurb: "One focused page or a short funnel with form capture and analytics.",
        href: "/pricing#web-development",
    },
    {
        key: "marketing",
        name: "Marketing site",
        range: "$5k – $12k",
        blurb: "Multi-page site with CMS, blog hooks, and a contact path that converts.",
        href: "/pricing#web-development",
        recommended: true,
    },
    {
        key: "platform",
        name: "Content platform",
        range: "$12k – $25k+",
        blurb: "Larger IA, custom modules, and integrations when a brochure site isn't enough.",
        href: "/pricing#web-development",
    },
];

export const webDevFaq = [
    {
        q: "How long does a typical marketing site take?",
        a: "Most brochure or company sites ship in 4–8 weeks once content is moving. Campaign landings can be faster; content platforms with custom modules take longer — we pin a timeline in discovery.",
    },
    {
        q: "Will we be able to edit pages ourselves?",
        a: "Yes. We wire a CMS your team can use (often Laravel-backed or a headless setup). Training and a short handoff doc are part of launch.",
    },
    {
        q: "Do you handle SEO and analytics?",
        a: "We ship clean markup, sitemap/robots, Open Graph defaults, and analytics hooks. Ongoing SEO retainers aren't assumed — ask if you want that scoped in.",
    },
    {
        q: "What do you need from us to start?",
        a: "Brand assets (or permission to refine them), a rough sitemap, and whoever owns copy. We'll push for decisions early so design doesn't stall on blank pages.",
    },
    {
        q: "Can this page be used as an ad landing URL?",
        a: "Yes — it's self-contained with process, proof, pricing context, and CTAs to the quote form or WhatsApp. UTM parameters pass through to the contact form.",
    },
];
