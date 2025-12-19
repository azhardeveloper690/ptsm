"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ApplicationSubmitted() {
  const [email, setEmail] = useState("");

  // ✅ Only access localStorage inside useEffect (browser only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEmail = localStorage.getItem("hunarmand_email");
      if (savedEmail) setEmail(savedEmail);
    }
  }, []);

  return (
    <div className="container align-items-center justify-content-center min-vh-100 success-container">
      <div className="success-card">
        <div className="success-header">
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h1 className="success-title text-white">
            Your Application Has Been Successfully Submitted!
          </h1>
          <p className="success-subtitle">Welcome to the PSDI program</p>
        </div>

        <div className="success-body">
          <div className="email-confirmation">
            <h3 className="email-title">
              <i className="fas fa-envelope"></i>
              Login Credentials Sent
            </h3>
            <p>
              We have created an account for you and sent your login credentials
              (email and password) to your provided email address:
            </p>
            <div className="email-address">
              <i className="fas fa-at"></i>
              {email ? email : " (checking...)"}
            </div>
            <p>
              Please check your inbox and return to log in to your account by
              visiting the Candidate Login section.
            </p>
          </div>

          <div className="important-section">
            <h3 className="important-title">
              <i className="fas fa-exclamation-circle"></i>
              Important Information
            </h3>
            <ul className="important-list">
              <li className="important-item">
                <i className="fas fa-sync-alt"></i>
                <span>
                  If you are unable to receive the email, you can request a
                  resend. Ensure your email address is correct.
                </span>
              </li>
              <li className="important-item">
                <i className="fas fa-life-ring"></i>
                <span>
                  If your email is correct but you still haven't received the
                  email, contact us at{" "}
                  <a
                    href="mailto:admissions@psdi.pk"
                    className="contact-email"
                  >
                    admissions@psdi.pk
                  </a>{" "}
                  to resolve your issue.
                </span>
              </li>
            </ul>
          </div>

          <div className="action-buttons">
            <button className="btn btn-secondary">
              <i className="fas fa-redo me-1"></i>
              Resend Mail
            </button>
            <Link href="/login" className="btn btn-primary">
              <i className="fas fa-sign-in-alt me-1"></i>
              Candidate Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
