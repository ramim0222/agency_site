import { useEffect, useMemo, useRef } from "react";
import { EASE, gsap, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

function scorePassword(password) {
    if (!password) {
        return { score: 0, label: "Enter a password", tone: "idle" };
    }

    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) return { score, label: "Weak", tone: "weak" };
    if (score <= 3) return { score, label: "Fair", tone: "fair" };
    if (score === 4) return { score, label: "Strong", tone: "strong" };
    return { score, label: "Very strong", tone: "strong" };
}

const TONE_FILL = {
    idle: "bg-admin-line",
    weak: "bg-admin-danger",
    fair: "bg-amber-400/80",
    strong: "bg-admin-accent",
};

/**
 * Live password strength bar for the admin reset form.
 * Animates fill width via GSAP; falls back instantly for reduced motion.
 */
export default function PasswordStrengthMeter({ password = "", className }) {
    const fillRef = useRef(null);
    const result = useMemo(() => scorePassword(password), [password]);
    const percent = (result.score / 5) * 100;

    useEffect(() => {
        if (!fillRef.current) return;

        if (prefersReducedMotion()) {
            gsap.set(fillRef.current, { width: `${percent}%` });
            return;
        }

        gsap.to(fillRef.current, {
            width: `${percent}%`,
            duration: 0.35,
            ease: EASE.out,
            overwrite: true,
        });
    }, [percent]);

    return (
        <div className={cn("space-y-1.5", className)} aria-live="polite">
            <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted">
                    Strength
                </span>
                <span
                    className={cn(
                        "font-mono text-[11px] uppercase tracking-[0.08em]",
                        result.tone === "strong" && "text-admin-accent",
                        result.tone === "fair" && "text-amber-300/90",
                        result.tone === "weak" && "text-admin-danger",
                        result.tone === "idle" && "text-admin-muted"
                    )}
                >
                    {result.label}
                </span>
            </div>
            <div
                className="h-1.5 overflow-hidden rounded-full bg-admin-canvas"
                role="meter"
                aria-label="Password strength"
                aria-valuemin={0}
                aria-valuemax={5}
                aria-valuenow={result.score}
                aria-valuetext={result.label}
            >
                <div
                    ref={fillRef}
                    className={cn("h-full w-0 rounded-full transition-colors duration-200", TONE_FILL[result.tone])}
                />
            </div>
        </div>
    );
}
