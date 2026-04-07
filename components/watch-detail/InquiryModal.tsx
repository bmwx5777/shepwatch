"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Lock, X } from "lucide-react";

type InquiryModalProps = {
  watchName: string;
  isLoggedIn: boolean;
};

export default function InquiryModal({
  watchName,
  isLoggedIn,
}: InquiryModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-[1rem] border border-[#ddd4c8] bg-white px-6 py-3.5 text-sm font-medium text-[#3f3934] transition hover:bg-[#f6f1ea]"
      >
        Request price
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-[2rem] border border-[#e7ddd1] bg-[#f8f5f0] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                  Inquiry
                </p>

                <h2 className="font-serif-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[2.4rem]">
                  Request details for {watchName}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] transition hover:bg-[#f6f1ea]"
                aria-label="Close inquiry modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!isLoggedIn ? (
              <div className="mt-8 rounded-[1.5rem] border border-[#e4dad0] bg-white/75 p-8 text-center shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3eee7] text-[#4f4842]">
                  <Lock className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                  Login required
                </h3>

                <p className="mx-auto mt-3 max-w-lg text-[1rem] leading-8 text-[#655d56]">
                  To request pricing, availability, and more details for this
                  watch, please log in or create an account first.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/register"
                    className="rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
                  >
                    Create account
                  </Link>

                  <Link
                    href="/login"
                    className="rounded-[1rem] border border-[#ddd4c8] bg-white px-6 py-3.5 text-sm font-medium text-[#3f3934] transition hover:bg-[#f6f1ea]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            ) : (
              <form className="mt-8 grid gap-4">
                <p className="max-w-xl text-[1rem] leading-8 text-[#655d56]">
                  Send an inquiry and receive pricing, availability, and
                  further details.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-white px-5 text-sm text-[#2f2925] outline-none placeholder:text-[#8a8075]"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-white px-5 text-sm text-[#2f2925] outline-none placeholder:text-[#8a8075]"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-white px-5 text-sm text-[#2f2925] outline-none placeholder:text-[#8a8075]"
                />

                <textarea
                  rows={6}
                  placeholder={`Hi, I'm interested in the ${watchName}. Please send me more details.`}
                  className="rounded-[1rem] border border-[#ddd4c8] bg-white px-5 py-4 text-sm text-[#2f2925] outline-none placeholder:text-[#8a8075]"
                />

                <div className="mt-2 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
                  >
                    Send inquiry
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-[1rem] border border-[#ddd4c8] bg-white px-6 py-3.5 text-sm font-medium text-[#3f3934] transition hover:bg-[#f6f1ea]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}