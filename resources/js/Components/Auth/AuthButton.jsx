import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Primary action for the admin auth shell — teal accent, loading spinner,
 * tactile press. Distinct from Front marketing CTAs.
 */
export default function AuthButton({
    type = "button",
    children,
    loading = false,
    disabled = false,
    className,
    ...props
}) {
    const isDisabled = disabled || loading;

    return (
        <button
            type={type}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-admin-accent px-4 py-3 text-[14px] font-semibold text-admin-accent-ink transition-all duration-200",
                "hover:brightness-110 active:translate-y-px",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-admin-panel",
                "disabled:pointer-events-none disabled:opacity-55",
                className
            )}
            {...props}
        >
            {loading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            {children}
        </button>
    );
}
