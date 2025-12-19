"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="py-5" style={{ backgroundColor: "#DDA30E" }}>
        <div className="container">
          <div
            className="bg-white shadow-lg rounded-4 p-5 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <h3 className="text-center mb-4 fw-bold text-dark">
              Request Your Official Hunarmand Certificate
            </h3>

            <form>
              <div className="row g-4 mt-3">
                {/* Name */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="fas fa-user me-2 text-success"></i> Name{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="fas fa-envelope me-2 text-success"></i> Email
                    Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* CNIC */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="fas fa-id-card me-2 text-success"></i> CNIC No{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter CNIC Number"
                    required
                  />
                </div>

                {/* Course Track */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="fas fa-book me-2 text-success"></i> Course
                    Track <span className="text-danger">*</span>
                  </label>
                  <select className="form-select form-select-lg" required>
                    <option value="" disabled selected>
                      Choose your course
                    </option>
                    <option>Artificial Intelligence</option>
                    <option>Cyber Security</option>
                    <option>Amazon VA</option>
                    <option>Digital Marketing & AI</option>
                    <option>Shopify & Daraz Business</option>
                    <option>Web Programming</option>
                    <option>MERN Stack Development</option>
                    <option>App Development</option>
                    <option>Data Science with Python</option>
                    <option>UI/UX Design Fundamentals</option>
                  </select>
                </div>
              </div>

              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <i className="fas fa-file-alt me-2"></i> Apply For Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

            <section className="py-3" style={{ backgroundColor: "#DDA30E" }}>
        <div className="container">
          <div
            className="bg-white shadow-lg rounded-4 p-5 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <h3 className="text-center mb-4 fw-bold text-dark">
              Track Certificate
            </h3>
            <p className="text-center">If you have applied for a hardcopy of your course completion certificate, you can track its delivery status by entering your registered email address below and clicking the 'Track' button. This will provide you with updates on the progress of your hardcopy certificate request.</p>

            <form>
              <div className="row g-4 mt-3">
                {/* Email */}
                <div className="col-md-12">
                  <label className="form-label fw-semibold">
                    <i className="fas fa-envelope me-2 text-success"></i> Email
                    Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <i className="fas fa-file-alt me-2"></i> Track Certificate
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
