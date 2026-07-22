function Row({ label, value }) {
    return (
        <div className="border-b border-admin-line py-3 last:border-b-0 sm:grid sm:grid-cols-[140px_1fr] sm:gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-admin-muted">
                {label}
            </dt>
            <dd className="mt-1 whitespace-pre-wrap text-[14px] leading-relaxed text-admin-ink sm:mt-0">
                {value || "—"}
            </dd>
        </div>
    );
}

export default function LeadBriefCard({ lead }) {
    return (
        <section className="rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6">
            <div className="mb-2">
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                    Original brief
                </h2>
                <p className="mt-1 text-[13px] text-admin-muted">
                    What they submitted on the contact form.
                </p>
            </div>
            <dl>
                <Row label="Service" value={lead.service} />
                <Row label="Budget" value={lead.budgetLabel} />
                <Row label="Timeline" value={lead.timelineLabel} />
                <Row label="Message" value={lead.message} />
                {lead.referrer ? (
                    <Row label="Referrer" value={lead.referrer} />
                ) : null}
            </dl>
        </section>
    );
}
