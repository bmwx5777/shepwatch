"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";

type DetailWishlistButtonProps = {
  slug: string;
};

export default function DetailWishlistButton({
  slug,
}: DetailWishlistButtonProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const active = isInWishlist(slug);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(slug)}
      className={`flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition ${
        active
          ? "border-[#2f2925] bg-[#2f2925] text-white"
          : "border-[#ddd4c8] bg-white text-[#4f4842] hover:bg-[#f6f1ea]"
      }`}
      aria-label="Add to wishlist"
    >
      <Heart className={`h-5 w-5 ${active ? "fill-current" : ""}`} />
    </button>
  );
}