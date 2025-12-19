// src/app/forgot-password/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle forgot password form submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Password reset link sent to your email!");
        router.push("/reset-password");
      } else {
        toast.error(data.message || "Email not found");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Forgot password error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container align-items-center justify-content-center min-vh-100 login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <img
            src="/images/whitelogo.png"
            alt="PSDI"
            className="login-logo"
          />
          <h1 className="login-title text-white">Reset Your Password</h1>
          <p className="login-subtitle">
            We'll send you a reset link to your registered email address
          </p>
        </div>

        {/* Body */}
        <div className="login-body">
          <form onSubmit={handleSubmit}>
            <p className="instruction-text mb-3">
              Enter your registered email below and we'll send you instructions
              to reset your password.
            </p>

            <div className="form-group position-relative">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control ps-4"
                id="email"
                value={email}
                placeholder="Enter your registered email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="fas fa-envelope input-icon"></i>
            </div>
            
            <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={loading}
            >
              <i className="fas fa-paper-plane me-2"></i>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
            </div>

            {/* Back to Login */}
            <div className="register-link mt-3">
              <Link href="/login">
                <i className="fas fa-arrow-left me-1"></i> Back to Login
              </Link>
            </div>

            {/* Support Link */}
            <div className="support-link mt-2">
              <Link href="/contact-us">
                <i className="fas fa-question-circle me-1"></i> Need help? Contact support
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
