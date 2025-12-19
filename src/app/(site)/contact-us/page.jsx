"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#004613" }}
      >
        <div className="container">
          <h1 className="fw-bold text-white">Contact Us</h1>
          <p className="mb-0">
            We're here to help! Reach out for questions, collaborations, or support.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Left Column - Contact Info */}
            <div className="col-lg-5">
              <div className="bg-white shadow-sm rounded-4 p-4 h-100">
                <h4 className="fw-bold text-success mb-4">Get In Touch</h4>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-success bg-opacity-10 text-success rounded-3 p-3 me-3">
                    <i className="fas fa-map-marker-alt fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">Office Address</h6>
                    <p className="text-muted mb-0">
                      Hunarmand Punjab Office, Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-success bg-opacity-10 text-success rounded-3 p-3 me-3">
                    <i className="fas fa-envelope fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">Email Us</h6>
                    <p className="text-muted mb-0">info@hunarmandpunjab.pk</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="icon-box bg-success bg-opacity-10 text-success rounded-3 p-3 me-3">
                    <i className="fas fa-phone fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">Call Us</h6>
                    <p className="text-muted mb-0">+92 42 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="col-lg-7">
              <div className="bg-white shadow-sm rounded-4 p-4">
                <h4 className="fw-bold text-success mb-4">Send a Message</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-user me-2 text-success"></i> Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-envelope me-2 text-success"></i> Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        <i className="fas fa-comment-dots me-2 text-success"></i>{" "}
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Type your message here..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
                      >
                        <i className="fas fa-paper-plane me-2"></i> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lahore Map */}
      <section className="mt-4">
        <iframe
          title="Lahore Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27224.77318606238!2d74.30902777235242!3d31.52036957235502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904abaf75b2df%3A0x3e0b32f03de1b546!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699877659824!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
