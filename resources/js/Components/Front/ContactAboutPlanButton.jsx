import { Link } from "@inertiajs/react";
import { contactHrefForPlan } from "@/data/front/saas";
import { cn } from "@/lib/utils";

/**
 * Routes to /contact?product=&plan= — no live checkout.
 */
export default function ContactAboutPlanButton({
    productSlug,
    planKey,
    label = "Contact us about this plan",
    className,
    variant = "primary",
}) {
    const href = contactHrefForPlan(productSlug, planKey);

    const styles = {
        primary:
            "bg-front-ember text-front-ember-ink hover:bg-front-ember-soft focus-visible:ring-offset-front-graphite",
        secondary:
            "border border-white/20 text-white hover:border-white/40 hover:bg-white/5 focus-visible:ring-offset-front-graphite",
    };

    return (
        <Link
            href={href}
            className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/60 focus-visible:ring-offset-2",
                styles[variant],
                className
            )}
        >
            {label}
        </Link>
    );
}
