"use client"; // kyunki hum JS (video playlist logic) use karenge

import { useEffect } from "react";
import Link from "next/link";
import CourseCategories from "@/components/CourseCategories";
import FeaturedCourses from "@/components/FeaturedCourses";
import PartnersSection from "@/components/PartnersSection";
import HowToApplySection from "@/components/HowToApplySection";

export default function Home() {

  useEffect(() => {
    // Video playlist functionality
    const playlistItems = document.querySelectorAll(".playlist-item");
    const mainVideoPlayer = document.getElementById("mainVideoPlayer");

    playlistItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove active class from all items
        playlistItems.forEach((i) => i.classList.remove("active"));

        // Add active class to clicked item
        this.classList.add("active");

        // Change the main video source
        const videoSrc = this.getAttribute("data-video");
        if (mainVideoPlayer) {
          mainVideoPlayer.src = videoSrc;
        }
      });
    });
  }, []);

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
                src="/images/slider1.webp"
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/slider2.webp"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/slider1.webp"
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
<section className="intro-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 mx-auto text-center">
      <button className="btn intro-btn-primary text-center">
  <i className="fas fa-eye me-2"></i>
  Vision of Government of Punjab
</button>


        <h2 className="intro-title text-white mt-3">
          Minister of School & Higher Education, Punjab
        </h2>

        <p className="intro-text text-white">
          Hunarmand Punjab initiative with the appreciation of our Honourable
          Minister of School & Higher Education, Punjab Rana Sikandar Hayat,
          aimed at providing IT-Skills to youth enrolled in the training program.
          Hunarmand Punjab Scholarship Card enables eligible trainees to access
          free advanced IT trainings, laptop scheme, solar scheme, Taleem
          finance, study abroad & more in a transparent, secure, and efficient
          manner to ensure every learner receives skill-based training.
        </p>

        <div className="intro-actions">
          <a href="#" className="btn intro-btn-primary">
  <i className="fas fa-question-circle me-1"></i>
  How It Works
</a>

<a href="#" className="btn intro-btn-outline ms-3">
  <i className="fas fa-paper-plane me-1"></i>
  Apply Now
</a>

        </div>

      </div>
    </div>
  </div>
</section>


{/* Video Section */}
<section className="video-section">
  <div className="container">
    <div className="row align-items-start">
      
      {/* Main Video */}
      <div className="col-lg-9 mb-4">
        <div className="main-video">
          <div className="ratio ratio-16x9">
            <iframe
              id="mainVideoPlayer"
              src="https://player.vimeo.com/video/1002815437"
              title="Main Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="col-lg-3">
        <div className="playlist">

          <div className="playlist-item active">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://player.vimeo.com/video/1002815437"
                title="Playlist Video 1"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="playlist-item">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://player.vimeo.com/video/1004736189"
                title="Playlist Video 2"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="playlist-item">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://player.vimeo.com/video/1004735513"
                title="Playlist Video 3"
                allowFullScreen
              ></iframe>
            </div>
          </div>

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
