import { ShieldCheck, Clock3, BadgeCheck, PackageCheck, MapPin } from "lucide-react";

const sellerBadges = [
  {
    icon: ShieldCheck,
    title: "Trusted seller",
    text: "Verified presentation and reliable communication.",
  },
  {
    icon: Clock3,
    title: "Response time",
    text: "Replies quickly to new inquiries.",
  },
  {
    icon: BadgeCheck,
    title: "Punctuality",
    text: "Consistent and well-presented listings.",
  },
  {
    icon: PackageCheck,
    title: "Sales",
    text: "Strong track record across listed watches.",
  },
];

export default function SellerSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
          Seller
        </p>

        <h2 className="font-serif-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
          Seller profile
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
          <div className="flex h-16 w-28 items-center justify-center rounded-[1rem] border border-[#ddd4c8] bg-[#f8f5f0] text-sm font-medium tracking-[0.18em] text-[#6d645c]">
            SHEPWATCH
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
            Shepwatch GmbH
          </h3>

          <p className="mt-2 text-sm leading-7 text-[#655d56]">
            Professional seller on the marketplace since 2021.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-[#655d56]">
            <MapPin className="h-4 w-4 text-[#7a7168]" />
            <span>Berlin, Germany</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-[1rem] border border-[#e7ddd1] bg-[#fcfaf7] p-4 text-center">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">
                544
              </p>
              <p className="mt-1 text-sm text-[#6d645c]">watches sold</p>
            </div>

            <div className="rounded-[1rem] border border-[#e7ddd1] bg-[#fcfaf7] p-4 text-center">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">
                112
              </p>
              <p className="mt-1 text-sm text-[#6d645c]">active listings</p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
          <h3 className="text-lg font-semibold text-[#2f2925]">Seller highlights</h3>
          <p className="mt-2 text-sm leading-7 text-[#655d56]">
            Based on seller presentation and recent activity.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sellerBadges.map((badge) => {
              const Icon = badge.icon;

              return (
                <div
                  key={badge.title}
                  className="rounded-[1.2rem] border border-[#ece3d8] bg-[#fcfaf7] p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5b534d]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#2f2925]">
                        {badge.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-[#655d56]">
                        {badge.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}