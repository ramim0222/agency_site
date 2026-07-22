import { cn } from "@/lib/utils";
import { serviceOptions } from "@/data/front/contact";

export default function FormStepServiceType({ value, onChange, error }) {
    return (
        <fieldset>
            <legend className="text-[1.35rem] font-semibold tracking-[-0.02em] text-front-ink">
                What kind of build is this?
            </legend>
            <p className="mt-2 max-w-[48ch] text-[14.5px] leading-relaxed text-front-slate">
                Pick the closest match. We can refine the scope on the call.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup">
                {serviceOptions.map((option) => {
                    const selected = value === option.value;
                    return (
                        <button
                            key={option.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => onChange(option.value)}
                            className={cn(
                                "group flex flex-col items-start rounded-xl border px-5 py-5 text-left transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50",
                                selected
                                    ? "border-front-ink bg-front-ink text-front-paper"
                                    : "border-front-ink/12 bg-white hover:border-front-ink/25 hover:bg-front-paper"
                            )}
                        >
                            <span
                                className={cn(
                                    "font-mono text-[11px] uppercase tracking-[0.1em]",
                                    selected ? "text-front-ember-soft" : "text-front-slate"
                                )}
                            >
                                {selected ? "Selected" : "Select"}
                            </span>
                            <span className="mt-2 text-[17px] font-semibold tracking-[-0.01em]">
                                {option.title}
                            </span>
                            <span
                                className={cn(
                                    "mt-1.5 text-[13.5px] leading-relaxed",
                                    selected ? "text-white/70" : "text-front-slate"
                                )}
                            >
                                {option.description}
                            </span>
                        </button>
                    );
                })}
            </div>

            {error && (
                <p className="mt-4 text-[13.5px] text-red-700" role="alert">
                    {error}
                </p>
            )}
        </fieldset>
    );
}
