import { Link } from "@inertiajs/react";

export default function AdminStatCard({
    label,
    value,
    hint,
    href,
    tone = "default",
}) {
    const valueClass =
        tone === "accent"
            ? "text-admin-accent"
            : tone === "warn"
              ? "text-admin-danger"
              : "text-admin-ink";

    const body = (
        <>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-admin-muted">
                {label}
            </p>
            <p
                className={`mt-3 font-mono text-[2.25rem] font-semibold leading-none tracking-[-0.03em] tabular-nums ${valueClass}`}
            >
                {value}
            </p>
            {hint ? (
                <p className="mt-2 text-[13px] leading-snug text-admin-muted">
                    {hint}
                </p>
            ) : null}
        </>
    );

    const className =
        "admin-stat-card block rounded-xl border border-admin-line bg-admin-panel p-5 transition-[border-color,background-color,transform] duration-200";

    if (href) {
        return (
            <Link
                href={href}
                className={`${className} hover:border-admin-accent/35 hover:bg-admin-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-accent/45 active:scale-[0.99]`}
            >
                {body}
            </Link>
        );
    }

    return <div className={className}>{body}</div>;
}
