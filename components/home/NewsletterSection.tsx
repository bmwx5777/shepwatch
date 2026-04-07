export default function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-[2rem] border border-[#e4dad0] bg-white/75 px-8 py-12 shadow-[0_10px_28px_rgba(0,0,0,0.04)] md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Newsletter
          </p>

          <h2 className="font-serif-display mt-4 text-4xl font-semibold leading-none tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
            Get new arrivals first
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
            Join the list for new arrivals, notable finds, and curated watch
            updates.
          </p>

          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-[#ddd4c8] bg-[#f8f5f0] px-5 text-sm text-[#2f2925] outline-none placeholder:text-[#8a8075]"
            />

            <button
              type="submit"
              className="h-14 rounded-full bg-[#2f2925] px-8 text-sm font-medium text-white transition hover:opacity-90"
            >
              Join now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}