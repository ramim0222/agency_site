import {
    Mail,
    MessageCircle,
    StickyNote,
    Phone,
} from "lucide-react";
import AddActivityForm from "@/Components/SuperAdmin/AddActivityForm";

const ICONS = {
    note: StickyNote,
    call: Phone,
    email: Mail,
    whatsapp: MessageCircle,
};

const TONE = {
    note: "text-admin-muted border-admin-line bg-admin-canvas",
    call: "text-sky-200 border-sky-400/30 bg-sky-400/10",
    email: "text-amber-200 border-amber-400/30 bg-amber-400/10",
    whatsapp: "text-admin-accent border-admin-accent/30 bg-admin-accent/10",
};

export default function ActivityTimeline({
    activities = [],
    types = [],
    onAdd,
    processing = false,
    errors = {},
}) {
    return (
        <section className="rounded-xl border border-admin-line bg-admin-panel p-5 sm:p-6">
            <div className="mb-4">
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-admin-ink">
                    Activity
                </h2>
                <p className="mt-1 text-[13px] text-admin-muted">
                    Notes, calls, and messages — the trail for this brief.
                </p>
            </div>

            <AddActivityForm
                types={types}
                onSubmit={onAdd}
                processing={processing}
                errors={errors}
            />

            {activities.length === 0 ? (
                <div className="mt-5 rounded-lg border border-dashed border-admin-line px-4 py-8 text-center">
                    <p className="text-[14px] text-admin-ink">No activity yet</p>
                    <p className="mt-1 text-[13px] text-admin-muted">
                        Log the first note or outreach so the next follow-up has
                        context.
                    </p>
                </div>
            ) : (
                <ol className="relative mt-6 space-y-0 border-l border-admin-line pl-5">
                    {activities.map((item) => {
                        const Icon = ICONS[item.type] ?? StickyNote;
                        return (
                            <li key={item.id} className="relative pb-6 last:pb-0">
                                <span
                                    className={`absolute -left-[1.55rem] flex size-7 items-center justify-center rounded-full border ${TONE[item.type] ?? TONE.note}`}
                                    aria-hidden="true"
                                >
                                    <Icon className="size-3.5" strokeWidth={1.75} />
                                </span>
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-admin-ink">
                                        {item.typeLabel}
                                        <span className="ml-2 text-admin-muted">
                                            · {item.author}
                                        </span>
                                    </p>
                                    <time
                                        dateTime={item.createdAt}
                                        className="font-mono text-[10px] text-admin-muted"
                                        title={item.createdAtLabel}
                                    >
                                        {item.createdAtRelative}
                                    </time>
                                </div>
                                <p className="mt-1.5 whitespace-pre-wrap text-[14px] leading-relaxed text-admin-ink/90">
                                    {item.body}
                                </p>
                            </li>
                        );
                    })}
                </ol>
            )}
        </section>
    );
}
