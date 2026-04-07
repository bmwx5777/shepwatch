import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WatchCard from "@/components/ui/WatchCard";
import { watches } from "@/data/watches";

export default function WishlistPage() {
  const wishlistWatches = watches.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
            Account
          </p>

          <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
            Your wishlist
          </h1>

          <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
            Save watches you want to revisit, compare, or inquire about later.
          </p>
        </div>

        {wishlistWatches.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {wishlistWatches.map((watch) => (
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
                badge={watch.badge}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-[#e7ddd1] bg-white/75 p-10 text-center shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-semibold text-[#2f2925]">
              Your wishlist is empty
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
              Start exploring and save pieces that catch your eye.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}