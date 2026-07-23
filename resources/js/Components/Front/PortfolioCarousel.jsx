import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioCard from "@/Components/Front/PortfolioCard";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

const GAP_PX = 16;

/** How many full cards fit the current viewport width. */
function visibleCountForWidth(width) {
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
}

/**
 * Horizontal portfolio strip — GSAP drag + arrow buttons.
 * Card width is derived so exactly 1 / 2 / 3 full cards show (no clipped peek).
 */
export default function PortfolioCarousel({ projects, eyebrow, title }) {
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const xRef = useRef(0);
    const dragMovedRef = useRef(false);

    const syncCardWidth = () => {
        const viewport = viewportRef.current;
        if (!viewport) return 1;
        const width = viewport.clientWidth;
        const count = visibleCountForWidth(width);
        const cardW = Math.max(0, (width - GAP_PX * (count - 1)) / count);
        viewport.style.setProperty("--portfolio-card-w", `${cardW}px`);
        viewport.style.setProperty("--portfolio-gap", `${GAP_PX}px`);
        return count;
    };

    const getBounds = () => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) return { min: 0, max: 0 };
        const min = Math.min(0, viewport.clientWidth - track.scrollWidth);
        return { min, max: 0 };
    };

    const cardStep = () => {
        const card = trackRef.current?.querySelector("[data-portfolio-card]");
        if (!card) return 340;
        return card.getBoundingClientRect().width + GAP_PX;
    };

    const goTo = (nextX, animate = true) => {
        const track = trackRef.current;
        if (!track) return;
        const { min, max } = getBounds();
        const x = gsap.utils.clamp(min, max, nextX);
        xRef.current = x;

        if (animate && !prefersReducedMotion()) {
            gsap.to(track, { x, duration: 0.55, ease: EASE.out, overwrite: true });
        } else {
            gsap.set(track, { x });
        }
    };

    useGSAP(
        (_ctx, contextSafe) => {
            const viewport = viewportRef.current;
            const track = trackRef.current;
            if (!viewport || !track) return;

            syncCardWidth();
            gsap.set(track, { x: 0, force3D: true });
            xRef.current = 0;

            let dragging = false;
            let startX = 0;
            let startVal = 0;
            let pointerId = null;

            const onDown = contextSafe((e) => {
                if (e.button != null && e.button !== 0) return;

                dragging = true;
                dragMovedRef.current = false;
                pointerId = e.pointerId;
                startX = e.clientX;
                startVal = xRef.current;
                gsap.killTweensOf(track);
                viewport.classList.add("cursor-grabbing");

                try {
                    viewport.setPointerCapture(e.pointerId);
                } catch {
                    /* ignore */
                }
            });

            const onMove = contextSafe((e) => {
                if (!dragging || pointerId !== e.pointerId) return;

                const dx = e.clientX - startX;
                if (Math.abs(dx) > 6) {
                    dragMovedRef.current = true;
                    e.preventDefault();
                }
                if (!dragMovedRef.current) return;

                const { min, max } = getBounds();
                let next = startVal + dx;
                if (next > max) next = max + (next - max) * 0.2;
                if (next < min) next = min + (next - min) * 0.2;

                xRef.current = next;
                gsap.set(track, { x: next });
            });

            const onUp = contextSafe((e) => {
                if (!dragging || pointerId !== e.pointerId) return;
                dragging = false;
                pointerId = null;
                viewport.classList.remove("cursor-grabbing");

                try {
                    viewport.releasePointerCapture(e.pointerId);
                } catch {
                    /* ignore */
                }

                const { min, max } = getBounds();
                let target = gsap.utils.clamp(min, max, xRef.current);

                const step = cardStep();
                if (step > 0) {
                    target = Math.round(target / step) * step;
                    target = gsap.utils.clamp(min, max, target);
                }

                goTo(target, true);
            });

            const onClickCapture = contextSafe((e) => {
                if (!dragMovedRef.current) return;
                e.preventDefault();
                e.stopPropagation();
                dragMovedRef.current = false;
            });

            const onResize = contextSafe(() => {
                syncCardWidth();
                // Re-clamp after card widths change
                requestAnimationFrame(() => goTo(xRef.current, false));
            });

            const ro =
                typeof ResizeObserver !== "undefined"
                    ? new ResizeObserver(onResize)
                    : null;
            ro?.observe(viewport);

            viewport.addEventListener("pointerdown", onDown);
            viewport.addEventListener("pointermove", onMove);
            viewport.addEventListener("pointerup", onUp);
            viewport.addEventListener("pointercancel", onUp);
            viewport.addEventListener("click", onClickCapture, true);
            window.addEventListener("resize", onResize, { passive: true });

            return () => {
                ro?.disconnect();
                viewport.removeEventListener("pointerdown", onDown);
                viewport.removeEventListener("pointermove", onMove);
                viewport.removeEventListener("pointerup", onUp);
                viewport.removeEventListener("pointercancel", onUp);
                viewport.removeEventListener("click", onClickCapture, true);
                window.removeEventListener("resize", onResize);
            };
        },
        { scope: viewportRef }
    );

    return (
        <>
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col gap-4 lg:max-w-[46ch]">
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-front-ember-soft">
                        {eyebrow}
                    </span>
                    <h2 className="text-[2rem] leading-[1.12] font-semibold tracking-[-0.02em] text-white sm:text-[2.5rem]">
                        {title}
                    </h2>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => goTo(xRef.current + cardStep(), true)}
                        aria-label="Scroll portfolio left"
                        className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60"
                    >
                        <ChevronLeft className="size-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => goTo(xRef.current - cardStep(), true)}
                        aria-label="Scroll portfolio right"
                        className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60"
                    >
                        <ChevronRight className="size-4" />
                    </button>
                </div>
            </Reveal>

            <div
                ref={viewportRef}
                className="mt-12 cursor-grab overflow-hidden touch-pan-y select-none"
                style={{ touchAction: "pan-y" }}
            >
                <div
                    ref={trackRef}
                    className="flex w-max will-change-transform"
                    data-portfolio-track
                    style={{ gap: "var(--portfolio-gap, 16px)" }}
                >
                    {projects.map((project) => (
                        <PortfolioCard key={project.key} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}
