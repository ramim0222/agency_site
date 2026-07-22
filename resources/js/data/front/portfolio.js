// Static portfolio index + case-study records. No CMS / API.

export const portfolioPage = {
    eyebrow: "Selected work",
    title: "Case studies from the kiln.",
    intro:
        "Real products we shipped — websites, web apps, mobile, and SaaS. Filter by what you're building, then open a brief.",
    empty:
        "Nothing in this category yet. Try All, or tell us about your project and we'll add it to the fire.",
};

export const filterTabs = [
    { key: "all", label: "All" },
    { key: "website", label: "Website" },
    { key: "web_app", label: "Web App" },
    { key: "mobile_app", label: "Mobile App" },
    { key: "saas", label: "SaaS" },
];

export const categoryLabels = {
    website: "Website",
    web_app: "Web App",
    mobile_app: "Mobile App",
    saas: "SaaS",
};

/**
 * Full case-study catalog. Home carousel uses the same objects.
 */
export const projects = [
    {
        slug: "harborline-dispatch",
        key: "harborline",
        category: "web_app",
        client: "Harborline Logistics",
        title: "Dispatch and fleet tracking platform",
        result: "Replaced three spreadsheets and a shared inbox with one live dispatch board.",
        stack: ["Laravel", "React", "PostgreSQL"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Harborline+Dispatch+Dashboard",
            alt: "Screenshot of the Harborline Logistics dispatch dashboard with live fleet map",
        },
    },
    {
        slug: "fernway-booking",
        key: "fernway",
        category: "mobile_app",
        client: "Fernway Clinics",
        title: "Patient intake and booking app",
        result: "Moved phone-only booking onto a mobile app patients keep on their home screen.",
        stack: ["React Native", "Expo", "Laravel"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Fernway+Booking+App",
            alt: "Screenshot of the Fernway Clinics mobile booking app appointment screen",
        },
    },
    {
        slug: "ledger-cove-billing",
        key: "ledger-cove",
        category: "saas",
        client: "Ledger Cove",
        title: "Subscription billing for a bookkeeping SaaS",
        result: "Launched metered plans and dunning so failed payments stop costing quiet churn.",
        stack: ["Next.js", "Stripe", "Laravel"],
        year: "2024",
        image: {
            src: "https://placehold.co/800x520?text=Ledger+Cove+Billing+UI",
            alt: "Screenshot of the Ledger Cove subscription billing and plan management UI",
        },
    },
    {
        slug: "northgrain-ordering",
        key: "northgrain",
        category: "web_app",
        client: "Northgrain Supply Co.",
        title: "Wholesale ordering portal",
        result: "Gave field reps a tablet-friendly ordering flow that syncs straight into their ERP.",
        stack: ["Laravel", "Inertia", "React"],
        year: "2024",
        image: {
            src: "https://placehold.co/800x520?text=Northgrain+Ordering+Portal",
            alt: "Screenshot of the Northgrain Supply Co. wholesale ordering portal",
        },
    },
    {
        slug: "atlas-ridge-marketing",
        key: "atlas-ridge",
        category: "website",
        client: "Atlas Ridge Capital",
        title: "Marketing site for a growth equity firm",
        result: "A calm, fast site that made their thesis readable — and doubled qualified inbound.",
        stack: ["Laravel", "React", "Tailwind"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Atlas+Ridge+Marketing+Site",
            alt: "Screenshot of the Atlas Ridge Capital marketing homepage hero",
        },
    },
    {
        slug: "fieldnote-ops",
        key: "fieldnote",
        category: "mobile_app",
        client: "Fieldnote",
        title: "Field inspection notes for contractors",
        result: "Crews capture photos and punch lists offline, then sync when they hit the yard Wi‑Fi.",
        stack: ["React Native", "SQLite", "Laravel"],
        year: "2024",
        image: {
            src: "https://placehold.co/800x520?text=Fieldnote+Inspection+App",
            alt: "Screenshot of the Fieldnote contractor inspection mobile app",
        },
    },
    {
        slug: "parcelkit-saas",
        key: "parcelkit",
        category: "saas",
        client: "Parcelkit",
        title: "Multi-tenant shipping label SaaS",
        result: "Shipped teams, seats, and usage billing so their first fifty merchants could self-serve.",
        stack: ["Laravel", "Inertia", "Stripe"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Parcelkit+Shipping+SaaS",
            alt: "Screenshot of the Parcelkit multi-tenant shipping dashboard",
        },
    },
    {
        slug: "glasshouse-studio",
        key: "glasshouse",
        category: "website",
        client: "Glasshouse Studio",
        title: "Architecture studio portfolio site",
        result: "A quiet project archive that loads like a book — not a slideshow of stock glass.",
        stack: ["Laravel", "React", "Tailwind"],
        year: "2023",
        image: {
            src: "https://placehold.co/800x520?text=Glasshouse+Studio+Site",
            alt: "Screenshot of the Glasshouse Studio architecture portfolio website",
        },
    },
];

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug) ?? null;
}

/** Home page carousel — first four flagship briefs. */
export const homePortfolio = projects.slice(0, 4);
