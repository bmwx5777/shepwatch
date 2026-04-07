"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart, MapPin } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";

type WatchCardProps = {
  slug: string;
  brand: string;
  model: string;
  description: string;
  price: string;
  image: string;
  shipping?: string;
  country?: string;
  badge?: string;
};

export default function WatchCard({
  slug,
  brand,
  model,
  description,
  price,
  image,
  shipping,
  country,
  badge,
}: WatchCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const active = isInWishlist(slug);

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#e7ddd1] bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
      <div className="relative">
        <div className="relative overflow-hidden rounded-t-[1.75rem] bg-[#f1ece4]">
          <Link href={`/watches/${slug}`} className="block">
            <div className="relative aspect-[4/4.5] overflow-hidden">
              <Image
                src={image}
                alt={`${brand} ${model}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          <button
            type="button"
            onClick={() => toggleWishlist(slug)}
            className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur-sm transition hover:scale-[1.03] ${
              active
                ? "bg-[#2f2925] text-white"
                : "bg-white/92 text-[#3f3934]"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`h-5 w-5 ${active ? "fill-current" : ""}`} />
          </button>

          {badge && (
            <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6a6158] backdrop-blur-sm">
              {badge}
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8a8075]">
              {brand}
            </p>

            <h3 className="font-serif-display mt-3 text-[1.9rem] leading-none font-semibold tracking-[-0.03em] text-[#2f2925]">
              {model}
            </h3>
          </div>

          <Link
            href={`/watches/${slug}`}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e1d8cc] bg-[#faf7f2] text-[#4a433d] transition hover:bg-[#f1ebe2]"
            aria-label={`Open ${brand} ${model}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-[0.98rem] leading-8 text-[#655d56]">
          {description}
        </p>

        <div className="mt-6 border-t border-[#eee5d8] pt-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8075]">
                Price
              </p>
              <p className="mt-2 text-[2rem] font-semibold leading-none tracking-[-0.03em] text-[#2f2925]">
                {price}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-start justify-between gap-4 text-sm text-[#6a6158]">
            <div>
              <p>{shipping ?? "+ Shipping on request"}</p>
            </div>

            <div className="flex items-center gap-1.5 whitespace-nowrap text-[#4f4842]">
              <MapPin className="h-4 w-4" />
              <span>{country ?? "EU"}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}