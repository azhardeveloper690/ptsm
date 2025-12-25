"use client";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import CourseCategories from "@/components/CourseCategories";
import FeaturedCourses from "@/components/FeaturedCourses";
import PartnersSection from "@/components/PartnersSection";
import HowToApplySection from "@/components/HowToApplySection";
export default function Home() {


  return (
    <>
      {/* Hero Slider */}
      <section className="hero-slider">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/slider2.jpg"
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/slider1.jpg"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/slider3.jpg"
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Introduction Section */}
<section className="endorsement-section">
  <div className="container">

    {/* ===== SECTION HEADER (CENTERED) ===== */}
    <div className="endorsement-header text-center mx-auto">
      <span className="section-badge">
        <i className="fas fa-comments me-2"></i>
        Leadership Messages
      </span>

      <h2 className="section-title">
        Endorsements from the Government of Pakistan
      </h2>

      <p className="section-subtitle">
        Official Recognition & Leadership Endorsement
      </p>
    </div>

    {/* ===== CONTENT ROW ===== */}
    <div className="row align-items-center mt-3">

      {/* LEFT IMAGE */}
      <div className="col-lg-5 mb-4 mb-lg-0">
        <div className="endorsement-image-card">
          <img
            src="https://ptv.com.pk/newsimages/Jun-24-2025-21.45.24_WhatsApp%20Image%202025-06-24%20at%208.58.49%20PM.webp"
            alt="Chief Minister Punjab"
          />
          <span className="image-badge">
  <i className="fas fa-envelope-open-text me-1"></i>
  Official Message
</span>

        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-7">
        <span className="content-badge">
  <i className="fas fa-bullhorn me-1"></i>
  Official Statement
</span>


        <h3 className="content-title">
          Message from the Chief Minister, Punjab
        </h3>

        <p className="content-text">
          The Government of Punjab is committed to strengthening youth through
          inclusive, skills-based, and future-ready learning. <strong>ptsm
          Pakistan – National Initiative for Advanced IT & Freelancing
          Skills</strong> aligns with this national direction by expanding
          access to structured training for professional development.
        </p>

        <p className="content-text">
          ptsm Pakistan supports practical learning across technical and
          non-technical domains, aligned with workforce requirements and
          national priorities. This initiative aims to promote a skilled,
          confident, and self-reliant youth contributing to sustainable
          socio-economic progress.
        </p>

        {/* SIGNATURE */}
        <div className="signature-box">
          <div className="signature-avatar">
            <img
              src="https://ptv.com.pk/newsimages/Jun-24-2025-21.45.24_WhatsApp%20Image%202025-06-24%20at%208.58.49%20PM.webp"
              alt="Maryam Nawaz Sharif"
            />
          </div>
          <div>
            <h6 className="mb-0">Maryam Nawaz Sharif</h6>
            <span>
              Chief Minister, Punjab
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-4">
      <br />
  <a href="#" className="btn btn-primary me-2">
    <i className="fas fa-question-circle me-1"></i>
    How It Works
  </a>

  <a href="#" className="btn btn-secondary">
    <i className="fas fa-paper-plane me-1"></i>
    Apply Now
  </a>
</div>

  </div>
</section>


<section className="ptsm-about-section">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT LOGO */}
      <div className="col-lg-4 text-center mb-4 mb-lg-0">
        <div className="ptsm-logo-box">
          <img
            src="/images/whitelogo.png"
            alt="Pakistan Youth Development Initiative"
          />
          <h6>Pakistan Youth Development Initiative</h6>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-8">
        <div className="ptsm-content-header">
          <span className="ptsm-icon">
            <i className="fas fa-comments"></i>
          </span>
          <h3>
            About PTSM Pakistan – National Initiative for Advanced
            IT & Freelancing Skills
          </h3>
        </div>

        <p className="ptsm-text">
          PTSM Pakistan – National Initiative for Advanced IT & Freelancing
          Skills is an official, nationwide initiative by the Government of
          Pakistan to expand access to digital and technical skills training for
          learners across the country. The program is structured to reduce
          barriers and enable participants to focus on skills development.
        </p>

        <p className="ptsm-text">
          Participants may choose from 25+ technical courses and enroll without
          any online entry test. Training is provided at no cost, and learning
          tracks are designed around practical requirements, current industry
          needs, and emerging technologies.
        </p>

        <p className="ptsm-text">
          Upon 100% completion of selected courses and verification of progress,
          eligible participants may receive a PKR 20,000 Government stipend as
          per applicable terms and guidelines.
        </p>

        <div className="ptsm-footer">
          <strong>Official Program — Government of Pakistan</strong>
          <span>
            Supporting youth through fully funded, high-quality skills training.
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

      <FeaturedCourses />
      <PartnersSection />
      <HowToApplySection />
    </>
  );
}
