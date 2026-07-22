// Static content for the Front marketing site. Nothing on this page is
// fetched from a backend — copy, imagery, and numbers all live here so the
// page renders fully without a CMS or API.

import { homePortfolio } from "@/data/front/portfolio";
import { blogPosts } from "@/data/front/blog";

export { blogPosts };

export const brand = {
    name: "Kiln",
    fullName: "Kiln Studio",
    tagline: "Product engineering studio",
};

export const whatsapp = {
    number: "15550102938",
    displayNumber: "+1 (555) 010-2938",
    message: "Hi Kiln — I'd like to talk about a project.",
};

export function whatsappHref(message = whatsapp.message) {
    return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const primaryNav = [
    {
        label: "Services",
        href: "/#services",
        children: [
            { label: "Web Development", href: "/services/web-development" },
            { label: "Web Apps", href: "/services/web-apps" },
            { label: "Mobile Apps", href: "/services/mobile-apps" },
            { label: "SaaS Subscriptions", href: "/services/saas" },
        ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "SaaS", href: "/saas" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
];

export const hero = {
    eyebrow: "Product engineering studio",
    headline: [
        { type: "text", value: "We build" },
        {
            type: "image",
            src: "https://placehold.co/72x44?text=UI",
            alt: "Close-up of a shipped product interface",
        },
        { type: "text", value: "software" },
        { type: "break" },
        { type: "text", value: "that businesses" },
        { type: "break" },
        { type: "serif", value: "actually run on." },
    ],
    sub: "Laravel, React, and native mobile builds for teams who need working product, not another slide deck. One accountable team, from the first commit to the public launch.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
    visual: {
        src: "https://placehold.co/960x680?text=Product+Dashboard+Preview",
        alt: "Preview of a client dashboard product built by Kiln, showing charts and account data",
    },
    statusChips: [
        { label: "Web Development", state: "active" },
        { label: "Mobile Apps", state: "active" },
        { label: "SaaS Billing", state: "queued" },
    ],
};

export const services = [
    {
        key: "web-development",
        icon: "Globe",
        title: "Web Development",
        description:
            "Marketing sites and content platforms built to load fast, rank well, and hold up after launch day.",
        stack: ["Laravel", "React", "Tailwind"],
        href: "/services/web-development",
    },
    {
        key: "web-apps",
        icon: "LayoutDashboard",
        title: "Web Apps",
        description:
            "Internal tools and customer-facing dashboards — the operational software your team runs the day on.",
        stack: ["Laravel", "Inertia", "PostgreSQL"],
        href: "/services/web-apps",
    },
    {
        key: "mobile-apps",
        icon: "Smartphone",
        title: "Mobile Apps",
        description:
            "Native-feeling iOS and Android apps from a single React Native codebase, shipped to both stores.",
        stack: ["React Native", "Expo", "TypeScript"],
        href: "/services/mobile-apps",
    },
    {
        key: "saas",
        icon: "Repeat",
        title: "SaaS Subscriptions",
        description:
            "Multi-tenant products with billing, plans, and usage limits built in from the first migration.",
        stack: ["Next.js", "Stripe", "Laravel"],
        href: "/services/saas",
    },
];

/** Home carousel briefs — shared catalog lives in `data/front/portfolio.js`. */
export const portfolio = homePortfolio;

export const techStack = [
    { key: "laravel", label: "Laravel", mark: "La" },
    { key: "react", label: "React", mark: "Re" },
    { key: "nextjs", label: "Next.js", mark: "Nx" },
    { key: "react-native", label: "React Native", mark: "RN" },
];

export const testimonials = [
    {
        key: "priya",
        quote:
            "They asked harder questions about our dispatch process than our own ops team did — the platform they built actually matches how we work.",
        name: "Priya Nandakumar",
        role: "Operations Lead",
        company: "Harborline Logistics",
    },
    {
        key: "daniel",
        quote:
            "We'd rebuilt our booking flow twice before Kiln. This is the first version our front-desk staff didn't complain about.",
        name: "Daniel Osei",
        role: "Clinic Director",
        company: "Fernway Clinics",
    },
    {
        key: "marisol",
        quote:
            "Billing is the part of a SaaS nobody wants to touch. They shipped ours in six weeks and it hasn't paged us once.",
        name: "Marisol Fuentes",
        role: "Founder",
        company: "Ledger Cove",
    },
];

export const stats = [
    { key: "projects", value: 42, suffix: "", label: "Projects delivered" },
    { key: "clients", value: 18, suffix: "", label: "Active clients" },
    { key: "years", value: 6, suffix: "", label: "Years in business" },
];

export const finalCta = {
    eyebrow: "Start a project",
    headline: "Have a build in mind? Let's scope it.",
    sub: "Tell us what you're trying to ship. We'll reply with next steps, not a sales deck.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
};

export const footerLinks = {
    services: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Web Apps", href: "/services/web-apps" },
        { label: "Mobile Apps", href: "/services/mobile-apps" },
        { label: "SaaS Subscriptions", href: "/services/saas" },
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "SaaS products", href: "/saas" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
};
