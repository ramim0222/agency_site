import { cn } from "@/lib/utils";
import { budgetOptions, timelineOptions } from "@/data/front/contact";

export default function FormStepBudgetTimeline({
    budget,
    timeline,
    onBudgetChange,
    onTimelineChange,
    errors = {},
}) {
    return (
        <div className="space-y-10">
            <fieldset>
                <legend className="text-[1.35rem] font-semibold tracking-[-0.02em] text-front-ink">
                    What's the budget range?
                </legend>
                <p className="mt-2 max-w-[48ch] text-[14.5px] leading-relaxed text-front-slate">
                    Helps us propose a scope that fits — not a padded estimate.
                </p>

                <div className="mt-6 flex flex-col gap-2.5" role="radiogroup" aria-label="Budget range">
                    {budgetOptions.map((option) => {
                        const selected = budget === option.value;
                        return (
                            <button
                                key={option.value}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() => onBudgetChange(option.value)}
                                className={cn(
                                    "flex items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50 sm:px-5",
                                    selected
                                        ? "border-front-ink bg-front-ink text-front-paper"
                                        : "border-front-ink/12 bg-white hover:border-front-ink/25"
                                )}
                            >
                                <span>
                                    <span className="block text-[15px] font-semibold">{option.label}</span>
                                    <span
                                        className={cn(
                                            "mt-0.5 block text-[13px]",
                                            selected ? "text-white/65" : "text-front-slate"
                                        )}
                                    >
                                        {option.hint}
                                    </span>
                                </span>
                                <span
                                    className={cn(
                                        "flex size-4 shrink-0 items-center justify-center rounded-full border",
                                        selected
                                            ? "border-front-ember bg-front-ember"
                                            : "border-front-ink/25"
                                    )}
                                    aria-hidden="true"
                                >
                                    {selected && <span className="size-1.5 rounded-full bg-front-ember-ink" />}
                                </span>
                            </button>
                        );
                    })}
                </div>
                {errors.budget && (
                    <p className="mt-3 text-[13.5px] text-red-700" role="alert">
                        {errors.budget}
                    </p>
                )}
            </fieldset>

            <fieldset>
                <legend className="text-[1.35rem] font-semibold tracking-[-0.02em] text-front-ink">
                    When do you need it?
                </legend>
                <p className="mt-2 max-w-[48ch] text-[14.5px] leading-relaxed text-front-slate">
                    Rough is fine. We'll confirm feasibility once we know the scope.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="radiogroup" aria-label="Timeline">
                    {timelineOptions.map((option) => {
                        const selected = timeline === option.value;
                        return (
                            <button
                                key={option.value}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() => onTimelineChange(option.value)}
                                className={cn(
                                    "rounded-xl border px-4 py-4 text-left transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50",
                                    selected
                                        ? "border-front-ink bg-front-ink text-front-paper"
                                        : "border-front-ink/12 bg-white hover:border-front-ink/25"
                                )}
                            >
                                <span className="block text-[15px] font-semibold">{option.label}</span>
                                <span
                                    className={cn(
                                        "mt-0.5 block text-[13px]",
                                        selected ? "text-white/65" : "text-front-slate"
                                    )}
                                >
                                    {option.hint}
                                </span>
                            </button>
                        );
                    })}
                </div>
                {errors.timeline && (
                    <p className="mt-3 text-[13.5px] text-red-700" role="alert">
                        {errors.timeline}
                    </p>
                )}
            </fieldset>
        </div>
    );
}
