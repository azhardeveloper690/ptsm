"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  /* =====================
     LOGIN STATE CHECK
  ===================== */
  useEffect(() => {
    const checkLogin = () => {
      setLoggedIn(localStorage.getItem("hunarmand_logged_in") === "true");
    };
    checkLogin();
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  /* =====================
     AUTO CLOSE MOBILE MENU
  ===================== */
  useEffect(() => {
    const navLinks = document.querySelectorAll(".mobile-nav .nav-link");
    const toggler = document.querySelector(".navbar-toggler");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (
          toggler &&
          toggler.getAttribute("aria-expanded") === "true"
        ) {
          toggler.click();
        }
      });
    });

    return () => {
      navLinks.forEach((link) =>
        link.replaceWith(link.cloneNode(true))
      );
    };
  }, []);

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      localStorage.removeItem("hunarmand_logged_in");
      toast.success("Logged out successfully");
      setLoggedIn(false);
      router.push("/login");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <>
      {/* =====================
          TOP HEADER
      ===================== */}
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <span>
                <i className="fas fa-phone-alt me-2"></i>
                UAN: 03-111-133-053
              </span>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <Link href="/contact-us" className="me-3">
                <i className="fas fa-headset me-1"></i> Help Desk
              </Link>

              {!loggedIn ? (
                <>
                  <Link href="/login" className="me-3">
                    <i className="fas fa-user me-1"></i> Candidate Login
                  </Link>
                  <Link href="/apply-now" className="btn btn-secondary btn-sm">
                    Apply Now <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </>
              ) : (
                <div className="dropdown d-inline-block">
                  <button
                    className="btn btn-secondary-custom btn-sm dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fas fa-user-circle me-1"></i> Account
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/dashboard">
                        <i className="fas fa-user-graduate me-2 text-success"></i>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        <i className="fas fa-sign-out-alt me-2 text-danger"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================
          MARQUEE
      ===================== */}
      <div className="updates-bar d-none d-md-block">
        <div className="updates-content">
          <span className="label">
            <i className="fas fa-bullhorn"></i> UPDATES
          </span>
          <marquee scrollamount="6">
            🇵🇰 Rozgar Pakistan — 🔥 PKR 20,000 Stipend — 🎓 100% FREE Training —
            ❌ No Registration Fee
          </marquee>
        </div>
      </div>

      {/* =====================
          MAIN NAVBAR
      ===================== */}
      <header className="main-header sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">

            <Link className="navbar-brand" href="/">
              <img src="/images/logo.png" alt="PSDI" />
            </Link>

            {/* TOGGLER ☰ ⇄ ❌ */}
            <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="custom-toggler"></span>
</button>


            <div className="collapse navbar-collapse slide-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mobile-nav">

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/") ? "active" : ""}`} href="/">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/all-courses") ? "active" : ""}`} href="/all-courses">
                    <i className="fas fa-book-open"></i> Courses
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/certificates") ? "active" : ""}`} href="/certificates">
                    <i className="fas fa-id-card"></i> Certificate
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/about-us") ? "active" : ""}`} href="/about-us">
                    <i className="fas fa-info-circle"></i> About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/how-it-works") ? "active" : ""}`} href="/how-it-works">
                    <i className="fas fa-question-circle"></i> How It Works
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/blogs") ? "active" : ""}`} href="/blogs">
                    <i className="fas fa-newspaper"></i> News & Events
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/get-stipend") ? "active" : ""}`} href="/get-stipend">
                    <i className="fas fa-money-check-alt"></i> Stipend Portal
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/create-ticket") ? "active" : ""}`} href="/create-ticket">
                    <i className="fas fa-ticket-alt"></i> Submit Ticket
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/faq") ? "active" : ""}`} href="/faq">
                    <i className="fas fa-question-circle"></i> FAQ
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
