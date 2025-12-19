"use client";
import { useState } from "react";
import Link from "next/link";

export default function Solarscheme() {
  return (
    <main>
      <section className="laptop-section position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-lg-6 text-center text-lg-start">
        <div className="laptop-content text-white">
          <h1 className="display-5 fw-bold mb-3 text-white">
            Scholarship Cards
          </h1>
          <p className="lead mb-4">
            The Scholarship Card is your all-in-one pass to unlock a world of digital learning and career-building opportunities. Hunarmand Punjab is the biggest E-Learning Platform launched by Minister of School & Higher Education Rana Sikandar Hayat, this initiative is designed to empower youth with access to high-quality training programs, hands-on practical learning, and an internationally recognized curriculum.
          </p>
          <Link href="/apply-scholarship-card" className="btn btn-secondary btn-lg px-4 text-white rounded-pill shadow">
            Apply Now <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6 text-center mt-5 mt-lg-0">
        <div className="laptop-image">
          <img
            src="https://hunarmandpunjab.pk/images/Scholarship%20Card.jpg"
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


      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="about-image">
                <img
                  src="https://hunarmandpunjab.pk/images/Scholarship%20Card.jpg"
                  alt="Laptop Scheme"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">
                Unlock Your Future with Our Scholarship Cards
              </h2>
              <p className="mb-4">
                The Scholarship Card is your all-in-one pass to unlock a world of digital learning and career-building opportunities. Hunarmand Punjab is the biggest E-Learning Platform launched by Minister of School & Higher Education Rana Sikandar Hayat , this initiative is designed to empower youth with access to high-quality training programs, hands-on practical learning, and an internationally recognized curriculum.
              </p>

              <div className="minister-info bg-light p-3 rounded">
                <h5>Benefits of the Scholarship Card:</h5>
                <ul className="mt-2"><li> Advanced IT Training with real-world skills</li><li> Laptop, Solar &amp; Education Finance Support</li><li> Hands-On Learning with Global Curriculum</li><li>Eco-Friendly, Sustainable Energy Solution</li><li> Career Guidance &amp; Freelancing Support</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="eligibility-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title">Eligibility Criteria</h2>
              <ul className="eligibility-list">
                <li>Must be a resident of Punjab province</li>
                <li>Enrolled in a recognized educational institution</li>
                <li>Passed the final evaluation test as per policy</li>
                <li>Family income below the specified threshold</li>
                <li>
                  Not a previous recipient of a government laptop scheme
                </li>
                <li>Maintaining satisfactory academic performance</li>
              </ul>

              <Link href="/apply-scholarship-card" className="btn btn-primary text-white rounded-pill shadow mt-2">
            Apply Now <i className="fas fa-arrow-right ms-2"></i>
          </Link>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">
                Application Process
              </h2>
              <div className="process-steps">
                <div className="process-step mb-3">
                  <div className="step-number">1</div>
                  <h5>Check Eligibility</h5>
                  <p>Verify you meet all criteria</p>
                </div>
                <div className="process-step mb-3">
                  <div className="step-number">2</div>
                  <h5>Submit Application</h5>
                  <p>Complete the online form</p>
                </div>
                <div className="process-step mb-3">
                  <div className="step-number">3</div>
                  <h5>Document Verification</h5>
                  <p>Submit required documents</p>
                </div>
                <div className="process-step mb-3">
                  <div className="step-number">4</div>
                  <h5>Receive Laptop</h5>
                  <p>Get your laptop after approval</p>
                </div>
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
