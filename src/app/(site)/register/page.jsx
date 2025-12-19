// src/app/register/page.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { coursesData } from "@/components/CoursesList";

export default function RegisterPage() {
  const [fileName1, setFileName1] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const $ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // --- Upload boxes
    function setupUploadBox(boxId, inputId, setFileName) {
      const uploadBox = document.getElementById(boxId);
      const fileInput = document.getElementById(inputId);
      if (!uploadBox || !fileInput) return;

      const onClick = () => fileInput.click();
      const onChange = () => {
        if (fileInput.files && fileInput.files.length > 0) {
          setFileName("📂 " + fileInput.files[0].name);
        }
      };
      const onDragOver = (e) => { e.preventDefault(); uploadBox.classList.add("dragover"); };
      const onDragLeave = () => uploadBox.classList.remove("dragover");
      const onDrop = (e) => {
        e.preventDefault();
        uploadBox.classList.remove("dragover");
        if (e.dataTransfer?.files.length > 0) {
          fileInput.files = e.dataTransfer.files;
          setFileName("📂 " + e.dataTransfer.files[0].name);
        }
      };

      uploadBox.addEventListener("click", onClick);
      fileInput.addEventListener("change", onChange);
      uploadBox.addEventListener("dragover", onDragOver);
      uploadBox.addEventListener("dragleave", onDragLeave);
      uploadBox.addEventListener("drop", onDrop);

      return () => {
        uploadBox.removeEventListener("click", onClick);
        fileInput.removeEventListener("change", onChange);
        uploadBox.removeEventListener("dragover", onDragOver);
        uploadBox.removeEventListener("dragleave", onDragLeave);
        uploadBox.removeEventListener("drop", onDrop);
      };
    }

    const clean1 = setupUploadBox("uploadBox1", "fileInput1", setFileName1);
    const clean2 = setupUploadBox("uploadBox2", "fileInput2", setFileName2);

    // --- jQuery + Validation
    let cleanupValidate = null;
    (async () => {
      const jq = await import("jquery");
      const $ = jq.default;
      window.$ = window.jQuery = $;
      await import("jquery-validation");
      // 👇 extension() rule yahin se aati hai
      await import("jquery-validation/dist/additional-methods");

      // custom regex rule
      $.validator.addMethod(
        "regex",
        function (value, element, regexpr) {
          return this.optional(element) || regexpr.test(value);
        },
        "Invalid format."
      );

      const $form = $("#msforms");

      // guard: already initialized? destroy first
      if ($form.data("validator")) {
        try { $form.validate().destroy(); } catch {}
        $form.find(".error").removeClass("error");
        $form.find(".valid").removeClass("valid");
        document.querySelectorAll('[id$="-error-badge"]').forEach(n => (n.innerHTML = ""));
      }

      $form.validate({
        ignore: [], // hidden/file inputs bhi validate hon
        rules: {
          full_name: { required: true, regex: /^[A-Za-z\s]+$/ },
          father_name: { required: true },
          email: { required: true, email: true },
          mobile: { required: true, minlength: 11, maxlength: 11, digits: true },
          cnic: { required: true, minlength: 13, maxlength: 13, digits: true },
          dob: { required: true },
          gender: { required: true },
          highest_qualification: { required: true },
          institute_name: { required: true },
          field_of_study: { required: true },
          year_of_completion: { required: true },
          internet_availability: { required: true },
          permanent_address: { required: true },
          current_address: { required: true },
          city: { required: true },
          employed: { required: true },
          residency_file: {
            required: true,
            extension: "jpg|jpeg|png|gif|bmp|tiff|webp|heic|heif|pdf",
          },
          // (optional) degree_file par bhi extension rule
          // degree_file: { extension: "jpg|jpeg|png|gif|bmp|tiff|webp|heic|heif|pdf" },
          agreeCheck: { required: true },
        },
        messages: {
          cnic: {
            required: "Enter your valid CNIC or B-Form number.",
            minlength: "Exactly 13 digits required.",
            maxlength: "Exactly 13 digits required.",
            digits: "Enter 13 digits without dashes.",
          },
          full_name: {
            required: "Enter your full name as per legal documents.",
            regex: "Your full name should only contain letters and spaces.",
          },
          father_name: { required: "Provide your father's name." },
          email: { required: "Please provide a valid email.", email: "Enter a valid email address." },
          mobile: {
            required: "Enter your mobile number e.g. 03001234567",
            minlength: "Exactly 11 digits required.",
            maxlength: "Exactly 11 digits required.",
            digits: "Only digits allowed.",
          },
          dob: { required: "Select your date of birth." },
          gender: { required: "Select your gender." },
          highest_qualification: { required: "Select your qualification." },
          institute_name: { required: "Enter your institute/university name." },
          field_of_study: { required: "Enter your field of study." },
          year_of_completion: { required: "Enter the year of completion." },
          internet_availability: { required: "Do you have reliable internet?" },
          permanent_address: { required: "Enter your permanent address." },
          current_address: { required: "Enter your current address." },
          city: { required: "Enter your city." },
          employed: { required: "Select your employment status." },
          residency_file: {
            required: "Upload your residential proof.",
            extension: "Allowed: jpg, jpeg, png, gif, bmp, tiff, webp, heic, heif, pdf.",
          },
          agreeCheck: { required: "You must agree to the terms and conditions." },
        },
        errorPlacement: function (error, element) {
          const id = element.attr("id");
          const badgeId = id ? `${id}-error-badge` : null;
          const badge = badgeId ? document.getElementById(badgeId) : null;
          if (badge) {
            badge.innerHTML = `<div class="badge bg-danger text-white"><i class="fas fa-info-circle"></i> ${error.text()}</div>`;
          } else {
            error.insertAfter(element);
          }
        },
        success: function (_label, element) {
          const id = element.getAttribute("id");
          const badge = document.getElementById(`${id}-error-badge`);
          if (badge) badge.innerHTML = "";
        },
      });

      // --- prevent duplicate course selection
const handleCourseChange = () => {
  const selectedValues = [
    $("#course1").val(),
    $("#course2").val(),
    $("#course3").val(),
  ].filter(Boolean);

  ["#course1", "#course2", "#course3"].forEach((id) => {
    const current = $(id).val();
    $(id)
      .find("option")
      .each(function () {
        const val = $(this).attr("value");
        if (!val) return; // skip placeholder
        if (selectedValues.includes(val) && val !== current) {
          $(this).prop("disabled", true);
        } else {
          $(this).prop("disabled", false);
        }
      });
  });
};

$("#course1, #course2, #course3").on("change", handleCourseChange);
handleCourseChange(); // initialize once

// cleanup
return () => {
  $("#course1, #course2, #course3").off("change", handleCourseChange);
};


      // First Course required message
      $("#course1").rules("add", { required: true, messages: { required: "Select first course." } });

      // Internet warning note
      const updateInternetMsg = () => {
        const v = $('select[name="internet_availability"]').val();
        const holder = $("#haveinternet-error-message");
        if (v === "No") {
          holder.html('<div class="alert alert-warning mt-2">Internet is essential for accessing the LMS portal. Without internet, you cannot continue learning.</div>');
        } else {
          holder.empty();
        }
      };
      $('select[name="internet_availability"]').on("change", updateInternetMsg);
      updateInternetMsg();

      $ref.current = $;

      cleanupValidate = () => {
        try { $form.validate().destroy(); } catch {}
        $('select[name="internet_availability"]').off("change", updateInternetMsg);
      };
    })();

    return () => {
      clean1 && clean1();
      clean2 && clean2();
      cleanupValidate && cleanupValidate();
    };
  }, []);

  const resetForm = () => {
    const formEl = document.getElementById("msforms");
    if (formEl) formEl.reset();
    setFileName1("");
    setFileName2("");
    const f1 = document.getElementById("fileInput1");
    const f2 = document.getElementById("fileInput2");
    if (f1) f1.value = "";
    if (f2) f2.value = "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ validation wrapped in try/catch
    try {
      if ($ref.current) {
        const isValid = $ref.current("#msforms").valid?.();
        if (isValid === false) {
          toast.error("Please fix the highlighted errors.");
          setIsSubmitting(false);
          return;
        }
      }
    } catch (err) {
      console.error("Validate error:", err);
      toast.error("Validation error (extensions). Please check file types.");
      setIsSubmitting(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/auth/register", { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || `Error ${res.status}`);

      toast.success(data.message || "Your application has been successfully submitted! Check your email for login credentials to continue your admission process.");
      // Save user info
      localStorage.setItem("hunarmand_email", formData.get("email")); // ✅ fixed here
      resetForm();
      setTimeout(() => router.push("/application-submitted"), 2000);
    } catch (err) {
      toast.error(err.message || "Server error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="regmain">
      <Toaster position="top-right" />
      {/* note: encType + noValidate to avoid built-in browser bubbles */}
      <form id="msforms" className="form-body" onSubmit={onSubmit} encType="multipart/form-data" noValidate>
        <div className="form-wrapper">
          <div className="form-header">
            <img src="/images/whitelogo.png" alt="logo" />
            <h2 className="text-white">PSDI Admission Form</h2>
          </div>

          <div className="form-body">
            {/* ----- Personal Info ----- */}
            <div className="section-title-register">Personal Information</div>
            <div className="row g-4">
              <div className="col-md-6">
                <label><i className="fas fa-user"></i> Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" name="full_name" id="full_name" required />
                <div id="full_name-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-user-friends"></i> Father's Name</label>
                <input type="text" className="form-control" placeholder="Enter your father's name" name="father_name" id="father_name" required />
                <div id="father_name-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-id-card"></i> CNIC/B-Form Number</label>
                <input type="text" className="form-control" placeholder="Enter CNIC/B-Form without hyphen" name="cnic" id="cnic" required />
                <div id="cnic-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-envelope"></i> Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required />
                <div id="email-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-phone"></i> Mobile Number</label>
                <input type="text" className="form-control" placeholder="03001234567" name="mobile" id="mobile" required />
                <div id="mobile-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-calendar"></i> Date of Birth</label>
                <input type="date" className="form-control" name="dob" id="dob" />
                <div id="dob-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-venus-mars"></i> Gender</label>
                <select className="form-select" name="gender" id="gender" required>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div id="gender-error-badge" className="mt-2"></div>
              </div>
            </div>

            {/* ----- Educational Background ----- */}
            <div className="section-title-register mt-5">Educational Background</div>
            <div className="row g-4">
              <div className="col-md-6">
                <label><i className="fas fa-graduation-cap"></i> Highest Qualification Attained</label>
                <input type="text" className="form-control" placeholder="Highest Qualification Attained" name="highest_qualification" id="highest_qualification" required />
                <div id="highest_qualification-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-university"></i> Institute/University Name</label>
                <input type="text" className="form-control" placeholder="Enter institute name" name="institute_name" id="institute_name" required />
                <div id="institute_name-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-book"></i> Field of Study</label>
                <input type="text" className="form-control" placeholder="Enter field of study" name="field_of_study" id="field_of_study" required />
                <div id="field_of_study-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-clock"></i> Year of Completion</label>
                <input type="text" className="form-control" placeholder="Enter year of completion" name="year_of_completion" id="year_of_completion" required />
                <div id="year_of_completion-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-12">
                <label><i className="fas fa-file-upload"></i> Upload Last Degree Document</label>
                <div className="upload-box" id="uploadBox1">
                  <i className="fas fa-upload fa-2x mb-2"></i>
                  <p>Click or drag & drop your file here</p>
                  <input
                    type="file"
                    id="fileInput1"
                    name="degree_file"
                    hidden
                    accept="image/*,application/pdf"
                  />
                </div>
                <div className="file-name">{fileName1}</div>
                <div id="fileInput1-error-badge" className="mt-2"></div>
              </div>
            </div>

{/* ----- Course Selection ----- */}
<div className="section-title-register mt-5">Course Enrollment</div>
<div className="row g-4">
  <div className="col-md-4">
    <label><i className="fas fa-book-open"></i> First Course *</label>
    <select className="form-select" name="courses[]" id="course1" required>
      <option value="">Select course</option>
      {coursesData.map((course) => (
        <option key={course.id} value={course.id}>{course.title}</option>
      ))}
    </select>
    <div id="course1-error-badge" className="mt-2"></div>
  </div>

  <div className="col-md-4">
    <label><i className="fas fa-book-reader"></i> Second Course</label>
    <select className="form-select" name="courses[]" id="course2">
      <option value="">Select course</option>
      {coursesData.map((course) => (
        <option key={course.id} value={course.id}>{course.title}</option>
      ))}
    </select>
    <div id="course2-error-badge" className="mt-2"></div>
  </div>

  <div className="col-md-4">
    <label><i className="fas fa-bookmark"></i> Third Course</label>
    <select className="form-select" name="courses[]" id="course3">
      <option value="">Select course</option>
      {coursesData.map((course) => (
        <option key={course.id} value={course.id}>{course.title}</option>
      ))}
    </select>
    <div id="course3-error-badge" className="mt-2"></div>
  </div>
</div>


            {/* ----- Internet Availability ----- */}
            <div className="section-title-register mt-5">Internet Availability</div>
            <div className="col-md-6">
              <label><i className="fas fa-wifi"></i> Do you have access to reliable internet connection?</label>
              <select className="form-select" name="internet_availability" id="internet_availability">
                <option>Yes</option>
                <option>No</option>
              </select>
              <div id="internet_availability-error-badge" className="mt-2"></div>
              <div id="haveinternet-error-message"></div>
            </div>

            {/* ----- Address Details ----- */}
            <div className="section-title-register mt-5">Address Details</div>
            <div className="row g-4">
              <div className="col-md-6">
                <label><i className="fas fa-home"></i> Permanent Address</label>
                <input type="text" className="form-control" placeholder="Enter permanent address" name="permanent_address" id="permanent_address" required />
                <div id="permanent_address-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-map-marker-alt"></i> Current Address</label>
                <input type="text" className="form-control" placeholder="Enter current address" name="current_address" id="current_address" required />
                <div id="current_address-error-badge" className="mt-2"></div>
              </div>
              <div className="col-md-6">
                <label><i className="fas fa-city"></i> City</label>
                <input type="text" className="form-control" placeholder="Enter city" name="city" id="city" required />
                <div id="city-error-badge" className="mt-2"></div>
              </div>
            </div>

            {/* ----- Additional Information ----- */}
            <div className="section-title-register mt-5">Additional Information</div>
            <div className="col-md-6">
              <label><i className="fas fa-briefcase"></i> Are you currently employed?</label>
              <select className="form-select" name="employed" id="employed" required>
                <option>No</option>
                <option>Yes</option>
              </select>
              <div id="employed-error-badge" className="mt-2"></div>
            </div>

            {/* ----- Residency Info ----- */}
            <div className="section-title-register mt-5">Residency Information (Pakistan Only)</div>
            <p className="text-muted small">To verify your residency in Pakistan, please upload one of the following documents:</p>
            <ul className="text-muted small">
              <li>Utility Bill (not older than 3 months)</li>
              <li>Domicile Certificate</li>
              <li>Matric/Intermediate Certificate showing board affiliation</li>
              <li>CNIC or B-Form</li>
              <li>Passport showing place of birth</li>
            </ul>
            <div className="upload-box" id="uploadBox2">
              <i className="fas fa-upload fa-2x mb-2"></i>
              <p>Click or drag & drop your file here</p>
              <input
                type="file"
                id="fileInput2"
                name="residency_file"
                hidden
                accept="image/*,application/pdf"
              />
            </div>
            <div className="file-name">{fileName2}</div>
            <div id="fileInput2-error-badge" className="mt-2"></div>

            {/* ----- Declaration ----- */}
            <div className="form-check mb-4 mt-4">
              <input className="form-check-input" type="checkbox" id="agreeCheck" name="agreeCheck" required />
              <label className="form-check-label" htmlFor="agreeCheck">
                I declare that all the information provided is correct and I agree to the terms and conditions.
              </label>
            </div>
            <div id="agreeCheck-error-badge" className="mt-2"></div>

            <button className="btn-submit w-100 text-white" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
