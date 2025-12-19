"use client";
import { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function EditTemplate({ params }) {
  // ✅ unwrap the async params object
  const { id } = use(params);

  const [tags, setTags] = useState([]);
  const [template, setTemplate] = useState({
    email_subject: "",
    email_body: "",
    email_type: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/admin/api/email-templates/${id}`)
      .then((res) => res.json())
      .then((d) => d.ok && setTemplate(d.template));

    fetch("/admin/api/tags")
      .then((res) => res.json())
      .then((d) => d.ok && setTags(d.tags));
  }, [id]);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(`/admin/api/email-templates/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email_subject: template.email_subject,
        email_body: template.email_body,
      }),
    });
    const data = await res.json();
    alert(data.message);
    setSaving(false);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Edit Email Template</h3>
        <Link href="/admin/email-templates" className="btn btn-secondary">
          <i className="fas fa-arrow-left me-2"></i> Back
        </Link>
      </div>

      <div className="card p-4">
        <div className="mb-3">
          <label className="form-label fw-bold">BB Codes:</label>
          <div>
            {tags.map((tag) => (
              <span key={tag.id} className="badge bg-light text-dark me-2 mb-2">
                {tag.tagname}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email Type</label>
          <input
            type="text"
            className="form-control"
            value={template.email_type}
            disabled
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Subject *</label>
          <input
            type="text"
            className="form-control"
            value={template.email_subject}
            onChange={(e) =>
              setTemplate({ ...template, email_subject: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Body *</label>
          <ReactQuill
            theme="snow"
            value={template.email_body}
            onChange={(val) => setTemplate({ ...template, email_body: val })}
          />
        </div>

        <button
          className="btn btn-primary-custom mt-3"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
