import { cn } from "@/lib/utils";

/**
 * Seamless horizontal loop — two identical strips; CSS animates -50% of track width.
 * Put `gap` spacing between items inside each strip; `pr-4` on the strip matches `gap-4`.
 */
export default function Marquee({ children, className, trackClassName }) {
    return (
        <div className={cn("front-scrollbar-hide overflow-x-hidden", className)}>
            <div className={cn("flex w-max front-marquee-track", trackClassName)}>
                {[0, 1].map((strip) => (
                    <div
                        key={strip}
                        className="flex shrink-0 items-center gap-4 pr-4"
                        aria-hidden={strip === 1}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}
