import React, { useState } from "react";
import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist";
import mammoth from "mammoth";
import styles from "./ResumeMatcher.module.css";

// Set worker source for PDF.js
GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;

const ResumeMatcher = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isReadingFile, setIsReadingFile] = useState(false);
  const [result, setResult] = useState(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  // Helper to read file content
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setError("");
      setResumeText(""); // Clear previous text while loading
      setIsReadingFile(true);
      setError("");

      try {
        let text = "";
        if (file.type === "application/pdf") {
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await getDocument({ data: arrayBuffer }).promise;
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item) => item.str).join(" ") + "\n";
          }
        } else if (
          file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          const arrayBuffer = await file.arrayBuffer();
          const result = await mammoth.extractRawText({ arrayBuffer });
          text = result.value;
        } else if (file.type === "text/plain") {
          text = await file.text();
        } else {
          try {
            // Fallback for other text types
            text = await file.text();
          } catch (error) {
            console.log(error);
            throw new Error("Unsupported file type");
          }
        }

        setResumeText(text);
      } catch (err) {
        console.error("Error reading file:", err);
        setError(
          "Error reading file. Please ensure it is a valid PDF, DOCX, or Text file.",
        );
      } finally {
        setIsReadingFile(false);
      }
    }
  };

  const analyzeMatch = () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Please provide both Resume content and Job Description.");
      return;
    }

    setIsAnalyzing(true);
    setError("");

    // Simulate AI Analysis Delay
    setTimeout(() => {
      const analysis = performHeuristicAnalysis(resumeText, jobDescription);
      setResult(analysis);
      setIsAnalyzing(false);
    }, 1500);
  };

  const startNewAnalysis = () => {
    setJobDescription("");
    setResult(null);
    setError("");
  };

  // logical "AI" matcher (Heuristic based)
  const performHeuristicAnalysis = (resume, jd) => {
    const normalize = (text) => text.toLowerCase().replace(/[^\w\s]/gi, "");

    // 1. Keyword Extraction from JD (Simple heuristic: capitalized words, known tech terms)
    // In a real AI model, we would send this to GPT/Gemini.
    const commonSkills = [
      "react",
      "angular",
      "vue",
      "node",
      "javascript",
      "typescript",
      "html",
      "css",
      "python",
      "java",
      "c++",
      "c#",
      "sql",
      "nosql",
      "mongodb",
      "postgresql",
      "aws",
      "azure",
      "gcp",
      "docker",
      "kubernetes",
      "git",
      "ci/cd",
      "agile",
      "scrum",
      "communication",
      "leadership",
      "problem solving",
      "teamwork",
      "analysis",
    ];

    const jdLower = normalize(jd);
    const resumeLower = normalize(resume);

    // Find skills present in JD
    const jdSkills = commonSkills.filter((skill) => jdLower.includes(skill));

    // Also try to find capitalized words in JD that might be specific skills
    // (This is a naive extraction, but often works for proper nouns)
    const jdWords = jd.split(/\s+/);
    const potentialProperNouns = jdWords
      .filter((word) => /^[A-Z][a-z]+$/.test(word) && word.length > 3)
      .map((word) => word.toLowerCase())
      .filter(
        (word) => !["the", "and", "for", "with", "this", "that"].includes(word),
      );

    const allTargetSkills = [
      ...new Set([...jdSkills, ...potentialProperNouns]),
    ];

    // Check matches
    const matchedSkills = allTargetSkills.filter((skill) =>
      resumeLower.includes(skill),
    );
    const missingSkills = allTargetSkills.filter(
      (skill) => !resumeLower.includes(skill),
    );

    // Calculate Score
    // Base score 50 + (matches ratio * 50)
    const matchRatio =
      allTargetSkills.length > 0
        ? matchedSkills.length / allTargetSkills.length
        : 0;
    let score = Math.round(50 + matchRatio * 50);
    if (score > 100) score = 100;

    // Generate specific feedback
    const goodPoints = matchedSkills
      .slice(0, 5)
      .map(
        (s) =>
          `Found relevant skill: ${s.charAt(0).toUpperCase() + s.slice(1)}`,
      );
    const improvementTips = missingSkills
      .slice(0, 5)
      .map(
        (s) =>
          `Consider adding experience with: ${s.charAt(0).toUpperCase() + s.slice(1)}`,
      );

    // Generic fallback if no specific skills found
    if (goodPoints.length === 0)
      goodPoints.push("Resume length and formatting looks standard.");
    if (improvementTips.length === 0)
      improvementTips.push(
        "Try to quantify your achievements more (e.g., 'increased sales by 20%').",
      );

    return {
      score,
      matchedSkills: matchedSkills.slice(0, 10), // Top 10
      goodPoints,
      improvementTips,
    };
  };

  return (
    <div className={`container-fluid py-3 ${styles.container}`}>
      <div className="row g-3">
        {/* Left Column: Inputs */}
        <div className="col-lg-7">
          {/* Resume Upload Box */}
          <div className={`${styles.card} mb-3`}>
            <div
              className={`${styles.cardHeader} bg-white border-0 pb-0 pt-3 px-3`}
            >
              <h5 className={`${styles.cardTitle} mb-0`}>1. Upload Resume</h5>
            </div>
            <div className={`${styles.cardBody} p-3`}>
              <div className="position-relative">
                <input
                  type="file"
                  id="resumeUpload"
                  accept=".txt,.pdf,.docx"
                  onChange={handleFileUpload}
                  className={styles.fileInput}
                  disabled={isReadingFile}
                />
                <label htmlFor="resumeUpload" className="w-100 mb-0">
                  <div className={styles.uploadArea}>
                    <div className={styles.uploadIconWrapper}>
                      <i className="uil uil-export"></i>
                    </div>
                    <h6 className={styles.uploadTitle}>
                      {isReadingFile
                        ? "Reading File..."
                        : "Click to upload resume"}
                    </h6>
                    <p className={styles.uploadSubtitle}>
                      {isReadingFile
                        ? "Analyzing content..."
                        : "PDF or DOCX (Max 5MB)"}
                    </p>
                  </div>
                </label>
              </div>

              {/* File Preview State */}
              <div className="mt-3">
                {isReadingFile && (
                  <div className="text-center text-primary py-2">
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    <span>Extracting text...</span>
                  </div>
                )}

                {fileName && !isReadingFile && (
                  <div className={styles.filePreview}>
                    <i
                      className={`uil uil-file-check-alt ${styles.fileIcon}`}
                    ></i>
                    <span className={styles.fileName}>{fileName}</span>
                    <label
                      htmlFor="resumeUpload"
                      className={styles.changeFileBtn}
                    >
                      Change File
                    </label>
                  </div>
                )}

                {error && (
                  <div
                    className="alert alert-danger mt-3 d-flex align-items-center bg-danger-subtle text-danger border-danger-subtle rounded-3"
                    role="alert"
                  >
                    <i className="uil uil-exclamation-triangle fs-18 me-2"></i>
                    <div className="fs-14">{error}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* JD Input Box */}
          <div className={styles.card}>
            <div
              className={`${styles.cardHeader} bg-white border-0 pb-0 pt-3 px-3 d-flex justify-content-between align-items-center`}
            >
              <h5 className={`${styles.cardTitle} mb-0`}>2. Job Description</h5>
              {jobDescription && (
                <button
                  className="btn btn-link text-danger p-0 text-decoration-none fs-14 fw-medium"
                  onClick={() => setJobDescription("")}
                >
                  Clear
                </button>
              )}
            </div>
            <div className={`${styles.cardBody} p-3`}>
              <div className={styles.textareaWrapper}>
                <textarea
                  className={`${styles.customTextarea} border-0 bg-light-subtle`}
                  rows="8"
                  placeholder="Paste the full job description here..."
                  value={jobDescription}
                  onChange={(e) => {
                    setJobDescription(e.target.value);
                    if (error) setError("");
                  }}
                ></textarea>
              </div>

              <div className="mt-4 text-end">
                <button
                  onClick={analyzeMatch}
                  className={styles.analyzeBtn}
                  disabled={
                    isAnalyzing ||
                    isReadingFile ||
                    !resumeText ||
                    !jobDescription
                  }
                >
                  {isAnalyzing ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <span>Run Analysis</span>
                      <i className="uil uil-arrow-right"></i>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="col-lg-5">
          <div className={`${styles.card} border-0 shadow-sm h-100`}>
            {/* Remove Header for Cleaner Look or empty state logic handles it */}
            <div className={`${styles.cardBody} h-100 p-0`}>
              {result ? (
                <div className={`${styles.resultContent} text-center p-4`}>
                  {/* ... (Keep Result Visualization Same/Simiar) ... */}
                  {/* Score */}
                  <div className={styles.scoreCircleWrapper}>
                    <svg
                      viewBox="0 0 36 36"
                      className="w-100 h-100"
                      style={{ transform: "rotate(-90deg)" }}
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={
                          result.score > 70
                            ? "#10b981"
                            : result.score > 40
                              ? "#f59e0b"
                              : "#ef4444"
                        }
                        strokeWidth="2.5"
                        strokeDasharray={`${result.score}, 100`}
                        strokeLinecap="round"
                        className="drop-shadow"
                      />
                    </svg>
                    <div className={styles.scoreValue}>
                      <div
                        className={styles.scoreNumber}
                        style={{
                          color:
                            result.score > 70
                              ? "#10b981"
                              : result.score > 40
                                ? "#f59e0b"
                                : "#ef4444",
                        }}
                      >
                        {result.score}%
                      </div>
                      <div className={styles.scoreLabel}>Match Score</div>
                    </div>
                  </div>

                  <h3 className={styles.matchTitle}>
                    {result.score >= 80
                      ? "Perfect Match!"
                      : result.score >= 50
                        ? "Good Match"
                        : "Low Match"}
                  </h3>
                  <p className={styles.matchSubtitle}>
                    Based on keyword relevance
                  </p>

                  <div className="text-start mb-4">
                    <h6 className={styles.sectionTitle}>
                      <i className="uil uil-check-circle text-success fs-18"></i>
                      Matched Keywords
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {result.matchedSkills.length > 0 ? (
                        result.matchedSkills.map((skill, index) => (
                          <span key={index} className={styles.skillPill}>
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-muted fst-italic">
                          No specific keywords matched.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`text-start ${styles.empowermentBox}`}>
                    <h6 className={styles.sectionTitle}>
                      <i className="uil uil-lightbulb-alt text-warning fs-18"></i>
                      Recommendations
                    </h6>
                    <ul className={styles.tipsList}>
                      {result.goodPoints.length > 0 &&
                        result.goodPoints.slice(0, 2).map((point, i) => (
                          <li key={`good-${i}`} className={styles.tipItem}>
                            <i className="uil uil-check text-success mt-1"></i>
                            <span>{point}</span>
                          </li>
                        ))}
                      {result.improvementTips.map((tip, i) => (
                        <li key={`tip-${i}`} className={styles.tipItem}>
                          <i className="uil uil-arrow-growth text-primary mt-1"></i>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={startNewAnalysis}
                    className="btn btn-outline-primary rounded-pill mt-4 px-4 fw-medium"
                  >
                    <i className="uil uil-refresh me-2"></i>
                    Analyze Another Job
                  </button>
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>
                    <i className="uil uil-sync"></i>
                  </div>
                  <h5 className="mb-2 fw-bold text-dark">Ready to Analyze</h5>
                  <p className="mb-0 fs-14" style={{ maxWidth: "300px" }}>
                    Upload a resume and paste a job description to see how you
                    stack up.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMatcher;
