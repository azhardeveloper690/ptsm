"use client";
import { useEffect, useState } from "react";
import { coursesData } from "@/components/CoursesList";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({
    full_name: "",
    father_name: "",
    cnic: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    highest_qualification: "",
    institute_name: "",
    field_of_study: "",
    year_of_completion: "",
    internet_availability: "",
    permanent_address: "",
    current_address: "",
    city: "",
    employed: "",
    courses: [],
  });

  const fetchUsers = async () => {
    const res = await fetch("/admin/api/users");
    const data = await res.json();
    if (data.ok) setUsers(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async () => {
    const method = editingUser ? "PUT" : "POST";
    const url = editingUser
      ? `/admin/api/users/${editingUser.id}`
      : "/admin/api/users";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.ok) {
      setShowModal(false);
      setEditingUser(null);
      fetchUsers();
    } else alert(data.message);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this user?")) return;
    await fetch(`/admin/api/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  return (
    <div className="users-table-container">
      <div className="table-header">
        <h4 className="table-title">All Users</h4>
        <button
          className="btn btn-primary-custom"
          onClick={() => {
            setEditingUser(null);
            setForm({
              full_name: "",
              father_name: "",
              cnic: "",
              email: "",
              mobile: "",
              dob: "",
              gender: "",
              highest_qualification: "",
              institute_name: "",
              field_of_study: "",
              year_of_completion: "",
              internet_availability: "",
              permanent_address: "",
              current_address: "",
              city: "",
              employed: "",
              courses: [],
              paypro_id: "",
              marks: "",
              test_status: "",
              ordernumber: "",
              paypro_issudate: "",
              paypro_duedate: "",
              payproid_status: "",
            });
            setShowModal(true);
          }}
        >
          <i className="fas fa-plus me-2"></i> Add New User
        </button>
      </div>
      {/* Users Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.id}>
                <td>{i + 1}</td>
                <td>{u.full_name}</td>
                <td>{u.email}</td>
                <td>{u.city}</td>
<td>
  <div className="d-flex flex-column align-items-start gap-1">
    <span
      className={`badge rounded-pill d-flex align-items-center py-1 px-2 ${
        u.status >= 1 ? "bg-success" : "bg-danger"
      }`}
    >
      <i className={`fas ${u.status >= 1 ? "fa-check-circle" : "fa-times-circle"} me-1`}></i>
      Registered
    </span>

    <span
      className={`badge rounded-pill d-flex align-items-center py-1 px-2 ${
        u.status >= 2 ? "bg-success" : "bg-danger"
      }`}
    >
      <i className={`fas ${u.status >= 2 ? "fa-check-circle" : "fa-times-circle"} me-1`}></i>
      Test Attempted
    </span>

    <span
      className={`badge rounded-pill d-flex align-items-center py-1 px-2 ${
        u.status >= 3 ? "bg-success" : "bg-danger"
      }`}
    >
      <i className={`fas ${u.status >= 3 ? "fa-check-circle" : "fa-times-circle"} me-1`}></i>
      Passed
    </span>

    <span
      className={`badge rounded-pill d-flex align-items-center py-1 px-2 ${
        u.status === 4 ? "bg-danger" : "bg-secondary"
      }`}
    >
      <i className={`fas ${u.status === 4 ? "fa-times-circle" : "fa-minus-circle"} me-1`}></i>
      Failed
    </span>

    <span
      className={`badge rounded-pill d-flex align-items-center py-1 px-2 ${
        u.status >= 5 ? "bg-success" : "bg-danger"
      }`}
    >
      <i className={`fas ${u.status >= 5 ? "fa-check-circle" : "fa-times-circle"} me-1`}></i>
      Fee Paid
    </span>
  </div>
</td>




                <td>
                  <button
                    className="action-btn"
                    onClick={() => {
                      setEditingUser(u);
                      setForm({
                        ...u,
                        courses: JSON.parse(u.selected_courses || "[]"),
                      });
                      setShowModal(true);
                    }}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => handleDelete(u.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingUser ? "Edit User" : "Add New User"}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <div className="row g-3">
                  {[
                    "full_name",
                    "father_name",
                    "cnic",
                    "email",
                    "mobile",
                    "dob",
                    "gender",
                    "highest_qualification",
                    "institute_name",
                    "field_of_study",
                    "year_of_completion",
                    "internet_availability",
                    "permanent_address",
                    "current_address",
                    "city",
                    "employed",
                    "marks",
                    "test_status",
                    "paypro_id",
                    "ordernumber",
                    "paypro_issudate",
                    "paypro_duedate",
                    "payproid_status",
                  ].map((f) => (
                    <div className="col-md-6" key={f}>
                      <label className="form-label text-capitalize">
                        {f.replaceAll("_", " ")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={form[f] || ""}
                        onChange={(e) =>
                          setForm({ ...form, [f]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h6>Select Courses:</h6>
                  <div className="row">
                    {coursesData.map((c) => (
                      <div key={c.id} className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={form.courses.includes(c.id)}
                            onChange={(e) => {
                              let updated = [...form.courses];
                              if (e.target.checked)
                                updated.push(c.id);
                              else
                                updated = updated.filter((id) => id !== c.id);
                              setForm({ ...form, courses: updated });
                            }}
                          />
                          <label className="form-check-label">{c.title}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary-custom" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
