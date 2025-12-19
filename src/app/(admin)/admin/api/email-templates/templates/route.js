export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const [common] = await pool.query(
      "SELECT * FROM email_templates WHERE template_type='common' ORDER BY sorting ASC"
    );
    const [entry] = await pool.query(
      "SELECT * FROM email_templates WHERE template_type='entrytest_reminder' ORDER BY sorting ASC"
    );
    const [fee] = await pool.query(
      "SELECT * FROM email_templates WHERE template_type='fee_reminder' ORDER BY sorting ASC"
    );
    return NextResponse.json({
      ok: true,
      common,
      entry,
      fee,
    });
  } catch (err) {
    console.error("Template fetch error:", err);
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}
