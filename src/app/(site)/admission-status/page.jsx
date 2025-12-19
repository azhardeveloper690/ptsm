"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { getCourseTitleById, coursesData } from "@/components/CoursesList";

export default function AdmissionStatus() {
  const userId = 1; // replace with logged-in user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updatedIds, setUpdatedIds] = useState([]);

  // ✅ Fetch user
useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await fetch(`/api/user/${userId}`);
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        setSelectedCourseIds(Array.isArray(data.user.selected_courses) ? data.user.selected_courses : []);
      } else toast.error(data.message);
    } catch {
      toast.error("Failed to load user");
    } finally {
      setLoading(false);
    }
  };
  fetchUser();
}, []);


  // ✅ Save updated courses
  const handleSaveCourses = async () => {
    try {
      const res = await fetch("/api/user/update-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          selected_courses: updatedIds,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setSelectedCourseIds(updatedIds);
        setShowModal(false);
      } else toast.error(data.message);
    } catch {
      toast.error("Error updating courses");
    }
  };

  const openModal = () => {
    setUpdatedIds([...selectedCourseIds]);
    setShowModal(true);
  };

  if (loading)
    return (
      <div className="container text-center py-5">
        <Toaster />
        <h4>Loading...</h4>
      </div>
    );

  if (!user)
    return (
      <div className="container text-center py-5">
        <Toaster />
        <h4>User not found</h4>
      </div>
    );

  return (
    <>
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <img
            src="https://hunarmandpunjab.pk/static/media/logo-white.71d99a5f6b740fc179a4.png"
            alt="Hunarmand Punjab Logo"
            className="portal-logo"
          />
          <h1 className="text-white">
            🎉 Congratulations! You Passed the Admission Test
          </h1>
          <p className="lead mb-0">
            Please follow the final steps below to confirm your enrollment and
            pay your application processing fee.
          </p>
        </div>
      </section>

      <div className="container my-5">
        {/* Result Card */}
        <div className="card card-custom mb-4">
          <div className="card-header">Student Result Card</div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <tbody>
                  <tr><th>Student Name</th><td>{user.full_name}</td></tr>
                  <tr><th>Admission Test ID</th><td>{1000 + user.id}</td></tr>
                  <tr><th>Total MCQs</th><td>25</td></tr>
                  <tr><th>Marks Obtained</th><td>{user.marks} / 25</td></tr>
                  <tr><th>Percentage</th><td>{((user.marks / 25) * 100).toFixed(2)}%</td></tr>
                  <tr>
                    <th>Status</th>
                    <td>
                      <span className="badge bg-success">PASS</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

{/* Selected Courses */}
<div className="card card-custom mb-4">
  <div className="card-header d-flex align-items-center">
    <i className="fas fa-graduation-cap me-2 text-white"></i>
    Selected Study Programs
  </div>
  <div className="card-body">
    <p className="text-muted mb-2">
      <i className="fas fa-info-circle me-2 text-secondary"></i>
      You can edit your selected courses if needed.
    </p>
    <table className="table align-middle">
      <thead className="table-light">
        <tr>
          <th>
            <i className="fas fa-hashtag me-2 text-muted"></i>Form #
          </th>
          <th>
            <i className="fas fa-book me-2 text-muted"></i>Applied Courses
          </th>
          <th>
            <i className="fas fa-cogs me-2 text-muted"></i>Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{1000 + user.id}</td>
          <td>
            <ul className="mb-0 list-unstyled">
              {selectedCourseIds.length > 0 ? (
                selectedCourseIds.map((id) => (
                  <li key={id} className="mb-1">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {getCourseTitleById(id)}
                  </li>
                ))
              ) : (
                <li>
                  <i className="fas fa-exclamation-circle text-warning me-2"></i>
                  No courses selected
                </li>
              )}
            </ul>
          </td>
          <td>
            <button
              className="btn btn-sm btn-primary-custom d-flex align-items-center"
              onClick={openModal}
            >
              <i className="fas fa-edit me-1"></i>Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3 text-danger fw-semibold">
      <i className="fas fa-calendar-alt me-2"></i>
      Last Date to Pay Application Fee: October 7, 2025
    </p>
  </div>
</div>



        {/* Fee Payment */}
        <div className="card card-custom">
          <div className="card-header">Pay Application Processing Fee</div>
          <div className="card-body">
            <p>Follow the instructions below to pay your fee conveniently through any bank or app.</p>
            <div className="note-box mb-3">
              Application Processing Fee: <strong>PKR 4500</strong> (one-time, non-refundable if admission approved)
            </div>

            <h6 className="fw-bold mb-2">💳 Pay via Bank / App</h6>
            <ol className="mb-4">
              <li>Click “Generate PSID/Consumer Number” button below.</li>
              <li>Choose your bank and pay through app, internet banking, or ATM.</li>
              <li>Once paid, confirmation email will be sent within 30 minutes.</li>
            </ol>

            {!user.payproid_status ? (
      <>
        <button
          className="btn btn-custom mb-3"
          onClick={async () => {
            try {
              const btn = document.getElementById("psid-btn");
              btn.disabled = true;
              btn.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Processing...';

              const res = await fetch("/api/paypro/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  userId: user.id,
                  full_name: user.full_name,
                  phone: user.mobile,
                  email: user.email,
                  address: user.current_address,
                  amount: 4500,
                }),
              });

              const data = await res.json();
              if (res.ok && data.ok) {
                toast.success(data.message);
                setUser((prev) => ({
                  ...prev,
                  paypro_id: data.payProId,
                  payproid_status: 1,
                }));
              } else {
                toast.error(data.message || "Failed to generate Consumer ID");
              }
            } catch (err) {
              toast.error("Server error while generating ID");
            } finally {
              const btn = document.getElementById("psid-btn");
              btn.disabled = false;
              btn.innerHTML =
                '<i class="fas fa-file-alt"></i> Generate PSID / Consumer Number';
            }
          }}
          id="psid-btn"
        >
          <i className="fas fa-file-alt"></i> Generate PSID / Consumer Number
        </button>

        <div id="loader" style={{ display: "none", marginTop: 20 }}>
          <p>
            Please wait, it may take up to 1 minute... <br />
            <strong>Do not click anything until your ID is generated.</strong>
          </p>
        </div>
      </>
    ) : (
      <>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
          <input
            type="text"
            id="urlInput"
            className="form-control w-auto text-center"
            value={`100027${user.paypro_id}`}
            readOnly
          />
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigator.clipboard.writeText(`100027${user.paypro_id}`);
              toast.success("Copied to clipboard!");
            }}
          >
            <i className="fas fa-copy"></i>
          </button>
        </div>
      </>
    )}

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4 mt-4">
              <img src="http://localhost/psdi/assets/banks/1.png" width="70" alt="Bank 1" />
              <img src="http://localhost/psdi/assets/banks/2.png" width="70" alt="Bank 2" />
              <img src="http://localhost/psdi/assets/banks/3.png" width="70" alt="Bank 3" />
              <img src="http://localhost/psdi/assets/banks/4.png" width="70" alt="Bank 4" />
            </div>

            <h6 className="fw-bold mb-2">🏦 Deposit via Bank Challan</h6>
            <p>Alternatively, you can pay using a printed Bank Challan at any listed bank.</p>

    <>
      {!user.payproid_status ? (
        <>
          <button
            className="btn btn-outline-success"
            onClick={async () => {
              const btn = document.getElementById("challan-btn");
              const loader = document.getElementById("loader");

              try {
                btn.disabled = true;
                btn.innerHTML =
                  '<i class="fas fa-spinner fa-spin"></i> Processing...';
                loader.style.display = "block";

                const res = await fetch("/api/paypro/generate", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    userId: user.id,
                    full_name: user.full_name,
                    phone: user.mobile,
                    email: user.email,
                    address: user.current_address,
                    amount: 4500,
                  }),
                });

                const data = await res.json();

                if (res.ok && data.ok) {
                  toast.success(data.message);
                  setUser((prev) => ({
                    ...prev,
                    paypro_id: data.payProId,
                    payproid_status: 1,
                  }));

                  // ✅ Redirect to challan page after success
                  setTimeout(() => {
                    router.push("/generate-challan");
                  }, 1500);
                } else {
                  toast.error(data.message || "Failed to generate Consumer ID");
                }
              } catch (err) {
                toast.error("Server error while generating ID");
              } finally {
                btn.disabled = false;
                btn.innerHTML =
                  '<i class="fas fa-download me-1"></i> Download Bank Challan';
                loader.style.display = "none";
              }
            }}
            id="challan-btn"
          >
            <i className="fas fa-download me-1"></i> Generate PSID / Consumer Number
          </button>

          <div id="loader" style={{ display: "none", marginTop: 20 }}>
            <p>
              Please wait, it may take up to 1 minute... <br />
              <strong>Do not click anything until your ID is generated.</strong>
            </p>
          </div>
        </>
      ) : (
        <Link
          className="btn btn-outline-success"
          href="/generate-challan"
        >
          <i className="fas fa-download me-1"></i> Download Bank Challan
        </Link>
      )}
    </>


            <div className="note-box mt-3">
              <strong>Note:</strong> After payment, no further action is required. You’ll receive confirmation within 30 minutes.
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Selected Courses</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Select or deselect courses below:</p>
                <ul className="list-group">
                  {coursesData.map((course) => (
                    <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
                      {course.title}
                      <input
                        type="checkbox"
                        checked={updatedIds.includes(course.id)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setUpdatedIds([...updatedIds, course.id]);
                          else
                            setUpdatedIds(updatedIds.filter((id) => id !== course.id));
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary-custom" onClick={handleSaveCourses}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
