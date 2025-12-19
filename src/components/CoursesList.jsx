// src/components/CoursesList.jsx

export const coursesData = [
  {
    id: "1",
    badge: "ADVANCED",
    title: "AI and Data Science for Beginners",
    desc: "Master core AI principles including machine learning, neural networks, and automation for future-ready skills.",
    rating: 5.0,
    img: "https://ssdp.pk/assets/front_images/1.jpg",
    details: {
      type: "Recorded",
      duration: "3 Months",
      level: "Beginner to Advanced",
      overview: `
        Learn core Artificial Intelligence concepts including machine learning,
        neural networks, and automation. This course equips learners with
        future-ready AI skills for real-world applications.
      `,
      whoCanJoin: [
        "Students interested in Artificial Intelligence",
        "Beginners entering the AI field",
        "Professionals upgrading technical skills",
      ],
      learnTopics: [
        "Introduction to Artificial Intelligence",
        "Machine Learning fundamentals",
        "Neural Networks basics",
        "AI tools and real-world use cases",
      ],
      requirements: [
        "Basic computer knowledge",
        "Internet access",
        "Interest in AI and technology",
      ],
      materials: [
        "Recorded video lectures",
        "Practical examples",
        "Learning resources",
      ],
      benefits: {
        certificate: "Yes",
        evaluation: "Yes",
        language: "Urdu / English",
        join: "Everyone",
        fee: "Free of Cost",
        scholarship: "Yes",
      },
    },
  },

  {
    id: "2",
    badge: "PROFESSIONAL",
    title: "Motion Graphics with Adobe After Effects",
    desc: "Comprehensive preparation for the PMP (Project Management Professional) exam based on PMBOK 6th Edition.",
    rating: 4.9,
    img: "https://ssdp.pk/assets/front_images/9.jpg",
    details: {
      type: "Recorded",
      duration: "2 to 4 Months",
      level: "Professional",
      overview: `
        This course offers a comprehensive preparation path for the PMP
        (Project Management Professional) exam based on the PMBOK 6th Edition.
        It covers key project management knowledge areas including integration,
        scope, schedule, cost, quality, risk, procurement, and stakeholder management.
      `,
      whoCanJoin: [
        "Aspiring project managers preparing for PMP certification",
        "Project management professionals seeking skill enhancement",
        "Business professionals applying PMP principles",
      ],
      learnTopics: [
        "PMBOK 6th Edition knowledge areas",
        "Role of a project manager",
        "Scope, schedule, and cost management",
        "Risk, procurement, and quality management",
        "Stakeholder & communication management",
        "PMP exam strategies and practice questions",
      ],
      requirements: [
        "Basic understanding of project management",
        "Commitment to exam preparation",
      ],
      materials: [
        "Recorded video lectures",
        "Exam-focused study materials",
        "Practice questions & tips",
      ],
      benefits: {
        certificate: "Yes (After passing final exam)",
        evaluation: "Yes",
        language: "Urdu & English",
        join: "Only Pakistan Residents",
        fee: "Free of Cost",
        scholarship: "Yes",
      },
    },
  },
];

// helper
export function getCourseTitleById(id) {
  const found = coursesData.find((c) => c.id === id);
  return found ? found.title : "Unknown Course";
}
