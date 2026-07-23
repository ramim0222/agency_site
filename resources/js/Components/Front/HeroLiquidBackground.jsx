import { useId, useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Hero photo layer with a subtle liquid warp on move + click ripple.
 * Pointer listeners attach to the parent <section>; only this layer is distorted.
 */
export default function HeroLiquidBackground({ src, className = "opacity-10" }) {
    const uid = useId().replace(/:/g, "");
    const filterId = `hero-liquid-${uid}`;

    const rootRef = useRef(null);
    const imgRef = useRef(null);
    const ripplesRef = useRef(null);
    const displaceRef = useRef(null);
    const turbulenceRef = useRef(null);

    useGSAP(
        (_ctx, contextSafe) => {
            const root = rootRef.current;
            const img = imgRef.current;
            const ripples = ripplesRef.current;
            const displace = displaceRef.current;
            const turbulence = turbulenceRef.current;
            if (!root || !img || !ripples || !displace || !turbulence) return;

            const host = root.closest("section") ?? root;

            if (prefersReducedMotion()) {
                gsap.set(displace, { attr: { scale: 0 } });
                return;
            }

            // Idle: image stays readable with a faint liquid shimmer.
            gsap.set(displace, { attr: { scale: 4 } });

            const ambient = gsap.to(turbulence, {
                attr: { baseFrequency: 0.014 },
                duration: 10,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });

            const onMove = contextSafe(() => {
                gsap.to(displace, {
                    attr: { scale: 18 },
                    duration: 0.45,
                    ease: EASE.soft,
                    overwrite: "auto",
                });
                gsap.to(turbulence, {
                    attr: { baseFrequency: 0.016 },
                    duration: 0.5,
                    ease: EASE.soft,
                    overwrite: "auto",
                });
            });

            const onLeave = contextSafe(() => {
                gsap.to(displace, {
                    attr: { scale: 4 },
                    duration: 0.9,
                    ease: EASE.out,
                    overwrite: "auto",
                });
                gsap.to(turbulence, {
                    attr: { baseFrequency: 0.01 },
                    duration: 0.9,
                    ease: EASE.out,
                    overwrite: "auto",
                });
            });

            const spawnRipple = (x, y) => {
                const ring = document.createElement("span");
                ring.className =
                    "pointer-events-none absolute left-0 top-0 block rounded-full border border-white/25";
                ring.style.width = "12px";
                ring.style.height = "12px";
                ring.style.marginLeft = "-6px";
                ring.style.marginTop = "-6px";
                ring.style.willChange = "transform, opacity";
                ripples.appendChild(ring);

                gsap.set(ring, { x, y, scale: 0.2, opacity: 0.65 });
                gsap.to(ring, {
                    scale: 14,
                    opacity: 0,
                    duration: 1.1,
                    ease: "power2.out",
                    onComplete: () => ring.remove(),
                });
            };

            const onDown = contextSafe((e) => {
                const rect = host.getBoundingClientRect();
                spawnRipple(e.clientX - rect.left, e.clientY - rect.top);

                gsap.fromTo(
                    displace,
                    { attr: { scale: 42 } },
                    {
                        attr: { scale: 14 },
                        duration: 1.2,
                        ease: "elastic.out(1, 0.4)",
                        overwrite: "auto",
                    }
                );

                gsap.fromTo(
                    turbulence,
                    { attr: { baseFrequency: 0.028 } },
                    {
                        attr: { baseFrequency: 0.012 },
                        duration: 1.3,
                        ease: EASE.out,
                        overwrite: "auto",
                    }
                );
            });

            host.addEventListener("pointermove", onMove, { passive: true });
            host.addEventListener("pointerleave", onLeave);
            host.addEventListener("pointerdown", onDown);

            return () => {
                ambient.kill();
                host.removeEventListener("pointermove", onMove);
                host.removeEventListener("pointerleave", onLeave);
                host.removeEventListener("pointerdown", onDown);
                ripples.replaceChildren();
            };
        },
        { scope: rootRef }
    );

    return (
        <div
            ref={rootRef}
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
        >
            <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
                <filter
                    id={filterId}
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    colorInterpolationFilters="sRGB"
                >
                    <feTurbulence
                        ref={turbulenceRef}
                        type="fractalNoise"
                        baseFrequency="0.01"
                        numOctaves="2"
                        seed="2"
                        result="noise"
                    />
                    <feDisplacementMap
                        ref={displaceRef}
                        in="SourceGraphic"
                        in2="noise"
                        scale="4"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>

            <img
                ref={imgRef}
                src={src}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover ${className}`}
                style={{ filter: `url(#${filterId})` }}
            />

            <div ref={ripplesRef} className="absolute inset-0 overflow-hidden" />
        </div>
    );
}
