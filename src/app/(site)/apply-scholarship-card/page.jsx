"use client";
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { coursesData } from "@/components/CoursesList";

export default function ApplyScholarshipCard() {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    document.title = "Apply for Scholarship Card | Hunarmand Punjab";
  }, []);

  // File change handler
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  // Drag & drop upload handlers
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFileName(droppedFile.name);
    }
  };
  const handleDragOver = (event) => event.preventDefault();

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    if (
      !formData.get("full_name") ||
      !formData.get("cnic") ||
      !formData.get("email") ||
      !formData.get("mobile") ||
      !formData.get("course") ||
      !formData.get("challan_no") ||
      !file
    ) {
      toast.error("Please fill all required fields and upload challan.");
      return;
    }

    formData.append("degree_file", file);
    setIsSubmitting(true);
    toast.loading("Submitting application...");

    try {
      const res = await fetch("/api/apply-scholarship-card", {
        method: "POST",
        body: formData,
      });

      toast.dismiss();
      if (res.ok) {
        toast.success("Application submitted successfully!");
        event.target.reset();
        setFileName("");
        setFile(null);
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="regmain">
      <Toaster position="top-right" />
      <form
        id="msforms"
        className="form-body"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        noValidate
      >
        <div className="form-wrapper">
          <div className="form-header text-center">
            <img
              src="https://hunarmandpunjab.pk/static/media/logo-white.71d99a5f6b740fc179a4.png"
              alt="logo"
              width={120}
              className="mb-3"
            />
            <h2 className="text-white">Scholarship Card Form</h2>
          </div>

          <div className="form-body">
            {/* ----- Personal Info ----- */}
            <div className="row g-4">
              <div className="col-md-6">
                <label>
                  <i className="fa-solid fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="full_name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label>
                  <i className="fa-solid fa-id-card"></i> CNIC/B-Form Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter CNIC/B-Form without hyphen"
                  name="cnic"
                  required
                />
              </div>

              <div className="col-md-6">
                <label>
                  <i className="fa-solid fa-envelope"></i> Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </div>

              <div className="col-md-6">
                <label>
                  <i className="fa-solid fa-phone"></i> Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="03001234567"
                  name="mobile"
                  required
                />
              </div>

              <div className="col-md-6">
                <label>
                  <i className="fa-solid fa-book-open"></i> In which Course did
                  you Apply?
                </label>
                <select name="course" className="form-select" required>
                  <option value="">Select a Course</option>
                  {coursesData.map((course, index) => (
                    <option key={index} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label>
                  <i className="fa-solid fa-receipt"></i> Paid Bank Challan No
                </label>
                <input
                  type="text"
                  name="challan_no"
                  className="form-control"
                  placeholder="Enter your paid challan number"
                  required
                />
              </div>

              {/* ----- File Upload ----- */}
              <div className="col-md-12">
                <label>
                  <i className="fa-solid fa-file-upload"></i> 📎 Upload Paid
                  Challan
                </label>
                <div
                  className="upload-box text-center p-4 border rounded bg-light"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-upload fa-2x mb-2"></i>
                  <p>Click or drag & drop your file here</p>
                  <input
                    type="file"
                    id="fileInput1"
                    name="degree_file"
                    ref={fileInputRef}
                    hidden
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                  />
                </div>
                {fileName && (
                  <div className="file-name text-success mt-2">
                    <i className="fa-solid fa-check-circle"></i> {fileName}
                  </div>
                )}
              </div>
            </div>

            {/* ----- Declaration ----- */}
            <div className="form-check mb-4 mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="agreeCheck"
                name="agreeCheck"
                required
              />
              <label className="form-check-label" htmlFor="agreeCheck">
                I declare that all the information provided is correct and I
                agree to the terms and conditions.
              </label>
            </div>

            <button
              className="btn btn-primary w-100 text-white"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
