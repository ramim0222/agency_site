// Static SaaS product catalog. No CMS / API.

export const saasPage = {
    eyebrow: "SaaS products",
    title: "Ready-to-adapt products from the kiln.",
    intro:
        "Multi-tenant starters we shape for your market — billing, ops, booking, and commerce. Filter by category or search by name.",
    empty:
        "No products match. Clear search, pick another category, or tell us what you need built.",
    searchPlaceholder: "Search products…",
};

export const saasCategories = [
    { key: "all", label: "All", slug: null },
    { key: "billing", label: "Billing", slug: "billing" },
    { key: "operations", label: "Operations", slug: "operations" },
    { key: "booking", label: "Booking", slug: "booking" },
    { key: "commerce", label: "Commerce", slug: "commerce" },
    { key: "internal", label: "Internal tools", slug: "internal" },
];

export const categoryLabels = {
    billing: "Billing",
    operations: "Operations",
    booking: "Booking",
    commerce: "Commerce",
    internal: "Internal tools",
};

/**
 * Catalog products — each links to /saas/{slug}.
 */
export const products = [
    {
        slug: "ledger-meter",
        name: "Ledger Meter",
        tagline: "Subscription billing with seats, plans, and dunning built in.",
        category: "billing",
        startingPrice: 2400,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Ledger+Meter+Billing",
            alt: "Ledger Meter billing dashboard with plans and failed-payment queue",
        },
    },
    {
        slug: "dispatch-board",
        name: "Dispatch Board",
        tagline: "Live job board for fleets that outgrew the shared spreadsheet.",
        category: "operations",
        startingPrice: 3200,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Dispatch+Board+Ops",
            alt: "Dispatch Board operations screen with assigned routes and exceptions",
        },
    },
    {
        slug: "clinic-book",
        name: "Clinic Book",
        tagline: "Patient booking and intake with reminders patients actually open.",
        category: "booking",
        startingPrice: 2800,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Clinic+Book+App",
            alt: "Clinic Book appointment scheduling interface",
        },
    },
    {
        slug: "parcel-desk",
        name: "Parcel Desk",
        tagline: "Multi-tenant shipping labels with usage billing per merchant.",
        category: "commerce",
        startingPrice: 3600,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Parcel+Desk+Labels",
            alt: "Parcel Desk label print queue for a merchant workspace",
        },
    },
    {
        slug: "seat-plan",
        name: "Seat & Plan",
        tagline: "Team seats, roles, and plan upgrades without a custom Stripe mashup.",
        category: "billing",
        startingPrice: 1800,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Seat+and+Plan+Admin",
            alt: "Seat and Plan admin showing team members and plan tiers",
        },
    },
    {
        slug: "field-sync",
        name: "Field Sync",
        tagline: "Offline inspection notes that sync when crews hit the yard Wi‑Fi.",
        category: "operations",
        startingPrice: 3000,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Field+Sync+Notes",
            alt: "Field Sync mobile inspection capture with offline queue",
        },
    },
    {
        slug: "quote-desk",
        name: "Quote Desk",
        tagline: "Internal quote pipeline from brief to send — no more lost email threads.",
        category: "internal",
        startingPrice: 2200,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Quote+Desk+Pipeline",
            alt: "Quote Desk internal pipeline board for open proposals",
        },
    },
    {
        slug: "usage-tap",
        name: "Usage Tap",
        tagline: "Metered usage events into Stripe so you bill what customers actually use.",
        category: "billing",
        startingPrice: 2600,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Usage+Tap+Metering",
            alt: "Usage Tap metering chart tied to Stripe usage records",
        },
    },
    {
        slug: "slot-keeper",
        name: "Slot Keeper",
        tagline: "Service booking calendars with deposits and no-show protection.",
        category: "booking",
        startingPrice: 2500,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Slot+Keeper+Calendar",
            alt: "Slot Keeper calendar with bookable service windows",
        },
    },
    {
        slug: "wholesale-cart",
        name: "Wholesale Cart",
        tagline: "B2B ordering with customer price lists and ERP handoff.",
        category: "commerce",
        startingPrice: 3400,
        priceNote: "starting implementation",
        image: {
            src: "https://placehold.co/720x480?text=Wholesale+Cart+Portal",
            alt: "Wholesale Cart portal with customer-specific pricing",
        },
    },
];

export function formatStartingPrice(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(amount);
}

export function getProductBySlug(slug) {
    return products.find((product) => product.slug === slug) ?? null;
}

export function isValidCategorySlug(slug) {
    return saasCategories.some((cat) => cat.slug === slug);
}

export function getCategoryKeyFromSlug(slug) {
    const match = saasCategories.find((cat) => cat.slug === slug);
    return match?.key ?? "all";
}
