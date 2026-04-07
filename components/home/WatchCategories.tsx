import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Men's Watches",
    image: "/images/categories/mens-watches.jpg",
  },
  {
    title: "Pre-Owned Watches",
    image: "/images/categories/pre-owned-watches.jpg",
  },
  {
    title: "Pocket Watches",
    image: "/images/categories/pocket-watches.jpg",
  },
  {
    title: "Women's Watches",
    image: "/images/categories/womens-watches.jpg",
  },
  {
    title: "Automatic Watches",
    image: "/images/categories/automatic-watches.jpg",
  },
  {
    title: "Skeleton Watches",
    image: "/images/categories/skeleton-watches.jpg",
  },
  {
    title: "Gold Watches",
    image: "/images/categories/gold-watches.jpg",
  },
  {
    title: "Moon Phase Watches",
    image: "/images/categories/moonphase-watches.jpg",
  },
];

export default function WatchCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Categories
          </p>

          <h2 className="font-serif-display mt-4 text-4xl font-semibold leading-none tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
            Explore by category
          </h2>

          <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
            Discover watches by style, function, and collector interest.
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex w-fit items-center rounded-full border border-[#d8cec0] bg-white px-6 py-3 text-sm font-medium text-[#2f2925] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
        >
          Display all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.title} href="#" className="group block">
            <article className="relative overflow-hidden rounded-[1.8rem] bg-[#f1ece4]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#3f3934] shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition duration-300 group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/70">
                    Watch Category
                  </p>

                  <h3 className="mt-3 text-[1.35rem] font-medium leading-7 text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}