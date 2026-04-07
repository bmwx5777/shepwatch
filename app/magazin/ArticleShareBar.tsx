"use client";

import { useEffect, useState } from "react";
import { Check, Link2, Mail, Share2 } from "lucide-react";

type ArticleShareBarProps = {
  title: string;
};

export default function ArticleShareBar({ title }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      //
    }
  };

  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-[#e7ddd1] bg-white/85 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
      <div className="border-b border-black/5 bg-[#fcfaf7] px-6 py-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
          Share article
        </p>
      </div>

      <div className="p-6">
        <p className="text-sm leading-7 text-[#655d56]">
          Send this story to someone who appreciates fine watches, thoughtful
          design, and collector insight.
        </p>

        <div className="mt-5 grid gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-between rounded-[1rem] border border-[#ddd4c8] bg-[#f8f5f0] px-4 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-white"
          >
            <span className="inline-flex items-center gap-3">
              {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
              {copied ? "Link copied" : "Copy link"}
            </span>
          </button>

          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
              shareUrl
            )}`}
            className="inline-flex items-center justify-between rounded-[1rem] border border-[#ddd4c8] bg-[#f8f5f0] px-4 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-white"
          >
            <span className="inline-flex items-center gap-3">
              <Mail className="h-4 w-4" />
              Email
            </span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-between rounded-[1rem] border border-[#ddd4c8] bg-[#f8f5f0] px-4 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-white"
          >
            <span className="inline-flex items-center gap-3">
              <Share2 className="h-4 w-4" />
              Share article
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}