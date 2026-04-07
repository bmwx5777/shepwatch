"use client";

import { Search, History } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const defaultSearches = [
    "Rolex Submariner",
    "Cartier Santos",
    "Omega Speedmaster",
    "Patek Philippe Aquanaut",
];

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>(defaultSearches);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("recent-watch-searches");
        if (saved) {
            setRecentSearches(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectSearch = (value: string) => {
        setQuery(value);
        setOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!query.trim()) return;

        const updated = [
            query,
            ...recentSearches.filter((item) => item !== query),
        ].slice(0, 5);

        setRecentSearches(updated);
        localStorage.setItem("recent-watch-searches", JSON.stringify(updated));
        setOpen(false);
    };

    return (
        <div ref={wrapperRef} className="relative w-full max-w-2xl">
            <form onSubmit={handleSubmit}>
                <div className="flex h-14 items-center gap-3 rounded-full border border-black/10 bg-white px-5 shadow-sm">
                    <Search className="h-4 w-4 text-black/45" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setOpen(true)}
                        placeholder="Search through luxury watches"
                        className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/35"
                    />
                </div>
            </form>

            {open && (
                <div className="absolute left-0 right-0 top-[calc(100%+12px)] z-50 overflow-hidden rounded-[1.5rem] border border-black/5 bg-white p-3 shadow-xl">
                    <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.24em] text-black/35">
                        Recent searches
                    </p>

                    <div className="space-y-1">
                        {recentSearches.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => handleSelectSearch(item)}
                                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-black/70 transition hover:bg-[#f5f1ea] hover:text-black"
                            >
                                <History className="h-4 w-4 text-black/35" />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}