import { LockKeyhole, ShieldCheck } from "lucide-react";
import { adminLogin } from "./actions";

type PageProps = {
  searchParams: Promise<{
    error?: string;
    from?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const error = params.error === "1";
  const from = params.from ?? "/admin";

  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-10 text-[#111111]">
      <div className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-8 lg:grid-cols-[1fr_460px]">
        <div className="hidden rounded-[2.2rem] border border-[#e7ddd1] bg-white/85 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] lg:block">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Shepards
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#2f2925]">
            Admin access
          </h1>

          <p className="mt-5 max-w-xl text-[1rem] leading-8 text-[#655d56]">
            Protected area for managing brands, watches, and marketplace content.
            Sign in to continue to the control panel.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-[1.4rem] border border-[#ece3d8] bg-[#fcfaf7] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#2f2925]">
                Protected workspace
              </h2>
              <p className="mt-2 text-sm leading-7 text-[#655d56]">
                Keep admin tools separated from the public marketplace and accessible only after sign-in.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e7ddd1] bg-white/90 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
            <LockKeyhole className="h-6 w-6" />
          </div>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
            Admin login
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#2f2925]">
            Enter admin password
          </h2>

          <p className="mt-3 text-[1rem] leading-8 text-[#655d56]">
            Use your protected admin password to access the dashboard.
          </p>

          {error && (
            <div className="mt-6 rounded-[1rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Wrong password. Please try again.
            </div>
          )}

          <form action={adminLogin} className="mt-6 space-y-4">
            <input type="hidden" name="from" value={from} />

            <div className="grid gap-2">
              <label className="text-sm font-medium text-[#4f4842]">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="Enter admin password"
                className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition focus:border-[#cabdab] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-14 w-full items-center justify-center rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}