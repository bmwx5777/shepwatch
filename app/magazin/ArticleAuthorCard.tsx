type ArticleAuthorCardProps = {
  author: string;
};

export default function ArticleAuthorCard({
  author,
}: ArticleAuthorCardProps) {
  const initials = author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-[#e7ddd1] bg-white/90 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
      <div className="border-b border-black/5 bg-[#fcfaf7] px-6 py-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
          Author
        </p>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ece6dc] text-base font-semibold text-[#4f4842]">
            {initials}
          </div>

          <div className="min-w-0">
            <h3 className="text-[1.9rem] leading-none font-semibold tracking-[-0.03em] text-[#2f2925]">
              {author}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#8a8075]">
              Editorial writer
            </p>
          </div>
        </div>

        <p className="mt-6 text-[1rem] leading-8 text-[#655d56]">
          Writing about collecting, presentation, and the culture of fine
          watches with a calm and refined editorial perspective.
        </p>

        <div className="mt-6 rounded-[1.1rem] border border-[#eee6db] bg-[#f8f5f0] px-4 py-4">
          <p className="text-sm leading-7 text-[#6b635b]">
            Focused on design, buying confidence, collector taste, and timeless
            watch culture.
          </p>
        </div>
      </div>
    </div>
  );
}