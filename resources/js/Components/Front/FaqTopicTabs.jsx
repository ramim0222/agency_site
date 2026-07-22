/**
 * FAQ topic tabs — General / Pricing / Process / SaaS.
 * Underline active state (taste-design) — not a pill cluster.
 */
export default function FaqTopicTabs({
    tabs = [],
    value,
    onChange,
    counts = {},
    ariaLabel = "FAQ topics",
    disabled = false,
}) {
    return (
        <div
            className="flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-white/10"
            role="tablist"
            aria-label={ariaLabel}
        >
            {tabs.map((tab) => {
                const active = value === tab.key;
                const count = counts[tab.key];

                return (
                    <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        id={`faq-tab-${tab.key}`}
                        aria-controls={`faq-panel-${tab.key}`}
                        aria-selected={active}
                        tabIndex={active ? 0 : -1}
                        disabled={disabled}
                        onClick={() => onChange?.(tab.key)}
                        className={`relative -mb-px px-3 py-3 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 ${
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
