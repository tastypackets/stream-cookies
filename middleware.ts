import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware() {
  const response = NextResponse.next();
  response.cookies.set("dashboard", "welcome-to-dashboard");

  return response;
}

export const config = {
  matcher: "/dashboard",
};
