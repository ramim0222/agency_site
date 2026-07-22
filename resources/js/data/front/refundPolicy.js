// Static Refund Policy — template copy for deposits, milestones, and cancellations.
// Replace with counsel-reviewed text before production launch.

export const refundDoc = {
    eyebrow: "Legal",
    title: "Refund Policy",
    updated: "2026-07-01",
    intro: "This Refund Policy explains how payments, deposits, milestones, and cancellations work for Kiln Studio engagements. Pricing on this website is informational — there is no self-serve checkout on kiln.studio.",
    related: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
    ],
    sections: [
        {
            id: "overview",
            title: "Overview",
            blocks: [
                {
                    type: "p",
                    text: "Kiln provides custom product engineering and SaaS adaptation work under a written proposal or statement of work (“Agreement”). Money paid for a phase is tied to that Agreement — not to an automated subscription on this Site.",
                },
                {
                    type: "p",
                    text: "If your Agreement sets different refund terms, that Agreement controls. This page describes our default practice when the Agreement is silent.",
                },
            ],
        },
        {
            id: "no-checkout",
            title: "No self-serve purchases on this Site",
            blocks: [
                {
                    type: "p",
                    text: "Catalog prices, package ranges, and “starting from” figures are not live checkout. Submitting the contact form or messaging us on WhatsApp does not charge your card and does not create a refundable retail purchase.",
                },
            ],
        },
        {
            id: "deposits",
            title: "Deposits and kickoff payments",
            blocks: [
                {
                    type: "p",
                    text: "Most engagements begin with a deposit or kickoff invoice that reserves calendar time and covers discovery, setup, and early build work.",
                },
                {
                    type: "ul",
                    items: [
                        "Deposits are generally non-refundable once we have started work for that phase (including scheduling kickoff, opening the project workspace, or beginning scoped design/engineering)",
                        "If we cancel before kickoff for reasons solely on our side, we refund the unused deposit in full",
                        "If you cancel before we begin any kickoff work, we may refund the deposit minus a reasonable administrative fee stated in the Agreement (or a modest flat fee if none is stated)",
                    ],
                },
            ],
        },
        {
            id: "milestones",
            title: "Milestone payments",
            blocks: [
                {
                    type: "p",
                    text: "Custom builds and SaaS adaptations are often billed in milestones (for example design approval, staging demo, launch).",
                },
                {
                    type: "ul",
                    items: [
                        "A milestone payment is due when the Agreement’s acceptance criteria for that milestone are met — or when you approve the deliverable in writing",
                        "Paid milestones for completed work are non-refundable",
                        "If a milestone is paid in advance and we have not started that milestone’s work, unused prepaid amounts may be refunded or credited per the Agreement if the project ends early",
                    ],
                },
            ],
        },
        {
            id: "saas-engagements",
            title: "SaaS product adaptations",
            blocks: [
                {
                    type: "p",
                    text: "SaaS catalog “starting prices” refer to implementation and adaptation work we perform with you. They are not monthly SaaS fees billed by Kiln for end-customer subscriptions on your product.",
                },
                {
                    type: "p",
                    text: "Refunds for adaptation projects follow the same deposit and milestone rules as custom work. Your payment processor (for example Stripe) and app-store fees charged to you by third parties are outside Kiln’s refund process.",
                },
            ],
        },
        {
            id: "change-orders",
            title: "Change orders and extra scope",
            blocks: [
                {
                    type: "p",
                    text: "Work outside the signed scope is handled with a written change note (effort, schedule, and price). Change-order fees for work already performed are non-refundable. Unused prepaid change-order funds follow the milestone rules above.",
                },
            ],
        },
        {
            id: "client-cancellation",
            title: "If you cancel",
            blocks: [
                {
                    type: "p",
                    text: "You may end an engagement as allowed in your Agreement. Upon cancellation:",
                },
                {
                    type: "ul",
                    items: [
                        "You remain responsible for invoices for work completed or milestones accepted",
                        "Deposits for phases already started remain non-refundable unless the Agreement says otherwise",
                        "We will hand over work product already paid for, subject to any license or IP terms in the Agreement",
                        "We are not obligated to refund for delays caused by missing content, access, or feedback on your side",
                    ],
                },
            ],
        },
        {
            id: "kiln-cancellation",
            title: "If Kiln cancels",
            blocks: [
                {
                    type: "p",
                    text: "If we terminate for convenience (not for your material breach), we will refund prepaid amounts for work we have not performed, and deliver paid work product as of the termination date per the Agreement. If we terminate for your material breach after notice and cure (where required), amounts owed for completed work remain due and deposits for started phases remain non-refundable.",
                },
            ],
        },
        {
            id: "third-party",
            title: "Third-party costs",
            blocks: [
                {
                    type: "p",
                    text: "Hosting, domains, app-store fees, SMS, email, payment processing, stock assets, and similar pass-through costs are billed by those providers or invoiced separately. Those charges are not refundable by Kiln once incurred, except when a provider refunds us and your Agreement requires us to pass that through.",
                },
            ],
        },
        {
            id: "how-to-request",
            title: "How to request a refund",
            blocks: [
                {
                    type: "p",
                    text: "Email hello@kiln.studio (or the billing contact on your Agreement) with:",
                },
                {
                    type: "ul",
                    items: [
                        "Your company or project name",
                        "Invoice or payment reference",
                        "Reason for the request and the amount you believe is unused",
                    ],
                },
                {
                    type: "p",
                    text: "We aim to acknowledge requests within five business days. Approved refunds are returned to the original payment method when possible, typically within ten business days after approval (bank timing varies).",
                },
            ],
        },
        {
            id: "chargebacks",
            title: "Chargebacks and disputes",
            blocks: [
                {
                    type: "p",
                    text: "Please contact us before filing a card chargeback so we can resolve billing questions directly. Frivolous chargebacks for completed, accepted work may result in collection of amounts owed plus fees we incur defending the dispute, to the extent allowed by law and your Agreement.",
                },
            ],
        },
        {
            id: "changes",
            title: "Changes to this policy",
            blocks: [
                {
                    type: "p",
                    text: "We may update this Refund Policy from time to time. The “Last updated” date will change when we do. Updates apply to new Agreements and new invoices issued after the change; existing Agreements keep their written terms unless both parties agree otherwise.",
                },
            ],
        },
        {
            id: "contact",
            title: "Contact",
            blocks: [
                {
                    type: "p",
                    text: "Billing and refund questions: hello@kiln.studio. Site use is governed by our Terms of Service. How we handle personal data is described in our Privacy Policy.",
                },
            ],
        },
    ],
};
