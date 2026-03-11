"use server";

import { redirect } from "next/navigation";
import { createAdminSession, removeAdminSession } from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const password = formData.get("password") as string;
  const SECRET = process.env.ADMIN_SECRET_TOKEN || "super_secret_development_token";

  if (password === SECRET) {
    await createAdminSession();
    redirect("/admin");
  } else {
    return { error: "Invalid password" };
  }
}

export async function logoutAction() {
  await removeAdminSession();
  redirect("/admin/login");
}
