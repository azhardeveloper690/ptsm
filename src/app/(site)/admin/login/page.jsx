"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.ok) {
      toast.success("Login successful!");
      localStorage.setItem("admin_user", JSON.stringify(data.admin));
      setTimeout(() => router.push("/admin/dashboard"), 1200);
    } else {
      toast.error(data.message || "Login failed");
    }
    setLoading(false);
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
          <h1 className="login-title text-white">Admin Login</h1>
          <p className="login-subtitle">Access your PSDI Admin Portal</p>
        </div>

        <div className="login-body">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
              type="email"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
              <i className="fas fa-lock input-icon"></i>
            </div>
            
            <div className="text-center">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              <i className="fas fa-sign-in-alt me-2"></i>
              {loading ? "Logging in…" : "Login to Portal"}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
