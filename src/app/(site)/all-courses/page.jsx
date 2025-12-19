"use client";
import { coursesData } from "@/components/CoursesList";
import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function AllCourses() {
  return (
    <>
      {/* 🔥 Breadcrumb */}
      <PageBreadcrumb
        title="All Courses"
        crumbs={[
          { label: "Programs", link: "/programs" },
          { label: "All Courses" },
        ]}
      />

      {/* COURSES SECTION */}
      <section className="section-container courses-section py-5">
        <div className="row">
  <div className="col-lg-12">
    <h4 className="fwt-bold">
  <i className="fas fa-graduation-cap me-2"></i>
  All Courses
</h4>

<p>
  <i className="fas fa-laptop-code me-2"></i>
  Offering 50+ Courses in Different Domians of IT
</p>

  </div>
</div>
        <div className="container mt-3">

          <div className="row">
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
              >
                <div className="course-card h-100">
                  <div className="course-image">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="img-fluid"
                    />
                  </div>

                  <div className="course-content text-center">
                    <h3 className="course-title">
                      {course.title}
                    </h3>

                    <Link href={`/courses/${course.id}`}>
                      <button className="btn-course mt-3">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
