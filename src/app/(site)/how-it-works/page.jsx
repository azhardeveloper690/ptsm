"use client";
import Link from "next/link";

export default function Page() {
  const steps = [
    {
      step: "STEP 01",
      title: "Eligibility Check",
      text: "Verify your eligibility by confirming your domicile, CNIC, age, and educational qualifications before proceeding with the application.",
      icon: "fas fa-clipboard-check",
    },
    {
      step: "STEP 02",
      title: "Review Documents & Online Application",
      text: "Fill out the online registration form carefully and submit all required documents for verification.",
      icon: "fas fa-file-alt",
    },
    {
      step: "STEP 03",
      title: "Entry Test",
      text: "Take the online entry test through your dashboard and achieve a minimum score of 40% to qualify for the next stage.",
      icon: "fas fa-pen",
    },
    {
      step: "STEP 04",
      title: "Confirm Your Seat",
      text: "Once qualified, confirm your seat by completing the final application steps.",
      icon: "fas fa-check-circle",
    },
    {
      step: "STEP 05",
      title: "Orientation & Start Learning",
      text: "Attend your orientation session and log in to the LMS portal using your provided credentials to begin your learning journey.",
      icon: "fas fa-chalkboard-teacher",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#004613" }}
      >
        <div className="container">
          <h1 className="fw-bold text-white">How It Works</h1>
          <p className="mb-0">
            Hunarmand Admission Process
          </p>
        </div>
      </section>
      {/* VIDEO */}
      <section className="how-video-section">
        <div className="container">
          <div className="col-lg-8 mx-auto text-center">
            <div className="main-video">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://player.vimeo.com/video/1002815437"
                  title="How to Apply PSDI"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
<br />
            <h4 className="mt-4">
              How To Apply – Punjab Skills Development Program (PSDI)
            </h4>
            <p className="video-subtitle">
              Learn how to easily apply using our step-by-step video guide.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 EXACT CARDS */}
      <section className="how-apply-exact">
        <div className="container">
          <div className="row">
            {steps.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 mb-4"
              >
                <div className="apply-card">
                  <div className="apply-card-header">
                    <div className="apply-icon">
                      <i className={item.icon}></i>
                    </div>

                    <div>
                      <span className="apply-step">{item.step}</span>
                      <h4 className="apply-title">{item.title}</h4>
                    </div>
                  </div>

                  <p className="apply-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
