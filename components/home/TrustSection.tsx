import { ShieldCheck, Gem, MessagesSquare } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted presentation",
    text: "Every watch is presented with clarity, accurate details, and a refined buying experience.",
  },
  {
    icon: Gem,
    title: "Curated selection",
    text: "We focus on standout pieces, collector favorites, and timeless references worth discovering.",
  },
  {
    icon: MessagesSquare,
    title: "Personal support",
    text: "Questions, sourcing requests, and purchase inquiries are handled with a fast and personal approach.",
  },
];

export default function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
          Why Shepards
        </p>

        <h2 className="font-serif-display mt-4 text-4xl font-semibold leading-none tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
          A more refined way to buy watches
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
          Built around curation, trust, and a modern presentation for collectors
          who value detail.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[1.8rem] border border-[#e7ddd1] bg-white/70 p-7 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eee7] text-[#4f4842]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-[1.25rem] font-medium leading-7 text-[#2f2925]">
                {item.title}
              </h3>

              <p className="mt-3 text-[0.98rem] leading-8 text-[#655d56]">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}