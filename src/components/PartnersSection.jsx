// src/components/VideoHighlightsSection.jsx
import { useRef, useEffect } from "react";

export default function VideoHighlightsSection() {
  const videos = [
    "https://player.vimeo.com/video/1002815437",
    "https://player.vimeo.com/video/1004736189",
    "https://player.vimeo.com/video/1004735513",
  ];

  const trackRef = useRef(null);

  /* MANUAL SCROLL */
  const scrollLeft = () => {
    trackRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  /* AUTO SCROLL */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!trackRef.current) return;

      trackRef.current.scrollBy({
        left: 420,
        behavior: "smooth",
      });

      /* LOOP BACK */
      if (
        trackRef.current.scrollLeft + trackRef.current.clientWidth >=
        trackRef.current.scrollWidth - 10
      ) {
        trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="partners-section video-highlights">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">

            <button className="btn intro-btn-primary">
              <i className="fas fa-eye me-2"></i>
              PSDI Event Highlights
            </button>

            <h2 className="intro-title text-white mt-3">
              Inspiring a Skilled Punjab
            </h2>

            <p className="intro-text text-white">
              PSDI empowering youth with essential skills for a promising future.
            </p>

            {/* VIDEO SLIDER */}
            <div className="video-slider-wrapper">

              <button className="slider-arrow left" onClick={scrollLeft}>❮</button>

              <div className="video-slider" ref={trackRef}>
                {[...videos, ...videos].map((video, i) => (
                  <div className="video-card" key={i}>
                    <div className="ratio ratio-16x9">
                      <iframe src={video} title={`Video ${i}`} allowFullScreen />
                    </div>
                  </div>
                ))}
              </div>

              <button className="slider-arrow right" onClick={scrollRight}>❯</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
