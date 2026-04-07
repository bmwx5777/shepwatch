"use client";

import { useEffect, useState } from "react";
import { Mail, X, Check } from "lucide-react";

type ShareButtonProps = {
  title: string;
};

export default function ShareButton({ title }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

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

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      // noop
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
        aria-label="Share watch"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.59 13.51 15.42 17.49" />
          <path d="M15.41 6.51 8.59 10.49" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/35 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-[2rem] border border-[#e7ddd1] bg-[#f8f5f0] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                  Share
                </p>
                <h2 className="font-serif-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[2.4rem]">
                  Share this listing
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] transition hover:bg-[#f6f1ea]"
                aria-label="Close share modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 items-center justify-center gap-3 rounded-[1rem] bg-[#4967ad] text-sm font-medium text-white transition hover:opacity-90"
              >
                <span className="text-base font-bold leading-none">f</span>
                Facebook
              </a>

              <a
                href={twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 items-center justify-center gap-3 rounded-[1rem] bg-black text-sm font-medium text-white transition hover:opacity-90"
              >
                <X className="h-4 w-4" />
                X
              </a>

              <a
                href={emailUrl}
                className="flex h-14 items-center justify-center gap-3 rounded-[1rem] border border-[#ddd4c8] bg-white text-sm font-medium text-[#2f2925] transition hover:bg-[#f6f1ea]"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>

            <div className="mt-8">
              <label className="text-sm font-medium text-[#4f4842]">
                Short URL for this listing
              </label>

              <div className="mt-3 rounded-[1rem] border border-[#ddd4c8] bg-white px-4 py-4 text-sm text-[#6a6158]">
                <span className="block truncate">{shareUrl}</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleCopy}
                className="flex h-14 w-full items-center justify-center gap-3 rounded-[1rem] bg-[#1e2d4a] text-sm font-medium text-white transition hover:opacity-95"
              >
                {copied ? <Check className="h-4 w-4" /> : null}
                {copied ? "Link copied" : "Copy link"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}