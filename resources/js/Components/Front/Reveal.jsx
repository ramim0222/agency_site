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
    y = 24,
    duration = 0.9,
    delay = 0,
    start = "top 88%",
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
