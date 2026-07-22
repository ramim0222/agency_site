import { useEffect, useRef, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import ActivityTimeline from "@/Components/SuperAdmin/ActivityTimeline";
import AdminLayout from "@/Components/SuperAdmin/AdminLayout";
import LeadBriefCard from "@/Components/SuperAdmin/LeadBriefCard";
import LeadHeader from "@/Components/SuperAdmin/LeadHeader";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion";

/**
 * Kiln Ops lead detail — pick up the conversation with full context.
 * Skills: frontend-design (dense cockpit brief), taste-design (mono meta),
 * gsap-react (section entrance), ui-ux-pro-max (empty timeline, confirm delete).
 */
export default function LeadShow({ lead, activities = [], activityTypes = [] }) {
    const { flash, errors } = usePage().props;
    const rootRef = useRef(null);
    const [processing, setProcessing] = useState(false);
    const [notice, setNotice] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    useEffect(() => {
        if (flash?.success) setNotice(flash.success);
    }, [flash]);

    useGSAP(
        () => {
            if (!rootRef.current) return;
            const blocks = rootRef.current.querySelectorAll(".lead-detail-block");

            if (prefersReducedMotion()) {
                gsap.set(blocks, { opacity: 1, y: 0 });
                return;
            }

            gsap.fromTo(
                blocks,
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.09,
                    ease: EASE.out,
                }
            );
        },
        { scope: rootRef, dependencies: [lead.id] }
    );

    function updateStatus(status) {
        if (status === lead.status) return;
        setProcessing(true);
        router.patch(
            route("admin.leads.status", lead.id),
            { status },
            {
                preserveScroll: true,
                onFinish: () => setProcessing(false),
            }
        );
    }

    function addActivity(payload, { onSuccess } = {}) {
        setProcessing(true);
        router.post(route("admin.leads.activities.store", lead.id), payload, {
            preserveScroll: true,
            onSuccess: () => onSuccess?.(),
            onFinish: () => setProcessing(false),
        });
    }

    function archiveLead() {
        setProcessing(true);
        router.patch(route("admin.leads.archive", lead.id), {}, {
            onFinish: () => setProcessing(false),
        });
    }

    function restoreLead() {
        setProcessing(true);
        router.patch(route("admin.leads.restore", lead.id), {}, {
            preserveScroll: true,
            onFinish: () => setProcessing(false),
        });
    }

    function deleteLead() {
        setProcessing(true);
        router.delete(route("admin.leads.destroy", lead.id), {
            onFinish: () => setProcessing(false),
        });
    }

    return (
        <AdminLayout title={lead.name} eyebrow="Lead desk · detail">
            <div ref={rootRef} className="mx-auto max-w-3xl space-y-4">
                {notice ? (
                    <div
                        className="lead-detail-block flex items-center justify-between gap-3 rounded-lg border border-admin-accent/30 bg-admin-accent/10 px-4 py-2.5 text-[13px] text-admin-ink"
                        role="status"
                    >
                        <span>{notice}</span>
                        <button
                            type="button"
                            onClick={() => setNotice(null)}
                            className="font-mono text-[10px] uppercase tracking-[0.1em] text-admin-muted hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                        >
                            Dismiss
                        </button>
                    </div>
                ) : null}

                <div className="lead-detail-block">
                    <LeadHeader
                        lead={lead}
                        processing={processing}
                        onStatusChange={updateStatus}
                    />
                </div>

                <div className="lead-detail-block">
                    <LeadBriefCard lead={lead} />
                </div>

                <div className="lead-detail-block">
                    <ActivityTimeline
                        activities={activities}
                        types={activityTypes}
                        onAdd={addActivity}
                        processing={processing}
                        errors={errors}
                    />
                </div>

                <section className="lead-detail-block rounded-xl border border-admin-danger/25 bg-admin-panel p-5 sm:p-6">
                    <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                        Danger zone
                    </h2>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Archive hides this lead from the desk. Delete removes it
                        permanently.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {lead.archived ? (
                            <button
                                type="button"
                                disabled={processing}
                                onClick={restoreLead}
                                className="rounded-md border border-admin-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-ink transition-colors hover:border-admin-accent/40 hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                            >
                                Restore lead
                            </button>
                        ) : (
                            <button
                                type="button"
                                disabled={processing}
                                onClick={archiveLead}
                                className="rounded-md border border-admin-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:border-admin-accent/40 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                            >
                                Archive lead
                            </button>
                        )}

                        {!confirmDelete ? (
                            <button
                                type="button"
                                disabled={processing}
                                onClick={() => setConfirmDelete(true)}
                                className="rounded-md border border-admin-danger/40 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-danger transition-colors hover:bg-admin-danger/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-danger/40 disabled:opacity-50"
                            >
                                Delete lead
                            </button>
                        ) : (
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-[13px] text-admin-danger">
                                    Delete permanently?
                                </p>
                                <button
                                    type="button"
                                    disabled={processing}
                                    onClick={deleteLead}
                                    className="rounded-md bg-admin-danger px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-admin-accent-ink transition-[opacity,transform] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-danger/40 active:scale-[0.98] disabled:opacity-50"
                                >
                                    {processing ? "Deleting…" : "Confirm delete"}
                                </button>
                                <button
                                    type="button"
                                    disabled={processing}
                                    onClick={() => setConfirmDelete(false)}
                                    className="rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-muted transition-colors hover:bg-white/5 hover:text-admin-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}
