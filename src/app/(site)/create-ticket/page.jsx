export default function SupportPage() {
  return (
    <>
      <section
  className="py-5 text-center text-white"
  style={{ background: 'linear-gradient(to right, #027a37, #006e9a)' }}
>
        <div className="container">
          <h1 className="fw-bold text-white">Support Ticket</h1>
          <p className="mb-0">
            Create a support ticket to report issues, request assistance, or get help
      from our technical support team.
          </p>
        </div>
      </section>

    <section className="support-wrapper">
      <div className="container support-layout">

        {/* LEFT */}
        <div className="support-left">
          <div className="support-header">
            <h3 className="text-white">
              <i className="fas fa-paper-plane"></i> Create a New Ticket
            </h3>
            <span>Submit a new support request to our team</span>
          </div>

          <div className="support-alert">
            <h5>
              <i className="fas fa-exclamation-triangle"></i>
              Need Immediate Assistance?
            </h5>
            <p>
              Creating a ticket is the fastest way to get help for any technical
              issues or urgent account-related problems. This allows us to track
              your request and ensure a timely resolution.
            </p>
            <ul>
              <li>Login or account access problems</li>
              <li>Application errors or bugs</li>
              <li>Payment or transaction failures</li>
              <li>Issues with program enrollment</li>
            </ul>
          </div>

          <div className="support-submit">
            <div className="submit-icon">
              <i className="fas fa-paper-plane"></i>
            </div>
            <h4>Ready to submit your request?</h4>
            <p>
              Click the button below to open our dedicated helpdesk portal where
              you can create a ticket and communicate with our support team.
            </p>
            <button className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Submit Ticket
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="support-right">
          <div className="support-header">
            <h3 className="text-white">
              <i className="fas fa-phone"></i> Contact Details
            </h3>
            <span>Official communication channels</span>
          </div>

          <div className="contact-card">
            <div className="contact-row">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h5>Helpline</h5>
                <p>0304-1110734</p>
                <small>Mon–Fri, 9:00 AM - 5:00 PM</small>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h5>Email Support</h5>
                <p>info@ptsm.pk</p>
                <small>24/7 Email Support</small>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h6>Follow Honhaar Updates</h6>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
