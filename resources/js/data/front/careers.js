// Static careers / hiring page — no CMS. Empty `openRoles` shows the reach-out state.

export const careersPage = {
    eyebrow: "Careers",
    title: "Build with a small studio that ships.",
    intro: "Kiln is a product engineering studio — fewer clients, clearer scopes, and software ops teams actually run. We’re selective about who joins.",
    emptyRoles:
        "No open roles right now — but if you’re exceptional, reach out anyway.",
    aboutLink: { label: "Meet the team", href: "/about" },
};

export const culture = {
    eyebrow: "Culture",
    title: "Small team. High ownership. Quiet excellence.",
    paragraphs: [
        "We don’t run a bench of juniors for billable hours. Everyone who joins owns a slice of the work — scoping, building, and the handoff that keeps clients calm after launch.",
        "Remote-friendly, async-first, demo-heavy. We prefer written clarity over status theater, and we hire for taste as much as raw output.",
    ],
    points: [
        {
            key: "ownership",
            label: "Ownership",
            body: "You see work from brief to production — not a ticket factory.",
        },
        {
            key: "craft",
            label: "Craft",
            body: "Boring stacks done well beat fashion frameworks done twice.",
        },
        {
            key: "pace",
            label: "Pace",
            body: "Sustainable delivery. No hero weekends as a culture.",
        },
    ],
    image: {
        src: "https://placehold.co/960x720?text=Kiln+Studio+Culture",
        alt: "Kiln studio workspace with laptops open to product interfaces in progress",
    },
};

/**
 * Set to [] to show the empty-roles state at launch.
 * Keep a few sample roles for a complete template.
 */
export const openRoles = [
    {
        slug: "product-engineer-laravel",
        title: "Product engineer (Laravel / React)",
        type: "Full-time",
        location: "Remote",
        blurb: "Ship web apps and SaaS cores end-to-end — Inertia, policies, queues, and the UI operators finish.",
        focus: [
            "Laravel + Inertia / React",
            "Clear written updates for clients",
            "Comfortable owning staging → launch",
        ],
    },
    {
        slug: "mobile-engineer-rn",
        title: "Mobile engineer (React Native)",
        type: "Contract → full-time",
        location: "Remote",
        blurb: "Store-ready client apps with offline-aware paths and a calm review process.",
        focus: [
            "React Native (Expo when it fits)",
            "App Store / Play compliance basics",
            "Pairing with Laravel APIs",
        ],
    },
];

export const applicationCta = {
    eyebrow: "Apply",
    title: "Tell us what you’ve shipped.",
    body: "Send a short note with a portfolio or GitHub, the role you’re aiming for, and one product you’re proud of. No cover-letter essays.",
    mailto: {
        label: "Email careers@kiln.studio",
        href: "mailto:careers@kiln.studio?subject=Kiln%20careers%20—%20application",
    },
    whatsappMessage:
        "Hi Kiln — I’m interested in joining the studio. Here’s a quick intro and a link to my work:",
    secondary: {
        label: "About the studio",
        href: "/about",
    },
};

export function roleMailto(role) {
    const subject = encodeURIComponent(`Kiln careers — ${role.title}`);
    return `mailto:careers@kiln.studio?subject=${subject}`;
}
