"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 900);
  };

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Contact
          </p>

          <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3.8rem]">
            Get in touch with Shepards
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-8 text-[#655d56]">
            Whether you have a question about a listing, need support, or want to
            discuss a particular watch, we are here to help with clarity and care.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white/85 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                Contact details
              </p>

              <div className="mt-6 space-y-5">
                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                  text="support@shepards.com"
                />

                <InfoRow
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone"
                  text="+49 211 555 0196"
                />

                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Location"
                  text="Düsseldorf, Germany"
                />

                <InfoRow
                  icon={<Clock3 className="h-5 w-5" />}
                  title="Office hours"
                  text="Mon – Fri, 9:00 – 18:00"
                />
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#e7ddd1] bg-white/85 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                Quick help
              </p>

              <div className="mt-5 space-y-3">
                <QuickCard
                  title="Questions about a watch"
                  text="Ask about availability, condition, delivery scope, or more images."
                />
                <QuickCard
                  title="Support for your account"
                  text="Get help with wishlist, login, saved searches, and inquiries."
                />
                <QuickCard
                  title="Editorial & partnerships"
                  text="Contact us for press, collaborations, or publishing requests."
                />
              </div>
            </div>
          </aside>

          <section className="rounded-[2rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_12px_34px_rgba(0,0,0,0.05)] md:p-8">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
                Send a message
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#2f2925]">
                We would love to hear from you
              </h2>
            </div>

            {success && (
              <div className="mb-6 flex items-start gap-3 rounded-[1rem] border border-[#d8e6d6] bg-[#f5fbf4] px-4 py-3 text-sm text-[#4c6b47]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Full name"
                  value={name}
                  onChange={setName}
                  placeholder="Your full name"
                />
                <Field
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>

              <Field
                label="Subject"
                value={subject}
                onChange={setSubject}
                placeholder="How can we help?"
              />

              <div className="grid gap-2">
                <label className="text-sm font-medium text-[#4f4842]">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a little more..."
                  rows={7}
                  className="rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2f2925] outline-none transition placeholder:text-[#8a8075] focus:border-[#c9bcac] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex h-14 items-center justify-center gap-3 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-[#4f4842]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition placeholder:text-[#8a8075] focus:border-[#c9bcac] focus:bg-white"
      />
    </div>
  );
}

function InfoRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-[#2f2925]">{title}</p>
        <p className="mt-1 text-[0.98rem] leading-7 text-[#655d56]">{text}</p>
      </div>
    </div>
  );
}

function QuickCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.1rem] border border-[#ece3d8] bg-[#fcfaf7] p-4">
      <p className="text-sm font-semibold text-[#2f2925]">{title}</p>
      <p className="mt-2 text-sm leading-7 text-[#655d56]">{text}</p>
    </div>
  );
}