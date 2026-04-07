type AdminTopbarProps = {
  title: string;
  description: string;
};

export default function AdminTopbar({
  title,
  description,
}: AdminTopbarProps) {
  return (
    <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
      <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
        Admin area
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
        {description}
      </p>
    </div>
  );
}