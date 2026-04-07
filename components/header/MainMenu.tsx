"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import BuyWatchMenu from "@/components/header/BuyWatchMenu";

const menuItems = [
    { label: "Top Deals", href: "/top-deals" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Brands", href: "/brand" },
    { label: "Magazine", href: "/magazin" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

export default function MainMenu() {
    const [buyMenuOpen, setBuyMenuOpen] = useState(false);

    const toggleBuyMenu = () => {
        setBuyMenuOpen((prev) => !prev);
    };

    const closeBuyMenu = () => {
        setBuyMenuOpen(false);
    };

    return (
        <div className="relative border-t border-black/5">
            <div className="mx-auto max-w-7xl px-6">
                <nav className="flex items-center justify-center gap-9 py-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6a6158]">
                    <button
                        type="button"
                        onClick={toggleBuyMenu}
                        className={`group relative transition ${buyMenuOpen ? "text-[#2f2925]" : "hover:text-[#2f2925]"
                            }`}
                    >
                        <span className="relative inline-block pb-2 pr-5 align-middle">
                            Buy a Watch
                            <span
                                className={`absolute bottom-0 left-1/2 h-[1px] -translate-x-1/2 bg-[#2f2925] transition-all duration-300 ${buyMenuOpen ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            />
                            <ChevronDown
                                className={`absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-[58%] transition duration-200 ${buyMenuOpen ? "rotate-180 text-[#2f2925]" : ""
                                    }`}
                            />
                        </span>
                    </button>

                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeBuyMenu}
                            className="group transition hover:text-[#2f2925]"
                        >
                            <span className="relative inline-block pb-2 align-middle">
                                {item.label}
                                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[#2f2925] transition-all duration-300 group-hover:w-full" />
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            <BuyWatchMenu open={buyMenuOpen} onClose={closeBuyMenu} />
        </div>
    );
}