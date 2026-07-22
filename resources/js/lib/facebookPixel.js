/**
 * Thin wrapper around the Meta (Facebook) Pixel.
 * Safe no-ops when the pixel isn't loaded (local/dev without an ID).
 */

export function trackFacebookLead(payload = {}) {
    if (typeof window === "undefined") return false;
    if (typeof window.fbq !== "function") return false;

    window.fbq("track", "Lead", payload);
    return true;
}
