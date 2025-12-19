import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("admin_token")?.value;
  const { pathname } = req.nextUrl;

  // allow login page without cookie
  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  // protect all admin routes
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
