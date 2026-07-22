// Static copy for /services/mobile-apps — React Native / cross-platform, no API.

export const mobileAppsService = {
    slug: "mobile-apps",
    eyebrow: "Mobile apps",
    headline: "One React Native codebase. iOS and Android that feel native.",
    sub: "Cross-platform apps backed by Laravel — shipped to both stores without maintaining two separate client teams. Built for real field and customer workflows, not demo-day mocks.",
    heroImage: {
        src: "https://placehold.co/1200x800?text=iOS+Android+App+Pair",
        alt: "Pair of iOS and Android phone mockups showing a Kiln-built React Native app",
    },
    primaryCta: {
        label: "Get a Free Quote",
        href: "/contact?service=mobile_app",
    },
    whatsappMessage:
        "Hi Kiln — I'm interested in a React Native mobile app (iOS + Android). Here's a quick outline:",
    portfolioEyebrow: "Selected work",
    portfolioTitle: "Apps we've shipped to the stores",
    portfolioEmpty:
        "Mobile case studies are being added. Browse the full portfolio or start a quote.",
    storeNote: "Store listings use placeholder badges until live URLs are ready.",
    processEyebrow: "How we work",
    processTitle: "From brief to both store listings",
    pricingEyebrow: "Pricing snapshot",
    pricingTitle: "Starting ranges for mobile builds",
    pricingNote:
        "Scope tracks screens, offline needs, and backend APIs — not just “an app.” Full tiers live on the pricing page.",
    faqTitle: "Mobile app questions",
    cta: {
        eyebrow: "Start a mobile app",
        headline: "Ready to ship on both platforms?",
        sub: "Tell us who the app is for and what has to work offline. We'll reply within one business day — or WhatsApp us if you'd rather chat.",
        primaryCta: {
            label: "Get a Free Quote",
            href: "/contact?service=mobile_app",
        },
    },
};

export const mobileStoreBadges = [
    {
        key: "app-store",
        label: "Download on the App Store",
        href: "#",
        image: {
            src: "https://placehold.co/180x54?text=App+Store",
            alt: "Download on the App Store badge placeholder",
        },
    },
    {
        key: "play-store",
        label: "Get it on Google Play",
        href: "#",
        image: {
            src: "https://placehold.co/180x54?text=Google+Play",
            alt: "Get it on Google Play badge placeholder",
        },
    },
];

export const mobileAppsProcess = [
    {
        key: "brief",
        label: "Product brief",
        body: "Users, platforms, offline rules, and which API surfaces the Laravel backend must own.",
    },
    {
        key: "prototype",
        label: "Flows & prototype",
        body: "Key screens on device-sized comps before we lock navigation and empty states.",
    },
    {
        key: "build",
        label: "Build both clients",
        body: "React Native (Expo when it fits) plus Laravel APIs — shared logic, platform-native polish where it matters.",
    },
    {
        key: "qa",
        label: "Device QA",
        body: "iOS and Android device passes, store assets, and permission / deep-link checks.",
    },
    {
        key: "launch",
        label: "Store launch",
        body: "App Store and Play submissions, review responses, and a handoff so your team can ship updates.",
    },
];

export const mobileAppsPricing = [
    {
        key: "mvp",
        name: "MVP app",
        range: "$12k – $22k",
        blurb: "Core flows on both stores, auth, and a focused Laravel API.",
        href: "/pricing#mobile-apps",
    },
    {
        key: "product",
        name: "Product app",
        range: "$22k – $45k",
        blurb: "Richer offline, push, roles, and integrations for day-to-day use.",
        href: "/pricing#mobile-apps",
        recommended: true,
    },
    {
        key: "platform",
        name: "Platform companion",
        range: "$45k+",
        blurb: "Deeper sync, multi-role field tools, or companion apps to a larger system.",
        href: "/pricing#mobile-apps",
    },
];

export const mobileAppsFaq = [
    {
        q: "Why React Native instead of two native apps?",
        a: "One team, one product surface, and faster iteration — with native modules where iOS or Android truly diverge. You still get App Store and Play listings.",
    },
    {
        q: "Do you build the backend too?",
        a: "Yes. Most of our mobile work ships with a Laravel API so auth, data, and admin stay in one place your team can own.",
    },
    {
        q: "Can the app work offline?",
        a: "When the brief needs it. We design sync and conflict rules up front — offline isn't a checkbox bolted on at the end.",
    },
    {
        q: "Who submits to the stores?",
        a: "We prepare builds, listings, and privacy questionnaires. You keep the developer accounts; we guide review until both stores are live.",
    },
    {
        q: "Is this page good as an ad landing URL?",
        a: "Yes — self-contained pitch, proof, pricing context, and CTAs to the quote form or WhatsApp. UTMs pass through to contact.",
    },
];
