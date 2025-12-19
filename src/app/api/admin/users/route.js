export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM users ORDER BY id DESC");
    return NextResponse.json({ ok: true, users: rows });
  } catch (err) {
    console.error("GET users error:", err);
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      full_name,
      father_name,
      cnic,
      email,
      mobile,
      dob,
      gender,
      highest_qualification,
      institute_name,
      field_of_study,
      year_of_completion,
      courses,
      internet_availability,
      permanent_address,
      current_address,
      city,
      employed,
      status = 1,
    } = body;

    const [exists] = await pool.query("SELECT id FROM users WHERE email=? OR cnic=? LIMIT 1", [
      email,
      cnic,
    ]);
    if (exists.length)
      return NextResponse.json(
        { ok: false, message: "User with this email or CNIC already exists" },
        { status: 409 }
      );

    const [result] = await pool.query(
      `INSERT INTO users (
        full_name, father_name, cnic, email, mobile, dob, gender, 
        highest_qualification, institute_name, field_of_study, year_of_completion,
        selected_courses, internet_availability, permanent_address, current_address, 
        city, employed, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        full_name,
        father_name,
        cnic,
        email,
        mobile,
        dob,
        gender,
        highest_qualification,
        institute_name,
        field_of_study,
        year_of_completion,
        JSON.stringify(courses || []),
        internet_availability,
        permanent_address,
        current_address,
        city,
        employed,
        status,
      ]
    );

    return NextResponse.json({ ok: true, id: result.insertId, message: "User added successfully" });
  } catch (err) {
    console.error("Add user error:", err);
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}
