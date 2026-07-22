import { Link } from "@inertiajs/react";
import {
    ArrowUpRight,
    Globe,
    LayoutDashboard,
    Repeat,
    Smartphone,
} from "lucide-react";

const ICONS = {
    Globe,
    LayoutDashboard,
    Smartphone,
    Repeat,
};

export default function ServiceCard({ service, className, index = 0 }) {
    const Icon = ICONS[service.icon] ?? Globe;

    return (
        <Link
            href={service.href}
            data-reveal
            className={
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-front-ink/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-front-ink/20 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/50 " +
                (className ?? "")
            }
        >
            <div>
                <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-front-ink text-front-paper transition-colors duration-300 group-hover:bg-front-ember group-hover:text-front-ember-ink">
                        <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-[11px] tabular-nums text-front-slate/60">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.01em] text-front-ink">
                    {service.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-front-slate">
                    {service.description}
                </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-1.5">
                {service.stack.map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-front-ink/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.04em] text-front-slate"
                    >
                        {item}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-1.5 text-[13px] font-semibold text-front-ink">
                View service
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
        </Link>
    );
}
