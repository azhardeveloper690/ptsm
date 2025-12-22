"use client";
import Link from "next/link";

export default function Faq() {
  const faqs = [
    {
      icon: "fas fa-question-circle",
      category: "GENERAL",
      question: "What is PSDI",
      answer:
        "PSDI is an online learning platform offering courses endorsed by Government of Punjab.",
    },
    {
      icon: "fas fa-file-alt",
      category: "GETTING STARTED",
      question: "How do I start learning?",
      answer:
        "Visit Enrollment Process and follow the steps provided.",
    },
    {
      icon: "fas fa-check-circle",
      category: "ENROLLMENT",
      question: "How long will it take for my course to unlock after Admission?",
      answer:
        "Once your admission is verified, you'll receive information on when your classes begin on your dashboard and via email based on your current batch.",
    },
    {
      icon: "fas fa-check-circle",
      category: "ENROLLMENT",
      question: "How long will it take for my course to unlock after Admission?",
      answer:
        "Once your admission is verified, you'll receive information on when your classes begin on your dashboard and via email based on your current batch.",
    },
    {
      icon: "fas fa-check-circle",
      category: "ENROLLMENT",
      question: "How long will it take for my course to unlock after Admission?",
      answer:
        "Once your admission is verified, you'll receive information on when your classes begin on your dashboard and via email based on your current batch.",
    },
    {
      icon: "fas fa-check-circle",
      category: "ENROLLMENT",
      question: "How long will it take for my course to unlock after Admission?",
      answer:
        "Once your admission is verified, you'll receive information on when your classes begin on your dashboard and via email based on your current batch.",
    },
  ];

  return (
    <main>
      {/* HERO */}
            <section
  className="py-5 text-center text-white"
  style={{ background: 'linear-gradient(to right, #027a37, #006e9a)' }}
>
        <div className="container">
          <h1 className="fw-bold text-white">Frequently Asked Questions</h1>
          <p className="mb-0">
           We're here to help! Reach out for questions, collaborations, or support.
          </p>
        </div>
      </section>

      {/* FAQ BOXES */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            {faqs.map((faq, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <div className="faq-card">
                  <div className="faq-header">
                    <div className="faq-icon">
                      <i className={faq.icon}></i>
                    </div>
                    <div>
                      <h5>{faq.question}</h5>
                      <span>{faq.category}</span>
                    </div>
                  </div>

                  <p className="faq-text">{faq.answer}</p>

                  {/* speech bubble tail */}
                  <span className="faq-tail"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
