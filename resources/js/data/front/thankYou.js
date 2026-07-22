// Static copy for the post-submit thank-you page.

export const thankYouPage = {
    eyebrow: "Brief received",
    headline: "Thanks — we'll be in touch.",
    sub: "Your project brief is with the studio. We read every submission and reply within one business day.",
    whatsapp: {
        label: "Or message us right now",
        message:
            "Hi Kiln — I just submitted a quote request and wanted to follow up here.",
        note: "Prefer not to wait? Open WhatsApp and we'll pick up the thread.",
    },
};

export const nextSteps = [
    {
        key: "review",
        title: "We review your brief",
        detail: "Someone on the team reads what you sent — usually the same day.",
    },
    {
        key: "reach-out",
        title: "We reach out within 24 hours",
        detail: "Expect an email or WhatsApp with clarifying questions or a short scoping call invite.",
    },
    {
        key: "scope",
        title: "We scope next steps together",
        detail: "If it's a fit, you'll get a clear proposal: timeline, approach, and a number — not a sales deck.",
    },
];

export const suggestedLinks = [
    {
        key: "portfolio",
        href: "/portfolio",
        eyebrow: "Selected work",
        title: "See products we've shipped",
        description: "Case notes from logistics, clinics, and SaaS teams who needed software that sticks.",
        image: {
            src: "https://placehold.co/640x400?text=Portfolio+Case+Studies",
            alt: "Preview collage of Kiln portfolio case study screenshots",
        },
    },
    {
        key: "saas",
        href: "/saas",
        eyebrow: "SaaS catalog",
        title: "Browse ready-to-adapt products",
        description: "Subscription platforms and billing patterns we can tailor instead of starting from zero.",
        image: {
            src: "https://placehold.co/480x300?text=SaaS+Product+Catalog",
            alt: "Placeholder preview of the Kiln SaaS product catalog grid",
        },
    },
    {
        key: "blog",
        href: "/blog",
        eyebrow: "From the studio",
        title: "Notes on shipping software",
        description: "How we estimate, when React Native wins, and the dunning flows that actually recover revenue.",
        image: {
            src: "https://placehold.co/480x300?text=Studio+Blog",
            alt: "Placeholder preview of Kiln studio blog article cards",
        },
    },
];
