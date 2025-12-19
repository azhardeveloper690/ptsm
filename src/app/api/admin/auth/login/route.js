export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json({ ok: false, message: "Email & Password required" }, { status: 400 });

    const [rows] = await pool.query("SELECT * FROM admins WHERE email=? LIMIT 1", [email]);
    if (!rows.length)
      return NextResponse.json({ ok: false, message: "Invalid credentials" }, { status: 401 });

    const admin = rows[0];
    if (password !== admin.password)
      return NextResponse.json({ ok: false, message: "Invalid password" }, { status: 401 });

    // set cookie
    const res = NextResponse.json({
      ok: true,
      message: "Login successful",
      admin: { id: admin.id, name: admin.name, role: admin.role, email: admin.email },
    });

    res.cookies.set("admin_token", String(admin.id), {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}
