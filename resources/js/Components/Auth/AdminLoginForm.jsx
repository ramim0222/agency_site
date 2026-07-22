import { Link, useForm } from "@inertiajs/react";
import AuthInput from "@/Components/Auth/AuthInput";
import AuthButton from "@/Components/Auth/AuthButton";

export default function AdminLoginForm({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5" noValidate>
            {status && (
                <div
                    className="rounded-lg border border-admin-accent/30 bg-admin-accent/10 px-3.5 py-2.5 text-[13.5px] text-admin-ink"
                    role="status"
                >
                    {status}
                </div>
            )}

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

            <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-3">
                    <label
                        htmlFor="password"
                        className="font-mono text-[11px] uppercase tracking-[0.12em] text-admin-muted"
                    >
                        Password
                    </label>
                    <Link
                        href={route("password.request")}
                        className="font-mono text-[11px] uppercase tracking-[0.08em] text-admin-muted transition-colors hover:text-admin-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/40 rounded-sm"
                    >
                        Forgot password?
                    </Link>
                </div>
                <AuthInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    autoComplete="current-password"
                    disabled={processing}
                    error={errors.password}
                    placeholder="••••••••"
                    onChange={(e) => setData("password", e.target.value)}
                    required
                />
            </div>

            <label className="flex cursor-pointer items-center gap-2.5 select-none">
                <input
                    type="checkbox"
                    name="remember"
                    checked={data.remember}
                    disabled={processing}
                    onChange={(e) => setData("remember", e.target.checked)}
                    className="size-4 rounded border-admin-line bg-admin-canvas text-admin-accent focus:ring-admin-accent/40 focus:ring-offset-0 disabled:opacity-50"
                />
                <span className="text-[13.5px] text-admin-muted">Keep me signed in</span>
            </label>

            <AuthButton type="submit" loading={processing} className="mt-1">
                {processing ? "Signing in…" : "Sign in"}
            </AuthButton>

            <p className="pt-1 text-center font-mono text-[11px] leading-relaxed tracking-[0.04em] text-admin-muted/80">
                Provisioned accounts only. No self-serve registration.
            </p>
        </form>
    );
}
