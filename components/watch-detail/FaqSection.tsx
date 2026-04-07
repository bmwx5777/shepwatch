"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Is this watch authentic?",
    answer:
      "Listings are presented with detailed specifications, condition notes, and seller information to support confident buying decisions.",
  },
  {
    question: "Can I request more photos or details?",
    answer:
      "Yes. Use the inquiry button on the detail page to request more images, pricing information, or availability.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Shipping depends on the listing and seller details. The shipping section on the page helps indicate delivery expectations.",
  },
  {
    question: "Can I save this watch for later?",
    answer:
      "Yes. Use the wishlist button to save the watch and revisit it later from your wishlist page.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-[2rem] border border-[#e7ddd1] bg-white/75 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)] md:p-8">
        <div className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Questions
          </p>

          <h2 className="font-serif-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
            Do you have any questions?
          </h2>
        </div>

        <div className="divide-y divide-black/8">
          {faqItems.map((item, index) => {
            const open = openIndex === index;

            return (
              <div key={item.question} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-[1rem] font-medium text-[#2f2925]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#6a6158] transition ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <p className="mt-4 max-w-3xl text-[0.98rem] leading-8 text-[#655d56]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}