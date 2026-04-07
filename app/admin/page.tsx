import AdminShell from "@/components/admin/AdminShell";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();

  const [{ count: brandsCount }, { count: watchesCount }] = await Promise.all([
    supabase.from("brands").select("*", { count: "exact", head: true }),
    supabase.from("watches").select("*", { count: "exact", head: true }),
  ]);

  const cards = [
    { label: "Brands", value: brandsCount ?? 0 },
    { label: "Watches", value: watchesCount ?? 0 },
    { label: "New arrivals", value: "Live" },
    { label: "Top deals", value: "Live" },
  ];

  return (
    <AdminShell>
      <AdminTopbar
        title="Dashboard"
        description="Manage brands, watches, and the core marketplace content from one place."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-[1.6rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
          >
            <p className="text-sm text-[#8a8075]">{card.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2f2925]">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}