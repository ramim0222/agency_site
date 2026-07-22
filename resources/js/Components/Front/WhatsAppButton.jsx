import { cn } from "@/lib/utils";
import { whatsappHref } from "@/data/front/home";

/**
 * WhatsApp deep-link CTA. `variant="outline"` reads as a secondary action
 * next to a filled primary CTA; `variant="solid"` stands on its own (e.g. in
 * the footer or on dark bands where it needs full presence).
 */
export default function WhatsAppButton({
    variant = "outline",
    message,
    label = "Chat on WhatsApp",
    className,
}) {
    const base =
        "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2";

    const variants = {
        outline:
            "border border-white/20 text-white hover:border-white/40 hover:bg-white/5 focus-visible:ring-offset-front-graphite",
        outlineOnPaper:
            "border border-front-ink/15 text-front-ink hover:border-front-ink/30 hover:bg-front-ink/[0.04] focus-visible:ring-offset-front-paper",
        solid:
            "bg-[#2BA84A] text-white hover:bg-[#249240] focus-visible:ring-offset-front-graphite",
    };

    return (
        <a
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(base, variants[variant], className)}
        >
            <WhatsAppMark className="size-4" />
            {label}
        </a>
    );
}

function WhatsAppMark(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.19.28-.72.9-.88 1.09-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.13-.58.14-.14.32-.36.47-.55.16-.19.21-.32.32-.54.1-.21.05-.4-.04-.55-.09-.14-.6-1.45-.82-1.98-.22-.53-.44-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-1 1-1 2.42 0 1.43 1.05 2.8 1.2 3 .14.19 1.94 2.96 4.7 4.03 2.75 1.08 2.75.72 3.25.67.49-.05 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33ZM12.02 3C6.99 3 2.9 7.06 2.9 12.06c0 1.77.51 3.44 1.4 4.86L3 21l4.2-1.27a9.11 9.11 0 0 0 4.81 1.36h.01c5.03 0 9.12-4.06 9.12-9.06C21.14 7.06 17.05 3 12.02 3Zm0 16.5a7.4 7.4 0 0 1-3.83-1.06l-.27-.16-2.79.85.84-2.73-.18-.28a7.46 7.46 0 0 1-1.19-4.06C4.6 8 7.94 4.68 12.02 4.68c4.08 0 7.42 3.32 7.42 7.38 0 4.06-3.34 7.44-7.42 7.44Z" />
        </svg>
    );
}
