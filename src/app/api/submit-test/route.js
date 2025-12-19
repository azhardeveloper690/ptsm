export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req) {
  try {
    const { userId, marks, status } = await req.json();

    // numeric status for next stage (2 = pass, 3 = fail)
    let numericStatus = null;
    if (status === "pass") numericStatus = 2;
    else if (status === "fail") numericStatus = 3;

    // update both fields, but keep test_status text unchanged
    await pool.query(
      "UPDATE users SET marks = ?, test_status = ?, status = ? WHERE id = ?",
      [marks, status, numericStatus, userId]
    );

    return NextResponse.json({
      ok: true,
      message: `Your test has been submitted successfully. Marks: ${marks}, Test Status: ${status.toUpperCase()}, User Status: ${numericStatus}`,
    });
  } catch (err) {
    console.error("Submit test error:", err);
    return NextResponse.json(
      { message: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
