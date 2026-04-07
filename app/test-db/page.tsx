import { createClient } from "@/lib/supabase/server";

export default async function TestDbPage() {
  const supabase = await createClient();

  const { data: brands, error: brandsError } = await supabase
    .from("brands")
    .select("*")
    .order("name");

  const { data: watches, error: watchesError } = await supabase
    .from("watches")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-10 text-[#111111]">
      <h1 className="mb-8 text-3xl font-semibold">Supabase Test</h1>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Brands</h2>
        {brandsError ? (
          <pre className="rounded-xl bg-red-50 p-4 text-red-700">
            {brandsError.message}
          </pre>
        ) : (
          <pre className="overflow-auto rounded-xl bg-white p-4 shadow">
            {JSON.stringify(brands, null, 2)}
          </pre>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Watches</h2>
        {watchesError ? (
          <pre className="rounded-xl bg-red-50 p-4 text-red-700">
            {watchesError.message}
          </pre>
        ) : (
          <pre className="overflow-auto rounded-xl bg-white p-4 shadow">
            {JSON.stringify(watches, null, 2)}
          </pre>
        )}
      </section>
    </main>
  );
}