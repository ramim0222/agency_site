import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";

export default function AuthorBio({ author }) {
    if (!author) {
        return (
            <p
                className="rounded-2xl border border-dashed border-white/12 px-6 py-8 text-center text-[14px] text-front-steel"
                role="status"
            >
                Author details unavailable.
            </p>
        );
    }

    return (
        <Reveal>
            <section
                aria-label="About the author"
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-front-panel/60 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
            >
                <img
                    src={author.photo.src}
                    alt={author.photo.alt}
                    width={96}
                    height={96}
                    className="size-20 shrink-0 rounded-full border border-white/10 object-cover sm:size-24"
                    loading="lazy"
                />
                <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                        Written by
                    </p>
                    <h2 className="mt-1 text-[1.2rem] font-semibold tracking-[-0.015em] text-white">
                        {author.name}
                    </h2>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-front-steel-dim">
                        {author.role}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-front-steel">
                        {author.bio}
                    </p>
                    {author.href ? (
                        <Link
                            href={author.href}
                            className="group mt-4 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-front-ember-soft transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                        >
                            About Kiln
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    ) : null}
                </div>
            </section>
        </Reveal>
    );
}
