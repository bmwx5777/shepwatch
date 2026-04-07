"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Please complete all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Account created successfully. You can connect this to real auth next.");
    }, 900);
  };

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#111111]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[#e7ddd1] bg-white/80 p-8 shadow-[0_12px_34px_rgba(0,0,0,0.05)] md:p-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8a8075]">
            Account
          </p>

          <h1 className="font-serif-display mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2f2925] md:text-[3rem]">
            Create account
          </h1>

          <p className="mt-4 text-[1rem] leading-8 text-[#655d56]">
            Create your account to save favorites, request prices, and follow
            new arrivals.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-[#4f4842]">Full name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition placeholder:text-[#8a8075] focus:border-[#c9bcac] focus:bg-white"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-[#4f4842]">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition placeholder:text-[#8a8075] focus:border-[#c9bcac] focus:bg-white"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-[#4f4842]">Password</label>
              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition placeholder:text-[#8a8075] focus:border-[#c9bcac] focus:bg-white"
              />
            </div>

            {error && (
              <div className="flex items-start gap-3 rounded-[1rem] border border-[#efd3d0] bg-[#fff4f3] px-4 py-3 text-sm text-[#8a4b45]">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="flex items-start gap-3 rounded-[1rem] border border-[#d8e6d6] bg-[#f5fbf4] px-4 py-3 text-sm text-[#4c6b47]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{success}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-14 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="mt-6 text-sm text-[#655d56]">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-[#2f2925]">
              Log in
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}