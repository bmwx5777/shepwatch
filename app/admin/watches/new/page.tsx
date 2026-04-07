import AdminShell from "@/components/admin/AdminShell";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { createClient } from "@/lib/supabase/server";
import { createWatch } from "@/app/admin/actions";

export default async function AdminNewWatchPage() {
  const supabase = await createClient();

  const { data: brands } = await supabase.from("brands").select("*").order("name");

  return (
    <AdminShell>
      <AdminTopbar
        title="Create watch"
        description="Add a new watch listing to the database with pricing, condition, brand, and marketplace flags."
      />

      <form
        action={createWatch}
        className="mt-8 rounded-[1.8rem] border border-[#e7ddd1] bg-white/90 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#4f4842]">Brand</label>
            <select
              name="brand_id"
              required
              className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none"
            >
              <option value="">Select brand</option>
              {brands?.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          <Field label="Model" name="model" required />
          <Field label="Slug" name="slug" required />
          <Field label="Price (EUR)" name="price_eur" required type="number" />
          <Field label="Image URL" name="image_url" />
          <Field label="Badge" name="badge" />
          <Field label="Country" name="country" />
          <Field label="Location" name="location" />
          <Field label="Shipping" name="shipping" />
          <Field label="Condition" name="condition" />
          <Field label="Year" name="year" />
          <Field label="Scope" name="scope" />
          <Field label="Reference number" name="reference_number" />
          <Field label="Case material" name="case_material" />
          <Field label="Movement" name="movement" />
          <Field label="Diameter" name="diameter" />
          <Field label="Dial color" name="dial_color" />
        </div>

        <div className="mt-4 grid gap-2">
          <label className="text-sm font-medium text-[#4f4842]">
            Short description
          </label>
          <textarea
            name="short_description"
            rows={3}
            className="rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2f2925] outline-none"
          />
        </div>

        <div className="mt-4 grid gap-2">
          <label className="text-sm font-medium text-[#4f4842]">Description</label>
          <textarea
            name="description"
            rows={6}
            className="rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 py-4 text-sm text-[#2f2925] outline-none"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-6">
          <label className="flex items-center gap-3 text-sm font-medium text-[#4f4842]">
            <input type="checkbox" name="is_new" />
            New arrival
          </label>

          <label className="flex items-center gap-3 text-sm font-medium text-[#4f4842]">
            <input type="checkbox" name="is_top_deal" />
            Top deal
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[1rem] border border-[#d8cec0] bg-[#e9dfd2] px-6 py-3.5 text-sm font-medium text-[#2f2925] transition hover:bg-[#e1d4c3]"
        >
          Save watch
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
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-[#4f4842]">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="h-14 rounded-[1rem] border border-[#ddd4c8] bg-[#fcfaf7] px-5 text-sm text-[#2f2925] outline-none"
      />
    </div>
  );
}