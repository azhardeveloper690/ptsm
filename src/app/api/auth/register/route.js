// src/app/api/auth/register/route.js
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import fs from 'fs';
import path from 'path';
import { sendTemplatedEmail } from "@/lib/emailService";

// Random password generator function
function generateRandomPassword(length = 12) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

export async function POST(req) {
  let degree_file_path = null;
  let residency_file_path = null;

  try {
    const formData = await req.formData();
    
    // Extract all form fields
    const full_name = formData.get('full_name');
    const father_name = formData.get('father_name');
    const cnic = formData.get('cnic');
    const email = formData.get('email');
    const mobile = formData.get('mobile');
    const dob = formData.get('dob');
    const gender = formData.get('gender');
    const highest_qualification = formData.get('highest_qualification');
    const institute_name = formData.get('institute_name');
    const field_of_study = formData.get('field_of_study');
    const year_of_completion = formData.get('year_of_completion');
    const courses = formData.getAll('courses[]').filter(course => course !== '');
    const internet_availability = formData.get('internet_availability');
    const permanent_address = formData.get('permanent_address');
    const current_address = formData.get('current_address');
    const city = formData.get('city');
    const employed = formData.get('employed');
    const declaration_accepted = formData.get('agreeCheck') === 'on';
    const reg_date = new Date().toISOString().split('T')[0];
    const status = 1;

    // Validate required fields
    if (!full_name || !father_name || !cnic || !email || !mobile || !gender || 
        !highest_qualification || !institute_name || !field_of_study || !year_of_completion ||
        !permanent_address || !current_address || !city || courses.length === 0) {
      return NextResponse.json({ 
        message: 'All required fields must be filled' 
      }, { status: 400 });
    }

    // Check if CNIC or email already exists
    const [existingUser] = await pool.query(
      'SELECT id FROM users WHERE cnic = ? OR email = ? LIMIT 1',
      [cnic, email]
    );

    if (existingUser.length) {
      return NextResponse.json({ 
        message: 'User with this CNIC or Email already exists' 
      }, { status: 409 });
    }

    // File handling
    const degree_file = formData.get('degree_file');
    const residency_file = formData.get('residency_file');

    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save degree file
    if (degree_file && degree_file.size > 0) {
      const degreeFileName = `degree_${Date.now()}_${degree_file.name}`;
      degree_file_path = `/uploads/${degreeFileName}`;
      const degreeFileBuffer = await degree_file.arrayBuffer();
      fs.writeFileSync(path.join(uploadDir, degreeFileName), Buffer.from(degreeFileBuffer));
    }

    // Save residency file
    if (residency_file && residency_file.size > 0) {
      const residencyFileName = `residency_${Date.now()}_${residency_file.name}`;
      residency_file_path = `/uploads/${residencyFileName}`;
      const residencyFileBuffer = await residency_file.arrayBuffer();
      fs.writeFileSync(path.join(uploadDir, residencyFileName), Buffer.from(residencyFileBuffer));
    }

    // Generate random password
    const randomPassword = generateRandomPassword();
    
    // Convert courses array to JSON string for storage
    const selectedCoursesJSON = JSON.stringify(courses);

    // Insert user into database
    const [result] = await pool.query(
      `INSERT INTO users (
        full_name, father_name, cnic, email, mobile, dob, gender,
        highest_qualification, institute_name, field_of_study, year_of_completion, degree_file_path,
        selected_courses, internet_availability, permanent_address, current_address, city, 
        employed, residency_file_path, password, declaration_accepted, reg_date, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        full_name, father_name, cnic, email, mobile, dob, gender,
        highest_qualification, institute_name, field_of_study, year_of_completion, degree_file_path,
        selectedCoursesJSON, internet_availability, permanent_address, current_address, city,
        employed, residency_file_path, randomPassword, declaration_accepted, reg_date, status
      ]
    );

    // ✅ send verification email using template
    const user = {
      full_name,
      email,
      selected_courses: selectedCoursesJSON,
      password: randomPassword,
    };
    await sendTemplatedEmail("new_registration", user);

    // Return success response
    return NextResponse.json({ 
      ok: true, 
      user_id: result.insertId,
      message: 'Your application has been successfully submitted! Check your email for login credentials to continue your admission process.' 
    }, { status: 201 });

  } catch (err) {
    console.error('Registration error:', err);
    
    // Clean up uploaded files if error occurred
    try {
      if (degree_file_path) {
        const degreeFilePath = path.join(process.cwd(), 'public', degree_file_path);
        if (fs.existsSync(degreeFilePath)) {
          fs.unlinkSync(degreeFilePath);
        }
      }
      if (residency_file_path) {
        const residencyFilePath = path.join(process.cwd(), 'public', residency_file_path);
        if (fs.existsSync(residencyFilePath)) {
          fs.unlinkSync(residencyFilePath);
        }
      }
    } catch (cleanupErr) {
      console.error('Error cleaning up files:', cleanupErr);
    }
    
    return NextResponse.json({ 
      message: 'Server error: ' + err.message 
    }, { status: 500 });
  }
}