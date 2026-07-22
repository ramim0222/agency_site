import { useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import { EASE, ScrollTrigger, gsap, useGSAP } from "@/lib/motion";
import { brand, primaryNav } from "@/data/front/home";

/**
 * Marketing header. Pass `minimal` on post-conversion pages (thank-you) to
 * drop the quote CTA and show a quieter nav — logo + home only.
 */
export default function Header({ minimal = false }) {
    const headerRef = useRef(null);
    const panelRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useGSAP(
        () => {
            const header = headerRef.current;
            if (!header) return;

            const solid = header.querySelector("[data-header-solid]");
            if (minimal) {
                gsap.set(solid, { opacity: 1 });
                return;
            }

            gsap.set(solid, { opacity: 0 });

            ScrollTrigger.create({
                start: 64,
                end: 99999,
                onUpdate: (self) => {
                    gsap.to(solid, {
                        opacity: self.progress > 0 ? 1 : 0,
                        duration: 0.25,
                        ease: EASE.soft,
                        overwrite: true,
                    });
                },
            });
        },
        { scope: headerRef, dependencies: [minimal] }
    );

    useGSAP(
        () => {
            if (!panelRef.current) return;
            if (mobileOpen) {
                gsap.set(panelRef.current, { display: "block" });
                gsap.fromTo(
                    panelRef.current,
                    { autoAlpha: 0, y: -12 },
                    { autoAlpha: 1, y: 0, duration: 0.35, ease: EASE.out }
                );
            } else {
                gsap.to(panelRef.current, {
                    autoAlpha: 0,
                    y: -12,
                    duration: 0.25,
                    ease: EASE.soft,
                    onComplete: () => gsap.set(panelRef.current, { display: "none" }),
                });
            }
        },
        { dependencies: [mobileOpen] }
    );

    return (
        <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
            <div
                data-header-solid
                className="absolute inset-0 border-b border-white/8 bg-front-graphite/85 backdrop-blur-md"
                aria-hidden="true"
            />
            <div className="front-container relative flex items-center justify-between py-4">
                <Link
                    href="/"
                    className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60"
                >
                    <span className="flex size-7 items-center justify-center rounded-[6px] bg-front-ember text-[13px] font-semibold text-front-ember-ink transition-transform duration-300 group-hover:rotate-[-6deg]">
                        K
                    </span>
                    <span className="font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-white">
                        {brand.name}
                    </span>
                </Link>

                {minimal ? (
                    <Link
                        href="/"
                        className="font-mono text-[13px] uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 rounded-sm"
                    >
                        Back to home
                    </Link>
                ) : (
                    <>
                        <nav className="hidden items-center gap-8 lg:flex">
                            {primaryNav.map((item) => (
                                <NavItem key={item.label} item={item} />
                            ))}
                        </nav>

                        <div className="hidden items-center gap-5 lg:flex">
                            <Link
                                href="/contact"
                                className="font-mono text-[13px] uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 rounded-sm"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-md bg-front-ember px-4 py-2 text-[13px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite"
                            >
                                Get a Quote
                            </Link>
                        </div>

                        <button
                            type="button"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-expanded={mobileOpen}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            className="flex size-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 lg:hidden"
                        >
                            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </>
                )}
            </div>

            {!minimal && (
                <div
                    ref={panelRef}
                    style={{ display: "none" }}
                    className="relative border-b border-white/8 bg-front-graphite lg:hidden"
                >
                    <nav className="front-container flex flex-col gap-1 py-4">
                        {primaryNav.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="rounded-md px-2 py-3 text-[15px] text-white/85 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="mt-3 rounded-md bg-front-ember px-4 py-3 text-center text-[15px] font-semibold text-front-ember-ink"
                        >
                            Get a Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

function NavItem({ item }) {
    const isHash = item.href.startsWith("#");
    const className =
        "font-mono text-[13px] uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 rounded-sm";

    if (isHash) {
        return (
            <a href={item.href} className={className}>
                {item.label}
            </a>
        );
    }

    return (
        <Link href={item.href} className={className}>
            {item.label}
        </Link>
    );
}
