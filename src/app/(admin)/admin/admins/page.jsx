"use client";
import { useEffect, useState } from "react";

export default function AdminsPage() {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "admin" });
  const [showModal, setShowModal] = useState(false);

  const fetchAdmins = async () => {
    const res = await fetch("/admin/api/admins");
    const data = await res.json();
    if (data.ok) setAdmins(data.admins);
  };
  useEffect(() => { fetchAdmins(); }, []);

  const handleAdd = async () => {
    await fetch("/admin/api/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setShowModal(false);
    fetchAdmins();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete admin?")) return;
    await fetch(`/admin/api/admins/${id}`, { method: "DELETE" });
    fetchAdmins();
  };

  return (
    <div className="users-table-container">
      <div className="table-header">
        <h4 className="table-title">Admins</h4>
        <button
          className="btn btn-primary-custom"
          onClick={() => { setForm({ name: "", email: "", password: "", role: "admin" }); setShowModal(true); }}
        >
          <i className="fas fa-plus me-2"></i> Add Admin
        </button>
      </div>

      <table className="table table-hover">
        <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr></thead>
        <tbody>
          {admins.map((a, i) => (
            <tr key={a.id}>
              <td>{i + 1}</td>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.role}</td>
              <td>
                <button className="action-btn" onClick={() => handleDelete(a.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5>Add Admin</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {["name","email","password"].map(f => (
                  <div className="mb-3" key={f}>
                    <label className="form-label text-capitalize">{f}</label>
                    <input type={f==="password"?"password":"text"} className="form-control"
                      value={form[f]} onChange={e => setForm({...form,[f]:e.target.value})}/>
                  </div>
                ))}
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select className="form-select" value={form.role} onChange={e => setForm({...form,role:e.target.value})}>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-primary-custom" onClick={handleAdd}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
