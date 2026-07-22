import { useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import { nextSteps } from "@/data/front/thankYou";
import { cn } from "@/lib/utils";

/**
 * Ordered "what happens next" timeline — numbered because sequence is
 * the information (review → reach out → scope).
 */
export default function NextStepsTimeline({ className }) {
    const listRef = useRef(null);

    useGSAP(
        () => {
            const items = gsap.utils.toArray("[data-step]", listRef.current);
            if (!items.length) return;

            if (prefersReducedMotion()) {
                gsap.set(items, { opacity: 1, y: 0 });
                return;
            }

            gsap.set(items, { opacity: 0, y: 22 });
            gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: EASE.out,
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 85%",
                    once: true,
                },
            });
        },
        { scope: listRef }
    );

    return (
        <ol
            ref={listRef}
            className={cn("relative flex flex-col gap-0", className)}
            aria-label="What happens next"
        >
            {nextSteps.map((step, index) => {
                const isLast = index === nextSteps.length - 1;
                return (
                    <li
                        key={step.key}
                        data-step
                        className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-8 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-5"
                    >
                        {!isLast && (
                            <span
                                aria-hidden="true"
                                className="absolute top-10 bottom-0 left-[1.15rem] w-px bg-front-ink/12 sm:left-[1.4rem]"
                            />
                        )}
                        <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-front-ink/15 bg-front-paper font-mono text-[12px] font-medium text-front-ink sm:size-11">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="pt-1.5">
                            <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-front-ink">
                                {step.title}
                            </h3>
                            <p className="mt-1.5 max-w-[46ch] text-[14.5px] leading-relaxed text-front-slate">
                                {step.detail}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}
