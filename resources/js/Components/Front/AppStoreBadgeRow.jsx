import Reveal from "@/Components/Front/Reveal";

/**
 * Placeholder App Store / Play badges for mobile portfolio strip.
 * Skills: ui-ux-pro-max (focus states, disabled-like # links), taste-design (quiet row).
 */
export default function AppStoreBadgeRow({
    badges = [],
    note,
    className = "",
}) {
    if (!badges.length) return null;

    return (
        <Reveal className={className}>
            <div className="flex flex-wrap items-center gap-3">
                {badges.map((badge) => {
                    const isPlaceholder =
                        !badge.href || badge.href === "#" || badge.href === "";
                    const className =
                        "inline-flex overflow-hidden rounded-lg border border-white/12 bg-front-panel transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55";

                    const media = (
                        <>
                            <img
                                src={badge.image.src}
                                alt={badge.image.alt}
                                width={180}
                                height={54}
                                className="h-[54px] w-[180px] object-cover"
                                loading="lazy"
                            />
                            <span className="sr-only">{badge.label}</span>
                        </>
                    );

                    if (isPlaceholder) {
                        return (
                            <span
                                key={badge.key}
                                className={`${className} cursor-default opacity-90`}
                                title="Store link coming soon"
                            >
                                {media}
                            </span>
                        );
                    }

                    return (
                        <a
                            key={badge.key}
                            href={badge.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${className} hover:border-white/25`}
                            title={badge.label}
                        >
                            {media}
                        </a>
                    );
                })}
            </div>
            {note ? (
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-front-steel-dim">
                    {note}
                </p>
            ) : null}
        </Reveal>
    );
}
