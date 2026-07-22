import { useRef } from "react";
import { Head } from "@inertiajs/react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Internal auth shell — cool zinc cockpit, no marketing header/footer.
 * Visually separate from the public Front site on purpose.
 */
export default function AdminAuthLayout({
    title = "Admin sign in",
    children,
}) {
    const cardRef = useRef(null);

    useGSAP(
        () => {
            if (!cardRef.current) return;

            if (prefersReducedMotion()) {
                gsap.set(cardRef.current, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.65, ease: EASE.out }
            );
        },
        { scope: cardRef }
    );

    return (
        <div className="admin relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 py-12">
            <Head title={title} />
            <div className="admin-dotgrid" aria-hidden="true" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[45%] opacity-[0.2]"
                style={{
                    backgroundImage:
                        "radial-gradient(50% 60% at 50% 0%, rgba(74,155,140,0.35), transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div
                ref={cardRef}
                className="relative w-full max-w-[400px] rounded-2xl border border-admin-line bg-admin-panel p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] sm:p-8"
            >
                <div className="mb-8 flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2.5">
                        <span className="flex size-8 items-center justify-center rounded-md bg-admin-accent font-mono text-[13px] font-semibold text-admin-accent-ink">
                            K
                        </span>
                        <span className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-admin-ink">
                            Kiln Ops
                        </span>
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                        Internal lead desk · sign in
                    </p>
                </div>

                {children}
            </div>
        </div>
    );
}
