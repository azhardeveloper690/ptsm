"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getCourseTitleById } from "@/components/CoursesList";

export default function GenerateChallan() {
  const [user, setUser] = useState(null);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ✅ Define styles here before return
  const styles = `
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { background-color: #f0f4f8; padding: 20px; color: #333; }
    .print-btn-container { text-align: center; margin-bottom: 20px; }
    .print-btn { margin:2px;background-color: #004613; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 16px; transition: background-color 0.3s; }
    .print-btn:hover { background-color: #00330e; }
    .challan-container { display: flex; justify-content: space-between; gap: 10px; max-width: 1200px; margin: 0 auto; }
    .challan { background-color: white; width: 32%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); overflow: hidden; }
    .challan-header { background-color: #004613; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
    .challan-header img { height: 35px; }
    .copy-label { font-weight: bold; font-size: 14px; }
    .section { padding: 10px; border-bottom: 1px solid #eaeaea; }
    .section-title { background-color: #f0f7f0; color: #004613; padding: 8px 12px; margin-bottom: 10px; border-radius: 4px; font-weight: bold; font-size: 12px; }
    .invoice-details { text-align: center; margin-bottom: 10px; }
    .invoice-number { font-weight: bold; color: #004613; }
    .student-info p { margin-bottom: 5px; font-size: 13px; }
    .student-info strong { color: #004613; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
    th, td { padding: 5px; text-align: left; border: 1px solid #ddd; }
    th { background-color: #f5f5f5; font-weight: 600; }
    .total-row { font-weight: bold; background-color: #f0f7f0; }
    .total-amount { color: #d32f2f; font-size: 10px; }
    .bank-details { padding: 10px; border: 1px dashed #ccc; border-radius: 4px; margin-top: 10px; text-align: center; font-size: 13px; }
    .footer { padding: 5px; background-color: #f9f9f9; font-size: 10px; color: #555; }
    .footer ul { padding-left: 20px; margin-bottom: 15px; }
    .footer li { margin-bottom: 5px; }
    .bank-logos { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
    .bank-logos img { height: 25px; opacity: 0.8; }
    @media print { @page { size: landscape; margin: 0.5cm; } body { background-color: white; padding: 0; margin: 0; } .print-btn-container { display: none; } .challan-container { gap: 8px; width: 100%; max-width: none; } .challan { box-shadow: none; border: 1px solid #ccc; width: 32%; page-break-inside: avoid; } }
  `;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("hunarmand_user_id");
        if (!userId) {
          toast.error("Please log in first");
          router.push("/login");
          return;
        }

        const res = await fetch(`/api/user/${userId}`);
        const data = await res.json();

        if (res.ok) {
          setUser(data.user);
          setSelectedCourseIds(
            Array.isArray(data.user.selected_courses)
              ? data.user.selected_courses
              : []
          );

          if (!data.user.payproid_status || data.user.payproid_status !== 1) {
            toast.error("Please generate your PSID first!");
            router.push("/admission-status");
          }
        } else {
          toast.error(data.message || "User not found");
          router.push("/admission-status");
        }
      } catch {
        toast.error("Failed to load user");
        router.push("/admission-status");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p className="text-center p-5">Loading...</p>;
  if (!user) return null;

  const courseFee = 3500;
  const totalAmount = selectedCourseIds.length * courseFee;

  return (
    <html lang="en">
      <head>
        <title>Application Processing Fee Voucher</title>
        <style>{styles}</style>
      </head>
      <body>
        <div className="print-btn-container">
  <button className="print-btn" onClick={() => router.back()}>
    <i className="fas fa-arrow-left"></i> Back
  </button>

  <button className="print-btn" onClick={() => window.print()}>
    <i className="fas fa-print"></i> Print Challan
  </button>
</div>


      <div className="challan-container">
        {["BANK COPY", "DEPOSITOR'S COPY", "INSTITUTE'S COPY"].map((copy) => (
          <div className="challan" key={copy}>
            <div className="challan-header">
              <img src="https://ssdp.pk/assets/banks/1Link%20logo.png" />
              <img src="https://hunarmandpunjab.pk/static/media/logo-white.71d99a5f6b740fc179a4.png" />
              <div className="copy-label">{copy}</div>
            </div>

            <div className="section">
              <div className="section-title">
                Application Processing Fee Voucher
              </div>
              <div className="invoice-details">
                <span className="invoice-number">
                  Invoice No. 100027{user.paypro_id}
                </span>
              </div>
              <div className="student-info">
                <p>
                  <strong>Student Name:</strong> {user.full_name}
                </p>
                <p>
                  <strong>C.N.I.C:</strong> {user.cnic}
                </p>
                <p>
                  <strong>Issue Date:</strong> {user.paypro_issudate}
                </p>
                <p>
                  <strong>Due Date:</strong> {user.paypro_duedate}
                </p>
              </div>
            </div>

            <div className="section">
              <div className="section-title">Fee Summary</div>
              <table>
                <thead>
                  <tr>
                    <th>Course Title</th>
                    <th>Admission Fee</th>
                    <th>Tuition Fee</th>
                    <th>Security Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCourseIds.map((id, idx) => (
                    <tr key={idx}>
                      <td>{getCourseTitleById(id)}</td>
                      <td>0</td>
                      <td>0</td>
                      <td>{courseFee}</td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td colSpan="3">Total Payable Amount</td>
                    <td className="total-amount">{totalAmount} PKR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section">
              <div className="section-title">Bank Details</div>
              <div className="bank-details">
                Teller Signature & Bank Stamp
              </div>
            </div>

            <div className="footer">
              <ul>
                <li>Pay your challan before the due date at any listed bank.</li>
                <li>For queries, email admissions@ssdp.pk.</li>
              </ul>
              <div className="bank-logos">
                <img src="https://ssdp.pk/assets/banks/15.png" />
                <img src="https://ssdp.pk/assets/banks/5.png" />
                <img src="https://ssdp.pk/assets/banks/14.png" />
                <img src="https://ssdp.pk/assets/banks/6.png" />
                <img src="https://ssdp.pk/assets/banks/11.png" />
                <img src="https://ssdp.pk/assets/banks/10.png" />
                <img src="https://ssdp.pk/assets/banks/13.png" />
              </div>
            </div>
          </div>
        ))}
      </div>
      </body>
    </html>
  );
}
