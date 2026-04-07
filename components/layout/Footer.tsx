import Link from "next/link";
import { Mail, MapPin, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5dbd0] bg-[#f6f2eb]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex w-fit flex-col leading-none">
              <span className="font-serif-display text-[2rem] font-semibold tracking-[-0.04em] text-[#2f2925]">
                Shepards
              </span>
              <span className="mt-1 pl-[2px] text-[10px] uppercase tracking-[0.34em] text-[#7a7168]">
                Fine Watches
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[1rem] leading-8 text-[#655d56]">
              A refined destination for luxury watches, curated for collectors
              who value clarity, presentation, and timeless design.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[#655d56]">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#7a7168]" />
                <span>contact@shepards.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#7a7168]" />
                <span>Based in Europe</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f2925]">
              Shop
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-[0.98rem] text-[#655d56]">
              <Link href="/watches" className="transition hover:text-[#2f2925]">
                All Watches
              </Link>
              <Link href="/watches" className="transition hover:text-[#2f2925]">
                New Arrivals
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                Popular Models
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                Categories
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f2925]">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-[0.98rem] text-[#655d56]">
              <Link href="#" className="transition hover:text-[#2f2925]">
                About
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                Journal
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                Contact
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f2925]">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-[0.98rem] text-[#655d56]">
              <Link href="#" className="transition hover:text-[#2f2925]">
                Privacy Policy
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                Terms & Conditions
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                Shipping
              </Link>
              <Link href="#" className="transition hover:text-[#2f2925]">
                Returns
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#e5dbd0] pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-[#7a7168]">
              © 2026 Shepards. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] transition hover:bg-[#efe8de]"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}