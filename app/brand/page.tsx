import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const featuredBrands = [
    {
        name: "Rolex",
        image: "/images/brands/rolex.png",
        slug: "rolex",
    },
    {
        name: "IWC",
        image: "/images/brands/iwc.png",
        slug: "iwc",
    },
    {
        name: "Hublot",
        image: "/images/brands/hublot.png",
        slug: "hublot",
    },
    {
        name: "TAG Heuer",
        image: "/images/brands/tag-heuer.png",
        slug: "tag-heuer",
    },
    {
        name: "Zenith",
        image: "/images/brands/zenith.png",
        slug: "zenith",
    },
    {
        name: "Omega",
        image: "/images/brands/omega.png",
        slug: "omega",
    },
    {
        name: "Breitling",
        image: "/images/brands/breitling.png",
        slug: "breitling",
    },
    {
        name: "Panerai",
        image: "/images/brands/panerai.png",
        slug: "panerai",
    },
    {
        name: "Cartier",
        image: "/images/brands/cartier.png",
        slug: "cartier",
    },
    {
        name: "Patek Philippe",
        image: "/images/brands/patek-philippe.png",
        slug: "patek-philippe",
    },
];

const groupedBrands: Record<string, string[]> = {
    A: [
        "A. Lange & Söhne",
        "Accutron",
        "Aero Watch",
        "Aigner",
        "Alpina",
        "Apple",
        "Armin Strom",
        "Audemars Piguet",
        "Azimuth",
    ],
    B: [
        "Baume & Mercier",
        "Bell & Ross",
        "Blancpain",
        "Breguet",
        "Breitling",
        "Bremont",
        "Bulgari",
        "Burberry",
    ],
    C: [
        "Cartier",
        "Casio",
        "Certina",
        "Chanel",
        "Chopard",
        "Chronoswiss",
        "Citizen",
        "Corum",
        "Czapek",
    ],
    D: [
        "Damasko",
        "Davosa",
        "De Bethune",
        "De Grisogono",
        "Doxa",
        "Dubey & Schaldenbrand",
    ],
    H: [
        "Hamilton",
        "Hermès",
        "Hublot",
        "HYT",
    ],
    I: [
        "IWC",
        "Ikepod",
    ],
    J: [
        "Jaeger-LeCoultre",
        "Junghans",
    ],
    L: [
        "Longines",
        "Louis Erard",
    ],
    O: [
        "Omega",
        "Oris",
    ],
    P: [
        "Panerai",
        "Patek Philippe",
        "Piaget",
        "Porsche Design",
    ],
    R: [
        "Rolex",
        "Rado",
        "Ressence",
        "Roger Dubuis",
    ],
    T: [
        "TAG Heuer",
        "Tissot",
        "Tudor",
    ],
    U: [
        "Ulysse Nardin",
        "Union Glashütte",
    ],
    V: [
        "Vacheron Constantin",
        "Vintage VDB",
    ],
    Z: [
        "Zenith",
    ],
};

export default function BrandPage() {
    return (
        <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
            <Header />

            <section className="mx-auto max-w-7xl px-6 py-10">
                <div className="mb-10">
                    <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
                        Brand directory
                    </p>

                    <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3.4rem]">
                        Watch brands & manufacturers
                    </h1>

                    <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
                        Explore renowned watchmakers, collector favorites, and timeless maisons
                        from the world of fine watchmaking.
                    </p>
                </div>

                <div className="mb-14 overflow-hidden rounded-[2rem] border border-[#e7ddd1] bg-white/80 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a8075]">
                                Featured brands
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                                The most sought-after names
                            </h2>
                        </div>

                        <Link
                            href="/watches"
                            className="hidden items-center gap-2 text-sm font-medium text-[#4c4540] md:inline-flex"
                        >
                            Browse watches
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {featuredBrands.map((brand) => (
                            <Link
                                key={brand.slug}
                                href={`/brand/${brand.slug}`}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#ece3d8] bg-[#fcfaf7] p-3 transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)]"
                            >
                                <div className="relative aspect-[1/0.78] overflow-hidden rounded-[1.2rem] bg-[#f1ece4]">
                                    <Image
                                        src={brand.image}
                                        alt={brand.name}
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-[1.04]"
                                    />
                                </div>

                                <div className="mt-4 flex items-center justify-between gap-3 px-1 pb-1">
                                    <h3 className="text-[1.15rem] font-medium tracking-[-0.02em] text-[#2f2925]">
                                        {brand.name}
                                    </h3>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2d8cc] bg-white text-[#4f4842] transition group-hover:bg-[#f6f1ea]">
                                        <ChevronRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    {Object.entries(groupedBrands).map(([letter, brands]) => (
                        <section
                            key={letter}
                            className="rounded-[1.8rem] border border-[#e7ddd1] bg-white/70 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
                        >
                            <div className="mb-5 rounded-[1rem] bg-[#f3eee7] px-5 py-3">
                                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2f2925]">
                                    {letter}
                                </h2>
                            </div>

                            <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {brands.map((brand) => (
                                    <Link
                                        key={brand}
                                        href={`/brand/${toSlug(brand)}`}
                                        className="group inline-flex items-center gap-3 text-[1rem] leading-8 text-[#4f4842] transition hover:text-[#2f2925]"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#cfc3b3] opacity-0 transition duration-300 group-hover:opacity-100" />
                                        <span className="transition duration-300 group-hover:translate-x-1">
                                            {brand}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

function toSlug(value: string) {
    return value
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/\./g, "")
        .replace(/\s+/g, "-")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ä/g, "ae")
        .replace(/ß/g, "ss");
}