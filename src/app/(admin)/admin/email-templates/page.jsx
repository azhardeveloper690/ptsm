"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function EmailTemplatesPage() {
  const [data, setData] = useState({ common: [], entry: [], fee: [] });

  useEffect(() => {
    fetch("/admin/api/email-templates/templates")
      .then((res) => res.json())
      .then((d) => d.ok && setData(d))
      .catch((e) => console.error(e));
  }, []);

  const renderTemplates = (list, title) => (
    <>
      <h4 className="mt-4">{title}</h4>
      <ul className="list-group mb-4">
        {list.map((t) => (
          <li key={t.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{t.email_subject}</strong> <small>({t.email_type})</small>
                <p className="text-muted mb-0 small">
                  {t.email_body.replace(/<[^>]*>/g, "").slice(0, 120)}...
                </p>
              </div>
              <Link
                href={`/admin/email-templates/${t.id}`}
                className="btn btn-sm btn-primary"
              >
                <i className="fas fa-edit me-1"></i> Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="container-fluid">
      <h3 className="mb-4">Email Templates</h3>
      {renderTemplates(data.common, "Basic Templates")}
      {renderTemplates(data.entry, "Entry Test Reminder Templates")}
      {renderTemplates(data.fee, "Fee Reminder Templates")}
    </div>
  );
}
