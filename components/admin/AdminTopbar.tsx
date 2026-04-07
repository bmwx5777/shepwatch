type AdminTopbarProps = {
  title: string;
  description: string;
};

export default function AdminTopbar({
  title,
  description,
}: AdminTopbarProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#e7ddd1] bg-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="border-b border-black/5 bg-[#fcfaf7] px-7 py-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
          Admin area
        </p>
      </div>

      <div className="px-7 py-7">
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[#2f2925] md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-[1rem] leading-8 text-[#655d56]">
          {description}
        </p>
      </div>
    </div>
  );
}