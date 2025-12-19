// src/app/api/auth/login/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password required" }, { status: 400 });
    }

    const [rows] = await pool.query(
      "SELECT id, email, password, status FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    if (!rows.length) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = rows[0];
    if (password !== user.password) {
  return NextResponse.json(
    { message: "Invalid credentials" },
    { status: 401 }
  );
}

    if (user.status === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // set cookie
    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, status: user.status },
      message: "Login successful"
    });
    res.cookies.set("hunarmand_token", String(user.id), {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ message: "Server error: " + err.message }, { status: 500 });
  }
}
