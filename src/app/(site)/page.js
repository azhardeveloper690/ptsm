"use client";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import CourseCategories from "@/components/CourseCategories";
import FeaturedCourses from "@/components/FeaturedCourses";
import PartnersSection from "@/components/PartnersSection";
import HowToApplySection from "@/components/HowToApplySection";
const videos = [
  {
    id: 1,
    title: "Video 1",
    vimeoId: "1002815437",
    thumb: "https://vumbnail.com/1002815437.jpg",
  },
  {
    id: 2,
    title: "Video 2",
    vimeoId: "1004736189",
    thumb: "https://vumbnail.com/1004736189.jpg",
  },
  {
    id: 3,
    title: "Video 3",
    vimeoId: "1004735513",
    thumb: "https://vumbnail.com/1004735513.jpg",
  },
];
export default function Home() {

const [activeVideo, setActiveVideo] = useState(videos[0]);

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
<section className="intro-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 mx-auto text-center">
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
          <a href="#" className="btn btn-primary">
  <i className="fas fa-question-circle me-1"></i>
  How It Works
</a>

<a href="#" className="btn btn-secondary">
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
        <div className="row video-wrapper">

          {/* MAIN VIDEO */}
          <div className="col-lg-9 video-main">
            <div className="main-video">
              <div className="ratio ratio-16x9">
                <iframe
  key={activeVideo.vimeoId}
  src={`https://player.vimeo.com/video/${activeVideo.vimeoId}`}
  title={activeVideo.title}
  allow="fullscreen"
  allowFullScreen
></iframe>

              </div>
            </div>
          </div>

          {/* PLAYLIST */}
          <div className="col-lg-3 video-playlist">
            <div className="playlist">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className={`playlist-item ${
                    activeVideo.id === video.id ? "active" : ""
                  }`}
                  onClick={() => setActiveVideo(video)}
                >
                  <img src={video.thumb} alt={video.title} />
                </div>
              ))}
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
