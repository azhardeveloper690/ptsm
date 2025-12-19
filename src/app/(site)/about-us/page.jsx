"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="laptop-section position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-lg-6 text-center text-lg-start">
        <div className="laptop-content text-white">
          <h1 className="display-5 fw-bold mb-3 text-white">
            About Us
          </h1>
          <p className="lead mb-4">
            Ready to gain valuable digital skills? Hunarmand Punjab is dedicated to empowering the youth with the training needed to succeed in today’s job market.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6 text-center mt-5 mt-lg-0">
        <div className="laptop-image">
          <img
            src="https://hunarmandpunjab.pk/images/About%20Us.jpg"
            alt="Laptop Scheme"
            className="img-fluid rounded-4 shadow-lg animate-fade-in"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Optional background overlay */}
  <style jsx>{`
    .animate-fade-in {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 1.2s ease forwards;
    }
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>


    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Left Image */}
          <div className="col-lg-6 text-center">
            <img
            src="https://hunarmandpunjab.pk/static/media/grow.fb9a84d66316eb8a057c.png"
            alt="Laptop Scheme"
            className="img-fluid rounded-4 shadow-lg animate-fade-in"
          />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <span className="badge bg-success mb-3 px-3 py-2 fs-6 fw-semibold">
              Who We Are
            </span>
            <h2 className="fw-bold text-dark mb-3">
              Grow Your Skills and Career with{" "}
              <span className="text-success">Hunarmand Punjab</span>
            </h2>

            <p className="text-muted fs-6">
              Welcome to Hunarmand Punjab! We're here to help the young people of
              Punjab gain essential digital skills for better job opportunities.
              Our goal is to train <strong>500,000 students</strong> and empower
              them to become professional earners. Together, we aim to reduce
              unemployment and strengthen Punjab’s economy by teaching
              in-demand skills.
            </p>

            <div className="mt-4">
              <h5 className="fw-semibold mb-2">Our Mission</h5>
              <p className="text-muted">
                To provide training to <strong>500,000 students</strong> and make
                them professional earners.
              </p>
            </div>

            {/* Features Row */}
            <div className="row mt-4">
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-start">
                  <div className="icon-box bg-success bg-opacity-10 text-success rounded-3 p-3 me-3">
                    <i className="fas fa-user-graduate fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-semibold">Professional Instructors</h6>
                    <p className="text-muted mb-0">
                      Learn from dedicated industry experts and enhance your
                      digital skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-start">
                  <div className="icon-box bg-success bg-opacity-10 text-success rounded-3 p-3 me-3">
                    <i className="fas fa-laptop-code fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-semibold">25+ Courses</h6>
                    <p className="text-muted mb-0">
                      Explore diverse programs designed to help you grow and
                      succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional CTA */}
            <div className="mt-4">
              <a href="#courses" className="btn btn-success px-4 rounded-pill">
                <i className="fas fa-arrow-right me-2"></i> Explore Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


      <section className="stats-section py-5 text-white text-center">
        <div className="container">
          <h2 className="section-title mb-5 text-white">Why Choose Hunarmand Punjab</h2>
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number fs-3 fw-bold">500,000</div>
                <div className="stat-label">Students</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number fs-3 fw-bold">30+</div>
                <div className="stat-label">Expert Trainers</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number fs-3 fw-bold">50,000</div>
                <div className="stat-label">Scholarship Cards</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number fs-3 fw-bold">25+</div>
                <div className="stat-label">Job Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
