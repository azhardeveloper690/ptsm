import { useState, useEffect } from "react";

export default function VideoHighlightsSection() {
  const videos = [
    "https://player.vimeo.com/video/1002815437",
    "https://player.vimeo.com/video/1004736189",
    "https://player.vimeo.com/video/1004735513",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  /* AUTO SLIDE (optional – sample jaisa) */
  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="video-showcase">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-lg-7 text-white">
            <h2 className="video-heading">
  Punjab Technical Skills Mission – Student Testimonials
</h2>

<p className="video-description">
  Hear directly from learners of the Punjab Technical Skills Mission (PTSM) as
  they share how government-supported, skill-based training is helping them
  build careers, gain employment, and become self-reliant professionals.
</p>

          </div>

          {/* RIGHT VIDEO (ONE AT A TIME) */}
          <div className="col-lg-5">
            <div className="video-carousel">

              <div
                className="video-slide"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {videos.map((video, i) => (
                  <div className="video-frame" key={i}>
                    <iframe
                      src={video}
                      title={`Video ${i}`}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>

              {/* CONTROLS */}
              <div className="video-controls">
                <button onClick={prev}>❮</button>
                <button onClick={next}>❯</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
