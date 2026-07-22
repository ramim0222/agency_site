import { Mail, MessageCircle } from "lucide-react";

export default function QuickContactButtons({
    mailtoHref,
    whatsappHref,
    disabled = false,
}) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-md px-3.5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] transition-[opacity,transform,background-color,border-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.98]";

    return (
        <div className="flex flex-wrap gap-2">
            <a
                href={mailtoHref || undefined}
                aria-disabled={!mailtoHref || disabled}
                tabIndex={!mailtoHref || disabled ? -1 : 0}
                className={`${base} bg-admin-accent text-admin-accent-ink hover:opacity-90 ${
                    !mailtoHref || disabled
                        ? "pointer-events-none opacity-40"
                        : ""
                }`}
            >
                <Mail className="size-3.5" strokeWidth={1.75} />
                Email
            </a>
            <a
                href={whatsappHref || undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!whatsappHref || disabled}
                tabIndex={!whatsappHref || disabled ? -1 : 0}
                className={`${base} border border-admin-line bg-admin-panel text-admin-ink hover:border-admin-accent/40 hover:bg-admin-panel-2 ${
                    !whatsappHref || disabled
                        ? "pointer-events-none opacity-40"
                        : ""
                }`}
            >
                <MessageCircle className="size-3.5" strokeWidth={1.75} />
                WhatsApp
            </a>
        </div>
    );
}
