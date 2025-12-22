"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // ✅ add user state
  const router = useRouter();

  useEffect(() => {
    // ✅ Function to check login flag
    const checkLogin = () => {
      setLoggedIn(localStorage.getItem("hunarmand_logged_in") === "true");
    };

    checkLogin();

    // ✅ Listen for login/logout updates (real-time)
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        toast.success("Logged out");
        localStorage.removeItem("hunarmand_logged_in"); // ✅ remove flag
        setLoggedIn(false);
        router.push("/login");
      }
    } catch {
      toast.error("Logout failed");
    }
  };
return (
<>
{/* Top Header */}
<div className="top-header">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 text-center text-md-start">
        <span>
          <i className="fas fa-phone-alt me-2"></i> UAN: 03-111-133-053
        </span>
      </div>
      <div className="col-12 col-md-6 text-center text-md-end">

        <Link href="/contact-us" className="me-3">
          <i className="fas fa-question-circle me-1"></i> Help Desk
        </Link>

        {!loggedIn ? (
          <>
            <Link href="/login" className="me-3">
              <i className="fas fa-user me-1"></i> Candidate Login
            </Link>
            <Link
              href="/apply-now"
              className="btn btn-secondary btn-sm"
            >
              Apply Now <i className="fas fa-arrow-right ms-1"></i>
            </Link>
          </>
        ) : (
          <div className="dropdown d-inline-block">
            <button
              className="btn btn-secondary-custom btn-sm text-white dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle me-1"></i> Account
            </button>
            <ul
  className="dropdown-menu dropdown-menu-end"
  aria-labelledby="dropdownMenuButton1"
>
  <li>
    <Link
      className="dropdown-item d-flex align-items-center gap-2"
      href={
        user?.status === 1
          ? "/enrollment-test"
          : user?.status === 2
          ? "/admission-status"
          : user?.status === 3
          ? "/test-failed"
          : user?.status === 4
          ? "/class-started"
          : "#"
      }
    >
      <i className="fas fa-user-graduate text-success"></i>
      Admission Status
    </Link>
  </li>

  <li>
    <button
      className="dropdown-item d-flex align-items-center gap-2"
      onClick={handleLogout}
    >
      <i className="fas fa-sign-out-alt text-danger"></i>
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



{/* Main Header with Navigation */}
<header className="main-header sticky-top">
<nav className="navbar navbar-expand-lg navbar-light">
<div className="container">
<Link className="navbar-brand" href="/">
<img src="/images/logo.png" alt="PSDI" />
</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<Link className="nav-link" href="/"><i className="fas fa-home me-1"></i> Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link" href="/all-courses"><i className="fas fa-book me-1"></i> Courses</Link>
</li>
<li className="nav-item">
<Link className="nav-link" href="/certificates"><i className="fas fa-id-card me-1"></i> Certificate</Link>
</li>
<li className="nav-item">
<Link className="nav-link" href="/about-us"><i className="fas fa-info-circle me-1"></i> About Us</Link>
</li>
<li className="nav-item">
<Link className="nav-link" href="/how-it-works"><i className="fas fa-question-circle me-1"></i> How It Works</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" href="/blogs">
    <i className="fas fa-newspaper me-1"></i> News & Events
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" href="/create-ticket">
    <i className="fas fa-ticket-alt me-1"></i> Submit a Ticket
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" href="/faq">
    <i className="fas fa-solar-panel me-1"></i> FAQ
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