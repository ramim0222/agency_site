import { Link } from "@inertiajs/react";
import { brand, footerLinks } from "@/data/front/home";

/**
 * Ad landing footer — legal links only (no service / company nav).
 */
export default function MinimalFooter() {
    const legal = footerLinks.legal ?? [];

    return (
        <footer className="border-t border-white/8 bg-front-graphite">
            <div className="front-container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[12px] text-front-steel-dim">
                    © {new Date().getFullYear()} {brand.fullName}
                </p>
                <nav
                    aria-label="Legal"
                    className="flex flex-wrap items-center gap-x-4 gap-y-2"
                >
                    {legal.map((link) => (
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
        </footer>
    );
}
