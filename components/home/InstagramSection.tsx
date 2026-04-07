import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const posts = [
    {
        image: "/images/instagram/instagram-1.webp",
        alt: "Instagram watch post 1",
    },
    {
        image: "/images/instagram/instagram-2.webp",
        alt: "Instagram watch post 2",
    },
    {
        image: "/images/instagram/instagram-3.webp",
        alt: "Instagram watch post 3",
    },
    {
        image: "/images/instagram/instagram-4.webp",
        alt: "Instagram watch post 4",
    },
];

export default function InstagramSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-28">
            <div className="mb-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
                    Social
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f4f4f] md:text-[3rem]">
                    New on Instagram
                </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {posts.map((post, index) => (
                    <Link
                        key={index}
                        href="#"
                        className="group block overflow-hidden rounded-[1.6rem] bg-[#f1ece4]"
                    >
                        <div className="relative aspect-[1/1] overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.alt}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                            />

                            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

                            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#2f4f4f] shadow-[0_8px_20px_rgba(0,0,0,0.10)] opacity-0 transition duration-300 group-hover:opacity-100">
                                <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <Link
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full border border-[#56706d] px-8 py-4 text-[1.05rem] font-medium text-[#2f4f4f] transition hover:bg-[#eef4f3]"
                >
                    Follow us on Instagram
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    );
}