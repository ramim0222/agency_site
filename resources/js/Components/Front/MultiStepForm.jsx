import { useEffect, useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";
import FormStepIndicator from "@/Components/Front/FormStepIndicator";
import FormStepServiceType from "@/Components/Front/FormStepServiceType";
import FormStepBudgetTimeline from "@/Components/Front/FormStepBudgetTimeline";
import FormStepContactInfo from "@/Components/Front/FormStepContactInfo";

const TOTAL_STEPS = 3;

function readAttribution() {
    if (typeof window === "undefined") {
        return {
            utm_source: "",
            utm_medium: "",
            utm_campaign: "",
            utm_term: "",
            utm_content: "",
            referrer: "",
            landing_page: "",
        };
    }

    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get("utm_source") ?? "",
        utm_medium: params.get("utm_medium") ?? "",
        utm_campaign: params.get("utm_campaign") ?? "",
        utm_term: params.get("utm_term") ?? "",
        utm_content: params.get("utm_content") ?? "",
        referrer: document.referrer || "",
        landing_page: window.location.href,
    };
}

/** Map marketing query aliases → form service_type values. */
const SERVICE_QUERY_MAP = {
    website: "website",
    webapp: "web_app",
    web_app: "web_app",
    mobile: "mobile_app",
    mobile_app: "mobile_app",
    saas: "saas",
};

/** Prefill from /contact?product=&plan= or /contact?service=website|webapp */
function readLeadContext() {
    if (typeof window === "undefined") {
        return { service_type: "", message: "" };
    }

    const params = new URLSearchParams(window.location.search);
    const product = (params.get("product") ?? "").trim();
    const plan = (params.get("plan") ?? "").trim();
    const service = (params.get("service") ?? "").trim();

    if (product || plan) {
        const parts = [];
        if (product) parts.push(`Product: ${product}`);
        if (plan) parts.push(`Plan: ${plan}`);

        return {
            service_type: "saas",
            message: `${parts.join(" · ")}\n\nI'd like to talk about adapting this for our market.`,
        };
    }

    if (SERVICE_QUERY_MAP[service]) {
        return {
            service_type: SERVICE_QUERY_MAP[service],
            message: "",
        };
    }

    return { service_type: "", message: "" };
}

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [localErrors, setLocalErrors] = useState({});
    const panelRef = useRef(null);
    const directionRef = useRef(1);

    const leadContext = readLeadContext();

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        service_type: leadContext.service_type,
        budget: "",
        timeline: "",
        name: "",
        email: "",
        phone: "",
        message: leadContext.message,
        ...readAttribution(),
    });

    useEffect(() => {
        // Re-capture attribution + lead context after hydration (SSR mismatch).
        const attr = readAttribution();
        Object.entries(attr).forEach(([key, value]) => {
            if (value) setData(key, value);
        });
        const ctx = readLeadContext();
        if (ctx.service_type) setData("service_type", ctx.service_type);
        if (ctx.message) setData("message", ctx.message);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Jump back to the step that owns a server validation error.
    useEffect(() => {
        if (errors.service_type) setStep(1);
        else if (errors.budget || errors.timeline) setStep(2);
        else if (errors.name || errors.email || errors.phone || errors.message) setStep(3);
    }, [errors]);

    const { contextSafe } = useGSAP({ scope: panelRef });

    const animateStep = contextSafe((nextStep) => {
        const panel = panelRef.current;
        if (!panel) {
            setStep(nextStep);
            return;
        }

        if (prefersReducedMotion()) {
            setStep(nextStep);
            return;
        }

        const dir = directionRef.current;
        gsap.to(panel, {
            opacity: 0,
            x: dir * -18,
            duration: 0.22,
            ease: EASE.soft,
            onComplete: () => {
                setStep(nextStep);
                requestAnimationFrame(() => {
                    gsap.fromTo(
                        panel,
                        { opacity: 0, x: dir * 22 },
                        { opacity: 1, x: 0, duration: 0.4, ease: EASE.out }
                    );
                });
            },
        });
    });

    const validateStep = (current) => {
        const nextErrors = {};

        if (current === 1 && !data.service_type) {
            nextErrors.service_type = "Pick the kind of build you need.";
        }
        if (current === 2) {
            if (!data.budget) nextErrors.budget = "Choose a budget range so we can scope honestly.";
            if (!data.timeline) nextErrors.timeline = "Tell us roughly when you need to launch.";
        }
        if (current === 3) {
            if (!data.name.trim()) nextErrors.name = "Add your name so we know who to reply to.";
            if (!data.email.trim()) nextErrors.email = "We need an email to send the quote.";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
                nextErrors.email = "That email doesn’t look valid.";
            }
            if (!data.phone.trim()) nextErrors.phone = "Add a phone or WhatsApp number we can reach.";
        }

        setLocalErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const goNext = () => {
        if (!validateStep(step)) return;
        clearErrors();
        if (step >= TOTAL_STEPS) return;
        directionRef.current = 1;
        animateStep(step + 1);
    };

    const goBack = () => {
        if (step <= 1 || processing) return;
        setLocalErrors({});
        clearErrors();
        directionRef.current = -1;
        animateStep(step - 1);
    };

    const submit = (e) => {
        e.preventDefault();
        if (step < TOTAL_STEPS) {
            goNext();
            return;
        }
        if (!validateStep(3)) return;

        post("/contact", {
            preserveScroll: true,
            onError: () => {
                // Keep entered data — Inertia useForm already does this.
            },
        });
    };

    const fieldError = (key) => localErrors[key] || errors[key];

    return (
        <form
            onSubmit={submit}
            className="rounded-2xl border border-front-ink/10 bg-front-paper p-6 shadow-[0_24px_60px_-40px_rgba(11,12,15,0.35)] sm:p-8 lg:p-10"
            noValidate
        >
            <FormStepIndicator currentStep={step} />

            <div ref={panelRef} className="mt-8 min-h-[280px]">
                {step === 1 && (
                    <FormStepServiceType
                        value={data.service_type}
                        onChange={(value) => {
                            setData("service_type", value);
                            setLocalErrors((prev) => ({ ...prev, service_type: undefined }));
                            clearErrors("service_type");
                        }}
                        error={fieldError("service_type")}
                    />
                )}

                {step === 2 && (
                    <FormStepBudgetTimeline
                        budget={data.budget}
                        timeline={data.timeline}
                        onBudgetChange={(value) => {
                            setData("budget", value);
                            setLocalErrors((prev) => ({ ...prev, budget: undefined }));
                            clearErrors("budget");
                        }}
                        onTimelineChange={(value) => {
                            setData("timeline", value);
                            setLocalErrors((prev) => ({ ...prev, timeline: undefined }));
                            clearErrors("timeline");
                        }}
                        errors={{
                            budget: fieldError("budget"),
                            timeline: fieldError("timeline"),
                        }}
                    />
                )}

                {step === 3 && (
                    <FormStepContactInfo
                        data={data}
                        disabled={processing}
                        onChange={(key, value) => {
                            setData(key, value);
                            setLocalErrors((prev) => ({ ...prev, [key]: undefined }));
                            clearErrors(key);
                        }}
                        errors={{
                            name: fieldError("name"),
                            email: fieldError("email"),
                            phone: fieldError("phone"),
                            message: fieldError("message"),
                        }}
                    />
                )}
            </div>

            {errors.message && typeof errors.message === "string" && step === 3 && !localErrors.message && (
                <p className="mt-4 text-[13.5px] text-red-700" role="alert">
                    {errors.message}
                </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-front-ink/10 pt-6">
                <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 1 || processing}
                    className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[13.5px] font-semibold text-front-ink transition-colors hover:bg-front-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50 disabled:pointer-events-none disabled:opacity-35"
                >
                    <ArrowLeft className="size-4" />
                    Back
                </button>

                {step < TOTAL_STEPS ? (
                    <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex items-center gap-2 rounded-md bg-front-ember px-5 py-2.5 text-[14px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-paper"
                    >
                        Continue
                        <ArrowRight className="size-4" />
                    </button>
                ) : (
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex items-center gap-2 rounded-md bg-front-ember px-5 py-2.5 text-[14px] font-semibold text-front-ember-ink transition-all duration-200 hover:bg-front-ember-soft active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2 focus-visible:ring-offset-front-paper disabled:pointer-events-none disabled:opacity-60"
                    >
                        {processing ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                Sending brief…
                            </>
                        ) : (
                            <>
                                Send brief
                                <ArrowRight className="size-4" />
                            </>
                        )}
                    </button>
                )}
            </div>
        </form>
    );
}
