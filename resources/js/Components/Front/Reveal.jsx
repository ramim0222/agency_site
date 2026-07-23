import { useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Self-contained scroll reveal for a single element/section — a fade + rise
 * that fires once as it enters the viewport. Use `useScrollReveal` instead
 * when animating a list of siblings with a stagger.
 */
export default function Reveal({
    as: Tag = "div",
    y = 16,
    duration = 0.55,
    delay = 0,
    start = "top 95%",
    className,
    children,
    ...props
}) {
    const ref = useRef(null);

    useGSAP(
        () => {
            if (!ref.current) return;

            if (prefersReducedMotion()) {
                gsap.set(ref.current, { opacity: 1, y: 0 });
                return;
            }

            // useGSAP runs via useLayoutEffect (before paint), so gsap.set here
            // hides the element before the browser draws the first frame — no FOUC.
            // We let GSAP own the opacity inline style so React re-renders don't
            // clobber it (never put opacity in the JSX style prop on this element).
            gsap.set(ref.current, { opacity: 0, y });
            gsap.to(ref.current, {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease: EASE.out,
                scrollTrigger: {
                    trigger: ref.current,
                    start,
                    once: true,
                },
            });
        },
        { scope: ref }
    );

    return (
        <Tag ref={ref} className={cn(className)} {...props}>
            {children}
        </Tag>
    );
}
