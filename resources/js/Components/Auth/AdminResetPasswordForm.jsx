import { useEffect, useRef } from "react";
import { Link, router, useForm } from "@inertiajs/react";
import { CheckCircle2 } from "lucide-react";
import AuthInput from "@/Components/Auth/AuthInput";
import AuthButton from "@/Components/Auth/AuthButton";
import PasswordStrengthMeter from "@/Components/Auth/PasswordStrengthMeter";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Complete a password reset from an emailed token link.
 * On success: confirmation state, then redirect to /admin/login.
 */
export default function AdminResetPasswordForm({
    token,
    email,
    resetComplete = false,
    status = null,
}) {
    const successRef = useRef(null);
    const missingToken = !token;

    const { data, setData, post, processing, errors, reset } = useForm({
        token: token ?? "",
        email: email ?? "",
        password: "",
        password_confirmation: "",
    });

    useGSAP(
        () => {
            if (!resetComplete || !successRef.current) return;
            if (prefersReducedMotion()) return;

            gsap.fromTo(
                successRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.45, ease: EASE.out }
            );
        },
        { dependencies: [resetComplete] }
    );

    useEffect(() => {
        if (!resetComplete) return;
        const id = window.setTimeout(() => {
            router.visit(route("login"));
        }, 1600);
        return () => window.clearTimeout(id);
    }, [resetComplete]);

    const submit = (e) => {
        e.preventDefault();
        if (missingToken) return;

        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    if (missingToken) {
        return (
            <div className="space-y-5" role="status">
                <div className="rounded-xl border border-admin-danger/35 bg-admin-danger/10 px-4 py-4">
                    <p className="text-[15px] font-semibold text-admin-ink">
                        Reset link missing or invalid
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-admin-muted">
                        Open the link from your reset email, or request a new one.
                    </p>
                </div>
                <Link
                    href={route("password.request")}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-admin-accent px-4 py-3 text-[14px] font-semibold text-admin-accent-ink transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/40"
                >
                    Request a new reset link
                </Link>
                <p className="text-center">
                    <Link
                        href={route("login")}
                        className="font-mono text-[12px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/40 rounded-sm"
                    >
                        Back to sign in
                    </Link>
                </p>
            </div>
        );
    }

    if (resetComplete) {
        return (
            <div ref={successRef} className="space-y-5" role="status">
                <div className="rounded-xl border border-admin-accent/30 bg-admin-accent/10 px-4 py-5">
                    <div className="flex items-start gap-3">
                        <CheckCircle2
                            className="mt-0.5 size-5 shrink-0 text-admin-accent"
                            aria-hidden="true"
                        />
                        <div>
                            <p className="text-[15px] font-semibold text-admin-ink">
                                Password updated
                            </p>
                            <p className="mt-1.5 text-[13.5px] leading-relaxed text-admin-muted">
                                {status || "Your password has been reset."} Taking you to
                                sign in…
                            </p>
                        </div>
                    </div>
                </div>
                <Link
                    href={route("login")}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-admin-line px-4 py-3 text-[14px] font-semibold text-admin-ink transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/40"
                >
                    Continue to sign in
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-5" noValidate>
            <p className="text-[14px] leading-relaxed text-admin-muted">
                Choose a new password for the ops account. You'll sign in with it next.
            </p>

            <AuthInput
                id="email"
                label="Email"
                type="email"
                name="email"
                value={data.email}
                autoComplete="username"
                disabled={processing}
                error={errors.email}
                onChange={(e) => setData("email", e.target.value)}
                required
            />

            <div className="space-y-2.5">
                <AuthInput
                    id="password"
                    label="New password"
                    type="password"
                    name="password"
                    value={data.password}
                    autoComplete="new-password"
                    isFocused
                    disabled={processing}
                    error={errors.password}
                    placeholder="At least 8 characters"
                    onChange={(e) => setData("password", e.target.value)}
                    required
                />
                <PasswordStrengthMeter password={data.password} />
            </div>

            <AuthInput
                id="password_confirmation"
                label="Confirm password"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                autoComplete="new-password"
                disabled={processing}
                error={errors.password_confirmation}
                placeholder="Repeat new password"
                onChange={(e) => setData("password_confirmation", e.target.value)}
                required
            />

            <AuthButton type="submit" loading={processing}>
                {processing ? "Updating…" : "Reset password"}
            </AuthButton>

            <p className="text-center">
                <Link
                    href={route("login")}
                    className="font-mono text-[12px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/40 rounded-sm"
                >
                    Back to sign in
                </Link>
            </p>
        </form>
    );
}
