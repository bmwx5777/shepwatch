import Link from "next/link";
import WatchCard from "@/components/ui/WatchCard";
import { watches } from "@/data/watches";

export default function FeaturedWatches() {
    const featuredWatches = watches.slice(0, 3);

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
                    href="/watches"
                    className="inline-flex w-fit items-center rounded-full border border-[#ddd4c8] bg-white/70 px-5 py-3 text-sm font-medium text-[#3f3934] transition hover:bg-white"
                >
                    View all watches
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {featuredWatches.map((watch, index) => (
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
        </section>
    );
}