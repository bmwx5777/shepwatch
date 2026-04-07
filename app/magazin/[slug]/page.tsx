import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { Clock3, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { magazineArticles } from "@/data/magazineArticles";
import ArticleShareBar from "@/app/magazin/ArticleShareBar";
import ArticleAuthorCard from "@/app/magazin/ArticleAuthorCard";
import ArticleNewsletter from "@/app/magazin/ArticleNewsletter";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MagazineArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = magazineArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = magazineArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <article className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/magazin"
          className="inline-flex items-center gap-2 text-sm text-[#655d56] transition hover:text-[#2f2925]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to magazine
        </Link>

        <div className="mt-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a8075]">
            {article.category}
          </p>

          <h1 className="font-serif-display mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#2f2925] md:text-[4rem]">
            {article.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[1.05rem] leading-8 text-[#655d56]">
            {article.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[#655d56]">
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

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#e7ddd1] bg-white/80 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] bg-[#f1ece4]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="rounded-[2rem] border border-[#e7ddd1] bg-white/70 px-6 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.03)] md:px-10 md:py-10">
            <div className="space-y-6 text-[1.05rem] leading-9 text-[#4f4842]">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <ArticleShareBar title={article.title} />
            <ArticleAuthorCard author={article.author} />
          </aside>
        </div>

        <ArticleNewsletter />
      </article>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
            Continue reading
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
            Related articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedArticles.map((related) => (
            <Link
              key={related.slug}
              href={`/magazin/${related.slug}`}
              className="group overflow-hidden rounded-[1.7rem] border border-[#e7ddd1] bg-white/80 shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#f1ece4]">
                <Image
                  src={related.image}
                  alt={related.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8a8075]">
                  {related.category}
                </p>

                <h3 className="font-serif-display mt-4 text-[1.8rem] leading-tight font-semibold tracking-[-0.03em] text-[#2f2925]">
                  {related.title}
                </h3>

                <p className="mt-4 text-[0.98rem] leading-8 text-[#655d56]">
                  {related.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}