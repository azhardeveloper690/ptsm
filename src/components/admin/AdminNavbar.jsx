"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function AdminNavbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/admin/api/auth/logout", { method: "POST" });
    localStorage.removeItem("admin_user");
    toast.success("Logged out successfully");
    router.push("/admin/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="user-info">
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
              <img src="/admin-assets/images/user.png" alt="Admin" />
              <span className="d-none d-md-inline mx-2">Admin</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Profile</a></li>
              <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" onClick={handleLogout} href="#"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
