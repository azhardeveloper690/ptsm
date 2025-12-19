"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({ site_title: "", site_logo: "" });

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((res) => res.json())
      .then((data) => setSettings(data.settings));
  }, []);

  const handleSave = async () => {
    await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
  };

  return (
    <div className="users-table-container">
      <h4 className="table-title mb-4">Site Settings</h4>
      <div className="mb-3">
        <label className="form-label">Site Title</label>
        <input type="text" className="form-control" value={settings.site_title} onChange={(e) => setSettings({ ...settings, site_title: e.target.value })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Site Logo</label>
        <input type="file" className="form-control" />
      </div>
      <button className="btn btn-primary-custom" onClick={handleSave}>Save Changes</button>
    </div>
  );
}
