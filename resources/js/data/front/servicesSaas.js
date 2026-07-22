// Static copy for /services/saas — marketplace pitch, no self-serve checkout.

export const saasService = {
    slug: "saas",
    eyebrow: "SaaS subscriptions",
    headline: "Ready-made software for your business — adapted with us.",
    sub: "Browse starters for billing, ops, booking, and commerce. There's no automated signup: you pick a product, we scope the fit, then we shape it for your market over a conversation.",
    heroImage: {
        src: "https://placehold.co/1200x800?text=SaaS+Product+Catalog",
        alt: "Grid of SaaS product dashboards representing Kiln's ready-to-adapt software catalog",
    },
    primaryCta: {
        label: "Browse the catalog",
        href: "/saas",
    },
    whatsappMessage:
        "Hi Kiln — I'm interested in your SaaS products. Here's what my business needs:",
    categoriesEyebrow: "Categories",
    categoriesTitle: "Where ready-made software helps first",
    featuredEyebrow: "Featured products",
    featuredTitle: "Starters teams ask about most",
    featuredEmpty: "Featured products are being curated. Browse the full catalog.",
    benefitsEyebrow: "Why Kiln SaaS",
    benefitsTitle: "Why choose our SaaS products",
    cta: {
        eyebrow: "Full catalog",
        headline: "See every product — then talk to us.",
        sub: "Filter by category, open a product brief, and start a quote. Subscribing means a conversation first — not a credit-card form.",
        primaryCta: {
            label: "Open the SaaS catalog",
            href: "/saas",
        },
    },
};

/**
 * Marketplace category tiles. Labels match common business software names;
 * hrefs point at real /saas/category/{slug} routes (or /saas when no match).
 */
export const saasMarketplaceCategories = [
    {
        key: "accounting",
        name: "Accounting",
        blurb: "Plans, seats, invoices, and dunning without rebuilding Stripe.",
        href: "/saas/category/billing",
        image: {
            src: "https://placehold.co/480x320?text=Accounting+Billing",
            alt: "Accounting and subscription billing category preview",
        },
    },
    {
        key: "crm",
        name: "CRM",
        blurb: "Live boards and field ops for teams that outgrew the shared inbox.",
        href: "/saas/category/operations",
        image: {
            src: "https://placehold.co/480x320?text=CRM+Operations",
            alt: "CRM and operations category preview",
        },
    },
    {
        key: "pos",
        name: "POS",
        blurb: "Labels, wholesale carts, and usage-tied commerce for merchants.",
        href: "/saas/category/commerce",
        image: {
            src: "https://placehold.co/480x320?text=POS+Commerce",
            alt: "POS and commerce category preview",
        },
    },
    {
        key: "hr",
        name: "HR",
        blurb: "Internal desks and quote pipelines your team runs every day.",
        href: "/saas/category/internal",
        image: {
            src: "https://placehold.co/480x320?text=HR+Internal",
            alt: "HR and internal tools category preview",
        },
    },
    {
        key: "booking",
        name: "Booking",
        blurb: "Calendars, deposits, and reminders clinics and studios finish.",
        href: "/saas/category/booking",
        image: {
            src: "https://placehold.co/480x320?text=Booking+Calendars",
            alt: "Booking and scheduling category preview",
        },
    },
    {
        key: "marketing",
        name: "Marketing",
        blurb: "Need a campaign or content stack? Browse all products or ask us to adapt one.",
        href: "/saas",
        image: {
            src: "https://placehold.co/480x320?text=Marketing+Tools",
            alt: "Marketing tools category preview linking to full catalog",
        },
    },
];

/** Featured catalog slugs shown on the service page. */
export const saasFeaturedSlugs = [
    "ledger-meter",
    "dispatch-board",
    "clinic-book",
    "parcel-desk",
];

export const saasBenefits = [
    {
        key: "conversation",
        title: "Talk first, subscribe after",
        body: "No self-serve checkout. Every plan CTA opens a conversation so we map the product to your market before anything goes live.",
    },
    {
        key: "adapted",
        title: "Adapted, not generic",
        body: "Starters are real codebases we reshape — branding, tenants, and pricing — instead of forcing you into a rigid SaaS shell.",
    },
    {
        key: "owned",
        title: "You own the Stripe account",
        body: "Billing products wire to your processor. Funds and customer relationships stay with you, not on our platform.",
    },
    {
        key: "catalog",
        title: "Clear catalog, clear next step",
        body: "Browse categories and product briefs, then WhatsApp or quote. The path is catalog → conversation → build.",
    },
];
