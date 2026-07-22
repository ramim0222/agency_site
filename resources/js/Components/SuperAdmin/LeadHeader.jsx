import { Link } from "@inertiajs/react";
import SourceBadge from "@/Components/SuperAdmin/SourceBadge";
import StatusChanger from "@/Components/SuperAdmin/StatusChanger";
import QuickContactButtons from "@/Components/SuperAdmin/QuickContactButtons";

export default function LeadHeader({
    lead,
    onStatusChange,
    processing = false,
}) {
    const utmBits = [
        lead.utmSource && `src ${lead.utmSource}`,
        lead.utmMedium && `med ${lead.utmMedium}`,
        lead.utmCampaign && `cmp ${lead.utmCampaign}`,
    ].filter(Boolean);

    return (
        <header className="rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                            Lead #{lead.id}
                        </p>
                        {lead.archived ? (
                            <span className="rounded border border-admin-danger/30 bg-admin-danger/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-admin-danger">
                                Archived
                            </span>
                        ) : null}
                    </div>
                    <h1 className="mt-2 text-[1.75rem] font-semibold tracking-[-0.03em] text-admin-ink sm:text-[2rem]">
                        {lead.name}
                    </h1>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-admin-muted">
                        <a
                            href={`mailto:${lead.email}`}
                            className="transition-colors hover:text-admin-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                        >
                            {lead.email}
                        </a>
                        <span aria-hidden="true" className="text-admin-line">
                            ·
                        </span>
                        <a
                            href={lead.whatsappHref || `tel:${lead.phone}`}
                            className="transition-colors hover:text-admin-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                        >
                            {lead.phone}
                        </a>
                    </div>
                </div>

                <Link
                    href={route("admin.leads.index")}
                    className="rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-accent transition-colors hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                >
                    ← All leads
                </Link>
            </div>

            <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-admin-line pt-5">
                <div className="flex flex-wrap items-center gap-3">
                    <SourceBadge
                        source={lead.source}
                        label={lead.sourceLabel}
                    />
                    <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-admin-muted">
                            Campaign / UTM
                        </p>
                        <p className="mt-1 max-w-[42ch] text-[13px] text-admin-ink">
                            {utmBits.length > 0
                                ? utmBits.join(" · ")
                                : "No campaign tags"}
                            {lead.landingPage ? (
                                <span className="text-admin-muted">
                                    {" "}
                                    · {lead.landingPage}
                                </span>
                            ) : null}
                        </p>
                        <p className="mt-1 font-mono text-[11px] text-admin-muted">
                            Captured {lead.createdAtLabel}
                        </p>
                    </div>
                </div>

                <StatusChanger
                    value={lead.status}
                    options={lead.statuses}
                    disabled={processing || lead.archived}
                    onChange={onStatusChange}
                />
            </div>

            <div className="mt-5">
                <QuickContactButtons
                    mailtoHref={lead.mailtoHref}
                    whatsappHref={lead.whatsappHref}
                    disabled={lead.archived}
                />
            </div>
        </header>
    );
}
