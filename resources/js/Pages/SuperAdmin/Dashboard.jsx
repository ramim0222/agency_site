import { useRef } from "react";
import { Link } from "@inertiajs/react";
import AdminLayout from "@/Components/SuperAdmin/AdminLayout";
import AdminStatCard from "@/Components/SuperAdmin/AdminStatCard";
import LeadsBySourceWidget from "@/Components/SuperAdmin/LeadsBySourceWidget";
import LeadsByStatusWidget from "@/Components/SuperAdmin/LeadsByStatusWidget";
import RecentLeadsFeed from "@/Components/SuperAdmin/RecentLeadsFeed";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Kiln Ops home — answers "how's lead flow right now?"
 * Cool zinc cockpit (not marketing paper/ember). Signature: mono counters + channel bars.
 */
export default function Dashboard({
    stats,
    bySource,
    byStatus,
    recentLeads,
    filters,
}) {
    const rootRef = useRef(null);

    useGSAP(
        () => {
            if (!rootRef.current) return;

            const cards = rootRef.current.querySelectorAll(".admin-stat-card");
            const widgets = rootRef.current.querySelectorAll(".admin-widget");
            const chips = rootRef.current.querySelectorAll(".admin-filter-chip");

            if (prefersReducedMotion()) {
                gsap.set([cards, widgets, chips], { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                cards,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.07,
                    ease: EASE.out,
                }
            );

            gsap.fromTo(
                widgets,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    delay: 0.18,
                    ease: EASE.out,
                }
            );

            gsap.fromTo(
                chips,
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.04,
                    delay: 0.35,
                    ease: EASE.soft,
                }
            );
        },
        { scope: rootRef }
    );

    return (
        <AdminLayout title="Dashboard" eyebrow="Lead desk · overview">
            <div ref={rootRef} className="mx-auto max-w-6xl">
                <header className="mb-8 max-w-2xl">
                    <h1 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-admin-ink sm:text-[2rem]">
                        Lead flow
                    </h1>
                    <p className="mt-2 text-[15px] leading-relaxed text-admin-muted">
                        Today and this week at a glance — channel mix, pipeline
                        status, and the latest briefs to work.
                    </p>
                </header>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <AdminStatCard
                        label="New today"
                        value={stats.newToday}
                        hint="Since midnight"
                        href={route("admin.leads.index", { range: "today" })}
                        tone="accent"
                    />
                    <AdminStatCard
                        label="New this week"
                        value={stats.newThisWeek}
                        hint="Calendar week"
                        href={route("admin.leads.index", { range: "week" })}
                    />
                    <AdminStatCard
                        label="Open pipeline"
                        value={stats.openPipeline}
                        hint="New · contacted · quoted"
                        href={route("admin.leads.index", {
                            pipeline: "open",
                        })}
                    />
                    <AdminStatCard
                        label="All leads"
                        value={stats.total}
                        hint="Lifetime captured"
                        href={route("admin.leads.index")}
                    />
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <LeadsBySourceWidget
                        items={bySource}
                        total={stats.total}
                    />
                    <LeadsByStatusWidget
                        items={byStatus}
                        total={stats.total}
                    />
                </div>

                <div className="mt-4">
                    <RecentLeadsFeed leads={recentLeads} />
                </div>

                <section className="admin-widget mt-4 rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6">
                    <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                        Quick filters
                    </h2>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Jump straight into the full leads list with a preset.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <Link
                                key={filter.label}
                                href={filter.href}
                                className="admin-filter-chip rounded-md border border-admin-line bg-admin-canvas px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:border-admin-accent/40 hover:bg-admin-panel-2 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.98]"
                            >
                                {filter.label}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}
