// src/components/CourseCategories.jsx
export default function CourseCategories() {
  const categories = [
    { icon: "fas fa-robot", title: "Artificial Intelligence", count: "08 Courses" },
    { icon: "fas fa-shield-alt", title: "Cyber Security", count: "06 Courses" },
    { icon: "fas fa-shopping-cart", title: "Amazon VA", count: "10 Courses" },
    { icon: "fas fa-chart-line", title: "Digital Marketing & AI", count: "12 Courses" },
    { icon: "fas fa-store", title: "Shopify & Daraz", count: "07 Courses" },
    { icon: "fas fa-code", title: "Web Programming", count: "15 Courses" },
    { icon: "fas fa-laptop-code", title: "MERN Stack Development", count: "09 Courses" },
    { icon: "fas fa-mobile-alt", title: "App Development", count: "11 Courses" },
  ];

  return (
    <section className="courses-section">
      <h2 className="section-title">Courses Category</h2>
      <div className="row g-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
            <div className="category-card">
              <div className="category-icon">
                <i className={cat.icon}></i>
              </div>
              <h3 className="category-title">{cat.title}</h3>
              <span className="course-count">{cat.count}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
