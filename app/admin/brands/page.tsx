import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { createClient } from "@/lib/supabase/server";

export default async function AdminBrandsPage() {
  const supabase = await createClient();

  const { data: brands, error } = await supabase
    .from("brands")
    .select("*")
    .order("name");

  return (
    <AdminShell>
      <AdminTopbar
        title="Brands"
        description="Browse and manage all watch brands currently stored in the database."
      />

      <div className="mt-8 rounded-[1.8rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-[#2f2925]">All brands</h2>
          <Link
            href="/admin/brands/new"
            className="rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-5 py-3 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
          >
            Add brand
          </Link>
        </div>

        {error ? (
          <p className="text-red-600">{error.message}</p>
        ) : brands && brands.length > 0 ? (
          <div className="space-y-3">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="rounded-[1.1rem] border border-[#ece3d8] bg-[#fcfaf7] px-4 py-4"
              >
                <p className="text-lg font-semibold text-[#2f2925]">{brand.name}</p>
                <p className="mt-1 text-sm text-[#655d56]">/{brand.slug}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#655d56]">No brands yet.</p>
        )}
      </div>
    </AdminShell>
  );
}