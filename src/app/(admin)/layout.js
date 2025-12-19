// src/app/(admin)/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/app/(admin)/admin.css";
import Script from "next/script";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminFooter from "@/components/admin/AdminFooter";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Admin Dashboard | Hunarmand Punjab",
};

export default function AdminLayout({ children }) {
  return (
    <div className="d-flex min-vh-100 bg-light">
      <AdminSidebar />
      <div className="main-content flex-grow-1 d-flex flex-column">
        <AdminNavbar />
        <main className="flex-grow-1 p-3">{children}</main>
        <AdminFooter />
        <Toaster
        position="top-right"
        toastOptions={{
          duration: 8000,
        }}
      />
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
