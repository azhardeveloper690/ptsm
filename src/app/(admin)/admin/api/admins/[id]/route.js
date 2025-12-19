// [id]/route.js
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function DELETE(req, { params }) {
  await pool.query("DELETE FROM admins WHERE id=?", [params.id]);
  return NextResponse.json({ ok: true, message: "Admin deleted" });
}
