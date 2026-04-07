import AdminShell from "@/components/admin/AdminShell";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { createClient } from "@/lib/supabase/server";
import { updateWatch } from "@/app/admin/actions";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminEditWatchPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const [{ data: watch }, { data: brands }] = await Promise.all([
    supabase.from("watches").select("*").eq("id", id).single(),
    supabase.from("brands").select("*").order("name"),
  ]);

  if (!watch) {
    notFound();
  }

  return (
    <AdminShell>
      <AdminTopbar
        title="Edit watch"
        description="Update listing content, pricing, and marketplace flags for this watch."
      />

      <form
        action={updateWatch}
        className="rounded-[1.9rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.04)]"
      >
        <input type="hidden" name="id" value={watch.id} />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#4f4842]">Brand</label>
            <select
              name="brand_id"
              required
              defaultValue={watch.brand_id ?? ""}
              className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition focus:border-[#cabdab] focus:bg-white"
            >
              <option value="">Select brand</option>
              {brands?.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          <Field label="Model" name="model" required defaultValue={watch.model ?? ""} />
          <Field label="Slug" name="slug" required defaultValue={watch.slug ?? ""} />
          <Field
            label="Price (EUR)"
            name="price_eur"
            required
            type="number"
            defaultValue={watch.price_eur ?? ""}
          />
          <Field label="Image URL" name="image_url" defaultValue={watch.image_url ?? ""} />
          <Field label="Badge" name="badge" defaultValue={watch.badge ?? ""} />
          <Field label="Country" name="country" defaultValue={watch.country ?? ""} />
          <Field label="Location" name="location" defaultValue={watch.location ?? ""} />
          <Field label="Shipping" name="shipping" defaultValue={watch.shipping ?? ""} />
          <Field label="Condition" name="condition" defaultValue={watch.condition ?? ""} />
          <Field label="Year" name="year" defaultValue={watch.year ?? ""} />
          <Field label="Scope" name="scope" defaultValue={watch.scope ?? ""} />
          <Field
            label="Reference number"
            name="reference_number"
            defaultValue={watch.reference_number ?? ""}
          />
          <Field
            label="Case material"
            name="case_material"
            defaultValue={watch.case_material ?? ""}
          />
          <Field label="Movement" name="movement" defaultValue={watch.movement ?? ""} />
          <Field label="Diameter" name="diameter" defaultValue={watch.diameter ?? ""} />
          <Field label="Dial color" name="dial_color" defaultValue={watch.dial_color ?? ""} />
        </div>

        <div className="mt-4 grid gap-2">
          <label className="text-sm font-medium text-[#4f4842]">
            Short description
          </label>
          <textarea
            name="short_description"
            rows={3}
            defaultValue={watch.short_description ?? ""}
            className="rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2f2925] outline-none transition focus:border-[#cabdab] focus:bg-white"
          />
        </div>

        <div className="mt-4 grid gap-2">
          <label className="text-sm font-medium text-[#4f4842]">Description</label>
          <textarea
            name="description"
            rows={6}
            defaultValue={watch.description ?? ""}
            className="rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2f2925] outline-none transition focus:border-[#cabdab] focus:bg-white"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-6">
          <label className="flex items-center gap-3 text-sm font-medium text-[#4f4842]">
            <input type="checkbox" name="is_new" defaultChecked={!!watch.is_new} />
            New arrival
          </label>

          <label className="flex items-center gap-3 text-sm font-medium text-[#4f4842]">
            <input
              type="checkbox"
              name="is_top_deal"
              defaultChecked={!!watch.is_top_deal}
            />
            Top deal
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
        >
          Update watch
        </button>
      </form>
    </AdminShell>
  );
}

function Field({
  label,
  name,
  required = false,
  type = "text",
  defaultValue = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  defaultValue?: string | number;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-[#4f4842]">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none transition focus:border-[#cabdab] focus:bg-white"
      />
    </div>
  );
}