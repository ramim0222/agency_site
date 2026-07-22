import { useRef } from "react";
import TeamMemberCard from "@/Components/Front/TeamMemberCard";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Team bios grid — photo, name, role.
 * Skills: gsap-react (stagger), ui-ux-pro-max (empty state).
 */
export default function TeamGrid({
    members = [],
    eyebrow = "Team",
    title = "Who builds it",
    emptyMessage = "Team profiles are being added.",
}) {
    const gridRef = useRef(null);

    useGSAP(
        () => {
            if (!gridRef.current || !members.length) return;
            const cards = gridRef.current.querySelectorAll("[data-team-card]");
            if (!cards.length) return;

            if (prefersReducedMotion()) {
                gsap.set(cards, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                cards,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: EASE.out,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 82%",
                        once: true,
                    },
                }
            );
        },
        { scope: gridRef, dependencies: [members.length] }
    );

    if (!members.length) {
        return (
            <section className="front-container py-12">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    {emptyMessage}
                </p>
            </section>
        );
    }

    return (
        <section className="front-container py-16 lg:py-20">
            <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    {eyebrow}
                </p>
                <h2 className="mt-2 max-w-[18ch] text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.85rem]">
                    {title}
                </h2>
            </Reveal>

            <div
                ref={gridRef}
                className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
            >
                {members.map((member) => (
                    <TeamMemberCard key={member.key} member={member} />
                ))}
            </div>
        </section>
    );
}
