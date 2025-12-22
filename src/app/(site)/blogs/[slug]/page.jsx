import Link from "next/link";
import { notFound } from "next/navigation";

const blogs = {
  "top-it-skills-2025": {
    title: "Top IT Skills for Punjab Youth in 2025",
    date: "12 January 2025",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content: (
      <>
        <p className="lead-text">
          Punjab’s youth stands at the forefront of a digital revolution.
          Learning in-demand IT skills opens doors to national and international
          career opportunities.
        </p>

        <p>
          Punjab Technical Skills Mission (PTSM) provides job-oriented online
          courses designed to meet modern industry demands.
        </p>

        <h3>Key Skills to Learn</h3>
        <ul>
          <li>Web & MERN Stack Development</li>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Cyber Security</li>
          <li>Data Science with Python</li>
        </ul>

        <blockquote>
          Skill-based education is the foundation of economic growth and youth
          empowerment.
        </blockquote>

        <p>
          By investing in digital skills today, Punjab’s youth can build a
          secure, sustainable future.
        </p>
      </>
    ),
  },
};

export default function BlogDetailsPage({ params }) {
  const blog = blogs[params.slug];
  if (!blog) notFound();

  return (
    <section className="blog-detail-wrapper">
      <div className="container">
        <div className="blog-layout">

          {/* LEFT CONTENT */}
          <div className="blog-main">
            <div className="blog-hero">
              <img src={blog.image} alt={blog.title} />
              <div className="hero-overlay">
                <span className="category">{blog.category}</span>
                <h1>{blog.title}</h1>
                <p>
                  <i className="fas fa-calendar-alt"></i> {blog.date} &nbsp;|&nbsp;
                  <i className="fas fa-user"></i> PTSM Team
                </p>
              </div>
            </div>

            <div className="blog-body">{blog.content}</div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="blog-sidebar">

            {/* APPLY */}
            <div className="sidebar-card cta-card">
              <h5>Ready to Build Your Skills?</h5>
              <p>
                Apply now to enroll in PTSM’s certified technical courses and
                start your learning journey today.
              </p>
              <div className="text-center">
  <Link href="/apply-now" className="btn btn-primary">
    <i className="fas fa-paper-plane me-2"></i>
    Apply Now
  </Link>
</div>

            </div>

            {/* HELP */}
            <div className="sidebar-card help-card">
              <h5>Need Help?</h5>
              <p>
                Contact our support team for guidance regarding courses,
                admissions, or certificates.
              </p>
              <div className="text-center">
  <Link href="/contact-us" className="btn btn-secondary">
    <i className="fas fa-headset me-2"></i>
    Contact Support
  </Link>
</div>

            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}
