"use client";

import { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ChevronDown,
  Search,
  ShieldCheck,
  BookOpen,
  MessageCircleMore,
} from "lucide-react";

const faqSections = [
  {
    id: "searching",
    title: "Searching for watches",
    subtitle: "Find the right watch faster",
    items: [
      {
        question: "How do I search for a watch?",
        answer:
          "Use the search bar and quick filters to browse by brand, model, price, and condition. You can also explore categories and featured collections to narrow your search more easily.",
      },
      {
        question: "How do I filter search results for specific listings?",
        answer:
          "You can refine results by brand, model, condition, and pricing. Active filters appear above the results so you can remove them individually or clear all at once.",
      },
      {
        question: "Why do luxury watches have reference numbers?",
        answer:
          "Reference numbers help identify a specific watch model, case variation, dial configuration, or generation. They are essential when comparing listings accurately.",
      },
    ],
  },
  {
    id: "buying",
    title: "Buying watches",
    subtitle: "Understand the purchase process",
    items: [
      {
        question: "How can I buy a watch on the platform?",
        answer:
          "Browse listings, open the detail page of the watch you like, and use the inquiry or purchase-related actions available there. Important information such as condition, delivery scope, and seller details is shown on the page.",
      },
      {
        question: "What determines the total price of a watch?",
        answer:
          "The final amount may include the listed price, shipping, taxes, import duties, and any service-related costs depending on the destination and seller terms.",
      },
      {
        question: "Do I need to register before making a purchase?",
        answer:
          "For actions like price requests, saved searches, wishlist features, and account-based communication, registration is recommended and often required.",
      },
    ],
  },
  {
    id: "trust",
    title: "Authenticity & trust",
    subtitle: "Buy with more confidence",
    items: [
      {
        question: "How do I know a listing is trustworthy?",
        answer:
          "Trust starts with clear photography, complete specifications, honest condition notes, and transparent seller information. Premium presentation and consistent detail usually indicate a stronger listing.",
      },
      {
        question: "What should I check before buying a pre-owned watch?",
        answer:
          "Review the condition closely, look for box and papers if relevant, compare the reference number, and read the seller information carefully. Service history and original parts can also matter significantly.",
      },
      {
        question: "Why are box and papers important?",
        answer:
          "They can add context, completeness, and collector value. For some references, a full set increases desirability, though condition and originality often matter just as much.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & wishlist",
    subtitle: "Manage your saved pieces and profile",
    items: [
      {
        question: "Why should I create an account?",
        answer:
          "An account helps you save favorite watches, manage inquiries, follow new arrivals, and create a more personalized browsing experience.",
      },
      {
        question: "How does the wishlist work?",
        answer:
          "When you click the heart icon on a listing, the watch is saved to your wishlist. You can revisit saved pieces later from your account area.",
      },
      {
        question: "Can I save searches for later?",
        answer:
          "Yes. Saved searches help you quickly return to a filtered view and continue your browsing without setting the same filters again.",
      },
    ],
  },
];

const sideLinks = [
  { label: "Overview", targetId: "faq-overview" },
  { label: "FAQ / Help", targetId: "faq-help" },
  { label: "Legal details", targetId: "faq-legal" },
  { label: "Terms & conditions", targetId: "faq-terms" },
  { label: "Buying guide", targetId: "buying" },
  { label: "Authenticity", targetId: "trust" },
  { label: "Account", targetId: "account" },
  { label: "Contact", targetId: "faq-contact" },
];

export default function FaqPage() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "searching-0": true,
  });

  const filteredSections = useMemo(() => {
    if (!search.trim()) return faqSections;

    const query = search.toLowerCase();

    return faqSections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [search]);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[290px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.9rem] border border-[#e7ddd1] bg-white/80 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
              <div className="mb-4 px-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                  Help center
                </p>
              </div>

              <nav className="space-y-2">
                {sideLinks.map((link, index) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollToSection(link.targetId)}
                    className={`group flex w-full items-center justify-between rounded-[1rem] px-4 py-3 text-left text-sm font-medium transition ${
                      index === 1
                        ? "bg-[#f3eee7] text-[#2f2925]"
                        : "text-[#655d56] hover:bg-[#f8f5f0] hover:text-[#2f2925]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d3c6b6] opacity-0 transition group-hover:opacity-100" />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <div
              id="faq-overview"
              className="scroll-mt-28 rounded-[2rem] border border-[#e7ddd1] bg-white/85 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.04)] md:p-8"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
                Help center
              </p>

              <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3.4rem]">
                FAQ & Help
              </h1>

              <p className="mt-4 max-w-3xl text-[1rem] leading-8 text-[#655d56]">
                Search through our help topics and frequently asked questions to
                find answers quickly, clearly, and with a premium browsing
                experience.
              </p>

              <div className="relative mt-6">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8a8075]" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-14 w-full rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-12 text-sm text-[#2f2925] outline-none placeholder:text-[#8a8075]"
                />
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.3rem] border border-[#ece3d8] bg-[#fcfaf7] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
                    <Search className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
                    Find answers faster
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#655d56]">
                    Search by topic, question, or keyword to get to the right
                    answer quickly.
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-[#ece3d8] bg-[#fcfaf7] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
                    Buy with clarity
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#655d56]">
                    Learn more about trust, authenticity, seller information,
                    and pre-owned buying decisions.
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-[#ece3d8] bg-[#fcfaf7] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
                    <MessageCircleMore className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
                    Get support
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#655d56]">
                    Explore account, wishlist, and browsing questions in one
                    elegant overview.
                  </p>
                </div>
              </div>
            </div>

            <div id="faq-legal" className="scroll-mt-28 pt-2" />
            <div id="faq-terms" className="scroll-mt-28 pt-2" />
            <div id="faq-contact" className="scroll-mt-28 pt-2" />

            <div className="mt-10 space-y-10">
              {filteredSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id === "searching" ? "faq-help" : section.id}
                  className="scroll-mt-28"
                >
                  <div className="mb-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8a8075]">
                      {section.subtitle}
                    </p>

                    <h2 className="font-serif-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[2.5rem]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="overflow-hidden rounded-[1.8rem] border border-[#e7ddd1] bg-white/85 shadow-[0_10px_28px_rgba(0,0,0,0.03)]">
                    {section.items.map((item, index) => {
                      const key = `${section.id}-${index}`;
                      const isOpen = !!openItems[key];

                      return (
                        <div
                          key={item.question}
                          className="border-b border-black/6 last:border-b-0"
                        >
                          <button
                            type="button"
                            onClick={() => toggleItem(key)}
                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-[#fcfaf7]"
                          >
                            <span className="text-[1.05rem] font-medium text-[#2f2925]">
                              {item.question}
                            </span>

                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3eee7] text-[#6a6158]">
                              <ChevronDown
                                className={`h-5 w-5 transition ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </span>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-6">
                              <div className="rounded-[1rem] bg-[#fcfaf7] px-5 py-4">
                                <p className="max-w-3xl text-[1rem] leading-8 text-[#655d56]">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}

              {filteredSections.length === 0 && (
                <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white/80 p-10 text-center shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                  <h2 className="text-2xl font-semibold text-[#2f2925]">
                    No results found
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-8 text-[#655d56]">
                    Try a different search term or browse the sections in the
                    help center navigation.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 rounded-[2rem] border border-[#e7ddd1] bg-white/80 p-8 shadow-[0_10px_28px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                    Still need help?
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                    Contact our support team
                  </h2>
                  <p className="mt-3 max-w-2xl text-[1rem] leading-8 text-[#655d56]">
                    If you did not find what you were looking for, reach out and
                    we will help you with your question.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex h-12 w-fit items-center justify-center rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
                >
                  Contact support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}