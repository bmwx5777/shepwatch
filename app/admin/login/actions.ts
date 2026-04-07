"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(formData: FormData) {
  const password = String(formData.get("password") ?? "").trim();
  const from = String(formData.get("from") ?? "/admin").trim();

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error("ADMIN_PASSWORD is missing in .env.local");
  }

  if (password !== adminPassword) {
    redirect("/admin/login?error=1");
  }

  const cookieStore = await cookies();

  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect(from || "/admin");
}

export async function adminLogout() {
  const cookieStore = await cookies();

  cookieStore.delete("admin_session");

  redirect("/admin/login");
}