/**
 * Client-side category filter for the portfolio index.
 * Active state uses ember underline — not a pill cluster.
 */
export default function FilterTabs({
    tabs = [],
    value = "all",
    onChange,
    counts = {},
}) {
    return (
        <div
            className="flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-white/10"
            role="tablist"
            aria-label="Filter case studies by category"
        >
            {tabs.map((tab) => {
                const active = value === tab.key;
                const count = counts[tab.key];

                return (
                    <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => onChange?.(tab.key)}
                        className={`relative -mb-px px-3 py-3 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite sm:px-4 ${
                            active
                                ? "text-white"
                                : "text-front-steel hover:text-white"
                        }`}
                    >
                        {tab.label}
                        {typeof count === "number" ? (
                            <span
                                className={`ml-1.5 tabular-nums ${
                                    active
                                        ? "text-front-ember-soft"
                                        : "text-front-steel-dim"
                                }`}
                            >
                                {count}
                            </span>
                        ) : null}
                        <span
                            aria-hidden="true"
                            className={`absolute inset-x-3 bottom-0 h-px transition-opacity sm:inset-x-4 ${
                                active
                                    ? "bg-front-ember opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    </button>
                );
            })}
        </div>
    );
}
