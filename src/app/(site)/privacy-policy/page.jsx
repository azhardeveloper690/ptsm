"use client";

export default function PrivacyPolicy() {
  return (
    <main>
      {/* HERO */}
      <section className="policy-hero">
        <div className="container text-center">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-card">
            <h4>1. Introduction</h4>
            <p>
              Honhaar Jawan is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your personal
              information when you use our platform.
            </p>

            <h4>2. Information We Collect</h4>
            <ul>
              <li>Personal details such as name, CNIC, email, and phone number</li>
              <li>Educational and enrollment-related information</li>
              <li>Login and usage data for platform improvement</li>
            </ul>

            <h4>3. How We Use Your Information</h4>
            <ul>
              <li>To process admissions and course enrollments</li>
              <li>To communicate updates and notifications</li>
              <li>To improve our services and user experience</li>
            </ul>

            <h4>4. Data Security</h4>
            <p>
              We implement appropriate technical and organizational measures to
              protect your data against unauthorized access or disclosure.
            </p>

            <h4>5. Third-Party Sharing</h4>
            <p>
              We do not sell or rent your personal data. Information may only be
              shared with authorized government or educational partners where
              required.
            </p>

            <h4>6. Your Consent</h4>
            <p>
              By using our platform, you consent to the collection and use of
              your information in accordance with this policy.
            </p>

            <h4>7. Updates to This Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
