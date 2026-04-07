import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WatchCard from "@/components/ui/WatchCard";
import { watches } from "@/data/watches";
import { Sparkles, Clock3 } from "lucide-react";

export default function NewArrivalsPage() {
  const newArrivals = watches.filter((watch) => watch.isNew);

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Latest listings
          </p>

          <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3.8rem]">
            New arrivals
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-8 text-[#655d56]">
            Discover the latest watches added to the collection — fresh listings,
            refined presentation, and new pieces worth a closer look.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
              Freshly listed
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#655d56]">
              Explore the newest pieces added to the platform with a cleaner and
              more curated overview.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
              <Clock3 className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
              Updated regularly
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#655d56]">
              A dedicated place for collectors who want to keep up with the
              latest additions and newly available listings.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
              Curated presentation
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#655d56]">
              New arrivals are shown with the same premium visual language as the
              rest of the marketplace.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
              Recently added
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
              The latest watches on Shepards
            </h2>
          </div>

          <div className="rounded-full border border-[#ddd4c8] bg-white px-4 py-2 text-sm font-medium text-[#4f4842]">
            {newArrivals.length} new listings
          </div>
        </div>

        {newArrivals.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {newArrivals.map((watch) => (
              <WatchCard
                key={watch.slug}
                slug={watch.slug}
                brand={watch.brand}
                model={watch.model}
                description={watch.shortDescription}
                price={watch.price}
                image={watch.image}
                shipping={watch.shipping}
                country={watch.country}
                badge={watch.badge ?? "New"}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-[#e7ddd1] bg-white/75 p-10 text-center shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-semibold text-[#2f2925]">
              No new arrivals yet
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
              Add `isNew: true` to watches in your data file to feature them here.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}