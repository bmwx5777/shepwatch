import Link from "next/link";
import Image from "next/image";
import { Clock3 } from "lucide-react";

const articles = [
    {
        category: "Watch Market",
        title: "The Top 5 Most Popular Manual-Winding Vintage Chronographs",
        image: "/images/journal/vintage-chronographs.jpeg",
        author: "Sebastian Swart",
        time: "5 minutes",
    },
    {
        category: "Watch Guides",
        title: "5 Affordable Rolex “Pepsi” Alternatives",
        image: "/images/journal/pepsi-alternatives.jpg",
        author: "Donato Emilio Andrioli",
        time: "6 minutes",
    },
];

export default function JournalSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-28">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
                        Editorial
                    </p>

                    <h2 className="font-serif-display mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
                        From the Journal
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
                        News, stories, and perspectives from the world of fine watches.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {articles.map((article) => (
                        <Link key={article.title} href="#" className="group block">
                            <article className="overflow-hidden rounded-[1.8rem] border border-[#e7ddd1] bg-white/70 shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(0,0,0,0.06)]">
                                <div className="relative aspect-[16/9] overflow-hidden bg-[#f1ece4]">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="flex min-h-[200px] flex-col p-6">
                                    <div className="flex-1">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#8a8075]">
                                            {article.category}
                                        </p>

                                        <h3 className="font-serif-display mt-4 text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-[#2f2925]">
                                            {article.title}
                                        </h3>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between gap-4 text-sm text-[#6a6158]">
                                        <p>
                                            By <span className="font-medium text-[#2f2925]">{article.author}</span>
                                        </p>

                                        <div className="flex items-center gap-2">
                                            <Clock3 className="h-4 w-4" />
                                            <span>{article.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        href="#"
                        className="inline-flex items-center rounded-[1rem] border border-[#d8cec0] bg-white px-8 py-3 text-sm font-medium text-[#2f2925] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
                    >
                        Go to journal
                    </Link>
                </div>
            </div>
        </section>
    );
}