import { Head, Link, usePage } from "@inertiajs/react";

/**
 * Minimal SuperAdmin landing target for post-login redirect.
 * Full lead tracker UI lands in a later SuperAdmin prompt.
 */
export default function Dashboard() {
    const { auth } = usePage().props;
    const name = auth?.user?.name ?? "Admin";

    return (
        <div className="admin flex min-h-[100dvh] flex-col">
            <Head title="Lead desk" />

            <header className="flex items-center justify-between border-b border-admin-line px-6 py-4">
                <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-md bg-admin-accent font-mono text-[12px] font-semibold text-admin-accent-ink">
                        K
                    </span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-admin-ink">
                        Kiln Ops
                    </span>
                </div>
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="rounded-md px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.08em] text-admin-muted transition-colors hover:bg-white/5 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/40"
                >
                    Sign out
                </Link>
            </header>

            <main className="front-container flex flex-1 flex-col justify-center py-16">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                    Lead desk
                </p>
                <h1 className="mt-3 text-[1.75rem] font-semibold tracking-[-0.02em] text-admin-ink">
                    Welcome back, {name}.
                </h1>
                <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-admin-muted">
                    You're signed in. The lead tracker UI ships in the next SuperAdmin build —
                    this page is the authenticated landing for now.
                </p>
            </main>
        </div>
    );
}
