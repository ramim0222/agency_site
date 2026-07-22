import { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const AuthInput = forwardRef(function AuthInput(
    {
        id,
        label,
        type = "text",
        error,
        className,
        inputClassName,
        isFocused = false,
        hint,
        disabled = false,
        ...props
    },
    forwardedRef
) {
    const localRef = useRef(null);
    const ref = forwardedRef ?? localRef;

    useEffect(() => {
        if (isFocused) {
            ref.current?.focus();
        }
    }, [isFocused, ref]);

    return (
        <div className={cn("w-full", className)}>
            {label && (
                <label
                    htmlFor={id}
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-admin-muted"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                ref={ref}
                disabled={disabled}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
                className={cn(
                    "w-full rounded-lg border bg-admin-canvas px-3.5 py-2.5 text-[15px] text-admin-ink outline-none transition-colors",
                    "placeholder:text-admin-muted/55",
                    "border-admin-line hover:border-admin-ink/25",
                    "focus:border-admin-accent/60 focus-visible:ring-2 focus-visible:ring-admin-accent/35",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    error && "border-admin-danger/70 focus:border-admin-danger focus-visible:ring-admin-danger/30",
                    inputClassName
                )}
                {...props}
            />
            {hint && !error && (
                <p id={`${id}-hint`} className="mt-1.5 text-[12.5px] text-admin-muted">
                    {hint}
                </p>
            )}
            {error && (
                <p id={`${id}-error`} className="mt-1.5 text-[13px] text-admin-danger" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
});

export default AuthInput;
