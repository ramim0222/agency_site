import { useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Drawn checkmark success mark — the signature confirmation moment after
 * a quote submit. Respects prefers-reduced-motion.
 */
export default function SuccessAnimation({ className }) {
    const rootRef = useRef(null);

    useGSAP(
        () => {
            const circle = rootRef.current?.querySelector("[data-success-circle]");
            const check = rootRef.current?.querySelector("[data-success-check]");
            const ring = rootRef.current?.querySelector("[data-success-ring]");
            if (!circle || !check) return;

            if (prefersReducedMotion()) {
                gsap.set([circle, check, ring], { opacity: 1, scale: 1 });
                gsap.set(check, { strokeDashoffset: 0 });
                return;
            }

            const length = check.getTotalLength?.() ?? 48;
            gsap.set(check, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 1,
            });
            gsap.set(circle, { scale: 0.6, opacity: 0 });
            gsap.set(ring, { scale: 0.7, opacity: 0 });

            const tl = gsap.timeline({ defaults: { ease: EASE.out } });
            tl.to(ring, { scale: 1, opacity: 0.35, duration: 0.55 }, 0)
                .to(circle, { scale: 1, opacity: 1, duration: 0.5 }, 0.08)
                .to(check, { strokeDashoffset: 0, duration: 0.55 }, 0.28)
                .to(ring, { scale: 1.35, opacity: 0, duration: 0.7, ease: EASE.soft }, 0.45);
        },
        { scope: rootRef }
    );

    return (
        <div
            ref={rootRef}
            className={cn("relative flex size-20 items-center justify-center", className)}
            aria-hidden="true"
        >
            <span
                data-success-ring
                className="absolute inset-0 rounded-full border border-front-ember/50"
            />
            <span
                data-success-circle
                className="absolute inset-2 rounded-full bg-front-ember"
            />
            <svg
                viewBox="0 0 48 48"
                className="relative size-10 text-front-ember-ink"
                fill="none"
            >
                <path
                    data-success-check
                    d="M14 24.5 21 31.5 34 17"
                    stroke="currentColor"
                    strokeWidth="3.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
