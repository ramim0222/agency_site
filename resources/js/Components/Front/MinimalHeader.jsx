import { brand } from "@/data/front/home";

/**
 * Ad landing header — logo only, no nav exit paths.
 */
export default function MinimalHeader() {
    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div
                className="absolute inset-0 border-b border-white/8 bg-front-graphite/90 backdrop-blur-md"
                aria-hidden="true"
            />
            <div className="front-container relative flex items-center py-4">
                <div className="flex items-center gap-2.5" aria-label={brand.fullName}>
                    <span className="flex size-7 items-center justify-center rounded-[6px] bg-front-ember text-[13px] font-semibold text-front-ember-ink">
                        K
                    </span>
                    <span className="font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-white">
                        {brand.name}
                    </span>
                </div>
            </div>
        </header>
    );
}
