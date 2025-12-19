"use client";
import Link from "next/link";

export default function PageBreadcrumb({ title, crumbs }) {
  return (
    <section className="page-breadcrumb">
      <div className="container">
        <div className="breadcrumb-wrapper">

          {/* LEFT */}
          <div className="breadcrumb-left">
            <h1>{title}</h1>
            <ul className="breadcrumb-list">
              <li>
                <Link href="/">Home</Link>
              </li>

              {crumbs.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <Link href={item.link}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="breadcrumb-right">
            <Link href="/apply-now" className="btn intro-btn-outline ms-3">
              <i className="fas fa-paper-plane me-1"></i> Apply Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
