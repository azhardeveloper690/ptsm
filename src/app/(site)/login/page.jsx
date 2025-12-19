// src/app/login/page.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Login failed");
        return;
      }

      // ✅ login success → localStorage flag set karo
      localStorage.setItem("hunarmand_logged_in", "true");
      localStorage.setItem("hunarmand_user_id", data.user.id);    // ✅ user id
      localStorage.setItem("hunarmand_email", data.user.email);   // ✅ user email
      // 👇 Add this line
      window.dispatchEvent(new Event("storage"));

      toast.success("Login successful!");

      // ✅ wait 2 seconds before redirect
    setTimeout(() => {
      switch (data.user.status) {
        case 1:
          router.push("/enrollment-test");
          break;
        case 2:
          router.push("/admission-status");
          break;
        default:
          toast.error("User not found");
      }
    }, 2000);
    } catch (err) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container align-items-center justify-content-center min-vh-100 login-container">
      <div className="login-card">
        <div className="login-header">
          <img
            src="/images/whitelogo.png"
            alt="PSDI"
            className="login-logo"
          />
          <h1 className="login-title text-white">Candidate Login</h1>
          <p className="login-subtitle">Access your PSDI Admission Portal</p>
        </div>

        <div className="login-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                value={email} 
                placeholder="Enter your registered email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="fas fa-envelope input-icon"></i>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="fas fa-lock input-icon"></i>
            </div>

            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link href="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            
            <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
              <i className="fas fa-sign-in-alt me-2"></i>
              {loading ? "Logging in…" : "Login to Portal"}
            </button>
            </div>

            <div className="register-link">
              Don&apos;t have an account?{" "}
              <Link href="/apply-now">Register here</Link>
            </div>

            <div className="support-link">
              <Link href="/contact-us">
                <i className="fas fa-question-circle me-1"></i> Need help?
                Contact support
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
