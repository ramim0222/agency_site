import { Link } from "@inertiajs/react";
import { brand, footerLinks, whatsapp, whatsappHref } from "@/data/front/home";

export default function Footer() {
    return (
        <footer className="border-t border-white/8 bg-front-graphite">
            <div className="front-container py-16">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <span className="flex size-7 items-center justify-center rounded-[6px] bg-front-ember text-[13px] font-semibold text-front-ember-ink">
                                K
                            </span>
                            <span className="font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-white">
                                {brand.name}
                            </span>
                        </Link>
                        <p className="mt-4 max-w-[30ch] text-[14px] leading-relaxed text-front-steel">
                            A small product engineering studio building web, mobile, and SaaS
                            software for teams who need to ship, not just plan.
                        </p>
                        <a
                            href={whatsappHref()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 font-mono text-[13px] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 rounded-sm"
                        >
                            {whatsapp.displayNumber}
                        </a>
                    </div>

                    <FooterColumn title="Services" links={footerLinks.services} />
                    <FooterColumn title="Company" links={footerLinks.company} />

                    <div>
                        <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-steel-dim">
                            Start a project
                        </h3>
                        <p className="mt-4 text-[14px] leading-relaxed text-front-steel">
                            Tell us what you're building. We reply within one business day.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-4 inline-flex items-center gap-2 rounded-md bg-front-ember px-4 py-2.5 text-[13px] font-semibold text-front-ember-ink transition-colors hover:bg-front-ember-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite"
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[12px] text-front-steel-dim">
                        © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
                    </p>
                    <nav
                        aria-label="Legal"
                        className="flex flex-wrap items-center gap-x-4 gap-y-2"
                    >
                        {(footerLinks.legal ?? []).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-mono text-[12px] text-front-steel-dim transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-front-steel-dim">
                {title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="text-[14px] text-front-steel transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 rounded-sm"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
