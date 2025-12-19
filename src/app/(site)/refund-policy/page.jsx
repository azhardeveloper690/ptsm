"use client";

export default function RefundPolicy() {
  return (
    <main>
      {/* HERO */}
      <section className="policy-hero">
        <div className="container text-center">
          <h1>Refund Policy</h1>
          <p>Please read carefully before enrollment</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-card">
            <h4>1. Course Fees</h4>
            <p>
              All courses offered under the Honhaar Jawan program are provided
              free of cost unless explicitly stated otherwise.
            </p>

            <h4>2. Refund Eligibility</h4>
            <p>
              Since the courses are free, no refunds are applicable. Any paid
              services, if introduced in the future, will have clearly defined
              refund terms.
            </p>

            <h4>3. Processing Fees</h4>
            <p>
              If a processing or examination fee is charged, it is
              non-refundable once the admission or examination process has
              started.
            </p>

            <h4>4. Course Cancellation</h4>
            <p>
              Honhaar Jawan reserves the right to cancel or reschedule any course
              or batch. In such cases, alternative arrangements will be
              communicated.
            </p>

            <h4>5. Policy Changes</h4>
            <p>
              This Refund Policy may be updated without prior notice. Users are
              encouraged to review it periodically.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
