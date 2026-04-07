import { Star } from "lucide-react";

const reviews = [
  {
    initials: "BW",
    name: "Benjamin W.",
    rating: "1.0",
    location: "DE",
    date: "October 29, 2024",
    comment:
      "Order was accepted quickly, but the communication afterwards was disappointing and unclear.",
    response:
      "We regret the experience and appreciate the feedback. We always aim to improve communication and clarity.",
  },
  {
    initials: "GF",
    name: "Göran F.",
    rating: "5.0",
    location: "SE",
    date: "October 24, 2025",
    comment:
      "Smooth deal and quick delivery. The watch matched the listing and the communication was excellent.",
    response:
      "Thank you for your positive feedback. Enjoy your new watch and wear it in good health.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
          Reviews
        </p>

        <h2 className="font-serif-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
          Buyer reviews
        </h2>
      </div>

      <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)] md:p-8">
        <div className="grid gap-8 border-b border-black/5 pb-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 fill-current text-[#1e2d4a]" />
              <span className="text-3xl font-semibold tracking-[-0.03em] text-[#2f2925]">
                4.9
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-[#655d56]">
              Based on verified buyer experiences and seller communication.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { stars: "5 stars", value: "92%" },
              { stars: "4 stars", value: "6%" },
              { stars: "3 stars", value: "1%" },
              { stars: "2 stars", value: "1%" },
              { stars: "1 star", value: "<1%" },
            ].map((item, index) => (
              <div key={item.stars} className="grid grid-cols-[70px_1fr_50px] items-center gap-4">
                <span className="text-sm text-[#655d56]">{item.stars}</span>
                <div className="h-2 rounded-full bg-[#ece6dc]">
                  <div
                    className="h-2 rounded-full bg-[#1e2d4a]"
                    style={{
                      width:
                        index === 0
                          ? "92%"
                          : index === 1
                          ? "6%"
                          : index === 2
                          ? "1%"
                          : index === 3
                          ? "1%"
                          : "1%",
                    }}
                  />
                </div>
                <span className="text-sm text-[#655d56]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.date}`} className="border-b border-black/5 pb-8 last:border-b-0 last:pb-0">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ece6dc] text-sm font-semibold text-[#4f4842]">
                  {review.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-medium text-[#2f2925]">{review.name}</p>
                    <p className="text-sm text-[#655d56]">
                      {review.location}, {review.date}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-[#2f2925]">
                    <Star className="h-4 w-4 fill-current text-[#1e2d4a]" />
                    <span>{review.rating}</span>
                  </div>

                  <p className="mt-4 text-[0.98rem] leading-8 text-[#655d56]">
                    {review.comment}
                  </p>

                  <div className="mt-5 rounded-[1.1rem] bg-[#fcfaf7] p-4">
                    <p className="text-sm font-medium text-[#2f2925]">
                      Seller response
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#655d56]">
                      {review.response}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}