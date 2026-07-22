// Thin stub until Front-21 privacy page is fully built.

export const privacyDoc = {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "2026-07-01",
    intro: "This page will describe how Kiln handles personal data from the lead form and site. Full policy copy ships next.",
    related: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Refund Policy", href: "/refund-policy" },
    ],
    sections: [
        {
            id: "overview",
            title: "Overview",
            blocks: [
                {
                    type: "p",
                    text: "We collect contact details you submit (name, email, phone, project notes) to respond to inquiries. We do not sell your information.",
                },
            ],
        },
        {
            id: "contact",
            title: "Contact",
            blocks: [
                {
                    type: "p",
                    text: "Questions about privacy: hello@kiln.studio or the contact form on this Site.",
                },
            ],
        },
    ],
};
