import { cn } from "@/lib/utils";
import { formSteps } from "@/data/front/contact";

/**
 * Progress across the three-step quote form. Numbered because the steps
 * are a real sequence — order carries information the visitor needs.
 */
export default function FormStepIndicator({ currentStep, className }) {
    return (
        <ol
            className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0", className)}
            aria-label="Quote form progress"
        >
            {formSteps.map((step, index) => {
                const isActive = currentStep === step.id;
                const isComplete = currentStep > step.id;
                const isLast = index === formSteps.length - 1;

                return (
                    <li key={step.key} className="flex items-center sm:flex-1">
                        <div className="flex items-center gap-3">
                            <span
                                className={cn(
                                    "flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-medium transition-colors duration-200",
                                    isActive && "bg-front-ember text-front-ember-ink",
                                    isComplete && "bg-front-ink text-front-paper",
                                    !isActive &&
                                        !isComplete &&
                                        "border border-front-ink/15 bg-transparent text-front-slate"
                                )}
                                aria-current={isActive ? "step" : undefined}
                            >
                                {isComplete ? (
                                    <CheckMark className="size-3.5" />
                                ) : (
                                    String(step.id).padStart(2, "0")
                                )}
                            </span>
                            <span
                                className={cn(
                                    "font-mono text-[11px] uppercase tracking-[0.1em]",
                                    isActive ? "text-front-ink" : "text-front-slate"
                                )}
                            >
                                {step.label}
                            </span>
                        </div>
                        {!isLast && (
                            <span
                                aria-hidden="true"
                                className={cn(
                                    "mx-3 hidden h-px flex-1 sm:block",
                                    isComplete ? "bg-front-ink/40" : "bg-front-ink/10"
                                )}
                            />
                        )}
                    </li>
                );
            })}
        </ol>
    );
}

function CheckMark(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M3.5 8.5 6.5 11.5 12.5 4.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
