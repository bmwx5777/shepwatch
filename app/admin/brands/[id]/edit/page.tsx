import AdminShell from "@/components/admin/AdminShell";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { createClient } from "@/lib/supabase/server";
import { updateBrand } from "@/app/admin/actions";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminEditBrandPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: brand } = await supabase
    .from("brands")
    .select("*")
    .eq("id", id)
    .single();

  if (!brand) {
    notFound();
  }

  return (
    <AdminShell>
      <AdminTopbar
        title="Edit brand"
        description="Update brand content, naming, and presentation assets."
      />

      <form
        action={updateBrand}
        className="rounded-[1.9rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.04)]"
      >
        <input type="hidden" name="id" value={brand.id} />

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Brand name" name="name" required defaultValue={brand.name ?? ""} />
          <Field label="Slug" name="slug" required defaultValue={brand.slug ?? ""} />
        </div>

        <div className="mt-4">
          <Field label="Logo URL" name="logo_url" defaultValue={brand.logo_url ?? ""} />
        </div>

        <div className="mt-4">
          <Field
            label="Hero image URL"
            name="hero_image_url"
            defaultValue={brand.hero_image_url ?? ""}
          />
        </div>

        <div className="mt-4 grid gap-2">
          <label className="text-sm font-medium text-[#4f4842]">Description</label>
          <textarea
            name="description"
            rows={5}
            defaultValue={brand.description ?? ""}
            className="rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2f2925] outline-none transition focus:border-[#cabdab] focus:bg-white"
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
        >
          Update brand
        </button>
      </form>
    </AdminShell>
  );
}

function Field({
  label,
  name,
  required = false,
  defaultValue = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-[#4f4842]">{label}</label>
      <input
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition focus:border-[#cabdab] focus:bg-white"
      />
    </div>
  );
}