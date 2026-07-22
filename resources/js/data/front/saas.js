// Static SaaS product catalog + detail briefs. No CMS / API.

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
 * Detail fields (gallery, features, plans, faq) live in productDetails.
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

/** Full detail payloads keyed by product slug. */
export const productDetails = {
    "ledger-meter": {
        description:
            "A multi-tenant billing core for subscription products — plans, seats, invoices, and a failed-payment sequence that actually recovers revenue. We adapt the flows to your pricing model; you stay out of the Stripe dashboard for day-to-day upgrades.",
        logo: {
            src: "https://placehold.co/120x120?text=LM",
            alt: "Ledger Meter product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Ledger+Meter+Plans",
                alt: "Ledger Meter plan picker with seat-based tiers",
            },
            {
                src: "https://placehold.co/960x600?text=Ledger+Meter+Invoices",
                alt: "Customer invoice history in the Ledger Meter portal",
            },
            {
                src: "https://placehold.co/960x600?text=Ledger+Meter+Dunning",
                alt: "Failed-payment dunning settings in Ledger Meter",
            },
        ],
        features: [
            {
                title: "Plans & seats",
                body: "Tiered plans with seat counts, proration, and self-serve upgrades.",
            },
            {
                title: "Dunning that recovers",
                body: "Timed retries and customer emails when cards fail — quiet churn stops.",
            },
            {
                title: "Tenant-ready",
                body: "Workspace isolation, admin roles, and branding hooks per tenant.",
            },
            {
                title: "Finance visibility",
                body: "MRR and failed-payment views without living in Stripe.",
            },
        ],
        plans: [
            {
                key: "pilot",
                name: "Pilot",
                price: 2400,
                cadence: "one-time setup",
                blurb: "Single product, one billing mode, launch-ready portal.",
                highlights: ["1 plan family", "Seat billing", "Basic dunning", "4-week install"],
                recommended: false,
            },
            {
                key: "growth",
                name: "Growth",
                price: 4800,
                cadence: "one-time setup",
                blurb: "Metered add-ons, richer dunning, and admin reporting.",
                highlights: [
                    "Multiple plan families",
                    "Usage add-ons",
                    "Full dunning sequence",
                    "Admin MRR views",
                ],
                recommended: true,
            },
            {
                key: "platform",
                name: "Platform",
                price: 8200,
                cadence: "one-time setup",
                blurb: "White-label portal, custom tax hooks, and handoff docs.",
                highlights: [
                    "White-label portal",
                    "Tax / locale hooks",
                    "Webhook playbook",
                    "Priority scoping",
                ],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Is this a live Stripe subscription product?",
                a: "No checkout runs on this site. Pricing tiers are informational. Every plan CTA opens a conversation so we can scope your market, tenants, and Stripe account.",
            },
            {
                q: "Can you match our existing plan names?",
                a: "Yes. We map your tiers into Ledger Meter during install — you don't need to rename plans for customers.",
            },
            {
                q: "Who owns the Stripe account?",
                a: "You do. We wire the product to your Stripe; funds never pass through Kiln.",
            },
        ],
    },
    "dispatch-board": {
        description:
            "A live assignment board for fleets and field teams — jobs, drivers, exceptions, and a wall view planners can run without three spreadsheets open.",
        logo: {
            src: "https://placehold.co/120x120?text=DB",
            alt: "Dispatch Board product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Dispatch+Board+Wall",
                alt: "Dispatch Board wall view with assigned routes",
            },
            {
                src: "https://placehold.co/960x600?text=Dispatch+Exceptions",
                alt: "Exception queue for late and unassigned jobs",
            },
            {
                src: "https://placehold.co/960x600?text=Dispatch+Driver+App",
                alt: "Driver-facing job list for Dispatch Board",
            },
        ],
        features: [
            {
                title: "Live board",
                body: "Drag jobs onto crews with status that updates as work moves.",
            },
            {
                title: "Exception queue",
                body: "Late, unassigned, and blocked jobs surface before customers call.",
            },
            {
                title: "Driver view",
                body: "Simple job list for the field — no planner UI on a phone.",
            },
            {
                title: "Export & hooks",
                body: "CSV and webhook hooks into the systems you already run.",
            },
        ],
        plans: [
            {
                key: "crew",
                name: "Crew",
                price: 3200,
                cadence: "one-time setup",
                blurb: "One depot, core board, and driver list.",
                highlights: ["1 depot", "Live board", "Driver list", "CSV export"],
                recommended: false,
            },
            {
                key: "fleet",
                name: "Fleet",
                price: 5600,
                cadence: "one-time setup",
                blurb: "Multi-depot, exceptions, and planner roles.",
                highlights: ["Multi-depot", "Exceptions", "Roles", "Webhooks"],
                recommended: true,
            },
            {
                key: "network",
                name: "Network",
                price: 9000,
                cadence: "one-time setup",
                blurb: "Tenanted board for franchise or partner networks.",
                highlights: ["Multi-tenant", "Branding", "SLA views", "Priority install"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Does this replace our TMS?",
                a: "Usually it sits next to it. We start with the planner board and driver list, then hook into your TMS if you already have one.",
            },
            {
                q: "Offline support?",
                a: "Driver list caches the day's jobs. Full offline inspection capture is Field Sync — we can pair the two.",
            },
            {
                q: "How do plan prices work?",
                a: "Setup prices cover implementation. Ongoing hosting and Stripe (if any) are discussed in scoping — nothing auto-bills from this page.",
            },
        ],
    },
    "clinic-book": {
        description:
            "Booking and intake for clinics that need reminders patients open, not another generic calendar widget glued to a spreadsheet.",
        logo: {
            src: "https://placehold.co/120x120?text=CB",
            alt: "Clinic Book product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Clinic+Book+Calendar",
                alt: "Clinic Book provider calendar with open slots",
            },
            {
                src: "https://placehold.co/960x600?text=Clinic+Book+Intake",
                alt: "Patient intake form before a Clinic Book visit",
            },
            {
                src: "https://placehold.co/960x600?text=Clinic+Book+Reminders",
                alt: "Reminder sequence settings for Clinic Book",
            },
        ],
        features: [
            {
                title: "Provider calendars",
                body: "Rooms, providers, and visit types without double-booking.",
            },
            {
                title: "Intake forms",
                body: "Collect what the visit needs before anyone walks in.",
            },
            {
                title: "Reminders",
                body: "SMS/email sequences that cut no-shows without nagging.",
            },
            {
                title: "Front desk tools",
                body: "Day sheet, waitlist, and quick reschedule.",
            },
        ],
        plans: [
            {
                key: "practice",
                name: "Practice",
                price: 2800,
                cadence: "one-time setup",
                blurb: "One location, core booking and reminders.",
                highlights: ["1 location", "Provider calendars", "Reminders", "Day sheet"],
                recommended: true,
            },
            {
                key: "group",
                name: "Group",
                price: 5200,
                cadence: "one-time setup",
                blurb: "Multi-location, intake forms, waitlist.",
                highlights: ["Multi-location", "Intake", "Waitlist", "Roles"],
                recommended: false,
            },
            {
                key: "network",
                name: "Network",
                price: 8600,
                cadence: "one-time setup",
                blurb: "Tenanted clinics under one brand umbrella.",
                highlights: ["Multi-tenant", "Branding", "Reporting", "Priority scoping"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "HIPAA / PHI?",
                a: "We scope hosting and BAAs per engagement. The product is built to keep PHI out of marketing tools by default.",
            },
            {
                q: "Can patients pay deposits?",
                a: "Yes on Group and above — deposits route through your processor, not Kiln.",
            },
            {
                q: "Do you integrate with our EHR?",
                a: "When the EHR has a real API or HL7 path, yes. Otherwise we start with calendar + intake and add a bridge later.",
            },
        ],
    },
    "parcel-desk": {
        description:
            "Label printing and usage billing for shipping platforms — merchants get workspaces; you meter labels and invoice usage.",
        logo: {
            src: "https://placehold.co/120x120?text=PD",
            alt: "Parcel Desk product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Parcel+Desk+Queue",
                alt: "Parcel Desk label print queue",
            },
            {
                src: "https://placehold.co/960x600?text=Parcel+Desk+Usage",
                alt: "Usage meter per merchant in Parcel Desk",
            },
            {
                src: "https://placehold.co/960x600?text=Parcel+Desk+Admin",
                alt: "Platform admin for Parcel Desk tenants",
            },
        ],
        features: [
            {
                title: "Merchant workspaces",
                body: "Isolated tenants with their own labels and users.",
            },
            {
                title: "Usage metering",
                body: "Label counts feed invoices — no spreadsheet reconciliation.",
            },
            {
                title: "Print queue",
                body: "Batch labels for warehouse printers without chaos.",
            },
            {
                title: "Carrier hooks",
                body: "Pluggable carrier adapters during install.",
            },
        ],
        plans: [
            {
                key: "harbor",
                name: "Harbor",
                price: 3600,
                cadence: "one-time setup",
                blurb: "Core multi-tenant labels and usage counts.",
                highlights: ["Tenants", "Label queue", "Usage counts", "CSV billing export"],
                recommended: false,
            },
            {
                key: "lane",
                name: "Lane",
                price: 6400,
                cadence: "one-time setup",
                blurb: "Stripe usage invoices and carrier adapters.",
                highlights: ["Stripe usage", "Carrier hooks", "Roles", "Admin reporting"],
                recommended: true,
            },
            {
                key: "hub",
                name: "Hub",
                price: 9800,
                cadence: "one-time setup",
                blurb: "White-label portal and partner billing.",
                highlights: ["White-label", "Partner pricing", "Webhooks", "Priority install"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Which carriers?",
                a: "We wire the carriers you need during install. The product ships with adapter slots — not a fake universal carrier list.",
            },
            {
                q: "Is label postage included?",
                a: "No. Postage and carrier accounts stay yours (or your merchants').",
            },
            {
                q: "Can merchants bring their own rates?",
                a: "On Lane and Hub, yes — negotiated rates per tenant are supported.",
            },
        ],
    },
    "seat-plan": {
        description:
            "Team seats, roles, and plan changes without a one-off Stripe mashup. Pair it with Ledger Meter or drop it into an existing app.",
        logo: {
            src: "https://placehold.co/120x120?text=SP",
            alt: "Seat and Plan product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Seat+Plan+Members",
                alt: "Seat and Plan member list with roles",
            },
            {
                src: "https://placehold.co/960x600?text=Seat+Plan+Upgrade",
                alt: "Self-serve plan upgrade flow",
            },
            {
                src: "https://placehold.co/960x600?text=Seat+Plan+Roles",
                alt: "Role permission matrix for Seat and Plan",
            },
        ],
        features: [
            {
                title: "Seat invites",
                body: "Invite, revoke, and reassign seats without support tickets.",
            },
            {
                title: "Role matrix",
                body: "Clear admin / member permissions you can extend.",
            },
            {
                title: "Plan changes",
                body: "Upgrades and downgrades with honest proration messaging.",
            },
            {
                title: "Embeddable",
                body: "Drop into an existing Laravel/React product shell.",
            },
        ],
        plans: [
            {
                key: "kit",
                name: "Kit",
                price: 1800,
                cadence: "one-time setup",
                blurb: "Seats + roles in your app shell.",
                highlights: ["Seats", "Roles", "Invites", "Docs"],
                recommended: true,
            },
            {
                key: "billing",
                name: "Billing",
                price: 3400,
                cadence: "one-time setup",
                blurb: "Kit plus Stripe plan changes.",
                highlights: ["Stripe plans", "Proration copy", "Portal hooks", "Support playbook"],
                recommended: false,
            },
            {
                key: "suite",
                name: "Suite",
                price: 5200,
                cadence: "one-time setup",
                blurb: "Full seat + plan + audit trail.",
                highlights: ["Audit log", "SSO hooks", "Custom roles", "Priority scoping"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Do I need Ledger Meter too?",
                a: "Not required. Seat & Plan can stand alone; Ledger Meter adds invoices and dunning if you need the full billing surface.",
            },
            {
                q: "SSO?",
                a: "Suite includes hooks for common SSO paths. We scope the IdP during install.",
            },
            {
                q: "How is pricing shown here?",
                a: "Informational setup ranges only. Contact us to map a plan to your product and Stripe mode.",
            },
        ],
    },
    "field-sync": {
        description:
            "Inspection and field notes that keep working offline, then sync when crews hit yard Wi‑Fi — no more lost paper pads.",
        logo: {
            src: "https://placehold.co/120x120?text=FS",
            alt: "Field Sync product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Field+Sync+Capture",
                alt: "Field Sync mobile capture form",
            },
            {
                src: "https://placehold.co/960x600?text=Field+Sync+Offline",
                alt: "Offline queue indicator in Field Sync",
            },
            {
                src: "https://placehold.co/960x600?text=Field+Sync+Review",
                alt: "Office review queue for synced Field Sync notes",
            },
        ],
        features: [
            {
                title: "Offline first",
                body: "Capture continues without signal; sync when online.",
            },
            {
                title: "Photo attach",
                body: "Photos queue with the note — not a separate chat thread.",
            },
            {
                title: "Office review",
                body: "Supervisors approve or flag notes after sync.",
            },
            {
                title: "Export",
                body: "PDF/CSV packs for clients and compliance folders.",
            },
        ],
        plans: [
            {
                key: "crew",
                name: "Crew",
                price: 3000,
                cadence: "one-time setup",
                blurb: "Mobile capture + sync for one crew type.",
                highlights: ["Offline capture", "Photos", "Sync queue", "CSV export"],
                recommended: true,
            },
            {
                key: "yard",
                name: "Yard",
                price: 5400,
                cadence: "one-time setup",
                blurb: "Multiple form types and office review.",
                highlights: ["Form builder", "Review queue", "Roles", "PDF packs"],
                recommended: false,
            },
            {
                key: "fleet",
                name: "Fleet",
                price: 8800,
                cadence: "one-time setup",
                blurb: "Multi-tenant field product for partners.",
                highlights: ["Multi-tenant", "Branding", "Webhooks", "Priority install"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Native app or web?",
                a: "We typically ship a mobile web app with install-to-home support. Native shells are a scoped add-on.",
            },
            {
                q: "How big can the offline queue get?",
                a: "Enough for a full day of notes and photos. We tune limits to your device mix during install.",
            },
            {
                q: "Pair with Dispatch Board?",
                a: "Yes — jobs from Dispatch can open a Field Sync form. Ask for the paired install.",
            },
        ],
    },
    "quote-desk": {
        description:
            "An internal pipeline from brief to sent quote — ownership, stages, and a single place for versions instead of lost email threads.",
        logo: {
            src: "https://placehold.co/120x120?text=QD",
            alt: "Quote Desk product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Quote+Desk+Board",
                alt: "Quote Desk pipeline board",
            },
            {
                src: "https://placehold.co/960x600?text=Quote+Desk+Editor",
                alt: "Quote line-item editor in Quote Desk",
            },
            {
                src: "https://placehold.co/960x600?text=Quote+Desk+Send",
                alt: "Send and version history in Quote Desk",
            },
        ],
        features: [
            {
                title: "Pipeline board",
                body: "Stages from brief → draft → sent → won/lost.",
            },
            {
                title: "Line items",
                body: "Reusable packages with notes your team actually keeps.",
            },
            {
                title: "Versions",
                body: "Know which PDF went out — and who changed it.",
            },
            {
                title: "Internal only",
                body: "Built for your team, not a public storefront.",
            },
        ],
        plans: [
            {
                key: "desk",
                name: "Desk",
                price: 2200,
                cadence: "one-time setup",
                blurb: "Board + editor for a single team.",
                highlights: ["Pipeline", "Line items", "PDF send", "History"],
                recommended: true,
            },
            {
                key: "studio",
                name: "Studio",
                price: 4000,
                cadence: "one-time setup",
                blurb: "Templates, roles, and win reporting.",
                highlights: ["Templates", "Roles", "Win report", "Slack/email hooks"],
                recommended: false,
            },
            {
                key: "firm",
                name: "Firm",
                price: 6500,
                cadence: "one-time setup",
                blurb: "Multi-team with approval gates.",
                highlights: ["Approvals", "Multi-team", "Audit", "Priority scoping"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Is this a CRM?",
                a: "No. It owns the quote path. Keep contacts in your CRM; Quote Desk stops the PDF chaos.",
            },
            {
                q: "E-sign?",
                a: "Studio and Firm can hook a signer you already use. We don't force a new e-sign vendor.",
            },
            {
                q: "Public pricing on this page?",
                a: "Informational only. Every CTA starts a scoping conversation — no self-serve checkout.",
            },
        ],
    },
    "usage-tap": {
        description:
            "Metered usage events into Stripe so you bill what customers consume — API calls, seats-overage, labels, compute minutes.",
        logo: {
            src: "https://placehold.co/120x120?text=UT",
            alt: "Usage Tap product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Usage+Tap+Events",
                alt: "Usage Tap event stream",
            },
            {
                src: "https://placehold.co/960x600?text=Usage+Tap+Meters",
                alt: "Meter definitions in Usage Tap",
            },
            {
                src: "https://placehold.co/960x600?text=Usage+Tap+Stripe",
                alt: "Stripe usage record sync status",
            },
        ],
        features: [
            {
                title: "Event ingest",
                body: "HTTP ingest with idempotency keys you can trust.",
            },
            {
                title: "Meters",
                body: "Define billable meters without rewriting Stripe each time.",
            },
            {
                title: "Stripe sync",
                body: "Usage records land on the right subscription items.",
            },
            {
                title: "Debug views",
                body: "See dropped and delayed events before finance asks.",
            },
        ],
        plans: [
            {
                key: "meter",
                name: "Meter",
                price: 2600,
                cadence: "one-time setup",
                blurb: "One meter family into Stripe.",
                highlights: ["Ingest API", "1 meter family", "Stripe sync", "Debug log"],
                recommended: false,
            },
            {
                key: "pipeline",
                name: "Pipeline",
                price: 4900,
                cadence: "one-time setup",
                blurb: "Multiple meters and alerting.",
                highlights: ["Multi-meter", "Alerts", "Replay tools", "Admin views"],
                recommended: true,
            },
            {
                key: "fabric",
                name: "Fabric",
                price: 7800,
                cadence: "one-time setup",
                blurb: "Multi-tenant metering for platforms.",
                highlights: ["Multi-tenant", "Per-tenant meters", "Webhooks", "Priority install"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Does this replace Billing?",
                a: "It feeds Stripe usage. Pair with Ledger Meter (or your portal) for plans and invoices.",
            },
            {
                q: "Volume limits?",
                a: "Sized during install. We design for your peak event rate, not a fake unlimited claim.",
            },
            {
                q: "Can we keep our own event bus?",
                a: "Yes — ingest from your bus or call the HTTP API directly.",
            },
        ],
    },
    "slot-keeper": {
        description:
            "Service booking calendars with deposits and no-show protection — for studios, salons, and service businesses that need more than Calendly.",
        logo: {
            src: "https://placehold.co/120x120?text=SK",
            alt: "Slot Keeper product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Slot+Keeper+Calendar",
                alt: "Slot Keeper service calendar",
            },
            {
                src: "https://placehold.co/960x600?text=Slot+Keeper+Deposit",
                alt: "Deposit checkout for a Slot Keeper booking",
            },
            {
                src: "https://placehold.co/960x600?text=Slot+Keeper+Staff",
                alt: "Staff schedule view in Slot Keeper",
            },
        ],
        features: [
            {
                title: "Service menus",
                body: "Durations, buffers, and staff skills per service.",
            },
            {
                title: "Deposits",
                body: "Collect deposits to cut no-shows — funds to your processor.",
            },
            {
                title: "Staff calendars",
                body: "Who's free, who's blocked, what's overbooked.",
            },
            {
                title: "Reminders",
                body: "Confirmations and reminders customers actually read.",
            },
        ],
        plans: [
            {
                key: "studio",
                name: "Studio",
                price: 2500,
                cadence: "one-time setup",
                blurb: "One location, booking + reminders.",
                highlights: ["Services", "Staff calendars", "Reminders", "Day view"],
                recommended: true,
            },
            {
                key: "deposit",
                name: "Deposit",
                price: 4200,
                cadence: "one-time setup",
                blurb: "Deposits and no-show rules.",
                highlights: ["Deposits", "No-show rules", "Policies", "Stripe/Pay hooks"],
                recommended: false,
            },
            {
                key: "chain",
                name: "Chain",
                price: 7200,
                cadence: "one-time setup",
                blurb: "Multi-location brand booking.",
                highlights: ["Multi-location", "Branding", "Reporting", "Priority scoping"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "How is this different from Clinic Book?",
                a: "Clinic Book is intake-heavy for clinical visits. Slot Keeper is service menus, deposits, and staff skills for studios and shops.",
            },
            {
                q: "Public booking page?",
                a: "Yes — a customer-facing book flow is part of Studio and above.",
            },
            {
                q: "Checkout on this marketing site?",
                a: "No. Plan CTAs open contact / WhatsApp so we can scope your services and processor.",
            },
        ],
    },
    "wholesale-cart": {
        description:
            "B2B ordering with customer price lists and ERP handoff — built for reps and buyers who reorder every week, not one-off DTC carts.",
        logo: {
            src: "https://placehold.co/120x120?text=WC",
            alt: "Wholesale Cart product mark",
        },
        gallery: [
            {
                src: "https://placehold.co/960x600?text=Wholesale+Cart+Catalog",
                alt: "Wholesale Cart catalog with customer pricing",
            },
            {
                src: "https://placehold.co/960x600?text=Wholesale+Cart+Order",
                alt: "Reorder flow in Wholesale Cart",
            },
            {
                src: "https://placehold.co/960x600?text=Wholesale+Cart+ERP",
                alt: "ERP sync status for Wholesale Cart orders",
            },
        ],
        features: [
            {
                title: "Price lists",
                body: "Per-customer pricing without exporting spreadsheets.",
            },
            {
                title: "Reorder flows",
                body: "Last order as a starting cart — one tap for regulars.",
            },
            {
                title: "ERP handoff",
                body: "Orders land where warehouse already works.",
            },
            {
                title: "Rep mode",
                body: "Reps place orders on behalf of accounts.",
            },
        ],
        plans: [
            {
                key: "counter",
                name: "Counter",
                price: 3400,
                cadence: "one-time setup",
                blurb: "Catalog + price lists + checkout.",
                highlights: ["Price lists", "Cart", "Accounts", "CSV export"],
                recommended: false,
            },
            {
                key: "route",
                name: "Route",
                price: 5800,
                cadence: "one-time setup",
                blurb: "Rep mode and ERP sync job.",
                highlights: ["Rep mode", "ERP sync", "Reorder", "Roles"],
                recommended: true,
            },
            {
                key: "network",
                name: "Network",
                price: 9200,
                cadence: "one-time setup",
                blurb: "Multi-warehouse / multi-brand wholesale.",
                highlights: ["Multi-warehouse", "Branding", "Webhooks", "Priority install"],
                recommended: false,
            },
        ],
        faq: [
            {
                q: "Which ERPs?",
                a: "Whatever you run that has an API or stable CSV drop. We scope the connector during install.",
            },
            {
                q: "Payments?",
                a: "Optional. Many wholesale accounts invoice NET terms — we support checkout or PO-only modes.",
            },
            {
                q: "Is pricing on this page a checkout?",
                a: "No. Tiers are for conversation. Contact / WhatsApp starts scoping — nothing charges from Kiln's site.",
            },
        ],
    },
};

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

export function getProductDetail(slug) {
    const base = getProductBySlug(slug);
    if (!base) return null;

    const detail = productDetails[slug] ?? {
        description: base.tagline,
        logo: {
            src: `https://placehold.co/120x120?text=${encodeURIComponent(base.name.slice(0, 2))}`,
            alt: `${base.name} product mark`,
        },
        gallery: [],
        features: [],
        plans: [],
        faq: [],
    };

    return { ...base, ...detail };
}

export function getRelatedProducts(slug, limit = 3) {
    const product = getProductBySlug(slug);
    if (!product) return [];

    const same = products.filter(
        (item) => item.slug !== slug && item.category === product.category
    );
    if (same.length >= limit) return same.slice(0, limit);

    const fillers = products.filter(
        (item) => item.slug !== slug && item.category !== product.category
    );
    return [...same, ...fillers].slice(0, limit);
}

export function contactHrefForPlan(productSlug, planKey) {
    const params = new URLSearchParams({
        product: productSlug,
        plan: planKey,
    });
    return `/contact?${params.toString()}`;
}

export function whatsappMessageForProduct(product, plan = null) {
    if (plan) {
        return `Hi Kiln — I'm interested in ${product.name} (${plan.name} plan). Can we talk about adapting it?`;
    }
    return `Hi Kiln — I'm interested in ${product.name}. Can we talk about adapting it?`;
}

export function isValidCategorySlug(slug) {
    return saasCategories.some((cat) => cat.slug === slug);
}

export function getCategoryKeyFromSlug(slug) {
    const match = saasCategories.find((cat) => cat.slug === slug);
    return match?.key ?? "all";
}
