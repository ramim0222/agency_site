import { Search, X } from "lucide-react";

export default function SearchBar({
    value = "",
    onChange,
    placeholder = "Search…",
    disabled = false,
}) {
    return (
        <label className="relative block w-full max-w-md">
            <span className="sr-only">Search</span>
            <Search
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-front-steel-dim"
                strokeWidth={1.75}
                aria-hidden="true"
            />
            <input
                type="search"
                value={value}
                disabled={disabled}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border border-white/12 bg-front-panel py-3 pl-10 pr-10 text-[14px] text-white placeholder:text-front-steel-dim transition-colors hover:border-white/20 focus:border-front-ember/45 focus:outline-none focus:ring-2 focus:ring-front-ember/30 disabled:cursor-not-allowed disabled:opacity-50"
            />
            {value ? (
                <button
                    type="button"
                    onClick={() => onChange?.("")}
                    disabled={disabled}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-front-steel transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-front-ember/55 disabled:opacity-50"
                >
                    <X className="size-3.5" strokeWidth={1.75} />
                </button>
            ) : null}
        </label>
    );
}
