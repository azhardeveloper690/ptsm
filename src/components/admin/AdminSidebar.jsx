"use client";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h3>Admin<span>Panel</span></h3>
      </div>
      <ul className="sidebar-menu">
        <li><Link href="/admin/dashboard" className="active"><i className="fas fa-tachometer-alt"></i> <span>Dashboard</span></Link></li>
        <li><Link href="/admin/users"><i className="fas fa-users"></i> <span>Users</span></Link></li>
        <li><Link href="/admin/admins"><i className="fas fa-users"></i> <span>Manage Admins</span></Link></li>
        <li><Link href="/admin/email-templates"><i className="fas fa-cog"></i> <span>Email Templates</span></Link></li>
        <li><Link href="/admin/settings"><i className="fas fa-cog"></i> <span>Web Settings</span></Link></li>
      </ul>
    </div>
  );
}
