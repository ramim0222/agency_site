import { useState } from "react";

const TYPE_HINTS = {
    note: "Internal note — next steps, pricing thoughts, objections…",
    call: "What you covered on the call and any follow-up.",
    email: "Summary of the email you sent or received.",
    whatsapp: "What you sent / their reply on WhatsApp.",
};

export default function AddActivityForm({
    types = [],
    onSubmit,
    processing = false,
    errors = {},
}) {
    const [type, setType] = useState(types[0]?.value ?? "note");
    const [body, setBody] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!body.trim() || processing) return;
                onSubmit?.(
                    { type, body: body.trim() },
                    {
                        onSuccess: () => setBody(""),
                    }
                );
            }}
            className="rounded-xl border border-admin-line bg-admin-canvas/60 p-4"
        >
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-admin-muted">
                Log activity
            </p>

            <div
                className="mt-3 flex flex-wrap gap-1.5"
                role="group"
                aria-label="Activity type"
            >
                {types.map((item) => {
                    const active = type === item.value;
                    return (
                        <button
                            key={item.value}
                            type="button"
                            disabled={processing}
                            onClick={() => setType(item.value)}
                            aria-pressed={active}
                            className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 disabled:opacity-50 ${
                                active
                                    ? "bg-admin-accent/20 text-admin-ink"
                                    : "border border-admin-line text-admin-muted hover:bg-white/[0.04] hover:text-admin-ink"
                            }`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>

            <label className="mt-3 block">
                <span className="sr-only">Activity details</span>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows={3}
                    disabled={processing}
                    placeholder={TYPE_HINTS[type] ?? "Add details…"}
                    className="w-full resize-y rounded-md border border-admin-line bg-admin-panel px-3 py-2.5 text-[14px] text-admin-ink placeholder:text-admin-muted/70 transition-colors hover:border-admin-accent/35 focus:border-admin-accent/50 focus:outline-none focus:ring-2 focus:ring-admin-accent/30 disabled:opacity-50"
                />
            </label>
            {errors.body ? (
                <p className="mt-1.5 text-[12px] text-admin-danger" role="alert">
                    {errors.body}
                </p>
            ) : null}

            <div className="mt-3 flex justify-end">
                <button
                    type="submit"
                    disabled={processing || !body.trim()}
                    className="rounded-md bg-admin-accent px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-admin-accent-ink transition-[opacity,transform] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                    {processing ? "Saving…" : "Add to timeline"}
                </button>
            </div>
        </form>
    );
}
