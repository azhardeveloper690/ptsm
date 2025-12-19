"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, new_password: newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Password reset successful! You can now log in.");
        router.push("/login");
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Something went wrong");
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
            src="https://hunarmandpunjab.pk/static/media/logo-white.71d99a5f6b740fc179a4.png"
            alt="Hunarmand Punjab Logo"
            className="login-logo"
          />
          <h1 className="login-title text-white">Set New Password</h1>
          <p className="login-subtitle">
            Enter the code sent to your email
          </p>
        </div>

        {/* Body */}
        <div className="login-body">
          <form onSubmit={handleSubmit}>

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

            <div className="form-group position-relative">
            <label>Verification Code</label>
            <input
              type="text"
              className="form-control ps-4"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>

          <div className="form-group position-relative">
            <label>New Password</label>
            <input
              type="password"
              className="form-control ps-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>


            <button
              type="submit"
              className="btn-login mt-3"
              disabled={loading}
            >
              <i className="fas fa-lock me-2"></i> Update Password
            </button>

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
