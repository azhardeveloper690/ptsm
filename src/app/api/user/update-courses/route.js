export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { userId, selected_courses } = await req.json(); // selected_courses is an array

    const selectedCoursesJSON = JSON.stringify(selected_courses);
    await pool.query(
      "UPDATE users SET selected_courses = ? WHERE id = ?",
      [selectedCoursesJSON, userId]
    );

    return NextResponse.json({
      ok: true,
      message: "Selected courses updated successfully!",
    });
  } catch (err) {
    console.error("Update courses error:", err);
    return NextResponse.json(
      { message: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
