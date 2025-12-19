"use client";
import { coursesData } from "@/components/CoursesList";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="container text-center py-5">
        <h3>Course Not Found</h3>
        <Link href="/all-courses" className="btn btn-primary mt-3">
          Back to Courses
        </Link>
      </div>
    );
  }

  const { details } = course;

  return (
    <>
          <section className="laptop-section position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Content */}
      <div className="col-lg-6 text-center text-lg-start">
        <div className="laptop-content text-white">
          <h1 className="display-5 fw-bold mb-3 text-white">
            {course.title}
          </h1>
          <p className="lead mb-4">
            {course.desc}
          </p>
          <Link
              href="/apply-now"
              className="btn btn-secondary btn-sm"
            >
              Apply Now <i className="fas fa-arrow-right ms-1"></i>
            </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6 text-center mt-5 mt-lg-0">
        <div className="laptop-image">
          <img src={course.img} alt={course.title} className="img-fluid rounded-4 shadow-lg animate-fade-in" />
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
<div className="course-details-page container py-5">
  {/* TOP INFO CARDS */}
  <div className="row g-4 mb-4">
    <div className="col-md-4">
      <div className="info-card">
        <i className="fas fa-layer-group"></i>
        <h6>Course Level</h6>
        <p>{details.level}</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="info-card">
        <i className="fas fa-certificate"></i>
        <h6>Certification</h6>
        <p>{details.benefits.certificate}</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="info-card">
        <i className="fas fa-chart-line"></i>
        <h6>Career Impact</h6>
        <p>High Growth Potential</p>
      </div>
    </div>
  </div>

  <div className="row align-items-start">
    {/* LEFT CONTENT */}
    <div className="col-lg-8">
      {/* OVERVIEW */}
      <section className="content-card mb-4">
        <h4 className="coursedetailspage-title">Course Overview</h4>
        <p>{details.overview}</p>
      </section>

      {/* WHAT YOU’LL LEARN */}
      <section className="content-card mb-4">
        <h4 className="coursedetailspage-title">What You’ll Learn</h4>

        <div className="learn-grid">
          {details.learnTopics.map((topic, i) => (
            <div key={i} className="learn-item">
              <i className="fas fa-check-circle"></i>
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="content-card mb-4">
        <h4 className="coursedetailspage-title">Requirements</h4>
        <ul>
          {details.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      {/* MATERIALS */}
      <section className="content-card">
        <h4 className="coursedetailspage-title">Material Includes</h4>
        <ul>
          {details.materials.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </section>
    </div>

    {/* RIGHT SIDEBAR */}
    <div className="col-lg-4">
      <div className="coursedetails-card sticky-top">
        <div className="apply-header">
          <h5>Ready to Start Learning?</h5>
          <p>Join thousands of successful students</p>
        </div>

        <ul className="apply-info">
          <li>
            <i className="fas fa-clock"></i>
            Duration
            <span><b>{details.duration}</b></span>
          </li>
          <li>
            <i className="fas fa-user-check"></i>
            Eligibility
            <span><b>{details.benefits.join}</b></span>
          </li>
          <li>
            <i className="fas fa-award"></i>
            Certificate
            <span><b>{details.benefits.certificate}</b></span>
          </li>
        </ul>

        <div className="text-center mb-3">
  <Link href="/apply-now" className="btn btn-primary btn-sm">
    Apply Now <i className="fas fa-arrow-right ms-1"></i>
  </Link>
</div>

      </div>
    </div>
  </div>
</div>

    </>
  );
}
