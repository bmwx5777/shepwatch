import AdminShell from "@/components/admin/AdminShell";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { createBrand } from "@/app/admin/actions";

export default function AdminNewBrandPage() {
  return (
    <AdminShell>
      <AdminTopbar
        title="Create brand"
        description="Add a new watch brand to the database and prepare it for listings and brand pages."
      />

      <form
        action={createBrand}
        className="mt-8 rounded-[1.8rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Brand name" name="name" required />
          <Field label="Slug" name="slug" required />
        </div>

        <div className="mt-4">
          <Field label="Logo URL" name="logo_url" />
        </div>

        <div className="mt-4">
          <Field label="Hero image URL" name="hero_image_url" />
        </div>

        <div className="mt-4 grid gap-2">
          <label className="text-sm font-medium text-[#4f4842]">Description</label>
          <textarea
            name="description"
            rows={5}
            className="rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2f2925] outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
        >
          Save brand
        </button>
      </form>
    </AdminShell>
  );
}

function Field({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-[#4f4842]">{label}</label>
      <input
        name={name}
        required={required}
        className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none"
      />
    </div>
  );
}