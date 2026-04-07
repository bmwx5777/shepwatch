import Link from "next/link";
import HeroSlider from "@/components/home/HeroSlider";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8a8075]">
          Luxury Watch Marketplace
        </p>

        <h1 className="font-serif-display mt-6 max-w-2xl text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-[#2f2925] md:text-6xl xl:text-[5.1rem]">
          Exceptional watches, presented with clarity and trust.
        </h1>

        <p className="mt-8 max-w-xl text-[1.06rem] leading-9 text-[#655d56]">
          Explore premium models, discover new arrivals, and shop
          modern luxury watches through a beautifully designed experience.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/watches"
            className="rounded-full bg-[#e7dbcc] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#ddd0bf]"
          >
            Buy a Watch
          </Link>

          <Link
            href="/watches"
            className="rounded-full border border-[#ddd4c8] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#4f4842] transition hover:bg-white"
          >
            Top Deals
          </Link>
        </div>

        <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-[#ddd3c7] pt-6">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">150+</p>
            <p className="mt-1 text-sm text-[#7a7168]">Curated watches</p>
          </div>

          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">24h</p>
            <p className="mt-1 text-sm text-[#7a7168]">Fast response</p>
          </div>

          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">100%</p>
            <p className="mt-1 text-sm text-[#7a7168]">Premium focus</p>
          </div>
        </div>
      </div>

      <HeroSlider />
    </section>
  );
}