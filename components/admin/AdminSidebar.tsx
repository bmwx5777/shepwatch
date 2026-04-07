"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Gem,
  Watch,
  Plus,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { adminLogout } from "@/app/admin/login/actions";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/brands", label: "Brands", icon: Gem },
  { href: "/admin/brands/new", label: "New Brand", icon: Plus },
  { href: "/admin/watches", label: "Watches", icon: Watch },
  { href: "/admin/watches/new", label: "New Watch", icon: Plus },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full rounded-[2rem] border border-[#e7ddd1] bg-white/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] lg:w-[280px]">
      <div className="mb-8 rounded-[1.5rem] border border-[#efe7dc] bg-[#fcfaf7] p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
          Shepards
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#2f2925]">
          Admin CP
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#655d56]">
          Manage brands, watches, and marketplace content with a cleaner editorial workspace.
        </p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between rounded-[1.15rem] px-4 py-3.5 transition ${
                isActive
                  ? "border border-[#d8cec0] bg-[#f3eee7] text-[#2f2925]"
                  : "border border-transparent text-[#5c554e] hover:bg-[#f8f5f0] hover:text-[#2f2925]"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isActive ? "bg-white" : "bg-[#f3eee7]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </span>

              <ChevronRight
                className={`h-4 w-4 transition ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <form action={adminLogout} className="mt-8">
        <button
          type="submit"
          className="flex w-full items-center gap-3 rounded-[1.15rem] px-4 py-3.5 text-sm font-medium text-[#5c554e] transition hover:bg-[#f8f5f0] hover:text-[#2f2925]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3eee7]">
            <LogOut className="h-4 w-4" />
          </span>
          Logout
        </button>
      </form>
    </aside>
  );
}