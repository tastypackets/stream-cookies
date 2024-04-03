"use server";

import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export async function login(formData: FormData) {
  // Let's set seom cookies before we stream next page back to user after auth
  cookies().set("token", "token-value");

  if (formData.get("shouldRedirect")) {
    redirect("/dashboard", RedirectType.replace);
  }
}
