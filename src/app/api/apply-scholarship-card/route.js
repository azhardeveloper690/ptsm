import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Required fields
    const requiredFields = [
      "full_name",
      "cnic",
      "email",
      "mobile",
      "course",
      "challan_no",
    ];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Extract form values
    const full_name = formData.get("full_name");
    const cnic = formData.get("cnic");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const course = formData.get("course");
    const challan_no = formData.get("challan_no");
    const file = formData.get("degree_file");

    if (!file || !file.name) {
      return NextResponse.json(
        { error: "File upload is required." },
        { status: 400 }
      );
    }

    // Save file
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });

    const fileBytes = await file.arrayBuffer();
    const buffer = Buffer.from(fileBytes);
    const uniqueName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, uniqueName);
    await writeFile(filePath, buffer);
    const fileUrl = `/uploads/${uniqueName}`;

    // ✅ MySQL connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // ✅ Insert record
    const [result] = await connection.execute(
      `INSERT INTO scholarship_applications 
       (full_name, cnic, email, mobile, course, challan_no, file_path)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [full_name, cnic, email, mobile, course, challan_no, fileUrl]
    );

    await connection.end();

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        id: result.insertId,
        file: fileUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error submitting application:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
