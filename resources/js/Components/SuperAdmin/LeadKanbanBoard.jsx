import { useState } from "react";
import LeadKanbanCard from "@/Components/SuperAdmin/LeadKanbanCard";

const COLUMNS = [
    { key: "new", label: "New" },
    { key: "contacted", label: "Contacted" },
    { key: "quoted", label: "Quoted" },
    { key: "won", label: "Won" },
    { key: "lost", label: "Lost" },
];

export default function LeadKanbanBoard({
    leads,
    onStatusDrop,
    processing = false,
}) {
    const [dragId, setDragId] = useState(null);
    const [overColumn, setOverColumn] = useState(null);

    const byStatus = COLUMNS.reduce((acc, col) => {
        acc[col.key] = leads.filter((lead) => lead.status === col.key);
        return acc;
    }, {});

    if (leads.length === 0) {
        return (
            <div className="rounded-xl border border-dashed border-admin-line bg-admin-panel px-5 py-14 text-center">
                <p className="text-[15px] text-admin-ink">Board is empty</p>
                <p className="mt-1 text-[13px] text-admin-muted">
                    Matching leads will appear as cards you can drag across statuses.
                </p>
            </div>
        );
    }

    return (
        <div className="flex gap-3 overflow-x-auto pb-2">
            {COLUMNS.map((col) => {
                const cards = byStatus[col.key] ?? [];
                const isOver = overColumn === col.key;

                return (
                    <section
                        key={col.key}
                        className={`flex w-[240px] shrink-0 flex-col rounded-xl border bg-admin-panel transition-colors ${
                            isOver
                                ? "border-admin-accent/50 bg-admin-accent/[0.06]"
                                : "border-admin-line"
                        }`}
                        onDragOver={(e) => {
                            e.preventDefault();
                            if (!processing) setOverColumn(col.key);
                        }}
                        onDragLeave={() => {
                            setOverColumn((current) =>
                                current === col.key ? null : current
                            );
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            setOverColumn(null);
                            const id = Number(
                                e.dataTransfer.getData("text/lead-id")
                            );
                            if (!id || processing) return;
                            const lead = leads.find((item) => item.id === id);
                            if (!lead || lead.status === col.key) {
                                setDragId(null);
                                return;
                            }
                            onStatusDrop?.(id, col.key);
                            setDragId(null);
                        }}
                        aria-label={`${col.label} column`}
                    >
                        <header className="flex items-center justify-between border-b border-admin-line px-3 py-2.5">
                            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-admin-ink">
                                {col.label}
                            </h3>
                            <span className="font-mono text-[11px] tabular-nums text-admin-muted">
                                {cards.length}
                            </span>
                        </header>
                        <div className="flex flex-1 flex-col gap-2 p-2.5 min-h-[140px]">
                            {cards.map((lead) => (
                                <LeadKanbanCard
                                    key={lead.id}
                                    lead={lead}
                                    dragging={dragId === lead.id}
                                    onDragStart={(e, item) => {
                                        if (processing) {
                                            e.preventDefault();
                                            return;
                                        }
                                        e.dataTransfer.setData(
                                            "text/lead-id",
                                            String(item.id)
                                        );
                                        e.dataTransfer.effectAllowed = "move";
                                        setDragId(item.id);
                                    }}
                                    onDragEnd={() => {
                                        setDragId(null);
                                        setOverColumn(null);
                                    }}
                                />
                            ))}
                            {cards.length === 0 ? (
                                <p className="px-1 py-6 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-admin-muted/70">
                                    Drop here
                                </p>
                            ) : null}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
