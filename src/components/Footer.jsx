// src/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo + About */}
          <div className="col-12 col-md-4 mb-4">
            <img
              src="/images/whitelogo.png"
              alt="PSDI"
              style={{ height: "70px", marginBottom: "15px" }}
            />
            <p>
              PSDI, the Punjab Skills Development Initiative, was launched to train students across Pakistan in IT and technical fields, empowering the region’s residents with cutting-edge skills for success in the rapidly evolving tech industry.


            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/"><i className="fas fa-home me-1"></i> Home</Link>
              </li>
              <li>
                <Link href="/all-courses"><i className="fas fa-book me-1"></i> Courses</Link>
              </li>
              <li>
                <Link href="/about-us"><i className="fas fa-info-circle me-1"></i> About Us</Link>
              </li>
              <li>
                <Link href="/certificates"><i className="fas fa-id-card me-1"></i> Certificate</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/contact-us"><i className="fas fa-question-circle me-1"></i> Contact Us</Link>
              </li>
              <li>
                <Link href="/faq"><i className="fas fa-solar-panel me-1"></i> FAQ</Link>
              </li>
              <li>
                <Link href="/privacy-policy"><i className="fas fa-user-shield me-1"></i> Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund-policy"><i className="fas fa-receipt me-1"></i> Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Contact Info</h5>
            <p>
              <i className="fas fa-phone-alt me-2"></i>
              UAN: 03-111-133-053
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              admissions@psdi.pk
            </p>

            <div className="social-links mt-3 d-flex justify-content-center justify-content-md-start">
              <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-3">
          <p className="mb-0">
            &copy; All Rights Reserved | 2025 Punjab Skills Development Initiative (GOV.PSDI.PK)
          </p>
        </div>
      </div>
    </footer>
  );
}
