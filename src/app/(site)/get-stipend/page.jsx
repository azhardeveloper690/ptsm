"use client";
import Link from "next/link";

export default function Page() {
  return (
    <main className="stipend-page">

      {/* ===== HERO / HEADER ===== */}
      <section className="stipend-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-8 text-white">
              <div className="d-flex align-items-center gap-3 mb-3">
                <img
                  src="/images/whitelogo.png"
                  alt="Government of Pakistan"
                  height="40"
                />
                <span className="hero-subtitle">
                  GOVERNMENT OF PAKISTAN · OFFICIAL STIPEND VERIFICATION
                </span>
              </div>

              <h1 className="fw-bold mb-3 text-white">
                Official Stipend Verification Portal
              </h1>

              <p className="hero-text text-white">
                Use your registered details to confirm eligibility and generate
                a confidential verification code. This code is only for
                submission inside your Student Dashboard payout request.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="hero-info-box">
                <div className="info-item">
                  <strong>Eligibility</strong>
                  <span>100% completion (selected course)</span>
                </div>
                <div className="info-item">
                  <strong>Identity Match</strong>
                  <span>Email + CNIC must match registration</span>
                </div>
                <div className="info-item">
                  <strong>Security Notice</strong>
                  <span>Never share your verification code</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="py-5">
        <div className="container">

          <div className="form-header mb-4">
            <div className="form-icon">
              <i className="fas fa-lock"></i>
            </div>
            <div>
              <h3 className="fw-bold mb-1 text-white">
                Generate Stipend Verification Code
              </h3>
              <p className="mb-0 text-white">
                Enter the same account details used during enrollment. The
                system will validate your identity and course completion status
                and generate a one-time verification code.
              </p>
            </div>
          </div>

          <div className="form-card">
            <div className="row g-4">

              <div className="col-md-6">
                <label className="form-label">Registered Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">CNIC (13 digits)</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="1234567890123"
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">
                  Account Password (for verification)
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your portal password"
                />
              </div>

              <div className="col-12 text-center mt-4">
                <button className="btn btn-primary btn-lg px-5">
                  <i className="fas fa-check-circle me-2"></i>
                  Generate verification code
                </button>
              </div>

            </div>
          </div>

          {/* ===== INFO BOXES ===== */}
          <div className="info-panels mt-5">
            <div className="info-panel">
              <h6>Eligibility Criteria (Summary)</h6>
              <ul>
                <li>Your account must be active and approved.</li>
                <li>Selected course(s) must show 100% completion.</li>
                <li>CNIC and email must match registration details.</li>
              </ul>
            </div>

            <div className="info-panel warning">
              <h6>Security Advisory</h6>
              <p>
                Your verification code is confidential. The program team will
                never request it via phone, SMS, WhatsApp, or social media.
              </p>
            </div>

            <div className="info-panel success">
              <h6>Need Assistance?</h6>
              <ul>
                <li>Email: infodesk@rozgar.org.pk</li>
                <li>Confirm course progress in LMS before applying.</li>
                <li>Ensure CNIC is 13 digits (no spaces).</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
