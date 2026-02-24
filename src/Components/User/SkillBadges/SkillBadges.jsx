import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Play,
  X,
  Star,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import "./skillbadges.css";

const MOCK_SKILLS = [
  {
    id: "react",
    title: "React",
    level: "Advanced Assessment",
    verified: false,
    questions: 5,
    time: 5,
    icon: <FaReact size={20} color="#61dafb" />,
    iconBg: "#eef2ff",
  },
  {
    id: "ts",
    title: "TypeScript",
    level: "Intermediate Assessment",
    verified: false,
    questions: 5,
    time: 5,
    icon: <SiTypescript size={20} color="#3178c6" />,
    iconBg: "#f1f5f9",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    level: "Advanced Assessment",
    verified: true,
    score: 88,
    verifiedDate: "Nov 02, 2025",
    icon: <SiTailwindcss size={20} color="#38bdf8" />,
    iconBg: "#fff1f2",
  },
  {
    id: "next",
    title: "Next.js",
    level: "Intermediate Assessment",
    verified: false,
    questions: 5,
    time: 5,
    icon: <SiNextdotjs size={20} color="#000000" />,
    iconBg: "#f8fafc",
  },
  {
    id: "node",
    title: "Node.js",
    level: "Intermediate Assessment",
    verified: false,
    questions: 5,
    time: 5,
    icon: <FaNodeJs size={20} color="#339933" />,
    iconBg: "#f0fdf4",
  },
];

const MOCK_QUIZ_DATA = {
  react: {
    question: "What is the primary purpose of useEffect?",
    options: [
      "To handle side effects",
      "To create components",
      "To style elements",
      "To manage global state",
    ],
  },
};

const SkillBadges = () => {
  const [quizState, setQuizState] = useState({
    isOpen: false,
    subject: null,
    currentQuestion: 1,
    totalQuestions: 5,
    timeLeft: "14:20",
    selectedOption: null,
  });

  const verifiedCount = MOCK_SKILLS.filter((s) => s.verified).length;

  const handleStartQuiz = (skill) => {
    setQuizState({
      isOpen: true,
      subject: skill,
      currentQuestion: 1,
      totalQuestions: 5,
      timeLeft: "14:20",
      selectedOption: null,
    });
  };

  const handleCloseQuiz = () => {
    setQuizState({ ...quizState, isOpen: false });
  };

  const handleOptionSelect = (index) => {
    setQuizState({ ...quizState, selectedOption: index });
  };

  return (
    <div className="skill-badges-page">
      {/* SEO Head Variables fix Canonical URLs and Missing titles/descriptions per report  */}
      <Helmet>
        <title>Skill Badges | Jobstorm Verification Network</title>
        <link rel="canonical" href="https://www.jobstorm.in/skill-badges" />
        <meta
          name="description"
          content="Earn certified skill badges to prove your technical expertise to recruiters. Take advanced assessments for React, Tailwind, Next.js, and Node.js to fast-track your job applications."
        />
      </Helmet>

      {/* Header Section */}
      <div className="skill-badges-header-container">
        <div className="header-left">
          <div className="header-title-row">
            <Award className="header-icon" size={24} />
            <h2>Skill Verification</h2>
          </div>
          <p>Earn badges to prove your expertise to recruiters.</p>
        </div>
        <div className="header-right">
          <div className="verified-stats-card">
            <div className="verified-icon-bg">
              <ShieldCheck size={18} color="#4f46e5" />
            </div>
            <div className="verified-stats-info">
              <span className="stats-label">Verified Skills</span>
              <span className="stats-value">
                {verifiedCount} <span className="stats-total">/ 5</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="skills-grid">
        {MOCK_SKILLS.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-card-top">
              <div
                className="skill-card-icon"
                style={{ backgroundColor: skill.iconBg }}
              >
                {skill.icon}
              </div>
              {skill.verified && (
                <div className="verified-badge-top">VERIFIED</div>
              )}
            </div>

            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-level">{skill.level}</p>

            {skill.verified ? (
              <div className="verified-content">
                <div className="verified-score">
                  <span className="score-val">{skill.score}%</span>
                  <span className="score-lbl">Score</span>
                </div>
                <div className="badge-earned-tag">
                  <CheckCircle2 size={16} /> Badge Earned
                </div>
                <div className="verified-date">
                  <Clock size={12} /> Verified on {skill.verifiedDate}
                </div>
              </div>
            ) : (
              <div className="assessment-content">
                <div className="assessment-info">
                  <Clock size={14} />
                  <span>
                    ~{skill.time} mins • {skill.questions} Questions
                  </span>
                </div>
                <button
                  className="start-quiz-btn"
                  onClick={() => handleStartQuiz(skill)}
                >
                  <Play size={16} /> Start Quiz
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Placeholder Extra Card */}
        <div className="skill-card placeholder-card">
          <div className="placeholder-icon-outline">
            <Star size={24} color="#cbd5e1" />
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      {quizState.isOpen && quizState.subject && (
        <div className="quiz-modal-overlay">
          <div className="quiz-modal-content">
            <div className="quiz-header">
              <h3>{quizState.subject.title} Assessment</h3>
              <button className="close-btn" onClick={handleCloseQuiz}>
                <X size={24} />
              </button>
            </div>

            <div className="quiz-meta">
              <span className="quiz-progress-text">
                Question {quizState.currentQuestion} of{" "}
                {quizState.totalQuestions}
              </span>
              <span className="quiz-timer">
                Time Remaining: {quizState.timeLeft}
              </span>
            </div>

            <div className="quiz-progress-bar-bg">
              <div
                className="quiz-progress-bar-fill"
                style={{
                  width: `${
                    (quizState.currentQuestion / quizState.totalQuestions) * 100
                  }%`,
                }}
              ></div>
            </div>

            <div className="quiz-question-section">
              <h4 className="question-text">{MOCK_QUIZ_DATA.react.question}</h4>
              <div className="options-list">
                {MOCK_QUIZ_DATA.react.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`option-item ${
                      quizState.selectedOption === idx ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect(idx)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            <div className="quiz-footer">
              <button
                className={`next-q-btn ${
                  quizState.selectedOption !== null ? "active" : ""
                }`}
                disabled={quizState.selectedOption === null}
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillBadges;
