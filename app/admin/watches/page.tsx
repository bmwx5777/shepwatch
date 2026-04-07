import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { createClient } from "@/lib/supabase/server";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { deleteWatch } from "@/app/admin/actions";

export default async function AdminWatchesPage() {
  const supabase = await createClient();

  const { data: watches, error } = await supabase
    .from("watches")
    .select(`
      *,
      brands (
        name
      )
    `)
    .order("created_at", { ascending: false });

  return (
    <AdminShell>
      <AdminTopbar
        title="Watches"
        description="Review your listings, keep metadata clean, and maintain a premium catalog experience."
      />

      <div className="rounded-[1.9rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#2f2925]">All watches</h2>
            <p className="mt-2 text-sm text-[#655d56]">
              Manage current marketplace listings and keep presentation consistent.
            </p>
          </div>

          <Link
            href="/admin/watches/new"
            className="inline-flex items-center gap-2 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-5 py-3 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
          >
            <Plus className="h-4 w-4" />
            Add watch
          </Link>
        </div>

        {error ? (
          <p className="text-red-600">{error.message}</p>
        ) : watches && watches.length > 0 ? (
          <div className="space-y-3">
            {watches.map((watch) => (
              <div
                key={watch.id}
                className="flex flex-col gap-4 rounded-[1.2rem] border border-[#ece3d8] bg-[#fcfaf7] px-5 py-4 transition hover:bg-white md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-lg font-semibold text-[#2f2925]">
                    {watch.brands?.name ?? "Unknown"} {watch.model}
                  </p>
                  <p className="mt-1 text-sm text-[#655d56]">/{watch.slug}</p>
                  <p className="mt-2 text-sm text-[#655d56]">
                    €{watch.price_eur} · {watch.country ?? "—"} · {watch.condition ?? "—"}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/admin/watches/${watch.id}/edit`}
                    className="inline-flex items-center gap-2 rounded-[0.95rem] border border-[#ddd4c8] bg-white px-4 py-2.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#f6f1ea]"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit
                  </Link>

                  <form action={deleteWatch}>
                    <input type="hidden" name="id" value={watch.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-[0.95rem] border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700 transition hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#655d56]">No watches yet.</p>
        )}
      </div>
    </AdminShell>
  );
}