import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import Reveal from "@/Components/Front/Reveal";

function XIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={className}
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
    );
}

function LinkedInIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={className}
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

/**
 * Share actions for the current article URL (ui-ux-pro-max: feedback on copy).
 */
export default function SocialShareButtons({ title, url }) {
    const [copied, setCopied] = useState(false);
    const shareUrl =
        url ||
        (typeof window !== "undefined" ? window.location.href : "");

    if (!shareUrl) {
        return (
            <p className="text-[13px] text-front-steel-dim" role="status">
                Share links unavailable.
            </p>
        );
    }

    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title ?? "");

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    const btnClass =
        "inline-flex items-center gap-2 rounded-lg border border-white/12 bg-front-panel px-3.5 py-2.5 text-[13px] font-medium text-front-steel transition-colors hover:border-white/22 hover:bg-front-panel-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50";

    return (
        <Reveal>
            <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-front-ember-soft">
                    Share
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnClass}
                    >
                        <XIcon className="size-3.5" />
                        Post on X
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnClass}
                    >
                        <LinkedInIcon className="size-3.5" />
                        LinkedIn
                    </a>
                    <button
                        type="button"
                        onClick={copyLink}
                        className={btnClass}
                        aria-live="polite"
                    >
                        {copied ? (
                            <Check className="size-3.5 text-front-ember-soft" />
                        ) : (
                            <Link2 className="size-3.5" strokeWidth={1.75} />
                        )}
                        {copied ? "Copied" : "Copy link"}
                    </button>
                </div>
            </div>
        </Reveal>
    );
}
