// Static FAQ hub — objection handling before contact. No CMS.

export const faqPage = {
    eyebrow: "FAQ",
    title: "Answers before the quote call.",
    intro: "Straight answers on how Kiln scopes, prices, and ships — so you can decide if a conversation is worth it.",
    empty: "No questions in this topic yet.",
    cta: {
        eyebrow: "Still have questions?",
        headline: "Ask us directly.",
        sub: "Use the form for a scoped brief, or WhatsApp if you just need a quick yes/no. Prefer numbers first? Browse pricing.",
        primaryCta: {
            label: "Get a Free Quote",
            href: "/contact",
        },
        secondaryCta: {
            label: "View pricing",
            href: "/pricing",
        },
    },
    whatsappMessage:
        "Hi Kiln — I have a question before requesting a quote. Here’s the short version:",
};

export const faqTopics = [
    { key: "general", label: "General", hash: "general" },
    { key: "pricing", label: "Pricing", hash: "pricing" },
    { key: "process", label: "Process", hash: "process" },
    { key: "saas", label: "SaaS", hash: "saas" },
];

export const faqByTopic = {
    general: [
        {
            q: "What does Kiln actually build?",
            a: "Websites, web apps, mobile apps, and SaaS products teams run day-to-day. We’re a product engineering studio — Laravel, React, and React Native — not a slide-deck agency.",
        },
        {
            q: "Who is a good fit?",
            a: "Founders and ops leads who know the pain they’re solving, can answer scoping questions, and want a small accountable team — not a 12-person account structure.",
        },
        {
            q: "Where are you based?",
            a: "We work remotely with clients across time zones. Kickoffs and demos are scheduled; day-to-day lives in shared tools and short written updates.",
        },
        {
            q: "Do you take every project that comes in?",
            a: "No. If the fit is wrong — unclear ownership, no budget band, or a stack we don’t stand behind — we’ll say so early and point you elsewhere when we can.",
        },
        {
            q: "Can I see examples of your work?",
            a: "Yes. Browse the portfolio for case studies, or the SaaS catalog for products we adapt. Home and About cover how we work.",
        },
    ],
    pricing: [
        {
            q: "Is pricing on the site a live checkout?",
            a: "No. Ranges and SaaS starting prices are informational. Engagements start with a conversation — contact form or WhatsApp — never an automated subscription on this site.",
        },
        {
            q: "Why ranges instead of a single number?",
            a: "Scope shifts with pages, roles, offline needs, and integrations. Ranges stay honest until we’ve seen your brief. Fixed bids come after discovery.",
        },
        {
            q: "What’s usually included in a custom package?",
            a: "Design and build for the stated scope, staging, launch support, and a handoff your team can run. Hosting and third-party fees are scoped separately when needed.",
        },
        {
            q: "Do you offer retainers?",
            a: "Often after launch — for iteration, ops support, or a backlog slice. Retainers are scoped separately from the initial build so expectations stay clear.",
        },
        {
            q: "Where can I compare package bands?",
            a: "The pricing page lists custom ranges by service and SaaS starting tiers. Use it to orient — then request a quote for a number that matches your scope.",
        },
    ],
    process: [
        {
            q: "What happens after I submit the contact form?",
            a: "We reply within one business day. If it’s a fit, we book a short discovery call, map constraints, then send a scoped proposal — not a generic sales deck.",
        },
        {
            q: "How long does a typical build take?",
            a: "Marketing sites often land in weeks; web apps and mobile in a few months depending on roles and integrations. Every proposal includes a realistic first-release timeline.",
        },
        {
            q: "How do you handle change requests?",
            a: "With a one-page change note: what’s in/out, effort, schedule impact, and sign-off. Small absorbs stay documented so trust doesn’t erode mid-build.",
        },
        {
            q: "Who do I talk to during the project?",
            a: "A named lead on our side — not a rotating PM chain. You’ll get demo checkpoints and a written path from brief to launch.",
        },
        {
            q: "What do we get at handoff?",
            a: "Runbooks, admin paths, environment notes, and a short walkthrough — docs ops will keep open, not a 40-slide graveyard.",
        },
    ],
    saas: [
        {
            q: "Are catalog products ready to buy online?",
            a: "No self-serve checkout. Catalog prices are implementation starting points. We adapt the product to your brand, data, and billing — then you own the stack.",
        },
        {
            q: "Whose Stripe account is it?",
            a: "Yours. Kiln doesn’t bill your end customers as a platform fee on these starters. Processor fees stay between you and your provider.",
        },
        {
            q: "Can we customize a catalog product?",
            a: "Yes — that’s the usual path. We’ll say early if greenfield is cheaper than bending a starter past its shape.",
        },
        {
            q: "Do you build net-new SaaS from scratch?",
            a: "When the market and margins justify it. Sometimes we recommend a sharp internal tool first instead of multi-tenant billing on day one.",
        },
        {
            q: "Where do I browse products?",
            a: "The SaaS catalog lists starters by category. The SaaS subscriptions service page explains how engagements work before you pick a product.",
        },
    ],
};

export function getFaqItems(topicKey) {
    return faqByTopic[topicKey] ?? [];
}

export function resolveFaqTopic(hashOrKey) {
    if (!hashOrKey) return faqTopics[0].key;
    const normalized = String(hashOrKey).replace(/^#/, "").toLowerCase();
    const match = faqTopics.find(
        (t) => t.key === normalized || t.hash === normalized
    );
    return match?.key ?? faqTopics[0].key;
}
