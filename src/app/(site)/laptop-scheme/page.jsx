"use client";
import { useState } from "react";
import Link from "next/link";

export default function Laptopscheme() {
  return (
    <main>
      <section className="laptop-section position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-lg-6 text-center text-lg-start">
        <div className="laptop-content text-white">
          <h1 className="display-5 fw-bold mb-3 text-white">
            Your Digital Future Starts Here
          </h1>
          <p className="lead mb-4">
            Free Laptops for Eligible Students in Punjab — Empowering the Next
            Generation of Digital Leaders.
          </p>
          <a href="#" className="btn btn-secondary btn-lg px-4 text-white rounded-pill shadow">
            Apply Now <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6 text-center mt-5 mt-lg-0">
        <div className="laptop-image">
          <img
            src="https://hunarmandpunjab.pk/images/Laptop%20Scheme.jpg"
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


      <section className="about-section py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="about-image">
                <img
                  src="https://hunarmandpunjab.pk/images/Laptop%20Scheme%20Page%20Image%20(3).jpeg"
                  alt="Laptop Scheme"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">
                Hunarmand Punjab Laptop Scheme
              </h2>
              <p className="mb-4">
                The <strong>Hunarmand Laptop Scheme</strong>, launched under the
                visionary leadership of Minister of School & Higher Education{" "}
                <strong>Rana Sikandar Hayat</strong>, ensures that eligible
                students who meet our criteria never fall behind due to a lack
                of digital access.
              </p>
              <p className="mb-4">
                This initiative provides laptops to students enrolled in{" "}
                <strong>Hunarmand Punjab</strong> who pass the final evaluation
                test as per policy, enabling them to participate in online
                classes, complete practical assignments, and launch their
                freelance or tech careers with confidence.
              </p>

              <div className="minister-info bg-light p-3 rounded">
                <h5>About Rana Sikandar Hayat</h5>
                <p className="mb-0">
                  Rana Sikandar Hayat is a member of the Institute for Advanced
                  Study (IAS) and has been an active member of educational
                  reform and youth empowerment programs across Punjab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            What the Laptop Scheme Delivers
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="benefit-card text-center p-4 border rounded h-100">
                <div className="benefit-icon mb-3 fs-2 text-primary">
                  <i className="fas fa-laptop"></i>
                </div>
                <h4>Brand-New Laptop</h4>
                <p>
                  Get a brand-new laptop absolutely free to support your
                  educational journey and digital learning needs.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="benefit-card text-center p-4 border rounded h-100">
                <div className="benefit-icon mb-3 fs-2 text-primary">
                  <i className="fas fa-wifi"></i>
                </div>
                <h4>Unlimited Online Access</h4>
                <p>
                  Access online classes, educational tools, and digital
                  resources without any limitations or restrictions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="benefit-card text-center p-4 border rounded h-100">
                <div className="benefit-icon mb-3 fs-2 text-primary">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Learn, Create & Earn</h4>
                <p>
                  Empower yourself to learn new skills, create digital content,
                  and earn from anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="eligibility-section py-5">
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

      <section className="cta-section py-5 text-center bg-light">
        <div className="container">
          <h2>Ready to Transform Your Future?</h2>
          <p className="mb-4">
            Apply today, get a chance to avail your laptop, and unlock a world
            of digital opportunities. Don't miss this chance to empower your
            education and career.
          </p>
          <a href="#" className="btn btn-primary rounded-pill">
            Apply Now <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </section>
    </main>
  );
}
