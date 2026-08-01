import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const loginUrl = new URL("/login", request.url);

    // Preserve the original destination
    const redirectTo =
      request.nextUrl.pathname + request.nextUrl.search;

    loginUrl.searchParams.set("redirect", redirectTo);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-profile", "/courses/:path"],
};