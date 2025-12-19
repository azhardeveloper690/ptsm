export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

// POST /api/paypro/generate
export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, full_name, phone, email, address, amount } = body;

    // static data
    const website_id = 399;
    const gatewayID = 110;
    const course_id = Math.floor(Math.random() * 900 + 100);
    const OrderAmount = amount || 4500;

    const invoice_number = `${website_id}-${gatewayID}-${userId}-${OrderAmount}-${course_id}-1`;

    // API payload (match PHP)
    const data = {
      websiteId: String(website_id),
      requestedPaymentGateway: String(gatewayID),
      courseEnrollmentType: "online",
      user: {
        userId,
        fullName: full_name,
        email,
        address,
        phone,
      },
      course: {
        courseId: "course123",
        name: "JavaScript Basics",
        price: OrderAmount,
        thumbnailUrl: "randomURL.com/api/image/45rt848",
      },
      invoiceNumber: invoice_number,
    };

    const res = await fetch(
      "https://api.eduportal.com.pk/api/payment-management/payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await res.json();
    const PayProId = responseData.payProId;
    const invoiceNumber = responseData.invoiceNumber;

    if (!PayProId || PayProId === "fail") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Consumer ID not generated. Please check your internet connection and try again!",
        },
        { status: 500 }
      );
    }

    // update DB
    const now = new Date();
    const issue = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const due = new Date(now.setMonth(now.getMonth() + 2)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

    await pool.query(
      "UPDATE users SET paypro_id=?, ordernumber=?, paypro_issudate=?, paypro_duedate=?, payproid_status=? WHERE id=?",
      [PayProId, invoiceNumber, issue, due, 1, userId]
    );

    return NextResponse.json({
      ok: true,
      message: "Consumer ID generated successfully!",
      payProId: PayProId,
      invoiceNumber,
    });
  } catch (err) {
    console.error("PayPro generate error:", err);
    return NextResponse.json(
      { ok: false, message: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
