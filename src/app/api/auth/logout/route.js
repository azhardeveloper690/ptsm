// src/app/api/auth/logout/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true, message: "Logged out successfully" });
  // cookie clear karna
  res.cookies.set("hunarmand_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return res;
}
