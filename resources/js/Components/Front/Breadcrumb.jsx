import { Fragment } from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Simple trail: SaaS > Category > …
 * Skills: ui-ux-pro-max (nav landmark, current page), taste-design (quiet mono).
 */
export default function Breadcrumb({ items = [], className }) {
    if (!items.length) return null;

    return (
        <nav aria-label="Breadcrumb" className={cn(className)}>
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.1em]">
                {items.map((item, index) => {
                    const last = index === items.length - 1;

                    return (
                        <Fragment key={`${item.label}-${index}`}>
                            {index > 0 ? (
                                <li aria-hidden="true" className="text-front-steel-dim">
                                    <ChevronRight className="size-3" strokeWidth={1.75} />
                                </li>
                            ) : null}
                            <li
                                className={
                                    last
                                        ? "text-front-steel"
                                        : "text-front-ember-soft"
                                }
                            >
                                {last || !item.href ? (
                                    <span
                                        aria-current={last ? "page" : undefined}
                                        className="max-w-[28ch] truncate"
                                    >
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="rounded-sm transition-colors hover:text-front-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        </Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}
