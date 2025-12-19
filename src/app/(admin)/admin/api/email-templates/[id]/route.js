export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

// 🟩 GET single template
export async function GET(req, { params }) {
  try {
    const [rows] = await pool.query("SELECT * FROM email_templates WHERE id=?", [params.id]);
    if (!rows.length)
      return NextResponse.json({ ok: false, message: "Template not found" }, { status: 404 });
    return NextResponse.json({ ok: true, template: rows[0] });
  } catch (err) {
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}

// 🟨 UPDATE template
export async function PUT(req, { params }) {
  try {
    const { email_subject, email_body } = await req.json();
    await pool.query(
      "UPDATE email_templates SET email_subject=?, email_body=? WHERE id=?",
      [email_subject, email_body, params.id]
    );
    return NextResponse.json({ ok: true, message: "Template updated successfully" });
  } catch (err) {
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}
