// route.js
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  const [rows] = await pool.query("SELECT id,name,email,role,status FROM admins ORDER BY id DESC");
  return NextResponse.json({ ok: true, admins: rows });
}

export async function POST(req) {
  const { name, email, password, role } = await req.json();
  await pool.query("INSERT INTO admins (name,email,password,role) VALUES (?,?,?,?)", [
    name,
    email,
    password,
    role,
  ]);
  return NextResponse.json({ ok: true, message: "Admin added" });
}
