import { useRef } from "react";
import { Link } from "@inertiajs/react";
import RoleCard from "@/Components/Front/RoleCard";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Open roles list with empty state (ui-ux-pro-max) + GSAP stagger.
 */
export default function OpenRolesList({
    roles = [],
    emptyMessage = "No open roles right now — but if you’re exceptional, reach out anyway.",
    aboutHref = "/about",
}) {
    const listRef = useRef(null);

    useGSAP(
        () => {
            if (!listRef.current || !roles.length) return;
            const cards = listRef.current.querySelectorAll("[data-role-card]");
            if (!cards.length) return;

            if (prefersReducedMotion()) {
                gsap.set(cards, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                cards,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.07,
                    ease: EASE.out,
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        },
        { scope: listRef, dependencies: [roles.length] }
    );

    return (
        <section className="front-container pb-16 lg:pb-20">
            <Reveal>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            Open roles
                        </p>
                        <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                            {roles.length
                                ? "Who we’re looking for"
                                : "Hiring pauses — not silence"}
                        </h2>
                    </div>
                    <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-front-steel-dim">
                        {roles.length}{" "}
                        {roles.length === 1 ? "role" : "roles"}
                    </p>
                </div>
            </Reveal>

            {roles.length === 0 ? (
                <div
                    className="rounded-2xl border border-dashed border-white/12 bg-front-panel/40 px-6 py-14 text-center"
                    role="status"
                >
                    <p className="text-[16px] text-white">{emptyMessage}</p>
                    <p className="mt-3 text-[14px] text-front-steel">
                        Use the apply CTA below, or{" "}
                        <Link
                            href={aboutHref}
                            className="text-front-ember-soft underline-offset-4 transition-colors hover:text-front-ember hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            learn how we work
                        </Link>
                        .
                    </p>
                </div>
            ) : (
                <div ref={listRef}>
                    {roles.map((role) => (
                        <RoleCard key={role.slug} role={role} />
                    ))}
                </div>
            )}
        </section>
    );
}
