import { Link, usePage } from "@inertiajs/react";
import { LayoutDashboard, Megaphone, Users, X } from "lucide-react";

const NAV = [
    {
        label: "Dashboard",
        href: "admin.dashboard",
        match: ["/admin/dashboard"],
        icon: LayoutDashboard,
    },
    {
        label: "Leads",
        href: "admin.leads.index",
        match: ["/admin/leads"],
        icon: Users,
    },
    {
        label: "Sources",
        href: "admin.sources.index",
        match: ["/admin/sources"],
        icon: Megaphone,
    },
];

function isActive(url, match) {
    return match.some((prefix) => url === prefix || url.startsWith(`${prefix}/`));
}

export default function AdminSidebar({ open, onClose }) {
    const { url } = usePage();

    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] transition-opacity lg:hidden ${
                    open ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={onClose}
                aria-hidden="true"
            />

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-admin-line bg-admin-panel transition-transform duration-300 ease-out lg:static lg:translate-x-0 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
                aria-label="Admin navigation"
            >
                <div className="flex items-center justify-between border-b border-admin-line px-5 py-4">
                    <Link
                        href={route("admin.dashboard")}
                        className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                        onClick={onClose}
                    >
                        <span className="flex size-8 items-center justify-center rounded-md bg-admin-accent font-mono text-[13px] font-semibold text-admin-accent-ink">
                            K
                        </span>
                        <div className="leading-tight">
                            <span className="block font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-admin-ink">
                                Kiln Ops
                            </span>
                            <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                                Lead desk
                            </span>
                        </div>
                    </Link>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md p-2 text-admin-muted transition-colors hover:bg-white/5 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 lg:hidden"
                        aria-label="Close navigation"
                    >
                        <X className="size-4" strokeWidth={1.75} />
                    </button>
                </div>

                <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
                    {NAV.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(url, item.match);

                        return (
                            <Link
                                key={item.href}
                                href={route(item.href)}
                                onClick={onClose}
                                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 ${
                                    active
                                        ? "bg-admin-accent/15 text-admin-ink"
                                        : "text-admin-muted hover:bg-white/[0.04] hover:text-admin-ink"
                                }`}
                                aria-current={active ? "page" : undefined}
                            >
                                <Icon
                                    className={`size-4 shrink-0 transition-colors ${
                                        active
                                            ? "text-admin-accent"
                                            : "text-admin-muted group-hover:text-admin-ink"
                                    }`}
                                    strokeWidth={1.75}
                                />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <p className="border-t border-admin-line px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted/80">
                    Internal · not public
                </p>
            </aside>
        </>
    );
}
