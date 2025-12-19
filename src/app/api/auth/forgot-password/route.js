export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { sendTemplatedEmail } from "@/lib/emailService";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email)
      return NextResponse.json({ message: "Email is required" }, { status: 400 });

    // Check if user exists
    const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length === 0)
      return NextResponse.json({ message: "No user found with this email" }, { status: 404 });

    // Generate a 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiry

    // Save code in DB (remove old ones first)
    await pool.query("DELETE FROM password_resets WHERE email = ?", [email]);
    await pool.query(
      "INSERT INTO password_resets (email, code, expires_at) VALUES (?, ?, ?)",
      [email, code, expiresAt]
    );

    // Send reset email
    const userdata = {
      email,
      full_name: user[0].full_name,
      code,
    };
    await sendTemplatedEmail("password_reset", userdata);

    return NextResponse.json({ ok: true, message: "Reset code sent to your email." });
  } catch (err) {
    console.error("Forgot password error:", err);
    return NextResponse.json({ message: "Server error: " + err.message }, { status: 500 });
  }
}
