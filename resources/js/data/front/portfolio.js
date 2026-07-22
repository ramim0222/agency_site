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

export const caseStudyCta = {
    eyebrow: "Want something like this?",
    headline: "Tell us what you're trying to ship.",
    sub: "We'll reply within one business day with next steps — not a slide deck. Prefer chat? WhatsApp works too.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
};

const stackMeta = {
    Laravel: "La",
    React: "Re",
    PostgreSQL: "Pg",
    "React Native": "RN",
    Expo: "Ex",
    "Next.js": "Nx",
    Stripe: "St",
    Inertia: "In",
    Tailwind: "Tw",
    SQLite: "Sq",
    TypeScript: "Ts",
};

/**
 * Full case-study catalog. Home carousel + index + detail share this list.
 */
export const projects = [
    {
        slug: "harborline-dispatch",
        key: "harborline",
        category: "web_app",
        industry: "Logistics",
        client: "Harborline Logistics",
        title: "Dispatch and fleet tracking platform",
        result: "Replaced three spreadsheets and a shared inbox with one live dispatch board.",
        stack: ["Laravel", "React", "PostgreSQL"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Harborline+Dispatch+Dashboard",
            alt: "Screenshot of the Harborline Logistics dispatch dashboard with live fleet map",
        },
        challenge:
            "Harborline ran dispatch across three shared spreadsheets, a WhatsApp group, and a shared inbox. Drivers called for updates; planners lost track of who was already assigned. Peak season meant missed pickups and angry warehouse managers.",
        solution:
            "We built a live dispatch board with driver assignments, route status, and exception flags in one place. Planners drag jobs onto drivers; the board updates as drivers check in from the road. Exceptions surface before a customer calls.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Harborline+Live+Board",
                alt: "Harborline live dispatch board showing assigned and open jobs",
            },
            {
                src: "https://placehold.co/960x600?text=Harborline+Driver+View",
                alt: "Mobile driver view for Harborline with today's stops and status controls",
            },
            {
                src: "https://placehold.co/960x600?text=Harborline+Exception+Queue",
                alt: "Exception queue highlighting delayed and unassigned Harborline jobs",
            },
        ],
        metrics: [
            { value: "3→1", label: "Tools collapsed into one board" },
            { value: "40%", label: "Fewer missed pickup calls" },
            { value: "6 wks", label: "From kickoff to first live week" },
        ],
        testimonial: {
            quote:
                "They asked harder questions about our dispatch process than our own ops team did — the platform they built actually matches how we work.",
            name: "Priya Nandakumar",
            role: "Operations Lead",
            company: "Harborline Logistics",
        },
    },
    {
        slug: "fernway-booking",
        key: "fernway",
        category: "mobile_app",
        industry: "Healthcare",
        client: "Fernway Clinics",
        title: "Patient intake and booking app",
        result: "Moved phone-only booking onto a mobile app patients keep on their home screen.",
        stack: ["React Native", "Expo", "Laravel"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Fernway+Booking+App",
            alt: "Screenshot of the Fernway Clinics mobile booking app appointment screen",
        },
        challenge:
            "Every appointment started with a phone call. Front-desk staff spent mornings on hold queues while no-shows ate afternoon slots. Patients wanted to reschedule without calling during clinic hours.",
        solution:
            "A React Native app for booking, intake forms, and reminders — backed by a Laravel API the clinic already trusts. Staff see the same schedule in a web console; patients get push reminders the morning of.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Fernway+Book+Visit",
                alt: "Fernway app screen for selecting a visit type and time slot",
            },
            {
                src: "https://placehold.co/960x600?text=Fernway+Intake+Forms",
                alt: "Digital intake form flow inside the Fernway patient app",
            },
            {
                src: "https://placehold.co/960x600?text=Fernway+Staff+Console",
                alt: "Staff console showing today's Fernway clinic schedule",
            },
        ],
        metrics: [
            { value: "62%", label: "Bookings completed in-app" },
            { value: "28%", label: "Drop in same-day no-shows" },
            { value: "2 stores", label: "iOS and Android from one codebase" },
        ],
        testimonial: {
            quote:
                "We'd rebuilt our booking flow twice before Kiln. This is the first version our front-desk staff didn't complain about.",
            name: "Daniel Osei",
            role: "Clinic Director",
            company: "Fernway Clinics",
        },
    },
    {
        slug: "ledger-cove-billing",
        key: "ledger-cove",
        category: "saas",
        industry: "Fintech / SaaS",
        client: "Ledger Cove",
        title: "Subscription billing for a bookkeeping SaaS",
        result: "Launched metered plans and dunning so failed payments stop costing quiet churn.",
        stack: ["Next.js", "Stripe", "Laravel"],
        year: "2024",
        image: {
            src: "https://placehold.co/800x520?text=Ledger+Cove+Billing+UI",
            alt: "Screenshot of the Ledger Cove subscription billing and plan management UI",
        },
        challenge:
            "Ledger Cove had product-market fit and a fragile billing spreadsheet. Failed cards meant silent churn; upgrades needed a founder in Stripe. They needed plans, seats, and dunning before the next fundraise story.",
        solution:
            "We wired Stripe Billing into their Laravel core with a Next.js billing portal: plans, proration, failed-payment emails, and a clean upgrade path. Finance can see MRR without opening the Stripe dashboard every morning.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Ledger+Cove+Plans",
                alt: "Ledger Cove plan picker with metered usage tiers",
            },
            {
                src: "https://placehold.co/960x600?text=Ledger+Cove+Invoices",
                alt: "Customer invoice history inside the Ledger Cove billing portal",
            },
            {
                src: "https://placehold.co/960x600?text=Ledger+Cove+Dunning",
                alt: "Failed payment dunning sequence settings for Ledger Cove",
            },
        ],
        metrics: [
            { value: "$4k/mo", label: "Recovered from failed payments" },
            { value: "6 wks", label: "Billing live in production" },
            { value: "0", label: "Founder hours in Stripe day-to-day" },
        ],
        testimonial: {
            quote:
                "Billing is the part of a SaaS nobody wants to touch. They shipped ours in six weeks and it hasn't paged us once.",
            name: "Marisol Fuentes",
            role: "Founder",
            company: "Ledger Cove",
        },
    },
    {
        slug: "northgrain-ordering",
        key: "northgrain",
        category: "web_app",
        industry: "Wholesale / Agriculture",
        client: "Northgrain Supply Co.",
        title: "Wholesale ordering portal",
        result: "Gave field reps a tablet-friendly ordering flow that syncs straight into their ERP.",
        stack: ["Laravel", "Inertia", "React"],
        year: "2024",
        image: {
            src: "https://placehold.co/800x520?text=Northgrain+Ordering+Portal",
            alt: "Screenshot of the Northgrain Supply Co. wholesale ordering portal",
        },
        challenge:
            "Field reps wrote orders on paper, then retyped them into the ERP at the office. Typos, delayed inventory counts, and weekend backlog were the norm every harvest season.",
        solution:
            "A tablet-first ordering portal with customer price lists, offline-tolerant drafts, and a sync job into their existing ERP. Reps finish the order on-site; warehouse sees it before they drive back.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Northgrain+Catalog",
                alt: "Northgrain product catalog with customer-specific pricing",
            },
            {
                src: "https://placehold.co/960x600?text=Northgrain+Cart",
                alt: "Tablet cart review screen for a Northgrain wholesale order",
            },
            {
                src: "https://placehold.co/960x600?text=Northgrain+ERP+Sync",
                alt: "ERP sync status panel for submitted Northgrain orders",
            },
        ],
        metrics: [
            { value: "2×", label: "Faster order capture in the field" },
            { value: "90%", label: "Orders synced without retyping" },
            { value: "1 day", label: "Training for the full rep team" },
        ],
        testimonial: {
            quote:
                "Our reps stopped bringing pads to farms. If it's not in the portal, it didn't happen — and inventory finally matches reality.",
            name: "Elena Vasquez",
            role: "VP Sales",
            company: "Northgrain Supply Co.",
        },
    },
    {
        slug: "atlas-ridge-marketing",
        key: "atlas-ridge",
        category: "website",
        industry: "Private equity",
        client: "Atlas Ridge Capital",
        title: "Marketing site for a growth equity firm",
        result: "A calm, fast site that made their thesis readable — and doubled qualified inbound.",
        stack: ["Laravel", "React", "Tailwind"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Atlas+Ridge+Marketing+Site",
            alt: "Screenshot of the Atlas Ridge Capital marketing homepage hero",
        },
        challenge:
            "Atlas Ridge's old site looked like every other PE template — stock skylines, vague copy, and a contact form nobody answered. Founders couldn't tell what they actually invested in.",
        solution:
            "We rebuilt the site around their thesis, portfolio proof, and a clear inquiry path. Performance and typography do the quiet work; the content does the selling.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Atlas+Ridge+Hero",
                alt: "Atlas Ridge homepage hero with firm thesis headline",
            },
            {
                src: "https://placehold.co/960x600?text=Atlas+Ridge+Portfolio",
                alt: "Selected portfolio companies grid on the Atlas Ridge site",
            },
            {
                src: "https://placehold.co/960x600?text=Atlas+Ridge+Inquiry",
                alt: "Founder inquiry form on the Atlas Ridge contact page",
            },
        ],
        metrics: [
            { value: "2×", label: "Qualified inbound in 90 days" },
            { value: "98", label: "Lighthouse performance score" },
            { value: "3 wks", label: "Design to public launch" },
        ],
        testimonial: {
            quote:
                "We finally have a site we can send in a first email without apologizing. Founders actually finish reading it.",
            name: "James Whitfield",
            role: "Partner",
            company: "Atlas Ridge Capital",
        },
    },
    {
        slug: "fieldnote-ops",
        key: "fieldnote",
        category: "mobile_app",
        industry: "Construction",
        client: "Fieldnote",
        title: "Field inspection notes for contractors",
        result: "Crews capture photos and punch lists offline, then sync when they hit the yard Wi‑Fi.",
        stack: ["React Native", "SQLite", "Laravel"],
        year: "2024",
        image: {
            src: "https://placehold.co/800x520?text=Fieldnote+Inspection+App",
            alt: "Screenshot of the Fieldnote contractor inspection mobile app",
        },
        challenge:
            "Inspectors worked in basements and steel shells with no signal. Notes lived in camera rolls and text threads; punch lists got lost between the site and the office.",
        solution:
            "An offline-first React Native app with local SQLite storage, photo capture, and a sync queue that flushes when connectivity returns. The office sees structured punch lists instead of screenshot dumps.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Fieldnote+Offline+Capture",
                alt: "Fieldnote offline photo capture screen on a job site",
            },
            {
                src: "https://placehold.co/960x600?text=Fieldnote+Punch+List",
                alt: "Structured punch list view inside Fieldnote",
            },
            {
                src: "https://placehold.co/960x600?text=Fieldnote+Sync+Queue",
                alt: "Sync queue showing pending Fieldnote uploads",
            },
        ],
        metrics: [
            { value: "100%", label: "Inspections usable offline" },
            { value: "3 hrs", label: "Saved per crew per week" },
            { value: "1 app", label: "Replacing camera roll + SMS" },
        ],
        testimonial: {
            quote:
                "If the basement has no bars, the app still works. That alone paid for the build in a month.",
            name: "Chris Malone",
            role: "Safety Director",
            company: "Fieldnote",
        },
    },
    {
        slug: "parcelkit-saas",
        key: "parcelkit",
        category: "saas",
        industry: "Logistics SaaS",
        client: "Parcelkit",
        title: "Multi-tenant shipping label SaaS",
        result: "Shipped teams, seats, and usage billing so their first fifty merchants could self-serve.",
        stack: ["Laravel", "Inertia", "Stripe"],
        year: "2025",
        image: {
            src: "https://placehold.co/800x520?text=Parcelkit+Shipping+SaaS",
            alt: "Screenshot of the Parcelkit multi-tenant shipping dashboard",
        },
        challenge:
            "Parcelkit's MVP worked for one merchant at a time. They needed true multi-tenancy, seats, and usage billing before opening the waitlist — without rewriting the label engine.",
        solution:
            "We layered tenancy, roles, and Stripe usage billing onto their Laravel app with an Inertia admin. Merchants invite teammates; Parcelkit bills on labels printed, not seats alone.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Parcelkit+Tenants",
                alt: "Parcelkit tenant switcher and workspace overview",
            },
            {
                src: "https://placehold.co/960x600?text=Parcelkit+Labels",
                alt: "Label print queue inside a Parcelkit merchant workspace",
            },
            {
                src: "https://placehold.co/960x600?text=Parcelkit+Usage+Billing",
                alt: "Usage-based billing chart for Parcelkit label volume",
            },
        ],
        metrics: [
            { value: "50+", label: "Merchants self-serve onboarded" },
            { value: "4 wks", label: "Tenancy + billing shipped" },
            { value: "1 codebase", label: "No rewrite of the label engine" },
        ],
        testimonial: {
            quote:
                "We stopped provisioning accounts by hand. The waitlist became a product overnight.",
            name: "Amina Okonkwo",
            role: "CEO",
            company: "Parcelkit",
        },
    },
    {
        slug: "glasshouse-studio",
        key: "glasshouse",
        category: "website",
        industry: "Architecture",
        client: "Glasshouse Studio",
        title: "Architecture studio portfolio site",
        result: "A quiet project archive that loads like a book — not a slideshow of stock glass.",
        stack: ["Laravel", "React", "Tailwind"],
        year: "2023",
        image: {
            src: "https://placehold.co/800x520?text=Glasshouse+Studio+Site",
            alt: "Screenshot of the Glasshouse Studio architecture portfolio website",
        },
        challenge:
            "Glasshouse's previous site buried their best projects under autoplay carousels and agency jargon. Clients couldn't find a single built work with context.",
        solution:
            "An editorial project archive: large photography, short captions, and filters by typology. The site is slow to scroll on purpose — and fast to load.",
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Glasshouse+Archive",
                alt: "Glasshouse project archive grid with typology filters",
            },
            {
                src: "https://placehold.co/960x600?text=Glasshouse+Project+Page",
                alt: "Single project page with large photography for Glasshouse Studio",
            },
            {
                src: "https://placehold.co/960x600?text=Glasshouse+Studio+About",
                alt: "About page for Glasshouse Studio with team and approach",
            },
        ],
        metrics: [
            { value: "4×", label: "Time on project pages" },
            { value: "<1s", label: "LCP on project images" },
            { value: "12", label: "Projects published at launch" },
        ],
        testimonial: {
            quote:
                "It finally feels like our work, not a template wearing our logo. Clients mention the site in the first meeting now.",
            name: "Sofia Lange",
            role: "Principal",
            company: "Glasshouse Studio",
        },
    },
];

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug) ?? null;
}

export function getRelatedProjects(slug, limit = 3) {
    const current = getProjectBySlug(slug);
    if (!current) return projects.slice(0, limit);

    const sameCategory = projects.filter(
        (p) => p.slug !== slug && p.category === current.category
    );
    const others = projects.filter(
        (p) => p.slug !== slug && p.category !== current.category
    );

    return [...sameCategory, ...others].slice(0, limit);
}

export function stackBadges(stack = []) {
    return stack.map((label) => ({
        label,
        mark: stackMeta[label] ?? label.slice(0, 2),
    }));
}

/** Home page carousel — first four flagship briefs. */
export const homePortfolio = projects.slice(0, 4);
