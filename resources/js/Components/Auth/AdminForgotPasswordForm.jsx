import { useRef } from "react";
import { Link, useForm } from "@inertiajs/react";
import { CheckCircle2 } from "lucide-react";
import AuthInput from "@/Components/Auth/AuthInput";
import AuthButton from "@/Components/Auth/AuthButton";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Request a password reset link for the provisioned admin account.
 * Shows a confirmation state after a successful submit (status flash).
 */
export default function AdminForgotPasswordForm({ status }) {
    const sent = Boolean(status);
    const confirmRef = useRef(null);

    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    useGSAP(
        () => {
            if (!sent || !confirmRef.current) return;
            if (prefersReducedMotion()) return;

            gsap.fromTo(
                confirmRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.45, ease: EASE.out }
            );
        },
        { dependencies: [sent] }
    );

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    if (sent) {
        return (
            <div ref={confirmRef} className="space-y-6" role="status">
                <div className="rounded-xl border border-admin-accent/30 bg-admin-accent/10 px-4 py-5">
                    <div className="flex items-start gap-3">
                        <CheckCircle2
                            className="mt-0.5 size-5 shrink-0 text-admin-accent"
                            aria-hidden="true"
                        />
                        <div>
                            <p className="text-[15px] font-semibold text-admin-ink">
                                Check your inbox
                            </p>
                            <p className="mt-1.5 text-[13.5px] leading-relaxed text-admin-muted">
                                {status}
                            </p>
                            <p className="mt-2 text-[13px] leading-relaxed text-admin-muted">
                                If that email is on the ops account, a reset link is on the way.
                                It may take a minute — check spam if you don't see it.
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    href={route("login")}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-admin-line px-4 py-3 text-[14px] font-semibold text-admin-ink transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/40"
                >
                    Back to sign in
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="space-y-5" noValidate>
            <p className="text-[14px] leading-relaxed text-admin-muted">
                Enter the admin email and we'll send a reset link. Only the provisioned
                ops account can receive one.
            </p>

            <AuthInput
                id="email"
                label="Email"
                type="email"
                name="email"
                value={data.email}
                autoComplete="username"
                isFocused
                disabled={processing}
                error={errors.email}
                placeholder="you@studio.internal"
                onChange={(e) => setData("email", e.target.value)}
                required
            />

            <AuthButton type="submit" loading={processing}>
                {processing ? "Sending link…" : "Email reset link"}
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
