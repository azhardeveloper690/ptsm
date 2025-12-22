import Link from "next/link";

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "Top IT Skills for Punjab Youth in 2025",
      excerpt:
        "Discover the most in-demand technical skills that can help Punjab’s youth build successful careers.",
      date: "12 Jan 2025",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 2,
      title: "Why Online Learning is the Future of Education",
      excerpt:
        "Online learning platforms are transforming education by making skills accessible to everyone.",
      date: "05 Jan 2025",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 3,
      title: "How PTSM is Empowering Skilled Professionals",
      excerpt:
        "Punjab Technical Skills Mission is helping students gain job-ready skills through certified courses.",
      date: "28 Dec 2024",
      category: "PTSM Updates",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    },
    {
      id: 4,
      title: "Career Opportunities After Learning MERN Stack",
      excerpt:
        "Learn how MERN Stack development opens doors to high-paying tech jobs in Pakistan and abroad.",
      date: "20 Dec 2024",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
  ];

  return (
    <>
  <section className="py-5 text-center text-white"
  style={{ background: 'linear-gradient(to right, #027a37, #006e9a)' }}
>
        <div className="container">
  <h1 className="fw-bold text-white">News & Events</h1>
  <p className="mb-0">
    Stay updated with the latest announcements, program updates, events, and
    initiatives from Punjab Technical Skills Mission.
  </p>
</div>

      </section>
    <section className="blogs-section">
      <div className="container">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
              <div className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <span className="blog-category">{blog.category}</span>
                </div>

                <div className="blog-content">
                  <p className="blog-date">{blog.date}</p>
                  <h4>{blog.title}</h4>
                  <p>{blog.excerpt}</p>

                  <Link href={`/blogs/top-it-skills-2025`} className="read-more">
                     Read More <i className="fas fa-arrow-right"></i>
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
