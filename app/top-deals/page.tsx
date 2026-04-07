import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WatchCard from "@/components/ui/WatchCard";
import { watches } from "@/data/watches";
import { BadgePercent, Sparkles, ShieldCheck } from "lucide-react";

export default function TopDealsPage() {
  const topDeals = watches.filter((watch) => watch.isTopDeal);

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Curated offers
          </p>

          <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3.8rem]">
            Top deals
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-8 text-[#655d56]">
            Explore selected listings that stand out for value, presentation,
            and collector appeal — a refined overview of noteworthy opportunities.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
              <BadgePercent className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
              Strong value
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#655d56]">
              Discover listings that offer an especially interesting balance of
              price, condition, and desirability.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
              Curated selection
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#655d56]">
              These pieces are highlighted not only for pricing, but also for
              their quality of presentation and collector relevance.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
              Confident browsing
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#655d56]">
              Premium presentation helps you compare opportunities with more
              clarity and confidence.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
              Best opportunities
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
              Selected watches worth a closer look
            </h2>
          </div>

          <div className="rounded-full border border-[#ddd4c8] bg-white px-4 py-2 text-sm font-medium text-[#4f4842]">
            {topDeals.length} top deals
          </div>
        </div>

        {topDeals.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {topDeals.map((watch) => (
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
                badge={watch.badge ?? "Top Deal"}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-[#e7ddd1] bg-white/75 p-10 text-center shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-semibold text-[#2f2925]">
              No top deals yet
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
              Add `isTopDeal: true` to selected watches in your data file to feature them here.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}