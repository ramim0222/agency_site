import { Link } from "@inertiajs/react";
import AdminLayout from "@/Components/SuperAdmin/AdminLayout";

export default function SourcesIndex({ sources = [], total = 0 }) {
    return (
        <AdminLayout title="Sources" eyebrow="Lead desk · channels">
            <div className="mx-auto max-w-3xl">
                <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <h1 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-admin-ink">
                            Sources
                        </h1>
                        <p className="mt-2 text-[14px] text-admin-muted">
                            Channel attribution across {total} leads.
                        </p>
                    </div>
                    <Link
                        href={route("admin.dashboard")}
                        className="rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-accent transition-colors hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                    >
                        ← Dashboard
                    </Link>
                </header>

                <ul className="overflow-hidden rounded-xl border border-admin-line bg-admin-panel divide-y divide-admin-line">
                    {sources.map((source) => (
                        <li key={source.key}>
                            <Link
                                href={route("admin.leads.index", {
                                    source: source.key,
                                })}
                                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-admin-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-admin-accent/45"
                            >
                                <span className="text-[14px] text-admin-ink">
                                    {source.label}
                                </span>
                                <span className="font-mono text-[12px] tabular-nums text-admin-muted">
                                    {source.count}
                                    <span className="ml-2 text-admin-muted/70">
                                        {source.pct}%
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </AdminLayout>
    );
}
