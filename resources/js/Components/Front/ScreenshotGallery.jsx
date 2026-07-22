import { useRef, useState } from "react";
import Reveal from "@/Components/Front/Reveal";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

export default function ScreenshotGallery({
    images = [],
    eyebrow = "Screens",
    title = "Product in the wild",
}) {
    const [active, setActive] = useState(0);
    const stageRef = useRef(null);

    useGSAP(
        () => {
            if (!stageRef.current || prefersReducedMotion()) return;
            gsap.fromTo(
                stageRef.current,
                { opacity: 0.55, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: EASE.out }
            );
        },
        { dependencies: [active] }
    );

    if (!images.length) {
        return (
            <div className="front-container py-10">
                <p className="rounded-2xl border border-dashed border-white/12 px-6 py-12 text-center text-[14px] text-front-steel">
                    Screenshots for this brief are being prepared.
                </p>
            </div>
        );
    }

    const current = images[active] ?? images[0];

    return (
        <section className="front-container py-10 lg:py-14">
            <Reveal>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                            {eyebrow}
                        </p>
                        <h2 className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                            {title}
                        </h2>
                    </div>
                    <p className="font-mono text-[11px] tabular-nums text-front-steel-dim">
                        {active + 1} / {images.length}
                    </p>
                </div>
            </Reveal>

            <div
                ref={stageRef}
                className="overflow-hidden rounded-2xl border border-white/10 bg-front-panel"
            >
                <img
                    src={current.src}
                    alt={current.alt}
                    width={960}
                    height={600}
                    className="aspect-[960/600] w-full object-cover"
                />
            </div>

            <ul className="mt-4 grid grid-cols-3 gap-3">
                {images.map((image, index) => {
                    const selected = index === active;
                    return (
                        <li key={image.src}>
                            <button
                                type="button"
                                onClick={() => setActive(index)}
                                aria-pressed={selected}
                                aria-label={`Show screenshot ${index + 1}`}
                                className={`group block w-full overflow-hidden rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 ${
                                    selected
                                        ? "border-front-ember/50"
                                        : "border-white/10 hover:border-white/25"
                                }`}
                            >
                                <img
                                    src={image.src}
                                    alt=""
                                    width={320}
                                    height={200}
                                    className="aspect-[960/600] w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                                    loading="lazy"
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
