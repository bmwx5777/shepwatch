import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WatchCard from "@/components/ui/WatchCard";
import { createClient } from "@/lib/supabase/server";
import { mapDbWatchToCard, type DbWatch } from "@/lib/mappers/watch";

export default async function WatchesPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("watches")
    .select(`
      *,
      brands (
        name,
        slug
      )
    `)
    .order("created_at", { ascending: false });

  const watches = (data ?? []) as DbWatch[];
  const mappedWatches = watches.map(mapDbWatchToCard);

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Marketplace
          </p>

          <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3.4rem]">
            Explore luxury watches
          </h1>

          <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
            Discover curated timepieces, iconic references, and premium listings
            from the database.
          </p>
        </div>

        {error ? (
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8 text-red-700">
            Failed to load watches: {error.message}
          </div>
        ) : mappedWatches.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mappedWatches.map((watch) => (
              <WatchCard
                key={watch.slug}
                slug={watch.slug}
                brand={watch.brand}
                model={watch.model}
                description={watch.description}
                price={watch.price}
                image={watch.image}
                shipping={watch.shipping}
                country={watch.country}
                badge={watch.badge}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-[#e7ddd1] bg-white/75 p-10 text-center shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-semibold text-[#2f2925]">
              No watches in database yet
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
              Add more watches in Supabase to display them here.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}