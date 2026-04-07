type DetailInfoSectionProps = {
  watch: {
    brand: string;
    model: string;
    year: string;
    referenceNumber: string;
    movement: string;
    caseMaterial: string;
    diameter: string;
    condition: string;
    scope: string;
    location: string;
    description: string;
  };
};

export default function DetailInfoSection({ watch }: DetailInfoSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8">
        <h2 className="font-serif-display text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
          Detailed information about this {watch.brand} {watch.model}
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-[#e7ddd1] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
          <h3 className="text-lg font-semibold text-[#2f2925]">Basic information</h3>

          <div className="mt-6 divide-y divide-black/5">
            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Brand</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.brand}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Model</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.model}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Reference number</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.referenceNumber}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Movement</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.movement}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Case material</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.caseMaterial}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Diameter</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.diameter}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Year of production</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.year}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Condition</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.condition}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Scope of delivery</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.scope}</span>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="text-sm text-black/50">Location</span>
              <span className="text-sm font-medium text-[#2f2925]">{watch.location}</span>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#e7ddd1] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
          <h3 className="text-lg font-semibold text-[#2f2925]">Description</h3>

          <div className="mt-6 space-y-5 text-[1rem] leading-8 text-[#655d56]">
            <p>{watch.description}</p>
            <p>
              This listing is presented with a premium layout and clear product
              information, helping collectors and buyers review the watch with confidence.
            </p>
            <p>
              For more details, availability, or additional photos, please use the inquiry
              options on this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}