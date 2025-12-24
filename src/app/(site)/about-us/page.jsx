"use client";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section
        className="py-5 text-center text-white"
        style={{ background: "linear-gradient(to right, #027a37, #006e9a)" }}
      >
        <div className="container">
          <h1 className="fw-bold text-white">About Us</h1>
          <p className="mb-0 fs-5">
            Empowering Punjab’s youth with future-ready technical skills and
            meaningful career opportunities
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* LEFT IMAGE */}
            <div className="col-lg-6 text-center">
              <img
                src="https://hunarmandpunjab.pk/static/media/grow.fb9a84d66316eb8a057c.png"
                alt="Hunarmand Punjab"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">
              <span className="badge bg-success mb-3 px-3 py-2 fs-6">
                Who We Are
              </span>

              <h2 className="fw-bold mb-3">
                Building Skills. Creating Careers.{" "}
                <span className="text-success">Transforming Punjab.</span>
              </h2>

              <p className="text-muted fs-6">
                <strong>Punjab Technical Skills Mission (PTSM)</strong>, also
                known as <strong>Hunarmand Punjab</strong>, is a flagship
                initiative aimed at equipping the youth of Punjab with
                in-demand digital and technical skills.
              </p>

              <p className="text-muted fs-6">
                Our focus is on practical, industry-relevant training that
                enables learners to secure employment, start freelancing, or
                build sustainable careers in the digital economy.
              </p>

              <div className="mt-4">
                <h5 className="fw-semibold">Our Mission</h5>
                <p className="text-muted">
                  To train <strong>500,000+ students</strong> across Punjab and
                  empower them to become skilled professionals and independent
                  earners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Makes Us Different</h2>
            <p className="text-muted">
              A skills-first approach designed for real-world success
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                <div className="mb-3 text-success">
                  <i className="fas fa-user-graduate fa-2x"></i>
                </div>
                <h5 className="fw-semibold">Expert Instructors</h5>
                <p className="text-muted">
                  Learn from experienced industry professionals and certified
                  trainers.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                <div className="mb-3 text-success">
                  <i className="fas fa-laptop-code fa-2x"></i>
                </div>
                <h5 className="fw-semibold">Job-Oriented Courses</h5>
                <p className="text-muted">
                  Programs designed around market demand and modern technologies.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                <div className="mb-3 text-success">
                  <i className="fas fa-award fa-2x"></i>
                </div>
                <h5 className="fw-semibold">Certified Training</h5>
                <p className="text-muted">
                  Receive recognized certifications upon successful completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section
        className="py-5 text-white text-center"
        style={{ background: "linear-gradient(to right, #027a37, #006e9a)" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-5 text-white">Our Impact</h2>
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <h3 className="fw-bold text-white">500,000+</h3>
              <p>Students Trained</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h3 className="fw-bold text-white">30+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h3 className="fw-bold text-white">50,000+</h3>
              <p>Scholarships Awarded</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h3 className="fw-bold text-white">25+</h3>
              <p>Career-Focused Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Start Your Skill Journey Today</h2>
          <p className="text-muted mb-4">
            Join Hunarmand Punjab and take the first step toward a brighter
            future.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/courses" className="btn btn-primary px-4">
              <i className="fas fa-book-open me-2"></i> Explore Courses
            </Link>
            <Link href="/apply-now" className="btn btn-secondary px-4">
              <i className="fas fa-paper-plane me-2"></i> Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
