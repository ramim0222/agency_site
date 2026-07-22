import { useEffect, useRef, useState } from "react";
import { router } from "@inertiajs/react";
import AdminLayout from "@/Components/SuperAdmin/AdminLayout";
import AdminStatCard from "@/Components/SuperAdmin/AdminStatCard";
import CampaignPerformanceTable from "@/Components/SuperAdmin/CampaignPerformanceTable";
import DateRangePicker from "@/Components/SuperAdmin/DateRangePicker";
import LandingPagePerformanceTable from "@/Components/SuperAdmin/LandingPagePerformanceTable";
import LeadsBySourceChart from "@/Components/SuperAdmin/LeadsBySourceChart";
import SourceConversionBreakdown from "@/Components/SuperAdmin/SourceConversionBreakdown";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Kiln Ops channel desk — which campaigns actually convert.
 * Skills: frontend-design (cockpit analytics), taste-design (mono metrics),
 * gsap-react (bar + section entrances), ui-ux-pro-max (empty states, a11y bars).
 */
export default function SourcesIndex({
    range,
    summary,
    bySource = [],
    campaigns = [],
    landings = [],
    statuses = [],
}) {
    const rootRef = useRef(null);
    const [processing, setProcessing] = useState(false);
    const [draft, setDraft] = useState({
        from: range.from ?? "",
        to: range.to ?? "",
    });

    useEffect(() => {
        setDraft({
            from: range.from ?? "",
            to: range.to ?? "",
        });
    }, [range.from, range.to, range.preset]);

    useGSAP(
        () => {
            if (!rootRef.current) return;
            const blocks = rootRef.current.querySelectorAll(".sources-block");

            if (prefersReducedMotion()) {
                gsap.set(blocks, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                blocks,
                { opacity: 0, y: 14 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: EASE.out,
                }
            );
        },
        { scope: rootRef, dependencies: [range.preset, summary.total] }
    );

    function visit(query) {
        setProcessing(true);
        router.get(route("admin.sources.index"), query, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onFinish: () => setProcessing(false),
        });
    }

    return (
        <AdminLayout title="Sources" eyebrow="Lead desk · channels">
            <div ref={rootRef} className="mx-auto max-w-6xl">
                <header className="sources-block mb-6">
                    <h1 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-admin-ink sm:text-[2rem]">
                        Sources & campaigns
                    </h1>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-admin-muted">
                        Which channels and UTMs bring volume — and which ones
                        actually convert to won work.
                        {processing ? " · updating…" : ""}
                    </p>
                </header>

                <div className="sources-block">
                    <DateRangePicker
                        range={range}
                        draft={draft}
                        onDraftChange={setDraft}
                        processing={processing}
                        onPreset={(preset) => visit({ preset })}
                        onApplyCustom={() =>
                            visit({
                                from: draft.from || undefined,
                                to: draft.to || undefined,
                            })
                        }
                    />
                </div>

                <div className="sources-block mt-4 grid gap-3 sm:grid-cols-3">
                    <AdminStatCard
                        label="Leads in range"
                        value={summary.total}
                        hint={range.label}
                        href={route("admin.leads.index")}
                        tone="accent"
                    />
                    <AdminStatCard
                        label="Won"
                        value={summary.won}
                        hint={`${summary.conversionRate}% conversion`}
                        href={route("admin.leads.index", { status: "won" })}
                    />
                    <AdminStatCard
                        label="Active channels"
                        value={summary.channelsWithLeads}
                        hint="Sources with ≥1 lead"
                    />
                </div>

                <div className="sources-block mt-4 grid gap-4 lg:grid-cols-2">
                    <LeadsBySourceChart
                        items={bySource}
                        total={summary.total}
                    />
                    <SourceConversionBreakdown
                        items={bySource}
                        statuses={statuses}
                        total={summary.total}
                    />
                </div>

                <div className="sources-block mt-4">
                    <CampaignPerformanceTable campaigns={campaigns} />
                </div>

                <div className="sources-block mt-4">
                    <LandingPagePerformanceTable landings={landings} />
                </div>
            </div>
        </AdminLayout>
    );
}
