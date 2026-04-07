import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
          Magazine
        </p>

        <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925]">
          Article not found
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
          The article you are looking for does not exist or is no longer available.
        </p>

        <Link
          href="/magazin"
          className="mt-8 inline-flex rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
        >
          Back to magazine
        </Link>
      </section>

      <Footer />
    </main>
  );
}