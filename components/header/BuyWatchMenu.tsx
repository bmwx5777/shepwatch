"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type BuyWatchMenuProps = {
  open: boolean;
  onClose: () => void;
};

const brandsColumnOne = [
  "Rolex",
  "Patek Philippe",
  "Breitling",
  "Cartier",
  "IWC",
  "Jaeger-LeCoultre",
  "Hublot",
  "Vacheron Constantin",
  "A. Lange & Söhne",
  "Breguet",
  "Hamilton",
  "Oris",
];

const brandsColumnTwo = [
  "Omega",
  "Audemars Piguet",
  "Tudor",
  "Panerai",
  "Seiko",
  "TAG Heuer",
  "Zenith",
  "Longines",
  "Richard Mille",
  "Ulysse Nardin",
  "NOMOS",
  "Sinn",
];

const categories = [
  "Men’s Watches / Women’s Watches",
  "Pre-Owned Watches",
  "Mechanical Watches / Automatic Watches",
  "Vintage Watches",
  "Chronographs",
  "Diving Watches",
  "Pilot’s Watches",
  "Military Watches",
  "Swiss Watches",
  "Affordable Watches",
  "Bracelets and Straps / Parts and Accessories",
];

const services = [
  "Watch Collection",
  "Appraisal",
  "Advanced Search",
];

export default function BuyWatchMenu({ open, onClose }: BuyWatchMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-50 border-t border-black/5 bg-[#f8f5f0]/80 px-6 pb-8 pt-4 backdrop-blur-sm">
      <div
        ref={panelRef}
        className="mx-auto max-w-7xl rounded-[2rem] border border-[#e8e0d5] bg-white/92 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md"
      >
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">
              Brands
            </h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                {brandsColumnOne.map((brand) => (
                  <Link
                    key={brand}
                    href="/watches"
                    onClick={onClose}
                    className="block text-[15px] text-[#4c4540] transition hover:text-black"
                  >
                    {brand}
                  </Link>
                ))}

                <Link
                  href="/watches"
                  onClick={onClose}
                  className="inline-block pt-3 text-[15px] font-medium text-[#2f2925] underline underline-offset-4"
                >
                  Display all
                </Link>
              </div>

              <div className="space-y-3">
                {brandsColumnTwo.map((brand) => (
                  <Link
                    key={brand}
                    href="/watches"
                    onClick={onClose}
                    className="block text-[15px] text-[#4c4540] transition hover:text-black"
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">
              Categories
            </h3>

            <div className="mt-6 space-y-4">
              {categories.map((item) => (
                <Link
                  key={item}
                  href="/watches"
                  onClick={onClose}
                  className="block text-[15px] text-[#4c4540] transition hover:text-black"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/watches"
                onClick={onClose}
                className="inline-block pt-2 text-[15px] font-medium text-[#2f2925] underline underline-offset-4"
              >
                Display all
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">
              Services
            </h3>

            <div className="mt-6 space-y-4">
              {services.map((item) => (
                <Link
                  key={item}
                  href="/watches"
                  onClick={onClose}
                  className="block text-[15px] text-[#4c4540] transition hover:text-black"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#eee5d8] bg-[#f7f2eb] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7a7168]">
                Curated selection
              </p>
              <p className="mt-3 text-sm leading-7 text-[#4f4843]">
                Explore premium brands, iconic models, and collector-focused categories in a cleaner way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}