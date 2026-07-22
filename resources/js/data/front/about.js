// Static About page content — credibility, no API.

export const aboutPage = {
    eyebrow: "About Kiln",
    title: "A small studio that ships software businesses run on.",
    whatsappMessage:
        "Hi Kiln — I'd like to learn more about working with you. Here's a quick outline:",
    cta: {
        eyebrow: "Work with us",
        headline: "Have a build in mind?",
        sub: "Tell us what you're shipping. We'll reply within one business day — or browse the work first.",
        primaryCta: {
            label: "Get a Free Quote",
            href: "/contact",
        },
        secondaryCta: {
            label: "View portfolio",
            href: "/portfolio",
        },
    },
};

export const mission = {
    eyebrow: "Mission",
    title: "We build the systems teams stop workarounds for.",
    story: [
        "Kiln started because too many “agency” sites and apps looked finished in a pitch deck and fell apart the week after launch. We take the opposite bet: fewer clients, clearer scopes, and software your ops team can actually run.",
        "We’re a product engineering studio — Laravel, React, and React Native — working as one accountable team from the first discovery call to store submission or go-live. No slide-deck theater. No silent handoffs.",
    ],
    image: {
        src: "https://placehold.co/960x720?text=Kiln+Studio+Workspace",
        alt: "Kiln studio workspace with monitors showing product dashboards in progress",
    },
};

export const team = [
    {
        key: "ramim",
        name: "Ramim Hassan",
        role: "Founder / Product engineering",
        bio: "Owns scoping, architecture, and the path from brief to launch. Still writes production code.",
        photo: {
            src: "https://placehold.co/480x560?text=Ramim+Hassan",
            alt: "Portrait of Ramim Hassan, founder of Kiln",
        },
    },
    {
        key: "lena",
        name: "Lena Ortiz",
        role: "Design lead",
        bio: "Turns messy workflows into interfaces operators finish — not just screens that look sharp in Figma.",
        photo: {
            src: "https://placehold.co/480x560?text=Lena+Ortiz",
            alt: "Portrait of Lena Ortiz, design lead at Kiln",
        },
    },
    {
        key: "noah",
        name: "Noah Okonkwo",
        role: "Engineering",
        bio: "Laravel, React, and the unglamorous glue — auth, queues, and the integrations that keep data honest.",
        photo: {
            src: "https://placehold.co/480x560?text=Noah+Okonkwo",
            alt: "Portrait of Noah Okonkwo, engineer at Kiln",
        },
    },
    {
        key: "priya",
        name: "Priya Shah",
        role: "Mobile",
        bio: "React Native, store submissions, and offline-first paths for field and customer apps.",
        photo: {
            src: "https://placehold.co/480x560?text=Priya+Shah",
            alt: "Portrait of Priya Shah, mobile engineer at Kiln",
        },
    },
];

export const aboutStack = [
    { key: "laravel", label: "Laravel", mark: "La" },
    { key: "react", label: "React", mark: "Re" },
    { key: "inertia", label: "Inertia", mark: "In" },
    { key: "nextjs", label: "Next.js", mark: "Nx" },
    { key: "react-native", label: "React Native", mark: "RN" },
    { key: "typescript", label: "TypeScript", mark: "TS" },
    { key: "postgres", label: "PostgreSQL", mark: "Pg" },
    { key: "stripe", label: "Stripe", mark: "St" },
    { key: "tailwind", label: "Tailwind", mark: "Tw" },
    { key: "expo", label: "Expo", mark: "Ex" },
];

export const partners = [
    {
        key: "laravel",
        name: "Laravel",
        note: "Primary backend stack",
        image: {
            src: "https://placehold.co/200x80?text=Laravel",
            alt: "Laravel partnership mark placeholder",
        },
    },
    {
        key: "stripe",
        name: "Stripe",
        note: "Billing integrations",
        image: {
            src: "https://placehold.co/200x80?text=Stripe",
            alt: "Stripe partnership mark placeholder",
        },
    },
    {
        key: "aws",
        name: "AWS",
        note: "Hosting & infra",
        image: {
            src: "https://placehold.co/200x80?text=AWS",
            alt: "AWS partnership mark placeholder",
        },
    },
    {
        key: "vercel",
        name: "Vercel",
        note: "Front-end deploys",
        image: {
            src: "https://placehold.co/200x80?text=Vercel",
            alt: "Vercel partnership mark placeholder",
        },
    },
];

export const aboutStats = [
    { key: "projects", value: 42, suffix: "", label: "Projects delivered" },
    { key: "clients", value: 18, suffix: "", label: "Active clients" },
    { key: "years", value: 6, suffix: "", label: "Years shipping" },
    { key: "retain", value: 90, suffix: "%", label: "Clients who return" },
];
