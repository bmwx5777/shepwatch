"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createBrand(formData: FormData) {
  const supabase = await createClient();

  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const logoUrl = String(formData.get("logo_url") ?? "").trim();
  const heroImageUrl = String(formData.get("hero_image_url") ?? "").trim();

  if (!name || !slug) {
    throw new Error("Name and slug are required.");
  }

  const { error } = await supabase.from("brands").insert({
    name,
    slug,
    description: description || null,
    logo_url: logoUrl || null,
    hero_image_url: heroImageUrl || null,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/brands");
  revalidatePath("/brand");
}

export async function createWatch(formData: FormData) {
  const supabase = await createClient();

  const brandId = String(formData.get("brand_id") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const model = String(formData.get("model") ?? "").trim();
  const shortDescription = String(formData.get("short_description") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const priceEur = Number(formData.get("price_eur") ?? 0);
  const imageUrl = String(formData.get("image_url") ?? "").trim();
  const badge = String(formData.get("badge") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const shipping = String(formData.get("shipping") ?? "").trim();
  const condition = String(formData.get("condition") ?? "").trim();
  const year = String(formData.get("year") ?? "").trim();
  const scope = String(formData.get("scope") ?? "").trim();
  const referenceNumber = String(formData.get("reference_number") ?? "").trim();
  const caseMaterial = String(formData.get("case_material") ?? "").trim();
  const movement = String(formData.get("movement") ?? "").trim();
  const diameter = String(formData.get("diameter") ?? "").trim();
  const dialColor = String(formData.get("dial_color") ?? "").trim();
  const isNew = formData.get("is_new") === "on";
  const isTopDeal = formData.get("is_top_deal") === "on";

  if (!brandId || !slug || !model || !priceEur) {
    throw new Error("Brand, slug, model and price are required.");
  }

  const { error } = await supabase.from("watches").insert({
    brand_id: brandId,
    slug,
    model,
    short_description: shortDescription || null,
    description: description || null,
    price_eur: priceEur,
    image_url: imageUrl || null,
    badge: badge || null,
    country: country || null,
    location: location || null,
    shipping: shipping || null,
    condition: condition || null,
    year: year || null,
    scope: scope || null,
    reference_number: referenceNumber || null,
    case_material: caseMaterial || null,
    movement: movement || null,
    diameter: diameter || null,
    dial_color: dialColor || null,
    is_new: isNew,
    is_top_deal: isTopDeal,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/watches");
  revalidatePath("/watches");
  revalidatePath("/new-arrivals");
  revalidatePath("/top-deals");
}