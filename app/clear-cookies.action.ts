"use server";

import { cookies } from "next/headers";

/**
 * Clears all cookies for this domain
 */
export async function deleteAllCookies() {
  cookies()
    .getAll()
    .forEach((cookie) => {
      cookies().delete(cookie.name);
    });
}

export type DeleteAllCookies = typeof deleteAllCookies;
