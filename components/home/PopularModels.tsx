import Link from "next/link";
import Image from "next/image";

const models = [
  {
    brand: "Rolex",
    model: "Datejust",
    image: "/images/models/datejust.png",
  },
  {
    brand: "Rolex",
    model: "Submariner",
    image: "/images/models/submariner.png",
  },
  {
    brand: "Rolex",
    model: "Daytona",
    image: "/images/models/daytona.png",
  },
  {
    brand: "Omega",
    model: "Speedmaster",
    image: "/images/models/speedmaster.png",
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak",
    image: "/images/models/royal-oak.png",
  },
  {
    brand: "Rolex",
    model: "Day-Date",
    image: "/images/models/day-date.png",
  },
  {
    brand: "Rolex",
    model: "GMT-Master II",
    image: "/images/models/gmt-master.png",
  },
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    image: "/images/models/nautilus.png",
  },
];

export default function PopularModels() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Models
          </p>

          <h2 className="font-serif-display mt-4 text-4xl font-semibold leading-none tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
            Our most popular models
          </h2>

          <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
            Explore iconic references and timeless collector favorites from the
            world’s most desired watchmakers.
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex w-fit items-center rounded-full border border-[#d8cec0] bg-white px-6 py-3 text-sm font-medium text-[#2f2925] transition hover:bg-[#f6f1ea]"
        >
          View all models
        </Link>
      </div>

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {models.map((item) => (
          <Link key={item.model} href="#" className="group block">
            <article>
              <div className="relative overflow-hidden rounded-[1.6rem] bg-[#efebe4] transition duration-300 group-hover:bg-[#ebe5dc]">
                <div className="relative aspect-[4/4.5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.brand} ${item.model}`}
                    fill
                    className="object-contain p-8 transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[0.95rem] leading-6 text-[#7a7168]">
                  {item.brand}
                </p>

                <h3 className="font-serif-display mt-1 text-[1.9rem] font-semibold leading-none tracking-[-0.03em] text-[#2f2925] transition group-hover:text-black">
                  {item.model}
                </h3>

                <div className="mt-4 h-px w-12 bg-[#d8cec0] transition duration-300 group-hover:w-20" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}