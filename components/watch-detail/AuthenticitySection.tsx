import { ShieldCheck, BadgeDollarSign, Headphones } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Guaranteed presentation",
    text: "Each listing is shown with clear details, condition notes, and essential watch information.",
  },
  {
    icon: BadgeDollarSign,
    title: "Buyer-first experience",
    text: "Inquiries, pricing requests, and communication are designed to feel simple, direct, and transparent.",
  },
  {
    icon: Headphones,
    title: "Support when needed",
    text: "If you have any questions about a watch, you can reach out and receive personal assistance.",
  },
];

export default function AuthenticitySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8">
        <h2 className="font-serif-display text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
          Our commitment to trust
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#e7ddd1] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eee7] text-[#4f4842]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#2f2925]">
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