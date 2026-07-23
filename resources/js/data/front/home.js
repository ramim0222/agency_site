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
    eyebrow: "SOFTWARE AGENCY",
    headline: [
        { type: "text", value: "We build" },
        // {
        //     type: "image",
        //     src: "https://placehold.co/72x44?text=UI",
        //     alt: "Close-up of a shipped product interface",
        // },
        { type: "text", value: "software" },
        { type: "break" },
        { type: "text", value: "that businesses" },
        { type: "break" },
        { type: "serif", value: "actually run on." },
    ],
    sub: "Scratch it on a napkin, send it our way. We'll turn it into a real product — Laravel and React for the web, React Native for mobile, ready-made SaaS tools for everything else. One team, from first requirement to public launch.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
    background: {
        src: "/images/hero-bg.jpg",
        alt: "",
    },
    visual: {
        src: "/images/hero.jpg",
        alt: "Preview of a client dashboard product built by Kiln, showing charts and account data",
    },
    statusChips: [
        { label: "Web Development" },
        { label: "Mobile Apps" },
        { label: "SaaS Billing" },
    ],
};

export const services = [
    {
        key: "web-development",
        icon: "Globe",
        title: "Web Development",
        description:
            "Sites that load fast, hold up under real traffic, and don't fall apart the week after launch. Built for businesses that need a real online presence, not a template with their logo on it.",
        stack: ["Laravel", "React", "Tailwind", "Next.js"],
        href: "/services/web-development",
    },
    {
        key: "web-apps",
        icon: "LayoutDashboard",
        title: "Web Apps",
        description:
            "Dashboards, internal tools, client portals — the software your team actually opens every morning. We build the boring, important stuff that keeps operations running.",
        stack: ["Laravel", "React", "PostgreSQL", "MySQL", "Next.js"],
        href: "/services/web-apps",
    },
    {
        key: "mobile-apps",
        icon: "Smartphone",
        title: "Mobile Apps",
        description:
            "One React Native codebase, shipped to both the App Store and Play Store. Built on the same Laravel backend as the rest of your product, so nothing lives in its own silo.",
        stack: ["React Native", "Expo", "TypeScript", "Laravel"],
        href: "/services/mobile-apps",
    },
    {
        key: "saas",
        icon: "Repeat",
        title: "SaaS Subscriptions",
        description:
            "Ready-made software for the stuff every business needs but shouldn't have to custom-build — invoicing, CRM, POS, and more. Pick a plan, get set up, skip the six-month build.",
        stack: ["Next.js", "Stripe", "Laravel", "SSLCommerz", "PipraPay"],
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
    legal: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
        { label: "Refunds", href: "/refund-policy" },
    ],
};
