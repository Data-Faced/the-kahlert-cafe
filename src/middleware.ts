import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isStagingHost(host: string) {
  return host === "staging.thekahlertcafe.com" || host.startsWith("staging.");
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (!isStagingHost(host)) return NextResponse.next();

  // Password protection temporarily disabled while working on staging
  // const password = process.env.STAGING_PASSWORD;
  // if (password) {
  //   const auth = request.headers.get("authorization") || "";
  //   const expected = `Basic ${btoa(`kahlert:${password}`)}`;
  //   if (auth !== expected) return unauthorized();
  // }

  if (request.nextUrl.pathname === "/robots.txt") {
    return new NextResponse("User-agent: *\nDisallow: /\n", {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
        "Cache-Control": "no-store",
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
