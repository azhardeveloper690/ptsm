// src/components/HowToApplySection.jsx
import Link from "next/link";
export default function HowToApplySection() {
  const steps = [
    {
      title: "Step 1: Eligibility Check",
      text: "Verify your eligibility by confirming your domicile, CNIC, age, and educational qualifications before proceeding with the application.",
      icon: "fas fa-user-check",
    },
    {
      title: "Step 2: Review Documents & Online Application",
      text: "Fill out the online registration form with all required information and submit it for verification.",
      icon: "fas fa-file-upload",
    },
    {
      title: "Step 3: Entry Test",
      text: "Pass the entry test with a minimum score of 40% to qualify for the next step.",
      icon: "fas fa-search",
      highlight: true,
    },
    {
      title: "Step 4: Confirm Your Seat",
      text: "Complete your application process and confirm your seat through final submission.",
      icon: "fas fa-bookmark",
    },
    {
      title: "Step 5: Orientation & Start Learning",
      text: "Log in to the LMS portal using the credentials provided in your dashboard.",
      icon: "fas fa-university",
    },
  ];

  return (
    <section className="how-to-apply">
      <div className="container">
        {/* ===== SECTION HEADER (CENTERED) ===== */}
<div className="endorsement-header text-center mx-auto">
  <span className="section-badge">
    <i className="fas fa-file-signature me-2"></i>
    Application Process
  </span>

  <h2 className="section-title">
    How to Apply for Punjab Technical Skills Mission (PTSM)
  </h2>
</div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-card ${step.highlight ? "active" : ""}`}
            >
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>

              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
<br />
<br />

        <div className="text-center mt-4">
        <Link href="/apply-now" className="btn btn-primary">
  <i className="fas fa-paper-plane me-1"></i>
  Apply Now
</Link>
      </div>
      </div>
    </section>
  );
}
