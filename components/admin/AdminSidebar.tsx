import Link from "next/link";
import { LayoutDashboard, Gem, Watch, Plus } from "lucide-react";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/brands", label: "Brands", icon: Gem },
  { href: "/admin/brands/new", label: "New Brand", icon: Plus },
  { href: "/admin/watches", label: "Watches", icon: Watch },
  { href: "/admin/watches/new", label: "New Watch", icon: Plus },
];

export default function AdminSidebar() {
  return (
    <aside className="w-full rounded-[1.8rem] border border-[#e7ddd1] bg-white/90 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.04)] lg:w-[260px]">
      <div className="mb-6 px-3 pt-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#8a8075]">
          Shepards
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#2f2925]">
          Admin CP
        </h2>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-[1rem] px-4 py-3 text-sm font-medium text-[#4f4842] transition hover:bg-[#f6f1ea] hover:text-[#2f2925]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3eee7] text-[#5f564f]">
                <Icon className="h-4 w-4" />
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}