export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function PUT(req, { params }) {
  try {
    const userId = params.id;
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
      status,
    } = body;

    await pool.query(
      `UPDATE users SET 
        full_name=?, father_name=?, cnic=?, email=?, mobile=?, dob=?, gender=?, 
        highest_qualification=?, institute_name=?, field_of_study=?, year_of_completion=?, 
        selected_courses=?, internet_availability=?, permanent_address=?, current_address=?, 
        city=?, employed=?, status=? 
        WHERE id=?`,
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
        userId,
      ]
    );

    return NextResponse.json({ ok: true, message: "User updated successfully" });
  } catch (err) {
    console.error("Update user error:", err);
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const userId = params.id;
    await pool.query("DELETE FROM users WHERE id=?", [userId]);
    return NextResponse.json({ ok: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete user error:", err);
    return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
  }
}
