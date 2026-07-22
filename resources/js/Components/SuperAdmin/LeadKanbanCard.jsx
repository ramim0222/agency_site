import { Link } from "@inertiajs/react";
import SourceBadge from "@/Components/SuperAdmin/SourceBadge";

export default function LeadKanbanCard({
    lead,
    onDragStart,
    onDragEnd,
    dragging = false,
}) {
    return (
        <article
            draggable
            onDragStart={(e) => onDragStart?.(e, lead)}
            onDragEnd={onDragEnd}
            className={`group cursor-grab rounded-lg border border-admin-line bg-admin-canvas p-3 active:cursor-grabbing transition-[opacity,transform,border-color] duration-150 ${
                dragging
                    ? "opacity-40 scale-[0.98]"
                    : "hover:border-admin-accent/35"
            }`}
        >
            <div className="flex items-start justify-between gap-2">
                <Link
                    href={route("admin.leads.show", lead.id)}
                    className="min-w-0 rounded text-[13px] font-medium text-admin-ink transition-colors hover:text-admin-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="block truncate">{lead.name}</span>
                </Link>
                <span className="shrink-0 font-mono text-[10px] text-admin-muted">
                    {lead.createdAtShort}
                </span>
            </div>
            <p className="mt-1 truncate text-[12px] text-admin-muted">
                {lead.service}
            </p>
            <div className="mt-2.5 flex items-center justify-between gap-2">
                <SourceBadge source={lead.source} label={lead.sourceLabel} />
                <span className="truncate font-mono text-[10px] text-admin-muted/80">
                    {lead.email}
                </span>
            </div>
        </article>
    );
}
