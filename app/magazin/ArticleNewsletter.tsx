export default function ArticleNewsletter() {
  return (
    <section className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-[#e7ddd1] bg-white/80 p-8 text-center shadow-[0_10px_28px_rgba(0,0,0,0.04)] md:p-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
        Stay inspired
      </p>

      <h2 className="font-serif-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-4xl">
        Receive new stories from the journal
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
        Get thoughtful editorial features, buying guides, and market insight
        from the world of luxury watches.
      </p>

      <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Your email address"
          className="h-14 flex-1 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none placeholder:text-[#8a8075]"
        />
        <button
          type="submit"
          className="h-14 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}