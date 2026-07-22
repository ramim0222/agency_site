import { Link, usePage } from "@inertiajs/react";
import { LogOut, Menu } from "lucide-react";

export default function AdminTopbar({ title, onMenuClick }) {
    const { auth } = usePage().props;
    const name = auth?.user?.name ?? "Admin";

    return (
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-admin-line bg-admin-canvas/90 px-4 py-3 backdrop-blur-md sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="rounded-md p-2 text-admin-muted transition-colors hover:bg-white/5 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 lg:hidden"
                    aria-label="Open navigation"
                >
                    <Menu className="size-5" strokeWidth={1.75} />
                </button>
                <div className="min-w-0">
                    <p className="truncate font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                        {title}
                    </p>
                    <p className="truncate text-[13px] text-admin-ink/90 sm:text-[14px]">
                        Signed in as {name}
                    </p>
                </div>
            </div>

            <Link
                href={route("logout")}
                method="post"
                as="button"
                className="inline-flex items-center gap-2 rounded-md border border-admin-line bg-admin-panel px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:border-admin-accent/40 hover:bg-admin-panel-2 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.98]"
            >
                <LogOut className="size-3.5" strokeWidth={1.75} />
                Sign out
            </Link>
        </header>
    );
}
