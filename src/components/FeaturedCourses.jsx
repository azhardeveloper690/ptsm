// src/components/FeaturedCourses.jsx
import { coursesData } from "@/components/CoursesList";
import Link from "next/link";

export default function FeaturedCourses() {
  const featuredCourses = coursesData.slice(0, 8); // first 8 courses

  return (
    <section className="section-container courses-section">

<div className="row">
  <div className="col-lg-12">
    <h4 className="fwt-bold">
  <i className="fas fa-graduation-cap me-2"></i>
  Our Courses
</h4>

<p>
  <i className="fas fa-laptop-code me-2"></i>
  Offering 50+ Courses in Different Domians of IT
</p>

  </div>
</div>

      <div className="row mt-3">
        {featuredCourses.map((course) => (
          <div key={course.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="course-card h-100">
              <div className="course-image">
                <img src={course.img} alt={course.title} className="img-fluid" />
              </div>
              <div className="course-content">
                <h3 className="course-title text-center">{course.title}</h3>
                <div className="text-center">
  <Link href={`/courses/${course.id}`}>
    <button className="btn btn-primary px-4 py-2 rounded-pill shadow-sm mt-3">
      <i className="fas fa-arrow-right me-2"></i>
      View Details
    </button>
  </Link>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link href="/all-courses" className="btn btn-primary">
  <i className="fas fa-book-open me-2"></i>
  View All Courses
</Link>
      </div>
    </section>
  );
}
