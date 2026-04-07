"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
    {
        image: "/images/watches/hero.jpg",
        title: "Rolex Yacht-Master 42",
        subtitle: "White Gold • 2023 • Unworn • Full Set",
        price: "€32,800",
        href: "/watches/rolex-datejust-41",
    },
    {
        image: "/images/watches/hublot.jpg",
        title: "Omega Speedmaster",
        subtitle: "Chronograph • 2022 • Box & Papers",
        price: "€8,700",
        href: "/watches/omega-speedmaster-moonwatch",
    },
    {
        image: "/images/watches/cartier-santos.jpg",
        title: "Cartier Santos Large",
        subtitle: "Steel • 2021 • Elegant Daily Wear",
        price: "€6,400",
        href: "/watches/cartier-santos-large",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const activeSlide = slides[current];

    return (
        <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[#e9decd] blur-3xl lg:block" />
            <div className="absolute -right-8 bottom-10 hidden h-32 w-32 rounded-full bg-[#efe7dc] blur-3xl lg:block" />

            <div className="overflow-hidden rounded-[2.25rem] bg-white p-3 shadow-sm ring-1 ring-black/5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-[#f1ebe2]">
                    <Image
                        src={activeSlide.image}
                        alt={activeSlide.title}
                        fill
                        className="object-cover transition duration-500"
                        priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                        <div className="rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6a6158] backdrop-blur-sm">
                            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={prevSlide}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-[#2f2925] shadow-sm backdrop-blur-sm transition hover:bg-white"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            <button
                                type="button"
                                onClick={nextSlide}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-[#2f2925] shadow-sm backdrop-blur-sm transition hover:bg-white"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 max-w-[420px] rounded-[1.85rem] border border-white/60 bg-white/82 p-6 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8b8278]">
                                Featured Watch
                            </p>

                            <span className="rounded-full bg-[#f3eee7] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6d645c]">
                                Curated Pick
                            </span>
                        </div>

                        <h3 className="font-serif-display mt-4 text-[2.15rem] leading-none font-semibold tracking-[-0.04em] text-[#2f2925]">
                            {activeSlide.title}
                        </h3>

                        <p className="mt-3 text-[15px] leading-7 text-[#655d56]">
                            {activeSlide.subtitle}
                        </p>

                        <div className="mt-6 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-[12px] uppercase tracking-[0.22em] text-[#8b8278]">
                                    Price
                                </p>
                                <p className="mt-2 text-[2.05rem] font-semibold leading-none tracking-[-0.03em] text-[#2f2925]">
                                    {activeSlide.price}
                                </p>
                            </div>

                            <Link
                                href={activeSlide.href}
                                className="inline-flex items-center rounded-[1.1rem] border border-[#e7dfd4] bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#2f2925] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#eee7dd]"
                            >
                                View Watch
                            </Link>
                        </div>

                        <div className="mt-6 flex items-center gap-2.5">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrent(index)}
                                    className={`rounded-full transition-all duration-300 ${current === index
                                            ? "h-2.5 w-9 bg-[#4a413b]"
                                            : "h-2.5 w-2.5 bg-[#cfc5b8] hover:bg-[#a79a8b]"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}