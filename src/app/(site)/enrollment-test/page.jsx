"use client";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function EntryTest() {
  const router = useRouter();

  // 🧠 Static 8 Questions
  const questions = [
    { id: 1, text: "What is (12 + 15)?", options: { A: "20", B: "27", C: "32", D: "22" }, correct: "B", category: "General Aptitude" },
    { id: 2, text: "Which of the following is a prime number?", options: { A: "15", B: "21", C: "29", D: "27" }, correct: "C", category: "General Aptitude" },
    { id: 3, text: "What is the capital of Pakistan?", options: { A: "Karachi", B: "Lahore", C: "Islamabad", D: "Peshawar" }, correct: "C", category: "General Knowledge" },
    { id: 4, text: 'Complete the sentence: "The sun ______ in the east."', options: { A: "sets", B: "rises", C: "goes", D: "comes" }, correct: "B", category: "English" },
    { id: 5, text: "Which planet is known as the Red Planet?", options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Saturn" }, correct: "B", category: "Science" },
    { id: 6, text: "The chemical symbol for water is?", options: { A: "H2O", B: "O2", C: "CO2", D: "HO" }, correct: "A", category: "Science" },
    { id: 7, text: "Which language is used to style web pages?", options: { A: "HTML", B: "CSS", C: "Python", D: "C++" }, correct: "B", category: "Technology" },
    { id: 8, text: "Who wrote 'Hamlet'?", options: { A: "William Shakespeare", B: "Charles Dickens", C: "J.K. Rowling", D: "Leo Tolstoy" }, correct: "A", category: "Literature" },
  ];

  const totalQuestions = questions.length;
  const userId = 1;
  const [currentIndex, setCurrentIndex] = useState(0); // moves in steps of 2
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [submitting, setSubmitting] = useState(false);

  // ⏱️ Timer
  useEffect(() => {
    const t = setInterval(() => setTimeLeft((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const handleSelect = (qid, opt) => setAnswers((p) => ({ ...p, [qid]: opt }));

  // ⏩ Navigation
  const handleNext = () => {
    if (currentIndex < totalQuestions - 2) setCurrentIndex(currentIndex + 2);
  };
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 2);
  };

  // 🧮 Submit
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      let correct = 0;
      questions.forEach((q) => answers[q.id] === q.correct && correct++);
      const pct = (correct / totalQuestions) * 100;
      const status = pct >= 50 ? "pass" : "fail";

      const res = await fetch("/api/submit-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, marks: correct, status }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
  // ✅ update localStorage user.status manually
  const storedUser = JSON.parse(localStorage.getItem("hunarmand_user") || "{}");
  storedUser.status = status === "pass" ? 2 : 3;
  localStorage.setItem("hunarmand_user", JSON.stringify(storedUser));

        setTimeout(() => router.push(status === "pass" ? "/admission-status" : "/test-failed"), 1500);
      } else toast.error(data.message || "Error submitting test");
    } catch {
      toast.error("Server error");
    } finally {
      setSubmitting(false);
    }
  };

  const completedCount = Object.keys(answers).length;
  const progressPercent = (completedCount / totalQuestions) * 100;
  const visibleQuestions = questions.slice(currentIndex, currentIndex + 2);

  // 🚫 Disable Next until both current answered
  const unansweredHere = visibleQuestions.some((q) => !answers[q.id]);
  const disableNext = unansweredHere || currentIndex >= totalQuestions - 2;
  // 🚫 Disable Submit until all questions attempted
  const disableSubmit = completedCount < totalQuestions || submitting;

  return (
    <div className="test-container">
      <Toaster position="top-right" />
      <div className="test-header">
        <img src="https://hunarmandpunjab.pk/static/media/logo-white.71d99a5f6b740fc179a4.png" alt="Hunarmand Punjab Logo" className="test-logo" />
        <h1 className="test-title text-white">PSDI Admission Test</h1>
        <p className="test-subtitle">
          Select the correct option for each question. You have 30 minutes to complete the test.
        </p>
      </div>

      <div className="test-body">
        {/* Info Bar */}
        <div className="test-info-bar">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">
                <i className="fas fa-check-circle me-2 text-success"></i> Questions Completed
              </div>
              <div className="info-value">{completedCount} / {totalQuestions}</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <i className="fas fa-clock me-2 text-warning"></i> Time Remaining
              </div>
              <div className="timer">{formatTime(timeLeft)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">
                <i className="fas fa-book-open me-2 text-success"></i> Test Category
              </div>
              <div className="info-value">
                {visibleQuestions.map((q) => q.category).join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-section">
          <div className="progress-text">
            Progress: {completedCount} out of {totalQuestions} answered
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Two-column question grid */}
        <div className="row">
          {visibleQuestions.map((q) => (
            <div key={q.id} className="col-md-6 mb-4">
              <div className="question-card active">
                <div className="question-header">
                  <span className="question-number">Question {q.id}</span>
                </div>
                <div className="question-text">{q.text}</div>
                <ul className="options-list">
                  {Object.entries(q.options).map(([k, v]) => (
                    <li
                      key={k}
                      className={`option-item ${answers[q.id] === k ? "selected" : ""}`}
                      onClick={() => handleSelect(q.id, k)}
                    >
                      <span className="option-marker">{k}</span>
                      <span className="option-text">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="btn btn-secondary pad-btn" onClick={handlePrev} disabled={currentIndex === 0}>
            <i className="fas fa-arrow-left"></i> Previous
          </button>
          <div>
            <button className="btn btn-primary pad-btn" onClick={handleNext} disabled={disableNext}>
              Next <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <button
            className="btn btn-secondary pad-btn"
            onClick={handleSubmit}
            disabled={disableSubmit}
          >
            <i className="fas fa-paper-plane"></i>{" "}
            {submitting ? "Submitting..." : "Submit Test"}
          </button>
        </div>
      </div>
    </div>
  );
}
