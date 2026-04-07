"use client";

import Link from "next/link";
import { Heart, UserRound } from "lucide-react";
import SearchBar from "@/components/header/SearchBar";
import MainMenu from "@/components/header/MainMenu";
import { useWishlist } from "@/hooks/useWishlist";

export default function Header() {
  const { wishlistCount } = useWishlist();

  return (
    <header className="border-b border-black/5 bg-[#f8f5f0]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 py-5 lg:grid-cols-[220px_1fr_auto] lg:items-center">
          <Link href="/" className="flex w-fit flex-col leading-none">
            <span className="font-serif-display text-[2rem] font-semibold tracking-[-0.04em] text-[#2f2925]">
              Shepards
            </span>
            <span className="mt-1 pl-[2px] text-[10px] uppercase tracking-[0.34em] text-[#7a7168]">
              Fine Watches
            </span>
          </Link>

          <div className="lg:px-6">
            <SearchBar />
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/wishlist"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dfd3] bg-white text-[#3f3934] shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:bg-[#f4efe8]"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />

              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#d9d2c8] px-1 text-[10px] font-medium text-[#2f2925]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/login"
              className="hidden rounded-2xl border border-[#e7dfd3] bg-white px-4 py-2.5 text-sm font-medium text-[#4c4540] shadow-[0_4px_14px_rgba(0,0,0,0.03)] transition hover:bg-[#f7f3ed] md:inline-flex"
            >
              <UserRound className="mr-2 h-4 w-4" />
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-2xl border border-[#ddd6cb] bg-[#f3efe9] px-5 py-2.5 text-sm font-medium text-[#322c27] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#ece6de]"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>

      <MainMenu />
    </header>
  );
}