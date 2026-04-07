"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { watches } from "@/data/watches";
import { useWishlist } from "@/hooks/useWishlist";

type RecommendationsSectionProps = {
  currentSlug: string;
};

export default function RecommendationsSection({
  currentSlug,
}: RecommendationsSectionProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [page, setPage] = useState(0);

  const itemsPerPage = 4;

  const recommended = useMemo(
    () => watches.filter((item) => item.slug !== currentSlug).slice(0, 8),
    [currentSlug]
  );

  const totalPages = Math.ceil(recommended.length / itemsPerPage);

  const visibleWatches = recommended.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const goPrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Curated picks
          </p>

          <h2 className="font-serif-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
            Our recommendations for you
          </h2>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
            aria-label="Previous recommendations"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
            aria-label="Next recommendations"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {visibleWatches.map((watch) => {
          const active = isInWishlist(watch.slug);

          return (
            <article key={watch.slug} className="group">
              <div className="relative overflow-hidden rounded-[1.4rem] bg-[#f1ece4]">
                <Link href={`/watches/${watch.slug}`} className="block">
                  <div className="relative aspect-[4/4.25] overflow-hidden">
                    <Image
                      src={watch.image}
                      alt={`${watch.brand} ${watch.model}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => toggleWishlist(watch.slug)}
                  className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition ${
                    active
                      ? "bg-[#2f2925] text-white"
                      : "bg-white/92 text-[#3f3934]"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart className={`h-4 w-4 ${active ? "fill-current" : ""}`} />
                </button>

                {watch.badge && (
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#6a6158]">
                    {watch.badge}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Link href={`/watches/${watch.slug}`} className="block">
                  <h3 className="text-[1rem] font-medium leading-6 text-[#2f2925]">
                    {watch.brand} {watch.model}
                  </h3>
                </Link>

                <p className="mt-1 text-sm leading-6 text-[#655d56] line-clamp-2">
                  {watch.shortDescription}
                </p>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[1.2rem] font-semibold leading-none tracking-[-0.03em] text-[#2f2925]">
                      {watch.price}
                    </p>
                    <p className="mt-2 text-sm text-[#6b635b]">
                      {watch.shipping ?? "+ Shipping on request"}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 pt-1 text-sm text-[#4f4842]">
                    <MapPin className="h-4 w-4" />
                    <span>{watch.country ?? "EU"}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2.5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              className={`rounded-full transition-all duration-300 ${
                page === index
                  ? "h-2.5 w-10 bg-[#3d352f]"
                  : "h-2.5 w-2.5 bg-[#cdc3b7] hover:bg-[#aa9d8d]"
              }`}
              aria-label={`Go to recommendation page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}