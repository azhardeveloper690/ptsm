export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { pool } from "@/lib/db"; // ✅ make sure you have src/lib/db.js

export async function GET(req, { params }) {
  try {
    const userId = params.id;

    if (!userId) {
      return NextResponse.json(
        { message: "User ID missing" },
        { status: 400 }
      );
    }

    // 🧠 Fetch single user by ID
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);

    if (!rows.length) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const user = rows[0];

    // Parse selected_courses JSON safely
    try {
      user.selected_courses = JSON.parse(user.selected_courses || "[]");
    } catch {
      user.selected_courses = [];
    }

    return NextResponse.json({ ok: true, user });
  } catch (err) {
    console.error("GET user error:", err);
    return NextResponse.json(
      { message: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
