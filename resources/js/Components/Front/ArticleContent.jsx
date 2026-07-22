import { cn } from "@/lib/utils";

/**
 * Static rich-text blocks for blog posts — readable long-form type.
 */
export default function ArticleContent({ blocks = [], className }) {
    if (!blocks.length) {
        return (
            <p
                className="rounded-2xl border border-dashed border-white/12 px-6 py-10 text-center text-[15px] text-front-steel"
                role="status"
            >
                Article body coming soon.
            </p>
        );
    }

    return (
        <div
            className={cn(
                "space-y-6 text-[17px] leading-[1.75] text-front-steel sm:text-[18px]",
                className
            )}
        >
            {blocks.map((block, index) => {
                const key = `${block.type}-${index}`;

                if (block.type === "p") {
                    return (
                        <p key={key} className="text-pretty">
                            {block.text}
                        </p>
                    );
                }

                if (block.type === "h2") {
                    return (
                        <h2
                            key={key}
                            className="pt-4 text-[1.35rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.5rem]"
                        >
                            {block.text}
                        </h2>
                    );
                }

                if (block.type === "h3") {
                    return (
                        <h3
                            key={key}
                            className="pt-2 text-[1.1rem] font-semibold tracking-[-0.015em] text-white"
                        >
                            {block.text}
                        </h3>
                    );
                }

                if (block.type === "ul") {
                    return (
                        <ul
                            key={key}
                            className="list-none space-y-2.5 border-l border-front-ember/35 pl-5"
                        >
                            {(block.items ?? []).map((item) => (
                                <li key={item} className="relative pl-1">
                                    <span
                                        className="absolute -left-[1.35rem] top-[0.7em] size-1.5 rounded-full bg-front-ember"
                                        aria-hidden="true"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    );
                }

                if (block.type === "quote") {
                    return (
                        <blockquote
                            key={key}
                            className="border-l-2 border-front-ember/50 py-1 pl-5 font-serif text-[1.25rem] italic leading-snug text-front-paper sm:text-[1.4rem]"
                        >
                            {block.text}
                            {block.cite ? (
                                <footer className="mt-3 font-sans text-[13px] not-italic text-front-steel-dim">
                                    — {block.cite}
                                </footer>
                            ) : null}
                        </blockquote>
                    );
                }

                if (block.type === "img" && block.src) {
                    return (
                        <figure key={key} className="overflow-hidden rounded-xl border border-white/10">
                            <img
                                src={block.src}
                                alt={block.alt ?? ""}
                                width={block.width ?? 960}
                                height={block.height ?? 540}
                                className="w-full object-cover"
                                loading="lazy"
                            />
                            {block.caption ? (
                                <figcaption className="border-t border-white/8 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-front-steel-dim">
                                    {block.caption}
                                </figcaption>
                            ) : null}
                        </figure>
                    );
                }

                return null;
            })}
        </div>
    );
}
