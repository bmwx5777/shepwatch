import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { watches } from "@/data/watches";
import Link from "next/link";
import WatchCard from "@/components/ui/WatchCard";
import Gallery from "@/components/watch-detail/Gallery";
import { ShieldCheck, Truck, MapPin, Clock3 } from "lucide-react";
import InquiryModal from "@/components/watch-detail/InquiryModal";
import DetailWishlistButton from "@/components/watch-detail/DetailWishlistButton";
import ShareButton from "@/components/watch-detail/ShareButton";
import DetailInfoSection from "@/components/watch-detail/DetailInfoSection";
import AuthenticitySection from "@/components/watch-detail/AuthenticitySection";
import FaqSection from "@/components/watch-detail/FaqSection";
import SellerSection from "@/components/watch-detail/SellerSection";
import ReviewsSection from "@/components/watch-detail/ReviewsSection";
import RecommendationsSection from "@/components/watch-detail/RecommendationsSection";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function WatchDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const watch = watches.find((item) => item.slug === slug);

    if (!watch) {
        return (
            <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
                <Header />
                <section className="mx-auto max-w-7xl px-6 py-20">
                    <h1 className="text-3xl font-semibold">Watch not found</h1>
                    <p className="mt-4 text-black/60">
                        The watch you are looking for does not exist.
                    </p>
                    <Link
                        href="/watches"
                        className="mt-8 inline-flex rounded-full bg-[#2f2925] px-6 py-3 text-sm font-medium text-white"
                    >
                        Back to watches
                    </Link>
                </section>
                <Footer />
            </main>
        );
    }

    const similarWatches = watches
        .filter((item) => item.slug !== watch.slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
            <Header />

            <section className="mx-auto max-w-7xl px-6 py-10">
                <Link
                    href="/watches"
                    className="text-sm text-black/55 transition hover:text-black"
                >
                    ← Back to watches
                </Link>

                <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
                    <Gallery
                        images={watch.gallery}
                        alt={`${watch.brand} ${watch.model}`}
                    />

                    <div>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a8075]">
                                    {watch.brand}
                                </p>

                                <h1 className="font-serif-display mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-5xl">
                                    {watch.model}
                                </h1>
                            </div>

                            <div className="flex items-center gap-3">
                                <ShareButton title={`${watch.brand} ${watch.model}`} />
                                <DetailWishlistButton slug={watch.slug} />
                            </div>
                        </div>

                        <div className="mt-6 rounded-[1.8rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
                            <div className="flex flex-wrap items-end justify-between gap-6">
                                <div>
                                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8075]">
                                        Price
                                    </p>
                                    <p className="mt-2 text-[2.35rem] font-semibold leading-none tracking-[-0.03em] text-[#2f2925]">
                                        {watch.price}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <button className="rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]">
                                        Buy now
                                    </button>

                                    <InquiryModal
                                        watchName={`${watch.brand} ${watch.model}`}
                                        isLoggedIn={false}
                                    />
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                <div className="flex items-center gap-3 rounded-[1rem] bg-[#f8f5f0] px-4 py-3 text-sm text-[#5d5550]">
                                    <ShieldCheck className="h-4 w-4 text-[#7a7168]" />
                                    <span>Verified seller</span>
                                </div>

                                <div className="flex items-center gap-3 rounded-[1rem] bg-[#f8f5f0] px-4 py-3 text-sm text-[#5d5550]">
                                    <Truck className="h-4 w-4 text-[#7a7168]" />
                                    <span>{watch.shipping ?? "Shipping on request"}</span>
                                </div>

                                <div className="flex items-center gap-3 rounded-[1rem] bg-[#f8f5f0] px-4 py-3 text-sm text-[#5d5550]">
                                    <MapPin className="h-4 w-4 text-[#7a7168]" />
                                    <span>{watch.location}</span>
                                </div>
                            </div>
                        </div>

                        <p className="mt-8 max-w-xl text-base leading-8 text-black/60">
                            {watch.description}
                        </p>


                        <div className="mt-8">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#8a8075]">
                                    Key details
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="group rounded-[1.6rem] border border-[#e7ddd1] bg-white p-5 shadow-[0_8px_22px_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#6e655c]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M9 12l2 2 4-4" />
                                                <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-sm text-black/45">Condition</p>
                                            <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                                                {watch.condition}
                                            </p>
                                            <p className="mt-1 text-sm text-[#6d645c]">
                                                Carefully presented condition
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group rounded-[1.6rem] border border-[#e7ddd1] bg-white p-5 shadow-[0_8px_22px_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#6e655c]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M8 2v4" />
                                                <path d="M16 2v4" />
                                                <rect x="3" y="6" width="18" height="15" rx="2" />
                                                <path d="M3 10h18" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-sm text-black/45">Year</p>
                                            <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                                                {watch.year}
                                            </p>
                                            <p className="mt-1 text-sm text-[#6d645c]">
                                                Year of production
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group rounded-[1.6rem] border border-[#e7ddd1] bg-white p-5 shadow-[0_8px_22px_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#6e655c]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 12V8a2 2 0 0 0-2-2h-4" />
                                                <path d="M4 12v4a2 2 0 0 0 2 2h4" />
                                                <path d="M14 2l-4 4 4 4" />
                                                <path d="M10 22l4-4-4-4" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-sm text-black/45">Scope of delivery</p>
                                            <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                                                {watch.scope}
                                            </p>
                                            <p className="mt-1 text-sm text-[#6d645c]">
                                                Included with the watch
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group rounded-[1.6rem] border border-[#e7ddd1] bg-white p-5 shadow-[0_8px_22px_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#6e655c]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
                                                <circle cx="12" cy="10" r="2.5" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-sm text-black/45">Location</p>
                                            <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                                                {watch.location}
                                            </p>
                                            <p className="mt-1 text-sm text-[#6d645c]">
                                                Seller location
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-8 rounded-[1.75rem] border border-[#e7ddd1] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-[#2f2925]">
                                        Seller information
                                    </h2>
                                    <p className="mt-3 text-sm leading-7 text-black/60">
                                        SHEPWATCH Verified Seller
                                        <br />
                                        Premium support and clear communication throughout the buying
                                        process.
                                    </p>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eee7] text-[#4f4842]">
                                    <Clock3 className="h-5 w-5" />
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-[1rem] bg-[#f8f5f0] px-4 py-3 text-sm text-[#5d5550]">
                                    Fast response time
                                </div>
                                <div className="rounded-[1rem] bg-[#f8f5f0] px-4 py-3 text-sm text-[#5d5550]">
                                    Secure presentation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DetailInfoSection watch={watch} />
            <RecommendationsSection currentSlug={watch.slug} />
            <AuthenticitySection />
            <SellerSection />
            <ReviewsSection />
            <section className="mx-auto max-w-7xl px-6 pb-24">
                <div className="mb-8">
                    <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                        More to explore
                    </p>
                    <h2 className="font-serif-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925]">
                        Similar watches
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {similarWatches.map((item) => (
                        <WatchCard
                            key={item.slug}
                            slug={item.slug}
                            brand={item.brand}
                            model={item.model}
                            description={item.shortDescription}
                            price={item.price}
                            image={item.image}
                            shipping={item.shipping}
                            country={item.country}
                            badge={item.badge}
                        />
                    ))}
                </div>
            </section>
            <FaqSection />
            <Footer />
        </main>
    );
}