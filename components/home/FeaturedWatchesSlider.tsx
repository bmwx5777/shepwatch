"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import { watches } from "@/data/watches";

export default function FeaturedWatchesSlider() {
  const [page, setPage] = useState(0);

  const itemsPerPage = 4;

  const featuredWatches = useMemo(() => watches.slice(0, 10), []);
  const totalPages = Math.ceil(featuredWatches.length / itemsPerPage);

  const visibleWatches = featuredWatches.slice(
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
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Collection
          </p>

          <h2 className="font-serif-display mt-4 text-4xl font-semibold leading-none tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
            Featured watches
          </h2>

          <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
            Discover selected luxury models with refined presentation and a
            cleaner browsing experience for modern collectors.
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex w-fit items-center rounded-full border border-[#d8cec0] bg-white px-6 py-3 text-sm font-medium text-[#2f2925] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
        >
          View all watches
        </Link>
      </div>

      <div className="relative">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleWatches.map((watch) => (
            <article
              key={watch.slug}
              className="group overflow-hidden rounded-[1.75rem] bg-transparent transition duration-300"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f1ece4]">
                <Link href={`/watches/${watch.slug}`} className="block">
                  <div className="relative aspect-[4/4.5] overflow-hidden">
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
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-[#3f3934] shadow-[0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur-sm transition hover:scale-[1.03]"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="px-1 pt-5">
                <Link href={`/watches/${watch.slug}`} className="block">
                  <h3 className="text-[1.05rem] font-medium leading-6 text-[#2f2925]">
                    {watch.brand} {watch.model}
                  </h3>
                </Link>

                <p className="mt-1 text-[0.95rem] leading-6 text-[#5f5750] line-clamp-2">
                  {watch.shortDescription}
                </p>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[1.45rem] font-semibold leading-none tracking-[-0.03em] text-[#2f2925]">
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

                {watch.badge && (
                  <div className="mt-4 inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#6e655c] ring-1 ring-[#e7ddd1]">
                    {watch.badge}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute -left-4 top-[34%] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd4c8] bg-white/90 text-[#3f3934] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:bg-white xl:flex"
          aria-label="Previous watches"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute -right-4 top-[34%] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd4c8] bg-white/90 text-[#3f3934] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:bg-white xl:flex"
          aria-label="Next watches"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2.5">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setPage(index)}
            className={`rounded-full transition-all duration-300 ${page === index
                ? "h-2.5 w-10 bg-[#3d352f]"
                : "h-2.5 w-2.5 bg-[#cdc3b7] hover:bg-[#aa9d8d]"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}