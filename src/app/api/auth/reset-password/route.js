export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { email, code, new_password } = await req.json();

    if (!email || !code || !new_password)
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });

    // Check verification code
    const [rows] = await pool.query(
      "SELECT * FROM password_resets WHERE email = ? AND code = ? LIMIT 1",
      [email, code]
    );

    if (rows.length === 0)
      return NextResponse.json({ message: "Invalid verification code" }, { status: 400 });

    const record = rows[0];
    if (new Date(record.expires_at) < new Date())
      return NextResponse.json({ message: "Verification code expired" }, { status: 400 });

    // Update user password
    await pool.query("UPDATE users SET password = ? WHERE email = ?", [new_password, email]);

    // Remove reset record
    await pool.query("DELETE FROM password_resets WHERE email = ?", [email]);

    return NextResponse.json({ ok: true, message: "Password updated successfully!" });
  } catch (err) {
    console.error("Reset password error:", err);
    return NextResponse.json({ message: "Server error: " + err.message }, { status: 500 });
  }
}
