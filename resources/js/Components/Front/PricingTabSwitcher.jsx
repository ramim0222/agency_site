/**
 * Custom Development vs SaaS Plans — underline tabs, hash-friendly.
 * Skills: ui-ux-pro-max (aria, keyboard), taste-design (ember active).
 */
export default function PricingTabSwitcher({
    tabs = [],
    value = "custom",
    onChange,
    ariaLabel = "Pricing sections",
}) {
    return (
        <div
            className="flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-white/10"
            role="tablist"
            aria-label={ariaLabel}
        >
            {tabs.map((tab) => {
                const active = value === tab.key;

                return (
                    <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        id={`pricing-tab-${tab.key}`}
                        aria-controls={`pricing-panel-${tab.key}`}
                        onClick={() => onChange?.(tab.key)}
                        className={`relative -mb-px px-3 py-3 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 focus-visible:ring-offset-2 focus-visible:ring-offset-front-graphite sm:px-5 ${
                            active
                                ? "text-white"
                                : "text-front-steel hover:text-white"
                        }`}
                    >
                        {tab.label}
                        <span
                            aria-hidden="true"
                            className={`absolute inset-x-3 bottom-0 h-px transition-opacity sm:inset-x-5 ${
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
