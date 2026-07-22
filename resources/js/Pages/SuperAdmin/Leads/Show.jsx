import { Link } from "@inertiajs/react";
import AdminLayout from "@/Components/SuperAdmin/AdminLayout";

function Field({ label, value }) {
    return (
        <div className="border-b border-admin-line py-3 last:border-b-0 sm:grid sm:grid-cols-[140px_1fr] sm:gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-admin-muted">
                {label}
            </dt>
            <dd className="mt-1 text-[14px] text-admin-ink sm:mt-0">
                {value || "—"}
            </dd>
        </div>
    );
}

export default function LeadShow({ lead }) {
    return (
        <AdminLayout title={lead.name} eyebrow="Lead desk · detail">
            <div className="mx-auto max-w-3xl">
                <header className="mb-6 flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                            Lead #{lead.id}
                        </p>
                        <h1 className="mt-1 text-[1.75rem] font-semibold tracking-[-0.03em] text-admin-ink">
                            {lead.name}
                        </h1>
                        <p className="mt-2 text-[14px] text-admin-muted">
                            {lead.statusLabel} · {lead.sourceLabel} ·{" "}
                            {lead.createdAtLabel}
                        </p>
                    </div>
                    <Link
                        href={route("admin.leads.index")}
                        className="rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-admin-accent transition-colors hover:bg-admin-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                    >
                        ← All leads
                    </Link>
                </header>

                <div className="rounded-xl border border-admin-line bg-admin-panel px-5 py-2 sm:px-6">
                    <dl>
                        <Field label="Email" value={lead.email} />
                        <Field label="Phone" value={lead.phone} />
                        <Field label="Service" value={lead.service} />
                        <Field label="Budget" value={lead.budget} />
                        <Field label="Timeline" value={lead.timeline} />
                        <Field label="Message" value={lead.message} />
                        <Field label="UTM source" value={lead.utmSource} />
                        <Field label="UTM medium" value={lead.utmMedium} />
                        <Field label="Campaign" value={lead.utmCampaign} />
                        <Field label="Referrer" value={lead.referrer} />
                        <Field label="Landing" value={lead.landingPage} />
                    </dl>
                </div>
            </div>
        </AdminLayout>
    );
}
