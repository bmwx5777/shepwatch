export type DbWatch = {
  id: string;
  brand_id: string | null;
  slug: string;
  model: string;
  short_description: string | null;
  description: string | null;
  price_eur: number;
  image_url: string | null;
  badge: string | null;
  country: string | null;
  location: string | null;
  shipping: string | null;
  condition: string | null;
  year: string | null;
  scope: string | null;
  reference_number: string | null;
  case_material: string | null;
  movement: string | null;
  diameter: string | null;
  dial_color: string | null;
  is_new: boolean | null;
  is_top_deal: boolean | null;
  created_at: string;
  brands?:
    | {
        name: string;
        slug: string;
      }
    | null;
};

export function formatPriceEUR(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function mapDbWatchToCard(watch: DbWatch) {
  return {
    slug: watch.slug,
    brand: watch.brands?.name ?? "Unknown Brand",
    model: watch.model,
    description: watch.short_description ?? "",
    price: formatPriceEUR(watch.price_eur),
    image: watch.image_url ?? "/images/watches/placeholder.jpg",
    shipping: watch.shipping ?? undefined,
    country: watch.country ?? undefined,
    badge: watch.badge ?? undefined,
  };
}