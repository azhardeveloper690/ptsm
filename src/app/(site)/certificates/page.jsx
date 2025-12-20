"use client";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section
  className="py-5 text-center text-white"
  style={{ background: "linear-gradient(to right, #027a37, #006e9a)" }}
>
  <div className="container">
    <h1 className="fw-bold text-white">
      Punjab Technical Skills Mission (PTSM) Certificate Portal
    </h1>
    <p className="mb-0">
      Apply for your course completion certificate or track your certificate
      delivery status easily
    </p>
  </div>
</section>

      <section
        className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* ===== Form 1 : Request Certificate ===== */}
            <div className="col-lg-6">
              <div className="bg-white shadow-lg rounded-4 p-5 h-100">
                <h3 className="text-center mb-4 fw-bold text-dark">
                  Request Your Official Certificate
                </h3>

                <form>
                  <div className="row g-4 mt-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-user me-2 text-success"></i> Name
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

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

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-id-card me-2 text-success"></i> CNIC No
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter CNIC Number"
                        required
                      />
                    </div>

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
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-file-alt me-2"></i> Apply For Certificate
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ===== Form 2 : Track Certificate ===== */}
            <div className="col-lg-6">
              <div className="bg-white shadow-lg rounded-4 p-5 h-100">
                <h3 className="text-center mb-4 fw-bold text-dark">
                  Track Certificate
                </h3>

                <p className="text-center">
                  If you have applied for a hardcopy of your course completion
                  certificate, you can track its delivery status by entering your
                  registered email address below.
                </p>

                <form>
                  <div className="mt-4">
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
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-file-alt me-2"></i> Track Certificate
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
