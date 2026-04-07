import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { magazineArticles } from "@/data/magazineArticles";

const topics = [
  "Buying Guides",
  "Collector Stories",
  "Brand Spotlights",
  "Market Insight",
  "Care & Service",
  "New Arrivals",
];

export default function MagazinPage() {
  const [featuredStory, ...articles] = magazineArticles;

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Shepards Journal
          </p>

          <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3.8rem]">
            Stories, insight, and perspectives from the world of fine watches
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-8 text-[#655d56]">
            Explore editorial features, buying guides, and thoughtful commentary
            for collectors who value clarity, taste, and timeless design.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              className="rounded-full border border-[#ddd4c8] bg-white px-4 py-2.5 text-sm font-medium text-[#4f4842] transition hover:bg-[#f6f1ea]"
            >
              {topic}
            </button>
          ))}
        </div>

        <section className="mb-14 overflow-hidden rounded-[2rem] border border-[#e7ddd1] bg-white/80 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] md:p-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Link
              href={`/magazin/${featuredStory.slug}`}
              className="group relative block overflow-hidden rounded-[1.6rem] bg-[#f1ece4]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </Link>

            <div className="flex flex-col justify-center rounded-[1.6rem] bg-[#fcfaf7] p-6 md:p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8a8075]">
                {featuredStory.category}
              </p>

              <h2 className="font-serif-display mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2f2925] md:text-[2.6rem]">
                {featuredStory.title}
              </h2>

              <p className="mt-5 text-[1rem] leading-8 text-[#655d56]">
                {featuredStory.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#655d56]">
                <span>{featuredStory.author}</span>
                <span className="h-1 w-1 rounded-full bg-[#b9ad9d]" />
                <span>{featuredStory.date}</span>
                <span className="h-1 w-1 rounded-full bg-[#b9ad9d]" />
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {featuredStory.readTime}
                </span>
              </div>

              <Link
                href={`/magazin/${featuredStory.slug}`}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-[1rem] border border-[#ddd4c8] bg-white px-5 py-3 text-sm font-medium text-[#2f2925] transition hover:bg-[#f6f1ea]"
              >
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                Latest articles
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                From the magazine
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/magazin/${article.slug}`}
                className="group overflow-hidden rounded-[1.7rem] border border-[#e7ddd1] bg-white/80 shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.05)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#f1ece4]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8a8075]">
                    {article.category}
                  </p>

                  <h3 className="font-serif-display mt-4 text-[1.9rem] leading-tight font-semibold tracking-[-0.03em] text-[#2f2925]">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-[0.98rem] leading-8 text-[#655d56]">
                    {article.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#655d56]">
                    <span>{article.author}</span>
                    <span className="h-1 w-1 rounded-full bg-[#b9ad9d]" />
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#b9ad9d]" />
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}