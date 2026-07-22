// Static copy + option lists for the Contact / Get a Quote page.

export const contactPage = {
    eyebrow: "Get a quote",
    headline: "Tell us what you're building.",
    sub: "Three short steps. We'll reply within one business day with next steps — not a sales deck.",
    whatsappAlt: {
        label: "Skip the form — WhatsApp us",
        message:
            "Hi Kiln — I'd like a quote. Here's a quick outline of what I need:",
        note: "Prefer a chat? Open WhatsApp and we'll pick it up there.",
    },
    trust: {
        quote:
            "They asked harder questions about our dispatch process than our own ops team did — the platform they built actually matches how we work.",
        name: "Priya Nandakumar",
        role: "Operations Lead, Harborline Logistics",
        stat: { value: "1 day", label: "Typical reply time" },
    },
};

export const formSteps = [
    { id: 1, key: "service", label: "Build type" },
    { id: 2, key: "scope", label: "Budget & timing" },
    { id: 3, key: "contact", label: "Your details" },
];

export const serviceOptions = [
    {
        value: "website",
        title: "Website",
        description: "Marketing site or content platform that needs to load fast and hold up after launch.",
        hrefHint: "/services/web-development",
    },
    {
        value: "web_app",
        title: "Web app",
        description: "Dashboards, portals, and internal tools your team runs the day on.",
        hrefHint: "/services/web-apps",
    },
    {
        value: "mobile_app",
        title: "Mobile app",
        description: "iOS and Android from one React Native codebase, shipped to both stores.",
        hrefHint: "/services/mobile-apps",
    },
    {
        value: "saas",
        title: "SaaS product",
        description: "Multi-tenant product with plans, billing, and usage limits built in.",
        hrefHint: "/services/saas",
    },
];

export const budgetOptions = [
    { value: "under_5k", label: "Under $5k", hint: "Focused MVP or site rebuild" },
    { value: "5k_15k", label: "$5k – $15k", hint: "Typical product slice" },
    { value: "15k_40k", label: "$15k – $40k", hint: "Full product or multi-surface build" },
    { value: "40k_plus", label: "$40k+", hint: "Larger platform engagement" },
    { value: "not_sure", label: "Not sure yet", hint: "We'll help you size it" },
];

export const timelineOptions = [
    { value: "asap", label: "ASAP", hint: "Need to start within weeks" },
    { value: "1_3_months", label: "1–3 months", hint: "Most common window" },
    { value: "3_6_months", label: "3–6 months", hint: "Planning ahead" },
    { value: "flexible", label: "Flexible", hint: "Quality over a hard date" },
];

// thank-you copy lives in data/front/thankYou.js
